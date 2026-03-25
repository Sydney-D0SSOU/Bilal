"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function DiagonalDrift({
  children,
  className,
  distance = 96,
  duration = 5.2,
  reverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  reverse?: boolean;
}) {
  const fromX = reverse ? distance : -distance;
  const toX = reverse ? -distance : distance;
  const fromY = reverse ? -distance : distance;
  const toY = reverse ? distance : -distance;

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      animate={{
        x: [fromX, toX, fromX],
        y: [fromY, toY, fromY],
        rotate: reverse ? [-1.2, 1.2, -1.2] : [1.2, -1.2, 1.2],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
}
