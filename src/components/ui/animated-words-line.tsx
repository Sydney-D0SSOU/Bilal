"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const STAIR_EASE = [0.16, 1, 0.3, 1] as const;

export function AnimatedWordsLine({
  text,
  className,
  delay = 0,
  containerDisplay = "block",
}: {
  text: string;
  className?: string;
  delay?: number;
  /** `inline` keeps words in a flowing paragraph with adjacent spans */
  containerDisplay?: "block" | "inline";
}) {
  const prefersReducedMotion = !!useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.span
      className={cn(containerDisplay === "inline" ? "inline" : "block", className)}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: prefersReducedMotion
          ? {}
          : {
              transition: {
                delayChildren: delay,
                staggerChildren: 0.055,
              },
            },
      }}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.92, ease: STAIR_EASE },
              },
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </motion.span>
  );
}
