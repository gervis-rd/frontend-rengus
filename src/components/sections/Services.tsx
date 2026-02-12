import React from 'react';
import type { Service } from '@/types';
import Button from '@/components/ui/Button';

interface ServicesProps {
  className?: string;
  services?: Service[];
}

// Icônes SVG pour les services
const ServiceIcons: Record<string, React.ReactNode> = {
  'web-development': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="24" height="18" rx="2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 16H32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 20H18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 20H26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="13" r="1" fill="white"/>
      <circle cx="15" cy="13" r="1" fill="white"/>
      <path d="M16 24L18 26L24 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'custom-solutions': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2"/>
      <path d="M20 12V20L26 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 20L20 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 20L28 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 20L20 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 14L16 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 14L26 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 26L16 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 26L26 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'digital-communication': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8C14.4772 8 10 12.4772 10 18C10 22.4183 12.8657 26.2091 16.8 27.8L18 32L22.2 28.8C23.1 28.9333 24.0333 29 25 29C30.5228 29 35 24.5228 35 19C35 13.4772 30.5228 9 25 9C23.0333 9 21.1 9.46667 19.4 10.2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="18" r="1.5" fill="white"/>
      <circle cx="22" cy="18" r="1.5" fill="white"/>
      <circle cx="26" cy="18" r="1.5" fill="white"/>
      <path d="M12 12L16 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M28 12L24 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'digital-transformation': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20L20 10L30 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 10V30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 24L20 30L28 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="8" r="2" fill="white"/>
      <circle cx="32" cy="8" r="2" fill="white"/>
      <circle cx="8" cy="32" r="2" fill="white"/>
      <circle cx="32" cy="32" r="2" fill="white"/>
    </svg>
  ),
};

const Services: React.FC<ServicesProps> = ({ className = '', services = [] }) => {
  const defaultServices: Service[] = [
    {
      id: 'web-development',
      title: 'Développement web & applicatif',
      description: 'Nous concevons des sites web et applications modernes, rapides et sécurisées, adaptés aux besoins de votre activité. De la vitrine professionnelle aux plateformes métiers complexes, nous développons des solutions évolutives avec les technologies les plus récentes.',
    },
    {
      id: 'custom-solutions',
      title: 'Solutions digitales sur mesure',
      description: 'Nous analysons vos processus métiers afin de créer des outils digitaux personnalisés qui optimisent vos opérations. Automatisation, interconnexion de systèmes (API), plateformes internes ou services en ligne : chaque solution est pensée pour améliorer votre performance.',
    },
    {
      id: 'digital-communication',
      title: 'Communication digitale',
      description: 'Nous accompagnons votre marque dans sa stratégie de communication digitale afin d\'améliorer votre visibilité et votre impact en ligne. Création de contenus, gestion des réseaux sociaux, branding digital et campagnes de communication adaptées à vos objectifs.',
    },
    {
      id: 'digital-transformation',
      title: 'Accompagnement & transformation digitale',
      description: 'Nous accompagnons les entreprises et institutions dans leur transition vers le numérique : conseil stratégique, digitalisation des services, amélioration des processus existants et mise en place de solutions durables.',
    },
  ];

  const servicesToDisplay = services.length > 0 ? services.slice(0, 4) : defaultServices;

  return (
    <section id="services" className={`py-20 relative ${className} overflow-hidden`}>
      {/* Animated GIF Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-moov.gif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>
      
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Section gauche - Contenu textuel */}
          <div className="space-y-6">
            {/* Petit titre */}
            <div className="space-y-2">
              <h3 className="text-accent text-lg font-medium">Ce Que Nous Proposons</h3>
              <div className="w-16 h-0.5 bg-accent"></div>
            </div>

            {/* Grand titre */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-accent">Services</span>
              <span className="text-white"> Que Nous Pouvons Vous Offrir !</span>
            </h2>

            {/* Description */}
            <div className="text-white text-base leading-relaxed">
              <p>
                Rengus Digital propose des services digitaux sur mesure pour accompagner les entreprises et institutions dans leur transformation numérique. Du développement web et applicatif à la communication digitale, nous concevons des solutions performantes, sécurisées et évolutives, pensées pour répondre aux besoins réels de nos clients et soutenir leur croissance.
              </p>
            </div>

            {/* Bouton CTA */}
            <div className="pt-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  window.location.href = '/contact';
                }}
                className="rounded-lg"
              >
                Nous Contacter
              </Button>
            </div>
          </div>

          {/* Section droite - Grille de cartes */}
          <div className="grid grid-cols-2 gap-6">
            {servicesToDisplay.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                {/* Icône circulaire */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    {ServiceIcons[service.id] || (
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-lg md:text-xl font-bold text-black mb-3 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed text-center flex-grow">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

