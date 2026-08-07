import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { brand } from "@/brand.config";
import { Reveal } from "@/components/magic/reveal";

const IMG = "/ingested/laketahoetoursandrentals";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[38rem] items-center overflow-hidden sm:min-h-[46rem]">
      <Image
        src={`${IMG}/img-010.webp`}
        alt="Guests watching the sunset over Lake Tahoe from a mountain overlook"
        fill
        priority
        sizes="100vw"
        quality={82}
        className="object-cover object-top"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, color-mix(in oklch, var(--color-foreground) 45%, transparent) 0%, color-mix(in oklch, var(--color-foreground) 35%, transparent) 45%, color-mix(in oklch, var(--color-foreground) 75%, transparent) 100%)",
        }}
      />

      <div className="container-px relative z-10 mx-auto w-full max-w-4xl text-center text-background">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
            Stateline, Nevada · South Lake Tahoe
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-7 font-display text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
            Welcome To
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <h1 className="text-gradient-hero mx-auto mt-3 text-balance text-6xl font-bold leading-[0.98] sm:text-7xl">
            Tahoe Tours and Rentals
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-background/85">
            {brand.description}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/kayak-/-sup-tours"
              className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-7 text-base font-medium text-primary-foreground shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
            >
              Explore Tours <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border border-background/40 px-7 text-base font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-background/10 active:scale-[0.98]"
            >
              Book Your Adventure
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-9 flex items-center justify-center gap-2.5 text-sm text-background/80">
            <span className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            TripAdvisor Certificate of Excellence
          </div>
        </Reveal>
      </div>
    </section>
  );
}
