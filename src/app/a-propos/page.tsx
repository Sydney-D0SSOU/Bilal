import { Footer } from "@/components/layout/footer";
import { AProposIntro } from "@/components/sections/a-propos-intro";
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
          <AProposIntro />

          {/* Work Process */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="font-display text-2xl leading-[44px] tracking-[4px] text-neutral-400 lg:max-w-[200px]">
              <p>Mon procès</p>
              <p>de travail</p>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:flex lg:flex-wrap">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex w-full flex-col items-start rounded-2xl bg-neutral-700/50 p-8 backdrop-blur-[114px] lg:w-[282px]"
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
