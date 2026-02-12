import React, { useEffect, useRef, useState } from 'react';
import type { Project } from '@/types';

interface PortfolioProps {
  className?: string;
  projects?: Project[];
}

interface Statistic {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const numberRef = useRef<HTMLDivElement>(null);

  // Extract number from value (e.g., "250+" -> 250)
  const extractNumber = (val: string): number => {
    const num = parseInt(val.replace(/\D/g, ''), 10);
    return isNaN(num) ? 0 : num;
  };

  const targetNumber = extractNumber(value);
  const suffix = value.replace(/\d/g, ''); // Get suffix like "+"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * targetNumber);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetNumber);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, targetNumber, duration]);

  return (
    <div ref={numberRef} className="text-black text-3xl md:text-4xl font-bold">
      {displayValue.toLocaleString()}{suffix}
    </div>
  );
};

const Portfolio: React.FC<PortfolioProps> = ({ className = '', projects = [] }) => {
  // Statistiques adaptées à Rengus Digital
  const statistics: Statistic[] = [
    {
      id: 'clients',
      label: 'Clients',
      value: '250+',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 20C27.3137 20 30 17.3137 30 14C30 10.6863 27.3137 8 24 8C20.6863 8 18 10.6863 18 14C18 17.3137 20.6863 20 24 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 36C12 30.4772 16.4772 26 22 26H26C31.5228 26 36 30.4772 36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M34 20C36.2091 20 38 18.2091 38 16C38 13.7909 36.2091 12 34 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 32C40 29.7909 38.2091 28 36 28H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 20C11.7909 20 10 18.2091 10 16C10 13.7909 11.7909 12 14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 32C8 29.7909 9.79086 28 12 28H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 'projets',
      label: 'Projets',
      value: '320+',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14H36C37.1046 14 38 14.8954 38 16V32C38 33.1046 37.1046 34 36 34H12C10.8954 34 10 33.1046 10 32V16C10 14.8954 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 20H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 20V34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 'applications',
      label: 'Applications',
      value: '10+',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 12H34C35.1046 12 36 12.8954 36 14V30C36 31.1046 35.1046 32 34 32H14C12.8954 32 12 31.1046 12 30V14C12 12.8954 12.8954 12 14 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 36C20 37.1046 20.8954 38 22 38H26C27.1046 38 28 37.1046 28 36V32H20V36Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 24H36C37.1046 24 38 24.8954 38 26V30C38 31.1046 37.1046 32 36 32H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="portfolio" className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nos Réalisations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {statistics.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white rounded-lg p-6 md:p-8 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icône */}
              <div className="text-primary">
                {stat.icon}
              </div>
              
              {/* Label */}
              <div className="text-black text-sm md:text-base font-medium">
                {stat.label}
              </div>
              
              {/* Métrique */}
              <AnimatedNumber value={stat.value} duration={2000} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

