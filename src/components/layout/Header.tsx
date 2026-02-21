'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Nos réalisations' },
  { href: '/contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <header className={`w-full fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm overflow-visible ${className}`}>
      {/* Subtle overlay for better readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" aria-hidden />
      <nav className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4 max-w-[100vw] box-border" aria-label="Navigation principale">
        <div className="flex items-center justify-between gap-2 min-w-0">
          {/* Logo - peut rétrécir */}
          <Link href="/" className="flex items-center flex-shrink-0 min-w-0" onClick={closeMenu}>
            <div className="bg-white/95 backdrop-blur-sm px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg shadow-md">
              <Image
                src="/images/Plan de travail 1.png"
                alt="Rengus Digital Logo"
                width={400}
                height={150}
                priority
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto max-w-[160px] sm:max-w-[180px] md:max-w-none"
              />
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center flex-shrink-0 space-x-6 lg:space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative text-white hover:text-primary transition-colors font-medium group whitespace-nowrap"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA visible uniquement desktop ; mobile = dans le menu */}
          <div className="flex items-center flex-shrink-0 gap-2">
            <Link
              href="https://rdvpermis.ga/rengus"
              className="hidden md:inline-flex px-4 py-2 lg:px-6 lg:py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold text-sm lg:text-base whitespace-nowrap"
            >
              Rendez-vous Permis
            </Link>
            {/* Hamburger - Mobile/Tablette */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden relative z-[60] p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary flex-shrink-0"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <span className="sr-only">{menuOpen ? 'Fermer' : 'Menu'}</span>
              <span className="block w-6 h-0.5 bg-current mb-1.5 transition-transform duration-200 origin-center" style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
              <span className="block w-6 h-0.5 bg-current mb-1.5 transition-opacity duration-200" style={{ opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-6 h-0.5 bg-current transition-transform duration-200 origin-center" style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>
    </header>

      {/* Menu mobile : rendu au-dessus de tout (hors header) avec z-index très élevé */}
      <div
        className={`md:hidden fixed inset-0 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ zIndex: 9999 }}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          onClick={closeMenu}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          aria-label="Fermer le menu"
        />
        <div
          className={`absolute top-0 right-0 h-full w-[min(100vw-2rem,320px)] max-w-[85vw] bg-white shadow-2xl flex flex-col pt-24 pb-8 px-6 transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <nav className="flex flex-col gap-0.5" aria-label="Menu mobile">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="py-3.5 px-3 text-gray-900 hover:text-primary hover:bg-gray-50 rounded-lg font-medium transition-colors text-base"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link
              href="https://rdvpermis.ga/rengus"
              onClick={closeMenu}
              className="block w-full text-center px-6 py-3.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold text-base"
            >
              Rendez-vous Permis
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

