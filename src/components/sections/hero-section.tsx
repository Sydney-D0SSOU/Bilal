"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRadialHover, useEntranceAnimation } from "@/hooks/use-radial-hover";
import { cn } from "@/lib/utils";

/* ── Keyframes ──
   dot-enter : tombe depuis le coin sup-gauche, overshoot x1.7, rebond x0.8,
               mini-rebond x1.15 → se stabilise. Effet pub/logo animé.
   dot-exit  : se comprime légèrement avant de fuir vers le coin inf-droit.
               Symétrique de l'entrée pour un aller-retour cohérent.
*/
const DOT_KEYFRAMES = `
@keyframes dot-enter {
  0%   { transform: scale(0)    translate(-12px, -12px) rotate(-36deg); opacity: 0; }
  40%  { transform: scale(2.05) translate(1px, 1px)     rotate(16deg);  opacity: 1; }
  66%  { transform: scale(0.72) translate(0, 0)         rotate(-10deg); opacity: 1; }
  84%  { transform: scale(1.26) translate(0, 0)         rotate(4deg);   opacity: 1; }
  100% { transform: scale(1)    translate(0, 0)         rotate(0deg);   opacity: 1; }
}

@keyframes dot-exit {
  0%   { transform: scale(1)    translate(0, 0)     rotate(0deg);  opacity: 1; }
  22%  { transform: scale(1.32) translate(0, 0)     rotate(12deg); opacity: 1; }
  100% { transform: scale(0)    translate(10px,10px) rotate(34deg); opacity: 0; }
}

@keyframes outline-burst {
  0%   { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  35%  { transform: translate(-50%, -50%) scale(0.9); opacity: 0.78; }
  100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
}
`;

/* ── Dot Indicator ── */

type DotIndicatorProps = {
  active: boolean;
  variant: "primary" | "outline";
};

type DotPhase = "idle-off" | "entering" | "idle-on" | "exiting";

function DotIndicator({ active, variant }: DotIndicatorProps) {
  const isPrimary = variant === "primary";
  const [phase, setPhase] = useState<DotPhase>("idle-off");
  const prevActive = useRef(active);
  const [animKey, setAnimKey] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);

    const becameActive = active && !prevActive.current;
    const becameInactive = !active && prevActive.current;

    if (becameActive) {
      // Rejoue l'entrée à chaque nouveau hover, sans refresh.
      timer.current = setTimeout(() => {
        setAnimKey((k) => k + 1);
        setPhase("entering");
        timer.current = setTimeout(() => setPhase("idle-on"), 560);
      }, 0);
    } else if (becameInactive) {
      timer.current = setTimeout(() => {
        setAnimKey((k) => k + 1);
        setPhase("exiting");
        timer.current = setTimeout(() => setPhase("idle-off"), 380);
      }, 0);
    }
    prevActive.current = active;

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active]);

  return (
    <span
      key={`${phase}-${animKey}`}
      className="size-[7px] shrink-0 rounded-full"
      style={{
        backgroundColor: isPrimary
          ? active
            ? "#ffffff"
            : "#262626"
          : "#ffffff",
        animation:
          phase === "entering"
            ? "dot-enter 640ms cubic-bezier(0.16, 0.95, 0.24, 1.45) forwards"
            : phase === "exiting"
            ? "dot-exit 440ms cubic-bezier(0.62, 0, 0.88, 0.45) forwards"
            : "none",
      }}
    />
  );
}

/* ── Hero Button ── */

type HeroButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "outline";
};

