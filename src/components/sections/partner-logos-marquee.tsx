"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Bandeau logos partenaires — fidèle au frame Figma (node 2082:1696).
 * Piste : flex gap-[30px] items-center, hauteur 59px, opacité 50 %.
 * Assets dans /public/logos/ (export Figma, pas d’URL expirable).
 */

const LOGO_ORDER = ["surface", "rural", "mtn", "prudential"] as const;
type LogoId = (typeof LOGO_ORDER)[number];

function LogoKamgokoSurface() {
  return (
    <div className="relative h-[32.834px] w-[140.772px] shrink-0">
      {/* Export Figma = SVG (fichier local, pas une URL expirable) */}
      <Image
        src="/logos/partner-surface.svg"
        alt="Kamgoko Technologies"
        width={141}
        height={33}
        unoptimized
        className="h-full w-full object-contain object-left"
        sizes="141px"
      />
    </div>
  );
}

function LogoLeRural() {
  return (
    <div className="relative size-[37px] shrink-0 overflow-hidden">
      <Image
        src="/logos/partner-rural.png"
        alt="Le Rural"
        fill
        className="object-cover"
        sizes="37px"
      />
    </div>
  );
}

function LogoMtn() {
  return (
    <div className="relative h-[59px] w-[79px] shrink-0 overflow-hidden">
      <Image
        src="/logos/partner-mtn.png"
        alt="MTN"
        fill
        className="object-cover"
        sizes="79px"
      />
    </div>
  );
}

function LogoPrudentialBelife() {
  return (
    <div className="relative flex h-[59px] w-[110px] shrink-0 flex-col items-start justify-center p-[10px]">
      <div className="relative aspect-813/417 w-full overflow-hidden">
        <img
          src="/logos/partner-prudential.png"
          alt="Prudential Belife Insurance"
          className="pointer-events-none absolute left-[-13.53%] top-[-13.53%] size-[127.06%] max-w-none object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

function LogoSlot({ id }: { id: LogoId }) {
  switch (id) {
    case "surface":
      return <LogoKamgokoSurface />;
    case "rural":
      return <LogoLeRural />;
    case "mtn":
      return <LogoMtn />;
    case "prudential":
      return <LogoPrudentialBelife />;
    default:
      return null;
  }
}

function LogoSequence({ suffix }: { suffix: string }) {
  return (
    <div className="flex shrink-0 items-center gap-[30px] pr-[30px]">
      {LOGO_ORDER.map((id) => (
        <LogoSlot key={`${suffix}-${id}`} id={id} />
      ))}
    </div>
  );
}

export function PartnerLogosMarquee({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[59px] w-full min-w-0 max-w-[569px] overflow-hidden opacity-50 md:max-w-none md:flex-1",
        className
      )}
      role="region"
      aria-label="Logos des partenaires et clients"
    >
      {/*
        Deux séquences identiques + padding droit = largeur totale / 2 exacte
        pour translateX(-50%) → boucle sans saut (Figma : gap 30px entre logos).
      */}
      <div className="partner-logos-marquee-track flex w-max shrink-0 items-stretch will-change-transform">
        <LogoSequence suffix="a" />
        <LogoSequence suffix="b" />
      </div>
    </div>
  );
}
