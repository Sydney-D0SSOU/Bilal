import { ExternalLink, Linkedin, Instagram, Youtube } from "lucide-react";
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

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M8.14 10.56c.62-.34.96-.9.96-1.6 0-.58-.23-1.06-.67-1.45-.44-.38-1.05-.58-1.8-.58H2v9.65h4.91c.84 0 1.5-.22 1.98-.65.49-.44.74-1 .74-1.72 0-.93-.5-1.58-1.49-1.95ZM4.2 8.77h2.48c.44 0 .78.1 1.03.3.24.2.36.48.36.84s-.12.63-.37.84c-.24.2-.58.3-1 .3H4.2V8.77Zm2.8 5.98H4.2v-2.06h2.76c.47 0 .84.1 1.1.3.27.2.4.5.4.89s-.13.7-.4.9c-.26.18-.62.28-1.07.28Zm7.96-5.56c-1.16 0-2.07.35-2.72 1.04-.66.69-.99 1.6-.99 2.72 0 1.14.33 2.04.98 2.72.66.68 1.57 1.02 2.75 1.02.93 0 1.7-.2 2.3-.6.61-.4 1.02-.95 1.26-1.67h-1.94c-.3.43-.82.64-1.56.64-.57 0-1.03-.16-1.37-.48-.35-.33-.54-.76-.58-1.3h5.54c.02-.16.03-.33.03-.5 0-1.06-.32-1.92-.95-2.57-.63-.68-1.54-1.02-2.75-1.02Zm-1.84 2.66c.08-.47.27-.84.57-1.12.3-.28.7-.42 1.2-.42.53 0 .95.14 1.24.42.3.28.47.65.52 1.12h-3.53ZM12.2 7.1h5.3V5.9h-5.3v1.2Z" />
    </svg>
  );
}

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  behance: BehanceIcon,
  instagram: Instagram,
  youtube: Youtube,
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
      <div className="bg-surface pt-[80px]">
        <div className="mx-auto flex max-w-[1248px] flex-col gap-[117px] px-5 py-[147px]">
          {/* Intro */}
          <div className="flex flex-wrap items-start gap-[213px]">
            <div className="max-w-[539px]">
              <h1 className="font-display text-[40px] font-bold leading-[44px] tracking-[4px] text-white">
                Salut, je suis Bilal MAOUDE.
              </h1>
            </div>
            <div className="flex min-w-[300px] max-w-[489px] flex-1 flex-col gap-[25px]">
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
              <div className="flex max-w-[404px] items-center gap-3">
                <ContactCTAButton
                  href="/contact"
                  className="shrink-0"
                  trailingIcon={<ExternalLink className="size-5 shrink-0" />}
                >
                  Laissez un message
                </ContactCTAButton>
                <div className="flex shrink-0 items-center gap-[7px]">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon];
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="flex h-12 w-12 items-center justify-center rounded-md border border-neutral-400/70 text-neutral-300 transition-colors hover:border-white hover:text-white"
                      >
                        <Icon className="h-5 w-5" />
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