const circleStyle = {
  width: "320%",
  aspectRatio: "1",
  transition: "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

const OUTLINE_BURST_MS = 760;

function HeroButton({
  variant = "primary",
  className,
  children,
  ...props
}: HeroButtonProps) {
  const { ref, hovered, origin, handleMouseEnter, handleMouseLeave } =
    useRadialHover<HTMLAnchorElement>();

  const isPrimary = variant === "primary";
  const isOutline = variant === "outline";

  const [textActive, setTextActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [outlineBurstActive, setOutlineBurstActive] = useState(false);
  const [outlineBurstKey, setOutlineBurstKey] = useState(0);
  const outlineBurstTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (isPrimary) {
      if (hovered) {
        timerRef.current = setTimeout(() => setTextActive(true), 150);
      } else {
        timerRef.current = setTimeout(() => setTextActive(false), 0);
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [hovered, isPrimary]);

  const handleEnter = () => {
    handleMouseEnter();

    if (isOutline) {
      if (outlineBurstTimerRef.current) clearTimeout(outlineBurstTimerRef.current);

      setOutlineBurstKey((k) => k + 1);
      setOutlineBurstActive(true);
      setTextActive(true);

      outlineBurstTimerRef.current = setTimeout(() => {
        setOutlineBurstActive(false);
        setTextActive(false);
      }, OUTLINE_BURST_MS);
    }
  };

  const handleLeave = () => {
    handleMouseLeave();
  };

  useEffect(() => {
    return () => {
      if (outlineBurstTimerRef.current) clearTimeout(outlineBurstTimerRef.current);
    };
  }, []);

  return (
    <Link
      ref={ref}
      className={cn(
        "group relative inline-flex items-center justify-center h-11 px-6 rounded-lg text-base tracking-[0.5px] whitespace-nowrap overflow-hidden transition-[transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5",
        isPrimary && "bg-neutral-200 border border-neutral-200/60",
        isOutline && "border border-white/60 hover:border-white",
        className
      )}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      {/* ── Cercle d'expansion radiale ── */}
      {isPrimary ? (
        <span
          className="pointer-events-none absolute rounded-full bg-neutral-900"
          style={{
            ...circleStyle,
            left: origin.x,
            top: origin.y,
            transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0})`,
          }}
        />
      ) : (
        <span
          key={outlineBurstKey}
          className="pointer-events-none absolute rounded-full bg-white/80"
          style={{
            ...circleStyle,
            left: origin.x,
            top: origin.y,
            animation: outlineBurstActive
              ? `outline-burst ${OUTLINE_BURST_MS}ms cubic-bezier(0.25, 0.9, 0.3, 1) 1`
              : "none",
          }}
        />
      )}

      {/* ── Texte / contenu ── */}
      <span
        className="relative z-10 inline-flex items-center gap-2.5"
        style={{
          color: isPrimary
            ? textActive ? "#ffffff" : "#262626"
            : "#ffffff",
          transition: "color 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <DotIndicator active={isOutline ? outlineBurstActive : hovered} variant={variant} />
        {children}
      </span>
    </Link>
  );
}

/* ── Hero Title ── */

const titleShared =
  "font-display font-bold text-[57px] leading-[64px] tracking-[4px] text-center whitespace-nowrap transition-colors duration-300 max-md:text-[36px] max-md:leading-[44px] max-md:tracking-[2px] max-md:whitespace-normal max-sm:text-[28px] max-sm:leading-[36px]";

function HeroTitle() {
  const [swapped, setSwapped] = useState(false);

  return (
    <div className="relative z-10 flex w-full flex-col items-center gap-20 max-md:gap-10">
      <div className="flex w-full flex-col items-center gap-2.5">
        <h1
          className={cn(
            titleShared,
            swapped
              ? "[-webkit-text-stroke:1px_#FFFAEB]"
              : "[-webkit-text-stroke:1px_#797679]",
            swapped ? "text-transparent" : "text-golden"
          )}
        >
          UX/UI DESIGNER
        </h1>
        <h1
          className={cn(
            titleShared,
            "[-webkit-text-stroke:1px_#FFFAEB] cursor-pointer",
            swapped ? "text-golden" : "text-transparent"
          )}
          onMouseEnter={() => setSwapped(true)}
          onMouseLeave={() => setSwapped(false)}
        >
          &amp; DESIGNER GRAPHIQUE
        </h1>
      </div>
    </div>
  );
}

/* ── Hero Image ── */

function HeroImage() {
  return (
    <div className="relative z-[1] mt-8 flex flex-col items-center max-md:mt-4">
      <div className="relative w-[543px] max-md:w-[380px] max-sm:w-[280px]">
        <Image
          src="/profile.png"
          alt="Bilal MAOUDE"
          width={543}
          height={586}
          className="relative z-[1] w-full h-auto object-cover pointer-events-none"
          priority
        />
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 40%, var(--color-surface) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[45%] z-[3] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--color-surface) 0%, var(--color-surface) 8%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 left-0 w-[30%] z-[3] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--color-surface) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-[30%] z-[3] pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--color-surface) 0%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}

/* ── Hero CTA ── */

function HeroCTA() {
  return (
    <div className="flex items-center gap-6 -mt-5 relative z-10 flex-wrap justify-center">
      <HeroButton href="/projet" variant="primary">
        Découvrir mes projets
      </HeroButton>
      <HeroButton href="/contact" variant="outline">
        Discutons maintenant
      </HeroButton>
    </div>
  );
}

/* ── Hero Section ── */

export function HeroSection() {
  const [greeting, title, image, cta] = useEntranceAnimation(4, 160, 100);

  return (
    <section className="relative flex flex-col items-center bg-surface min-h-screen overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: DOT_KEYFRAMES }} />

      <div className="h-20" />

      <div className="flex flex-col items-center w-full max-w-[968px] px-5 pt-20 pb-12 max-md:pt-14 max-md:pb-10 max-sm:pt-12 max-sm:pb-8">

        <div style={greeting.style} className="relative z-10 mb-20 flex w-full justify-center max-md:mb-10">
          <p className="text-center text-2xl leading-8 font-normal text-white whitespace-nowrap max-md:text-xl max-md:leading-7 max-md:whitespace-normal">
             Je m&apos;appelle Bilal et je suis un freelance
          </p>
        </div>

        <div style={title.style} className="w-full">
          <HeroTitle />
        </div>

        <div style={image.style} className="w-full">
          <HeroImage />
        </div>

        <div style={cta.style}>
          <HeroCTA />
        </div>

      </div>
    </section>
  );
}