import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-sm font-semibold uppercase tracking-wider',
            dark ? 'text-white/80' : 'text-primary'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl',
          dark ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            dark ? 'text-white/80' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
