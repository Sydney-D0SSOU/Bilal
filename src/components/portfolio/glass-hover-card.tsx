"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useRadialHover } from "@/hooks/use-radial-hover";
import { cn } from "@/lib/utils";

type DotPhase = "idle-off" | "entering" | "idle-on" | "exiting";

const OUTLINE_BURST_MS = 760;

function useOutlineBurst<T extends HTMLElement>() {
  const { ref, origin, handleMouseEnter, handleMouseLeave } = useRadialHover<T>();
  const [outlineBurstActive, setOutlineBurstActive] = useState(false);
  const [outlineBurstKey, setOutlineBurstKey] = useState(0);
  const outlineBurstTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    handleMouseEnter();
    if (outlineBurstTimerRef.current) clearTimeout(outlineBurstTimerRef.current);
    setOutlineBurstKey((k) => k + 1);
    setOutlineBurstActive(true);
    outlineBurstTimerRef.current = setTimeout(
      () => setOutlineBurstActive(false),
      OUTLINE_BURST_MS
    );
  };

  useEffect(() => {
    return () => {
      if (outlineBurstTimerRef.current) clearTimeout(outlineBurstTimerRef.current);
    };
  }, []);

  return {
    ref,
    origin,
    outlineBurstActive,
    outlineBurstKey,
    handleEnter,
    handleLeave: handleMouseLeave,
    OUTLINE_BURST_MS,
  };
}

function DiscoverButtonDot({
  active,
  variant = "discover",
}: {
  active: boolean;
  /** `hero` = mêmes timings / taille que « Discutons maintenant » (hero-section) */
  variant?: "discover" | "hero";
}) {
  const [phase, setPhase] = useState<DotPhase>("idle-off");
  const prevActive = useRef(active);
  const [animKey, setAnimKey] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enterIdleMs = variant === "hero" ? 560 : 640;
  const exitIdleMs = variant === "hero" ? 380 : 440;
  const dotClass = variant === "hero" ? "size-[7px]" : "size-[5px]";

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    const becameActive = active && !prevActive.current;
    const becameInactive = !active && prevActive.current;

    if (becameActive) {
      timer.current = setTimeout(() => {
        setAnimKey((k) => k + 1);
        setPhase("entering");
        timer.current = setTimeout(() => setPhase("idle-on"), enterIdleMs);
      }, 0);
    } else if (becameInactive) {
      timer.current = setTimeout(() => {
        setAnimKey((k) => k + 1);
        setPhase("exiting");
        timer.current = setTimeout(() => setPhase("idle-off"), exitIdleMs);
      }, 0);
    }

    prevActive.current = active;
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, enterIdleMs, exitIdleMs]);

  return (
    <span
      key={`${phase}-${animKey}`}
      className={cn("shrink-0 rounded-full", dotClass)}
      style={{
        backgroundColor: "#ffffff",
        animation:
          phase === "entering"
            ? "discover-dot-enter 640ms cubic-bezier(0.16, 0.95, 0.24, 1.45) forwards"
            : phase === "exiting"
              ? "discover-dot-exit 440ms cubic-bezier(0.62, 0, 0.88, 0.45) forwards"
              : "none",
      }}
    />
  );
}

export function DiscoverAllButton() {
  const {
    ref,
    origin,
    outlineBurstActive,
    outlineBurstKey,
    handleEnter,
    handleLeave,
    OUTLINE_BURST_MS,
  } = useOutlineBurst<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      href="/all-projects"
      className="relative inline-flex h-11 items-center gap-2.5 overflow-hidden rounded-lg border border-white px-5 text-base tracking-[0.5px] text-white transition-transform duration-300 ease-in-out hover:-translate-y-0.5"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span
        key={outlineBurstKey}
        className="pointer-events-none absolute rounded-full bg-white/80"
        style={{
          left: origin.x,
          top: origin.y,
          width: "320%",
          aspectRatio: "1",
          animation: outlineBurstActive
            ? `discover-outline-burst ${OUTLINE_BURST_MS}ms cubic-bezier(0.25, 0.9, 0.3, 1) 1`
            : "none",
        }}
      />
      <span className="relative z-10 inline-flex items-center gap-2.5 text-white">
        <DiscoverButtonDot active={outlineBurstActive} />
        Découvrez tous
        <ExternalLink className="size-5 shrink-0" />
      </span>
    </Link>
  );
}

