"use client";

import { useState } from "react";
import { Instagram, Linkedin, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { SolidRadialCtaButton } from "@/components/ui/contact-cta-button";

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

export function ContactPageContent() {
  const [openIndex, setOpenIndex] = useState(0);

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
          <form className="lg:col-span-7 flex flex-col gap-12">
            <div className="space-y-12">
              <div className="border-b border-white/20 pb-4">
                <label className="text-xl text-neutral-300">Votre nom complet</label>
                <input
                  type="text"
                  placeholder="Ecrivez votre nom"
                  className="w-full bg-transparent pt-4 text-white outline-none placeholder:text-neutral-500"
                />
              </div>
              <div className="border-b border-white/20 pb-4">
                <label className="text-xl text-neutral-300">Votre e-mail</label>
                <input
                  type="email"
                  placeholder="Ecrivez votre e-mail"
                  className="w-full bg-transparent pt-4 text-white outline-none placeholder:text-neutral-500"
                />
              </div>
              <div className="border-b border-white/20 pb-4">
                <label className="text-xl text-neutral-300">Votre message</label>
                <textarea
                  rows={1}
                  placeholder="Ecrivez votre message"
                  className="w-full resize-none bg-transparent pt-4 text-white outline-none placeholder:text-neutral-500"
                />
              </div>
            </div>
            <SolidRadialCtaButton type="submit" className="self-start">
              soumettre le formulaire
            </SolidRadialCtaButton>
          </form>

          {/* Infos de contact à droite (prend environ 40%) */}
          <aside className="lg:col-span-5 flex flex-col gap-16">
            <div className="space-y-10">
              <div className="border-b border-white/10 pb-4">
                <p className="mb-1 text-lg text-neutral-400">Adresse email</p>
                <p className="text-xl">bilal.maoude@knowbridge.com</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <p className="mb-1 text-lg text-neutral-400">Localisation</p>
                <p className="text-xl">Bénin, Cotonou</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl">Réseaux sociaux</h3>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                   <div className="p-2 border border-neutral-700 rounded-md"><Linkedin size={18}/></div> Linkedin
                </a>
                <a href="#" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                   <div className="p-2 border border-neutral-700 rounded-md"><Instagram size={18}/></div> Instagram
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* --- SECTION 3: FAQ --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-20 border-t border-white/10">
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
                  <Plus className={cn("transition-transform", openIndex === index && "rotate-45")} />
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