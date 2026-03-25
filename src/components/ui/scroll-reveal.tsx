"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "start 52%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [32, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.985, 1]);
  const blurPx = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const filter = useTransform(blurPx, (v) => `blur(${v}px)`);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        y,
        opacity,
        scale,
        filter,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </motion.div>
  );
}
