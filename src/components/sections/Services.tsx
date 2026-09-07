import React from 'react';
import Link from 'next/link';
import { Code2, Megaphone, Rocket, Settings2 } from 'lucide-react';
import type { Service } from '@/types';
import { SERVICES } from '@/content/site-content';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServicesProps {
  className?: string;
  services?: Service[];
}

const serviceIcons: Record<string, React.ReactNode> = {
  'web-development': <Code2 className="h-7 w-7" />,
  'custom-solutions': <Settings2 className="h-7 w-7" />,
  'digital-communication': <Megaphone className="h-7 w-7" />,
  'digital-transformation': <Rocket className="h-7 w-7" />,
};

const Services: React.FC<ServicesProps> = ({ className = '', services = [] }) => {
  const servicesToDisplay = services.length > 0 ? services : SERVICES;

  return (
    <Section id="services" className={`bg-muted/40 ${className}`}>
      <SectionHeader
        eyebrow="Nos services"
        title="Des solutions digitales complètes"
        description="Du développement à la stratégie, nous concevons des outils adaptés à vos enjeux métiers pour accélérer votre transformation numérique."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {servicesToDisplay.map((service) => (
          <Card key={service.id} className="border-border/60 bg-white transition-shadow hover:shadow-md">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                {serviceIcons[service.id]}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'h-12 px-8')}>
          Discutons de votre projet
        </Link>
      </div>
    </Section>
  );
};

export default Services;
