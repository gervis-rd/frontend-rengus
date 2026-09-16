import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { siteConfig } from '@/config/site';
import { generateSEOMeta } from '@/config/seo';
import {
  NEWS_ARTICLES,
} from '@/content/site-content';
import type { NewsArticle } from '@/types';
import { Section } from '@/components/ui/section';
import { NewsImageCarousel } from '@/components/sections/NewsImageCarousel';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

function getArticleImages(article: NewsArticle) {
  if (article.images && article.images.length > 0) return article.images;
  return article.image ? [article.image] : [];
}

function renderRichText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: NEWS_ARTICLES.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ article: NewsArticle }> = async ({
  params,
}) => {
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const article = NEWS_ARTICLES.find((item) => item.slug === slug) ?? null;

  if (!article) {
    return { notFound: true };
  }

  return {
    props: { article },
  };
};

export default function ActualiteDetail({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const images = getArticleImages(article);
  const coverImage = images[0];

  const seoMeta = generateSEOMeta({
    title: `${article.title} - ${siteConfig.name}`,
    description: article.excerpt,
    image: coverImage,
  });

  const currentIndex = NEWS_ARTICLES.findIndex((item) => item.id === article.id);
  const previousArticle = currentIndex > 0 ? NEWS_ARTICLES[currentIndex - 1] : null;
  const nextArticle =
    currentIndex >= 0 && currentIndex < NEWS_ARTICLES.length - 1
      ? NEWS_ARTICLES[currentIndex + 1]
      : null;

  return (
    <>
      <Head>
        <title>{seoMeta.title}</title>
        <meta name="description" content={seoMeta.description} />
        {coverImage && <meta property="og:image" content={coverImage} />}
      </Head>

      <Layout>
        <Section className="bg-muted/30 pt-28 md:pt-32">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Retour aux actualités
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <span className="font-semibold uppercase tracking-wider text-primary">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="h-4 w-4" aria-hidden />
                {formatDate(article.date)}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {article.title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
          </div>

          {images.length > 0 && (
            <NewsImageCarousel
              images={images}
              alt={article.title}
              className="mt-10"
            />
          )}

          <div className="mx-auto mt-10 max-w-3xl space-y-5">
            {article.content.map((paragraph, index) => (
              <p
                key={`${article.slug}-${index}`}
                className="text-base leading-relaxed text-foreground/90 sm:text-lg"
              >
                {renderRichText(paragraph)}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:justify-between">
            {previousArticle ? (
              <Link
                href={`/actualites/${previousArticle.slug}`}
                className="group inline-flex max-w-sm flex-col gap-1 text-left"
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden />
                  Article précédent
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground">
                  {previousArticle.title}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {nextArticle ? (
              <Link
                href={`/actualites/${nextArticle.slug}`}
                className="group inline-flex max-w-sm flex-col gap-1 text-right sm:ml-auto"
              >
                <span className="inline-flex items-center justify-end gap-2 text-sm font-semibold text-primary">
                  Article suivant
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground">
                  {nextArticle.title}
                </span>
              </Link>
            ) : null}
          </div>
        </Section>
      </Layout>
    </>
  );
}
