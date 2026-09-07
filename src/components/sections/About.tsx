import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';

interface AboutProps {
  className?: string;
}

const highlights = [
  'Expertise technique et vision stratégique',
  'Solutions sur mesure, sécurisées et évolutives',
  'Accompagnement de bout en bout',
  'Orientation résultats et transparence',
];

const About: React.FC<AboutProps> = ({ className = '' }) => {
  return (
    <Section id="about" className={`relative overflow-hidden bg-gradient-to-b from-white to-muted/30 ${className}`}>
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <SectionHeader
            align="left"
            eyebrow="À propos"
            title="Une agence digitale au service de votre ambition"
            description="Rengus Digital accompagne entreprises, startups et institutions dans la conception et le déploiement de solutions numériques performantes."
          />

          <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Nous allions développement web et applicatif, solutions sur mesure, communication digitale et
              accompagnement à la transformation numérique pour répondre aux enjeux réels de nos clients.
            </p>
            <p>
              Chaque projet est pensé avec rigueur, de l&apos;analyse des besoins à la mise en production, pour
              garantir des résultats durables et mesurables.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <Card className="mt-8 border-primary/15 bg-primary/5">
            <CardContent className="flex items-start gap-3 p-5">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-foreground">
                <span className="font-semibold">Notre promesse :</span> transformer vos défis digitaux en
                opportunités concrètes, avec transparence et engagement à chaque étape.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl" />
            <Image
              src="/images/work1.jpg"
              alt="Équipe Rengus Digital en collaboration autour d'un projet"
              width={800}
              height={600}
              className="relative h-auto w-full rounded-2xl object-contain shadow-xl"
              sizes="(max-width: 1024px) 100vw, 512px"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
