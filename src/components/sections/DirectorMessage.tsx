import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/section';

interface DirectorMessageProps {
  className?: string;
}

const DirectorMessage: React.FC<DirectorMessageProps> = ({ className = '' }) => {
  return (
    <Section id="mot-du-directeur" className={`bg-[#f8f7f4] ${className}`}>
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/8 blur-2xl" />
          <Image
            src="/images/DG.jpg"
            alt="Madeleine RENGUILA IKANA, Directrice Générale de Rengus Digital"
            width={900}
            height={1100}
            className="relative h-auto w-full rounded-[1.5rem] object-cover shadow-xl"
            priority
          />
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Mot du Directeur Général
          </div>

          <div className="space-y-4 text-base leading-8 text-foreground/85 md:text-lg">
            <p>
              Notre conviction est simple : le numérique est un véritable levier de transformation et d&apos;opportunités.
              Nous œuvrons chaque jour à développer des solutions innovantes, accompagner les organisations et
              contribuer à l&apos;émergence d&apos;un écosystème numérique africain performant.
            </p>
            <p>
              Au-delà de la technologie, nous croyons avant tout en l&apos;humain, en la compétence, en l&apos;innovation et en
              l&apos;engagement des talents qui construisent notre avenir.
            </p>
            <p>
              Notre ambition est de faire de Rengus Digital une entreprise utile, responsable et créatrice de valeur,
              capable de porter des projets ambitieux et de participer activement au développement du numérique en
              Afrique.
            </p>
            <p>
              À nos clients, partenaires et collaborateurs, merci pour votre confiance. Ensemble, construisons un avenir
              numérique plus fort.
            </p>
          </div>

          <div className="border-t border-border pt-5">
            <p className="text-xl font-semibold text-foreground">Madeleine Orlane RENGUILA IKANA</p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Directrice Générale Rengus Digital
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DirectorMessage;
