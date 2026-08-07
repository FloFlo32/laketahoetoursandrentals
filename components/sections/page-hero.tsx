import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * Shared hero for every inner page: real photo on top (own area, own image
 * tag), title + copy BELOW on a solid surface. No text-over-image scrim.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  cta,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="container-px mx-auto max-w-7xl pt-8 sm:pt-12">
      <div className="relative overflow-hidden rounded-3xl border border-border">
        <div className="relative aspect-[4/3] sm:aspect-[16/10]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            quality={75}
            className="object-cover object-top"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-10 max-w-4xl rounded-3xl border border-border bg-card p-6 text-center shadow-xl shadow-primary/5 sm:-mt-16 sm:p-10">
        {eyebrow && (
          <Badge variant="accent" className="mx-auto mb-4">
            {eyebrow}
          </Badge>
        )}
        <h1 className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground sm:text-lg">
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
