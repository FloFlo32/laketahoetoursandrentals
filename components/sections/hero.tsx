import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Reveal } from "@/components/magic/reveal";

const IMG = "/ingested/laketahoetoursandrentals";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-10 pt-14 pb-16 sm:pt-20 sm:pb-24 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="relative">
          <AuroraBackground className="opacity-70" />
          <Reveal>
            <Badge variant="accent">Stateline, Nevada · South Lake Tahoe</Badge>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Welcome To
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-3 text-balance text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Tahoe Tours <span className="text-primary">and Rentals</span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-lg text-pretty text-lg text-muted-foreground">
              {brand.description}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/kayak-/-sup-tours">
                  Explore Tours <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Book Your Adventure</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              TripAdvisor Certificate of Excellence
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 sm:aspect-[5/6]">
            <Image
              src={`${IMG}/img-010.webp`}
              alt="Guests watching the sunset over Lake Tahoe from a mountain overlook"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={78}
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-xl shadow-primary/10 sm:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/img-035.webp`}
              alt="Guide holding a trout caught on a Lake Tahoe fly fishing tour"
              loading="lazy"
              decoding="async"
              className="size-28 rounded-xl object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
