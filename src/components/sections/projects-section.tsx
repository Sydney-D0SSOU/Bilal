import { PortfolioProjectsShowcase } from "@/components/sections/portfolio-projects-showcase";
import { PartnerLogosMarquee } from "@/components/sections/partner-logos-marquee";

export function ProjectsSection() {
  return (
    <section
      id="projets"
      className="overflow-x-hidden bg-surface px-5 pb-[120px] pt-[calc(5rem+48px)] md:pb-[152px] md:pt-[calc(5rem+80px)]"
    >
      <div className="mx-auto w-full max-w-[1248px]">
        <PortfolioProjectsShowcase
          titleLevel="h1"
          showDiscoverAllButton={false}
          projectsGridVariant="figma"
          partnerLogos={<PartnerLogosMarquee className="min-h-[59px]" />}
        />
      </div>
    </section>
  );
}
