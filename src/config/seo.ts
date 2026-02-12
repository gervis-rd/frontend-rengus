/**
 * SEO configuration and utilities
 */

import { siteConfig } from './site';
import type { SEOProps } from '@/types';

export const defaultSEO: SEOProps = {
  title: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/og-image.jpg`,
};

export const defaultTitle = `${siteConfig.name} - ${siteConfig.slogan}`;

export function generateSEOMeta({ title, description, image, url }: SEOProps = {}) {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : defaultSEO.title;
  const metaDescription = description || defaultSEO.description;
  const metaImage = image || defaultSEO.image;
  const metaUrl = url || defaultSEO.url;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      images: [{ url: metaImage }],
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  };
}

