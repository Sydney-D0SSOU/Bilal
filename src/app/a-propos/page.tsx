import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import { LinkedinLogoIcon, InstagramLogoIcon, YoutubeLogoIcon, BehanceLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Footer } from "@/components/layout/footer";
import { ContactCTAButton } from "@/components/ui/contact-cta-button";
import { socialLinks, type SocialLink } from "@/constants/social";
import type { Metadata } from "next";

function IconBrain({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.5 52.13c-2.6 0-4.72-2.11-4.72-4.72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M49.5 52.13c2.6 0 4.72-2.11 4.72-4.72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.93 48.06c-4.76-2.33-7.93-6.7-7.93-11.73 0-5.63 3.94-10.47 9.57-12.39-.2-1.07-.3-2.17-.3-3.3C16.27 12.3 23.26 5.5 31.78 5.5c3.58 0 6.87 1.17 9.53 3.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M64.07 48.06c4.76-2.33 7.93-6.7 7.93-11.73 0-5.63-3.94-10.47-9.57-12.39.2-1.07.3-2.17.3-3.3 0-8.34-6.99-15.14-15.51-15.14-3.58 0-6.87 1.17-9.53 3.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32.03 32.75c-1.3 0-2.36-1.05-2.36-2.36s1.05-2.36 2.36-2.36 2.36 1.05 2.36 2.36-1.05 2.36-2.36 2.36Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M46.97 32.75c1.3 0 2.36-1.05 2.36-2.36s-1.05-2.36-2.36-2.36-2.36 1.05-2.36 2.36 1.05 2.36 2.36 2.36Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconConception({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M66.78 9H12.47c-1.36 0-2.47 1.1-2.47 2.47v44.44c0 1.36 1.1 2.47 2.47 2.47h54.31c1.36 0 2.47-1.1 2.47-2.47V11.47c0-1.36-1.1-2.47-2.47-2.47Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 33h59.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34 33v25.38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconUiDesign({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M66.78 9H12.47c-1.36 0-2.47 1.1-2.47 2.47v44.44c0 1.36 1.1 2.47 2.47 2.47h54.31c1.36 0 2.47-1.1 2.47-2.47V11.47c0-1.36-1.1-2.47-2.47-2.47Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 33h59.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34 33v25.38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export const metadata: Metadata = {
  title: "À propos — Bilal MAOUDE",
};

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  linkedin: LinkedinLogoIcon,
  behance: BehanceLogoIcon,
  instagram: InstagramLogoIcon,
  youtube: YoutubeLogoIcon,
};

const processSteps = [
  {
    title: "Consultation",
    description:
      "Un premier échange permet de comprendre les besoins, la vision et les enjeux du projet.",
    icon: IconBrain,
  },
  {
    title: "Conception",
    description:
      "La page d'accueil définit le style du site, puis je conçois les autres pages.",
    icon: IconConception,
  },
  {
    title: "UI Design",
    description:
      "La phase finale consiste au développement du site, avec un accompagnement complet du début à la fin.",
    icon: IconUiDesign,
  },
];

export default function AProposPage() {
  return (
    <>
      <div className="bg-surface pt-[80px] overflow-x-hidden">
        <div className="mx-auto flex max-w-[1248px] flex-col gap-[117px] px-5 py-[147px]">
          {/* Intro */}
          <div className="flex flex-wrap items-start gap-10 lg:gap-[120px] xl:gap-[213px]">
            <div className="max-w-[539px]">
              <h1 className="font-display text-[40px] font-bold leading-[44px] tracking-[4px] text-white">
                Salut, je suis Bilal MAOUDE.
              </h1>
            </div>
            <div className="flex w-full min-w-0 max-w-[489px] flex-1 flex-col gap-[25px]">
              <p className="text-2xl leading-8">
                <span className="text-white">
                  Designer passionné, spécialisé en UX/UI
                </span>
                <span className="text-neutral-300">
                  . Je conçois des expériences numériques innovantes, centrées
                  sur les besoins humains, pour donner vie aux projets des
                  entreprises.
                </span>
              </p>
              <div className="flex w-full flex-wrap items-center gap-3 sm:flex-nowrap">
                <ContactCTAButton
                  href="/contact"
                  className="shrink-0"
                  trailingIcon={<ArrowSquareOutIcon className="size-5 shrink-0" />}
                >
                  Laissez un message
                </ContactCTAButton>
                <div className="flex shrink-0 items-center">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon];
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="inline-flex items-center justify-center p-2 text-neutral-300 transition-colors hover:text-white"
                      >
                        <Icon className="size-8" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Work Process */}
          <div className="flex flex-wrap items-start justify-between gap-10">
            <div className="font-display max-w-[200px] text-2xl leading-[44px] tracking-[4px] text-neutral-400">
              <p>Mon procès</p>
              <p>de travail</p>
            </div>
            <div className="flex flex-wrap gap-10">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex w-[282px] flex-col items-start rounded-2xl bg-neutral-700/50 p-8 backdrop-blur-[114px]"
                  >
                    <Icon className="mb-4 size-[79px] text-white/90" />
                    <h3 className="mb-2 text-xl font-semibold leading-7 text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-5 tracking-[0.25px] text-white/90">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
