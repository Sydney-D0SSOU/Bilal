import { contactEmail } from "@/constants/social";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-surface border-t border-white/10">
      <div className="mx-auto flex max-w-[1248px] flex-col items-center gap-8 px-5 py-24 text-center">
        <h2 className="font-display text-[40px] font-bold leading-[44px] tracking-[4px] text-white">
          Discutons de votre projet
        </h2>
        <p className="max-w-lg text-xl leading-8 text-neutral-300">
          Une idée, une refonte ou un accompagnement UX/UI — écrivez-moi.
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="text-2xl text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-neutral-300 hover:decoration-neutral-300"
        >
          {contactEmail}
        </a>
      </div>
    </section>
  );
}
