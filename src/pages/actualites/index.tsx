import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { siteConfig } from '@/config/site';
import { generateSEOMeta } from '@/config/seo';
import { NEWS_ARTICLES } from '@/content/site-content';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}

const Actualites: React.FC = () => {
  const seoMeta = generateSEOMeta({
    title: `Actualités - ${siteConfig.name}`,
    description: `Suivez l'actualité de ${siteConfig.name} : projets, expertise et vie de l'agence.`,
  });

  return (
    <>
      <Head>
        <title>{seoMeta.title}</title>
        <meta name="description" content={seoMeta.description} />
      </Head>

      <Layout>
        <Section className="bg-white pt-28 md:pt-32">
          <SectionHeader
            eyebrow="Actualités"
            title="La vie de Rengus Digital"
            description="Projets livrés, expertise et temps forts de l'agence : retrouvez ici les dernières nouvelles de Rengus Digital."
          />

          <div className="mx-auto mt-12 grid max-w-sm gap-4">
            {NEWS_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5"
              >
                <div className="relative aspect-[16/9] w-full">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    />
                  ) : (
                    <div className="h-full w-full bg-muted" />
                  )}
                  <span className="absolute left-2 top-2 rounded bg-white px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-sm">
                    {article.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-3.5">
                  <h2 className="line-clamp-2 text-sm font-bold leading-snug tracking-tight text-foreground">
                    {article.title}
                  </h2>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      {formatDate(article.date)}
                    </span>
                    <Link
                      href={`/actualites/${article.slug}`}
                      className={cn(buttonVariants({ size: 'xs' }), 'rounded-md px-2.5')}
                    >
                      Lire la suite
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </Layout>
    </>
  );
};

export default Actualites;
