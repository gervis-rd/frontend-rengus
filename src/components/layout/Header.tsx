'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/content/site-content';
import { useScroll } from '@/hooks/useScroll';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isScrolled } = useScroll();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-white shadow-sm',
          className
        )}
      >
        <nav
          className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
          aria-label="Navigation principale"
        >
          <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            <Image
              src="/images/Plan de travail 1.png"
              alt="Rengus Digital"
              width={400}
              height={150}
              priority
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-20"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" className={cn(buttonVariants({ size: 'sm' }))}>
              Démarrer un projet
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-lg p-2 text-foreground hover:bg-muted lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className="sr-only">{menuOpen ? 'Fermer' : 'Menu'}</span>
            <span
              className="mb-1.5 block h-0.5 w-6 bg-current transition-transform duration-200"
              style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}
            />
            <span
              className="mb-1.5 block h-0.5 w-6 bg-current transition-opacity duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 w-6 bg-current transition-transform duration-200"
              style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </nav>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[60] lg:hidden transition-opacity duration-300',
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          onClick={closeMenu}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          aria-label="Fermer le menu"
        />
        <div
          className={cn(
            'absolute top-0 right-0 flex h-full w-[min(100vw-2rem,320px)] flex-col bg-white px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="Menu mobile">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3.5 text-base font-medium text-foreground hover:bg-muted hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 border-t pt-6">
            <Link
              href="/contact"
              onClick={closeMenu}
              className={cn(buttonVariants({ size: 'lg' }), 'w-full')}
            >
              Démarrer un projet
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
