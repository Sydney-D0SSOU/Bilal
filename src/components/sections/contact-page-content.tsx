"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentType,
  type FormEvent,
} from "react";
import {
  BehanceLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  PlusIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { SolidRadialCtaButton } from "@/components/ui/contact-cta-button";
import { contactEmail, socialLinks, type SocialLink } from "@/constants/social";

const faqItems = [
  {
    question: "Combien de temps prend un projet ?",
    answer:
      "La durée varie selon la complexité, mais un cadrage initial permet de définir un planning clair avec des jalons.",
  },
  {
    question: "Pouvez-vous reprendre un projet existant ?",
    answer:
      "Oui. Je peux auditer l'existant, proposer un plan d'amélioration et intervenir progressivement sans bloquer votre activité.",
  },
  {
    question: "Comment se passe la collaboration ?",
    answer:
      "Nous avançons par étapes: brief, proposition, validations intermédiaires et livrables finaux avec points de suivi réguliers.",
  },
] as const;

const socialIconMap: Record<SocialLink["icon"], ComponentType<{ size?: number }>> = {
  linkedin: LinkedinLogoIcon,
  behance: BehanceLogoIcon,
  instagram: InstagramLogoIcon,
  youtube: YoutubeLogoIcon,
};

export function ContactPageContent() {
  const [openIndex, setOpenIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!formStatus) return;

    if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
    statusTimerRef.current = setTimeout(() => {
      setFormStatus(null);
    }, 4200);

    return () => {
      if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
    };
  }, [formStatus]);

  const handleInputChange =
    (field: "name" | "email" | "message" | "company") =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Une erreur est survenue.");
      }

      setFormStatus({
        type: "success",
        message: "Votre message a bien ete envoye. Je vous reponds tres vite.",
      });
      setFormData({ name: "", email: "", message: "", company: "" });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Impossible d'envoyer le message pour le moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#121113] text-white pt-20">
      <section className="mx-auto w-full max-w-[1400px] px-10 py-20 flex flex-col gap-32">
        
        {/* --- SECTION 1: HEADER (Titre à gauche, Texte à droite) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-tight tracking-wider uppercase">
              Donnons vie à votre projet
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
              Vous avez une idée, un besoin ou un projet en tête ? Envoyez-moi un message via ce formulaire afin que nous puissions échanger...
            </p>
          </div>
        </div>

        {/* --- SECTION 2: FORMULAIRE & CONTACT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Formulaire à gauche (prend environ 60%) */}
          <form className="lg:col-span-7 flex flex-col gap-12" onSubmit={handleSubmit}>
            <div className="space-y-12">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.company}
                onChange={handleInputChange("company")}
                className="hidden"
                aria-hidden
              />
              <div className="border-b border-white/20 pb-4">
                <label className="text-xl text-neutral-300">Votre nom complet</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange("name")}
                  placeholder="Ecrivez votre nom"
                  required
                  className="w-full bg-transparent pt-4 text-white outline-none placeholder:text-neutral-500"
                />
              </div>
              <div className="border-b border-white/20 pb-4">
                <label className="text-xl text-neutral-300">Votre e-mail</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  placeholder="Ecrivez votre e-mail"
                  required
                  className="w-full bg-transparent pt-4 text-white outline-none placeholder:text-neutral-500"
                />
              </div>
              <div className="border-b border-white/20 pb-4">
                <label className="text-xl text-neutral-300">Votre message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  placeholder="Ecrivez votre message"
                  required
                  className="w-full resize-none bg-transparent pt-4 text-white outline-none placeholder:text-neutral-500"
                />
              </div>
            </div>
            <div
              aria-live="polite"
              className={cn(
                "overflow-hidden transition-all duration-500 ease-out",
                formStatus ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              {formStatus ? (
                <p
                  className={cn(
                    "rounded-lg border px-4 py-2 text-sm backdrop-blur-sm",
                    formStatus.type === "success"
                      ? "border-emerald-300/20 bg-emerald-400/10 text-emerald-200"
                      : "border-rose-300/20 bg-rose-400/10 text-rose-200"
                  )}
                >
                  {formStatus.message}
                </p>
              ) : null}
            </div>
            <SolidRadialCtaButton type="submit" className="self-start" disabled={isSubmitting}>
              {isSubmitting ? "envoi en cours..." : "soumettre le formulaire"}
            </SolidRadialCtaButton>
          </form>

          {/* Infos de contact à droite (prend environ 40%) */}
          <aside className="lg:col-span-5 flex flex-col gap-16">
            <div className="space-y-10">
              <div className="border-b border-white/10 pb-4">
                <p className="mb-1 text-lg text-neutral-400">Adresse email</p>
                <p className="text-xl">{contactEmail}</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <p className="mb-1 text-lg text-neutral-400">Localisation</p>
                <p className="text-xl">Bénin, Cotonou</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <p className="mb-1 text-lg text-neutral-400">Numéro de téléphone</p>
                <p className="text-xl">+229 01 96 31 97 26</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl">Réseaux sociaux</h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-neutral-400 transition-colors hover:text-white"
                    >
                      <Icon size={32} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>

        {/* --- SECTION 3: FAQ --- */}
        <div id="faq" className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-20 border-t border-white/10">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold uppercase tracking-widest">FAQ</h2>
            <p className="mt-6 text-neutral-400">Si votre question reste sans réponse...</p>
          </div>
          <div className="lg:col-span-8">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-white/20 py-6">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-xl md:text-2xl font-light">{item.question}</span>
                  <PlusIcon className={cn("transition-transform", openIndex === index && "rotate-45")} />
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-neutral-400 max-w-2xl leading-relaxed">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}