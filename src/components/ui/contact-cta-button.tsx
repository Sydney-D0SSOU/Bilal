"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRadialHover } from "@/hooks/use-radial-hover";

type DotPhase = "idle-off" | "entering" | "idle-on" | "exiting";

const CTA_KEYFRAMES = `
@keyframes cta-dot-enter {
  0%   { transform: scale(0)    translate(-10px, -10px) rotate(-30deg); opacity: 0; }
  45%  { transform: scale(1.8)  translate(0, 0)         rotate(12deg);  opacity: 1; }
  70%  { transform: scale(0.82) translate(0, 0)         rotate(-6deg);  opacity: 1; }
  100% { transform: scale(1)    translate(0, 0)         rotate(0deg);   opacity: 1; }
}

@keyframes cta-dot-exit {
  0%   { transform: scale(1)   translate(0, 0)   rotate(0deg);  opacity: 1; }
  25%  { transform: scale(1.2) translate(0, 0)   rotate(8deg);  opacity: 1; }
  100% { transform: scale(0)   translate(8px,8px) rotate(30deg); opacity: 0; }
}

@keyframes cta-outline-burst {
  0%   { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  35%  { transform: translate(-50%, -50%) scale(0.9); opacity: 0.78; }
  100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
}
`;

function DotIndicator({ active, offColor }: { active: boolean; offColor: string }) {
  const [phase, setPhase] = useState<DotPhase>("idle-off");
  const prevActive = useRef(active);
  const [animKey, setAnimKey] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);

    const becameActive = active && !prevActive.current;
    const becameInactive = !active && prevActive.current;

    if (becameActive) {
      timer.current = setTimeout(() => {
        setAnimKey((k) => k + 1);
        setPhase("entering");
        timer.current = setTimeout(() => setPhase("idle-on"), 640);
      }, 0);
    } else if (becameInactive) {
      timer.current = setTimeout(() => {
        setAnimKey((k) => k + 1);
        setPhase("exiting");
        timer.current = setTimeout(() => setPhase("idle-off"), 440);
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
        backgroundColor: active ? "#ffffff" : offColor,
        animation:
          phase === "entering"
            ? "cta-dot-enter 640ms cubic-bezier(0.16, 0.95, 0.24, 1.45) forwards"
            : phase === "exiting"
              ? "cta-dot-exit 440ms cubic-bezier(0.62, 0, 0.88, 0.45) forwards"
              : "none",
      }}
    />
  );
}

export function SolidRadialCtaLink({
  href,
  children,
  trailingIcon,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { ref, hovered, origin, handleMouseEnter, handleMouseLeave } =
    useRadialHover<HTMLAnchorElement>();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CTA_KEYFRAMES }} />
    <Link
      ref={ref}
      href={href}
      className={cn(
        "relative inline-flex h-11 items-center justify-center overflow-hidden rounded-lg border border-neutral-200/60 bg-neutral-200 px-5 text-base tracking-[0.5px] whitespace-nowrap transition-transform duration-300 ease-in-out hover:-translate-y-0.5",
        className
      )}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className="pointer-events-none absolute rounded-full bg-surface"
        style={{
          left: origin.x,
          top: origin.y,
          width: "300%",
          aspectRatio: "1",
          transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0})`,
          transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
      <span
        className={cn(
          "relative z-10 inline-flex items-center gap-2.5 transition-colors duration-500",
          hovered ? "text-white" : "text-neutral-800"
        )}
      >
        <DotIndicator active={hovered} offColor="#262626" />
        {children}
        {trailingIcon}
      </span>
    </Link>
    </>
  );
}

export function SolidRadialCtaButton({
  type = "button",
  children,
  trailingIcon,
  className,
  disabled = false,
}: {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  const { ref, hovered, origin, handleMouseEnter, handleMouseLeave } =
    useRadialHover<HTMLButtonElement>();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CTA_KEYFRAMES }} />
      <button
        ref={ref}
        type={type}
        className={cn(
          "relative inline-flex h-11 items-center justify-center overflow-hidden rounded-lg border border-neutral-200/60 bg-neutral-200 px-5 text-base tracking-[0.5px] whitespace-nowrap transition-transform duration-300 ease-in-out hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70",
          className
        )}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          className="pointer-events-none absolute rounded-full bg-surface"
          style={{
            left: origin.x,
            top: origin.y,
            width: "300%",
            aspectRatio: "1",
            transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0})`,
            transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <span
          className={cn(
            "relative z-10 inline-flex items-center gap-2.5 transition-colors duration-500",
            hovered ? "text-white" : "text-neutral-800"
          )}
        >
          <DotIndicator active={hovered} offColor="#262626" />
          {children}
          {trailingIcon}
        </span>
      </button>
    </>
  );
}

const OUTLINE_BURST_MS = 760;

export function OutlineBurstCtaLink({
  href,
  children,
  trailingIcon,
  className,
}: {
  href: string;
  children: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
}) {
  const { ref, hovered, origin, handleMouseEnter, handleMouseLeave } =
    useRadialHover<HTMLAnchorElement>();
  const [outlineBurstActive, setOutlineBurstActive] = useState(false);
  const [outlineBurstKey, setOutlineBurstKey] = useState(0);
  const outlineBurstTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    handleMouseEnter();
    if (outlineBurstTimerRef.current) clearTimeout(outlineBurstTimerRef.current);
    setOutlineBurstKey((k) => k + 1);
    setOutlineBurstActive(true);
    outlineBurstTimerRef.current = setTimeout(() => setOutlineBurstActive(false), OUTLINE_BURST_MS);
  };

  useEffect(() => {
    return () => {
      if (outlineBurstTimerRef.current) clearTimeout(outlineBurstTimerRef.current);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CTA_KEYFRAMES }} />
      <Link
        ref={ref}
        href={href}
        className={cn(
          "relative inline-flex h-11 items-center justify-center overflow-hidden rounded-lg border border-white/60 px-5 text-base tracking-[0.5px] text-white whitespace-nowrap transition-[transform,border-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white",
          className
        )}
        onMouseEnter={handleEnter}
        onMouseLeave={handleMouseLeave}
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
              ? `cta-outline-burst ${OUTLINE_BURST_MS}ms cubic-bezier(0.25, 0.9, 0.3, 1) 1`
              : "none",
          }}
        />
        <span className="relative z-10 inline-flex items-center gap-2.5 text-white">
          <DotIndicator active={outlineBurstActive} offColor="#ffffff" />
          {children}
          {trailingIcon}
        </span>
      </Link>
    </>
  );
}

export const ContactCTAButton = SolidRadialCtaLink;
