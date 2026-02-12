import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm ${className}`}>
      {/* Subtle overlay for better readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      <nav className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-20">
            <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
              <Image
                src="/images/Plan de travail 1.png"
                alt="Rengus Digital Logo"
                width={400}
                height={150}
                priority
                className="h-12 md:h-16 lg:h-20 w-auto"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="relative text-white hover:text-primary transition-colors font-medium group"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#about" 
              className="relative text-white hover:text-primary transition-colors font-medium group"
            >
              À propos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#services" 
              className="relative text-white hover:text-primary transition-colors font-medium group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#portfolio" 
              className="relative text-white hover:text-primary transition-colors font-medium group"
            >
              Nos réalisations
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="relative text-white hover:text-primary transition-colors font-medium group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold text-sm md:text-base whitespace-nowrap"
            >
              Besoin d'aide ?
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

