import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section
      id="hero"
      className={`relative flex min-h-[90vh] items-center overflow-hidden pt-20 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1e2a6b] to-[#0f1638]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/images/hero-land.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
            {siteConfig.slogan}
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Transformez vos idées en{' '}
            <span className="text-white/90">succès digitaux</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            De la stratégie à la mise en production, nous concevons des solutions innovantes qui propulsent votre croissance et modernisent votre activité.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'h-12 px-8 text-base inline-flex items-center')}
            >
              Démarrer un projet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/#services"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-12 border-white/30 bg-white/10 px-8 text-base text-white hover:bg-white/20 hover:text-white inline-flex items-center'
              )}
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
