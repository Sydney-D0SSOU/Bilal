"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

/* ────────────────────────────────────────────────
   useEntranceAnimation
   Stagger d'entrée : fade-in + slide-up décalé.
──────────────────────────────────────────────── */

type EntranceItem = {
  visible: boolean;
  style: CSSProperties;
};

const TRANSITION_BASE =
  "opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";

export function useEntranceAnimation(
  count: number,
  staggerMs = 150,
  initialDelayMs = 80
) {
  const [visibles, setVisibles] = useState<boolean[]>(Array(count).fill(false));

  useEffect(() => {
    const timers = Array.from({ length: count }, (_, i) =>
      setTimeout(() => {
        setVisibles((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, initialDelayMs + i * staggerMs)
    );

    return () => timers.forEach(clearTimeout);
  }, [count, staggerMs, initialDelayMs]);

  const items: EntranceItem[] = visibles.map((visible) => ({
    visible,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0px)" : "translateY(24px)",
      transition: TRANSITION_BASE,
    },
  }));

  return items;
}

/* ────────────────────────────────────────────────
   useRadialHover
   Cercle d'expansion toujours gauche → droite.
──────────────────────────────────────────────── */

type RadialOrigin = { x: string; y: string };

export function useRadialHover<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [hovered, setHovered] = useState(false);
  const [origin, setOrigin] = useState<RadialOrigin>({ x: "0%", y: "50%" });

  const handleMouseEnter = () => {
    setOrigin({ x: "0%", y: "50%" });   // part du bord gauche
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setOrigin({ x: "0%", y: "50%" }); // se rétracte vers le bord gauche (droite -> gauche)
    setHovered(false);
  };

  return { ref, hovered, origin, handleMouseEnter, handleMouseLeave };
}