/** Même animation que « Découvrez tous » — en span pour rester dans le <Link> carte (pas de <a> imbriqué). */
export function GlassEnSavoirPlusPill({
  className,
  iconOnly,
}: {
  className?: string;
  iconOnly?: boolean;
}) {
  const {
    ref,
    origin,
    outlineBurstActive,
    outlineBurstKey,
    handleEnter,
    handleLeave,
    OUTLINE_BURST_MS,
  } = useOutlineBurst<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      role={iconOnly ? undefined : "presentation"}
      tabIndex={-1}
      aria-label={iconOnly ? "En savoir plus" : undefined}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/60 text-white transition-[transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white",
        iconOnly ? "size-9" : "h-9 gap-1.5 px-3.5 text-sm font-medium tracking-[0.3px]",
        className
      )}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span
        key={outlineBurstKey}
        className="pointer-events-none absolute rounded-full bg-white/80"
        style={{
          left: origin.x,
          top: origin.y,
          width: "320%",
          aspectRatio: "1",
          animation: outlineBurstActive
            ? `discover-outline-burst ${OUTLINE_BURST_MS}ms cubic-bezier(0.25, 0.9, 0.3, 1) 1`
            : "none",
        }}
      />
      <span className="relative z-10 inline-flex items-center gap-1.5 text-white">
        {iconOnly ? (
          <>
            <DiscoverButtonDot active={outlineBurstActive} variant="hero" />
            <ExternalLink className="size-[18px] shrink-0" aria-hidden />
          </>
        ) : (
          <>
            <DiscoverButtonDot active={outlineBurstActive} variant="hero" />
            En savoir plus
            <ExternalLink className="size-4 shrink-0" aria-hidden />
          </>
        )}
      </span>
    </span>
  );
}

/**
 * Panneau glassmorphism au hover : le flou laisse voir l’image de la carte (pas d’image glass en fond).
 */
function GlassProjectOverlay({
  title,
  subtitle,
  panelClassName,
  ctaIconOnly,
}: {
  title: string;
  subtitle: string;
  panelClassName: string;
  ctaIconOnly?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute z-20 flex items-center justify-between gap-3",
        "border border-white/20 bg-white/8 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-[14px]",
        "rounded-2xl",
        "pointer-events-none opacity-0 transition-opacity duration-300 ease-out",
        "group-hover:pointer-events-auto group-hover:opacity-100",
        panelClassName
      )}
    >
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-2 text-base font-semibold leading-tight text-white md:text-lg">
          <span className="size-1.5 shrink-0 rounded-full bg-white" aria-hidden />
          {title}
        </p>
        <p className="mt-1 text-sm leading-snug text-white/75">{subtitle}</p>
      </div>
      <GlassEnSavoirPlusPill iconOnly={ctaIconOnly} />
    </div>
  );
}

export function GlassHoverCardLink({
  href,
  title,
  subtitle,
  overlayClassName,
  overlayCtaIconOnly,
  className,
  style,
  children,
}: {
  href: string;
  title: string;
  subtitle: string;
  overlayClassName: string;
  overlayCtaIconOnly?: boolean;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn("group relative block overflow-hidden rounded-2xl", className)} style={style}>
      {children}
      <GlassProjectOverlay
        title={title}
        subtitle={subtitle}
        panelClassName={overlayClassName}
        ctaIconOnly={overlayCtaIconOnly}
      />
    </Link>
  );
}
