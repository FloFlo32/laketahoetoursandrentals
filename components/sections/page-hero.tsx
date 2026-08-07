import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Shared hero for every inner page: full-bleed real photo with a gradient
 * scrim, centered text overlaid directly on it.
 */
export function PageHero({
  eyebrow,
  dotClassName,
  title,
  description,
  image,
  imageAlt,
  cta,
}: {
  eyebrow?: string;
  dotClassName?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative isolate flex min-h-[24rem] items-center overflow-hidden sm:min-h-[30rem]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        quality={78}
        className="object-cover object-top"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, color-mix(in oklch, var(--color-foreground) 40%, transparent) 0%, color-mix(in oklch, var(--color-foreground) 30%, transparent) 45%, color-mix(in oklch, var(--color-foreground) 72%, transparent) 100%)",
        }}
      />

      <div className="container-px relative z-10 mx-auto w-full max-w-3xl text-center text-background">
        {eyebrow && (
          <Badge
            variant="accent"
            className="mx-auto mb-4 gap-2 border-background/30 bg-background/10 text-background backdrop-blur-sm"
          >
            {dotClassName && <span className={cn("size-1.5 rounded-full", dotClassName)} aria-hidden />}
            {eyebrow}
          </Badge>
        )}
        <h1 className="text-gradient-hero text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-background/85 sm:text-lg">
            {description}
          </p>
        )}
        {cta && (
          <Button asChild size="lg" className="mt-7">
            <Link href={cta.href}>
              {cta.label} <ArrowRight className="size-4" />
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
}
