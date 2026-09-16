import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export function NewsImageCarousel({ images, alt, className }: NewsImageCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;

  const goTo = (nextIndex: number) => {
    setIndex((nextIndex + images.length) % images.length);
  };

  return (
    <div className={cn('relative mx-auto max-w-4xl overflow-hidden rounded-2xl', className)}>
      <div className="relative aspect-[4/3] w-full bg-muted sm:aspect-[16/10]">
        {images.map((src, i) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-500',
              i === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Image
              src={src}
              alt={`${alt} — image ${i + 1}`}
              fill
              priority={i === 0}
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm transition hover:bg-white"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm transition hover:bg-white"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  'h-2 w-2 rounded-full transition',
                  i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                )}
                aria-label={`Aller à l’image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
