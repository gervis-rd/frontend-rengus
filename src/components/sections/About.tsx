import React from 'react';
import Image from 'next/image';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
  return (
    <section id="about" className={`py-12 sm:py-16 md:py-20 bg-white overflow-visible ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-[100vw] box-border">
        {/* about-grid-safe (globals.css) : colonnes minmax(0,1fr) pour que le texte ne soit plus coupé */}
        <div className="grid grid-cols-1 gap-8 lg:gap-12 items-start w-full about-grid-safe">
          {/* Left Column - Text Content - marges responsives */}
          <div 
            className="order-2 lg:order-1 min-w-0 w-full max-w-full box-border pl-5 pr-5 sm:pl-6 sm:pr-6 md:pl-8 md:pr-8 lg:pl-4 lg:pr-10"
            style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="text-gray-900">À propos de</span>
              <br />
              <span className="text-primary">Rengus Digital</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-loose">
              Rengus Digital est une agence digitale spécialisée dans la conception de solutions numériques complètes, alliant développement web et applicatif, solutions digitales sur mesure, communication digitale et accompagnement à la transformation numérique. Nous accompagnons les entreprises, startups et institutions dans la modernisation de leurs services et l'optimisation de leurs processus grâce à des outils performants, sécurisés et évolutifs.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-0 leading-loose">
              Notre approche repose sur une compréhension approfondie des enjeux métiers, une forte expertise technique et une vision stratégique du digital. De l'analyse des besoins à la mise en production, en passant par la communication et l'accompagnement, chaque projet est conçu avec rigueur, transparence et une orientation claire vers des résultats durables et mesurables.
            </p>
          </div>

          {/* Right Column - Overlapping Images */}
          <div className="order-1 lg:order-2 relative min-h-[260px] h-[260px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center lg:block">
            {/* Top Image */}
            <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-lg overflow-hidden shadow-lg mb-4 lg:mb-0 lg:absolute lg:top-0 lg:right-0 lg:z-20 mx-auto lg:mx-0 lg:w-[300px] lg:h-[300px]">
              <Image
                src="/images/work1.jpg"
                alt="Équipe Rengus Digital au travail"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 300px"
              />
            </div>

            {/* Bottom Image - Overlapping */}
            <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-lg overflow-hidden shadow-lg lg:absolute lg:top-16 lg:left-0 lg:z-10 mx-auto lg:mx-0 lg:translate-x-20 lg:w-[300px] lg:h-[300px]">
              <Image
                src="/images/work2.jpg"
                alt="Collaboration Rengus Digital"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                sizes="300px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

