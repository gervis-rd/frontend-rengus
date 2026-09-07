import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/content/site-content';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { siteConfig } from '@/config/site';

const socialItems = [
  { href: SOCIAL_LINKS.facebook, label: 'Facebook' },
  { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { href: SOCIAL_LINKS.instagram, label: 'Instagram' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          <div className="shrink-0">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/Plan de travail 1.png"
                alt={siteConfig.name}
                width={400}
                height={150}
                className="h-14 w-auto sm:h-16 lg:h-20"
              />
            </Link>
            <p className="mt-2 text-sm font-semibold text-white/90">{siteConfig.slogan}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Agence digitale spécialisée en développement web, solutions sur mesure et transformation numérique.
            </p>
          </div>

          <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/70 transition-colors hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                Contact
              </h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li>{CONTACT_INFO.email}</li>
                <li>{CONTACT_INFO.phone}</li>
                <li>{CONTACT_INFO.address}</li>
                <li>{CONTACT_INFO.workHours}</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                Réseaux sociaux
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialItems.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-8 text-center text-sm text-white/60">
          <p>&copy; {currentYear} {siteConfig.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
