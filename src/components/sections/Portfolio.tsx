import React, { useEffect, useRef, useState } from 'react';
import { Users, FolderKanban, Smartphone, Star } from 'lucide-react';
import { KEY_FIGURES } from '@/content/site-content';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';

interface PortfolioProps {
  className?: string;
}

const statIcons: Record<string, React.ReactNode> = {
  clients: <Users className="h-8 w-8" />,
  projects: <FolderKanban className="h-8 w-8" />,
  apps: <Smartphone className="h-8 w-8" />,
  satisfaction: <Star className="h-8 w-8" />,
};

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const numberRef = useRef<HTMLDivElement>(null);

  const targetNumber = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/\d/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    const el = numberRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.floor(easeOut * targetNumber));

      if (progress < 1) animationFrame = requestAnimationFrame(animate);
      else setDisplayValue(targetNumber);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, targetNumber, duration]);

  return (
    <div ref={numberRef} className="text-3xl font-bold text-primary sm:text-4xl">
      {displayValue.toLocaleString()}
      {suffix}
    </div>
  );
};

const Portfolio: React.FC<PortfolioProps> = ({ className = '' }) => {
  return (
    <Section id="portfolio" className={`bg-white ${className}`}>
      <SectionHeader
        eyebrow="Nos réalisations"
        title="Des résultats concrets"
        description="Notre expertise se traduit par des projets livrés, des clients satisfaits et des solutions digitales qui créent de la valeur."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {KEY_FIGURES.map((stat) => (
          <Card key={stat.id} className="border-border/60 text-center">
            <CardContent className="flex flex-col items-center gap-4 p-6 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {statIcons[stat.id]}
              </div>
              <AnimatedNumber value={stat.value} />
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
