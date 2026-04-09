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
    // 0 quand l'element entre en bas du viewport, 1 quand il sort par le haut.
    offset: ["start end", "end start"],
  });

  // Animation bidirectionnelle: grossit au centre, retrecit en entree/sortie.
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [56, 0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.36, 0.76, 1, 0.76, 0.36]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1.02, 0.88]);

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
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </motion.div>
  );
}
