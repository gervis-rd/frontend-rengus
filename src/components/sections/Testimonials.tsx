import React from 'react';
import { TEAM_MEMBERS } from '@/content/site-content';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className = '' }) => {
  return (
    <Section id="team" className={`bg-muted/40 ${className}`}>
      <SectionHeader
        eyebrow="Notre équipe"
        title="Rencontrez nos talents"
        description="Une équipe passionnée, experte et engagée pour concevoir des solutions digitales adaptées à vos ambitions."
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        {TEAM_MEMBERS.map((member) => (
          <Card key={member.id} className="border-border/60 bg-white transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center sm:p-8">
              <img
                src={member.avatar}
                alt={member.name}
                className="h-24 w-24 rounded-xl object-cover shadow-sm sm:h-28 sm:w-28"
              />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              <a
                href="#"
                aria-label={`LinkedIn de ${member.name}`}
                className="mt-4 flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                in
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
