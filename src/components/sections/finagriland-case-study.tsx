import Link from "next/link";
import { ArrowDownLeftIcon, ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import type { Project, ProjectDetail } from "@/constants/projects";

const finagrilandAssets = {
  hero: "https://www.figma.com/api/mcp/asset/3e68ae08-df5d-4d1d-9c26-c095b6a21f78",
  cover1: "https://www.figma.com/api/mcp/asset/033e65fb-6420-4cc8-b51e-7945f99c129b",
  cover2: "https://www.figma.com/api/mcp/asset/68d3dd37-6432-4ffd-b381-21f6d23fa425",
  cover3: "https://www.figma.com/api/mcp/asset/de39a1bd-af83-4c90-8ce5-4630a20f55de",
  cover4: "https://www.figma.com/api/mcp/asset/26165602-fc1d-42a2-8da2-2dff0e334424",
  cover5: "https://www.figma.com/api/mcp/asset/ee254124-4df9-48f6-ad40-61ad145157a0",
  cover6: "https://www.figma.com/api/mcp/asset/3f1c800e-55d5-43e4-a045-0680eca5abf8",
  duo1: "https://www.figma.com/api/mcp/asset/725e3c46-5bd0-4376-8e0f-ca3bf859988f",
  duo2: "https://www.figma.com/api/mcp/asset/f247c7bc-a666-4ad1-b803-264b7da6a65e",
  cover7: "https://www.figma.com/api/mcp/asset/5b49cc66-67e2-418f-9b6e-00b5c301bab0",
  cover8: "https://www.figma.com/api/mcp/asset/726b9301-60e2-42bd-b1ec-29274d556f6a",
  cover9: "https://www.figma.com/api/mcp/asset/e99654bd-ea5b-42a0-92d9-a4b45d205548",
  duo3: "https://www.figma.com/api/mcp/asset/e3bd2e4a-0074-4376-98ec-6bd29a328e3d",
  duo4: "https://www.figma.com/api/mcp/asset/b30a860e-a90e-40bf-8fc0-70c3f16caac7",
  duo5: "https://www.figma.com/api/mcp/asset/31e8f1bb-b145-46a4-8b20-5fe65fe32f7e",
  duo6: "https://www.figma.com/api/mcp/asset/ecc1a99d-1f1d-4d08-9256-a3c03ef773c8",
};

const FINAGRILAND_DETAIL =
  "Conception d'un logo et d'une charte graphique reflétant la vision et l'identité de Finagriland.";

function ProjectDetailRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4 text-2xl leading-8 text-neutral-300">
        <span>{label}</span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 underline transition-colors hover:text-white"
          >
            {value}
            <ArrowSquareOutIcon className="size-5 shrink-0" />
          </a>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="h-px bg-white/10" />
    </div>
  );
}

function GalleryCard({
  src,
  alt,
  className = "aspect-1248/691 w-full rounded-2xl",
  backgroundClassName = "bg-neutral-900",
  imageClassName = "h-full w-full object-cover",
}: {
  src: string;
  alt: string;
  className?: string;
  backgroundClassName?: string;
  imageClassName?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${backgroundClassName} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- remote Figma assets for visual parity */}
      <img src={src} alt={alt} className={imageClassName} decoding="async" />
    </div>
  );
}

export function FinagrilandCaseStudy({
  project,
  details,
}: {
  project: Pick<Project, "title" | "year" | "role">;
  details: ProjectDetail[];
}) {
  return (
    <div className="bg-surface pt-[80px]">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-20 px-5 py-[clamp(4rem,12vw,9.5rem)]">
        <div className="flex flex-col gap-[clamp(3rem,10vw,7.5rem)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white">
              {project.title}
            </span>
            <span className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-neutral-300">
              {project.year}
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-10">
            <div className="flex max-w-[572px] flex-col gap-10">
              <h1 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white uppercase">
                {project.role}
              </h1>
              <p className="text-2xl leading-8 text-neutral-300">
                FINAGRILAND est un projet ambitieux visant à créer un site agricole innovant et polyvalent.
              </p>
            </div>
            <Link
              href="/all-projects"
              className="inline-flex items-center gap-2 text-2xl text-neutral-300 transition-colors hover:text-white"
            >
              Découvrir
              <ArrowDownLeftIcon className="size-6 shrink-0 -rotate-90" aria-hidden />
            </Link>
          </div>
        </div>

        <GalleryCard src={finagrilandAssets.hero} alt="Finagriland hero" className="aspect-1248/514 w-full rounded-2xl" />

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-[135px]">
          <div className="flex max-w-[402px] flex-col gap-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-[4px] text-white uppercase">
              Détail du projet
            </h2>
            <p className="text-2xl leading-8 text-neutral-300">{FINAGRILAND_DETAIL}</p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-6 lg:min-w-[400px]">
            {details.map((detail) => (
              <ProjectDetailRow key={detail.label} {...detail} />
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <GalleryCard src={finagrilandAssets.cover1} alt="Finagriland logo usages 1" />
          <GalleryCard src={finagrilandAssets.cover2} alt="Finagriland logo usages 2" />
          <GalleryCard src={finagrilandAssets.cover3} alt="Finagriland logo usages 3" />
          <GalleryCard src={finagrilandAssets.cover4} alt="Finagriland logo usages 4" />
          <GalleryCard
            src={finagrilandAssets.cover5}
            alt="Finagriland déclinaisons"
            backgroundClassName="bg-white"
            imageClassName="h-full w-full object-contain p-4"
          />
          <GalleryCard src={finagrilandAssets.cover6} alt="Finagriland chartes couleurs" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <GalleryCard
              src={finagrilandAssets.duo1}
              alt="Finagriland mockup 1"
              className="aspect-604/514 w-full rounded-[30px]"
              backgroundClassName="bg-[#cfc0bd]"
              imageClassName="h-full w-full object-contain p-4"
            />
            <GalleryCard
              src={finagrilandAssets.duo2}
              alt="Finagriland mockup 2"
              className="aspect-604/514 w-full rounded-[30px]"
              backgroundClassName="bg-[#cfc0bd]"
              imageClassName="h-full w-full object-contain p-4"
            />
          </div>

          <GalleryCard src={finagrilandAssets.cover7} alt="Finagriland mockup 3" />
          <GalleryCard src={finagrilandAssets.cover8} alt="Finagriland mockup 4" />
          <GalleryCard src={finagrilandAssets.cover9} alt="Finagriland mockup 5" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <GalleryCard src={finagrilandAssets.duo3} alt="Finagriland produit 1" className="aspect-604/514 w-full rounded-[30px]" />
            <GalleryCard src={finagrilandAssets.duo4} alt="Finagriland produit 2" className="aspect-604/514 w-full rounded-[30px]" />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <GalleryCard src={finagrilandAssets.duo5} alt="Finagriland promo 1" className="aspect-604/514 w-full rounded-[30px]" />
            <GalleryCard src={finagrilandAssets.duo6} alt="Finagriland promo 2" className="aspect-604/514 w-full rounded-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
