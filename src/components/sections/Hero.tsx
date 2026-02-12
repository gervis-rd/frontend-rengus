import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger animation immediately on mount for Hero section
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Also observe for scroll if user scrolls back up
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className={`relative min-h-screen flex items-center justify-center ${className} overflow-hidden`}
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-land.gif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(45deg, rgba(42, 60, 142, 0.2) 0%, rgba(177, 17, 42, 0.15) 50%, rgba(42, 60, 142, 0.2) 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 15s ease infinite',
          }}
        ></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/15"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Dark Overlay - Reduced opacity for better background visibility */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-8 lg:px-12 pt-24 pb-4 md:pt-28 md:pb-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Company Name */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Rengus Digital
          </h1>

          {/* Main Headline */}
          <h2 
            className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            Nous concevons des solutions digitales innovantes pour accélérer votre croissance.
          </h2>

          {/* Description Paragraph */}
          <p 
            className={`text-base md:text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            De la conception à la mise en production, nous transformons vos idées en outils numériques performants, fiables et évolutifs.
          </p>

          {/* Call-to-Action Button */}
          <div 
            className={`flex justify-center items-center transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            <Link 
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold text-base md:text-lg text-center"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

