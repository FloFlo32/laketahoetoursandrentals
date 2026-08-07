import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { brand } from "@/brand.config";
import { Reveal } from "@/components/magic/reveal";

const IMG = "/ingested/laketahoetoursandrentals";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_1.15fr]">
        {/* Bold color-blocked panel — the dominant-color moment, not a photo-scrim */}
        <div className="relative flex flex-col justify-center overflow-hidden bg-primary px-6 py-20 text-primary-foreground sm:px-12 lg:px-16 lg:py-0">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 1.5px, transparent 1.5px)",
              backgroundSize: "26px 26px",
            }}
          />

          <div className="relative mx-auto w-full max-w-lg">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-medium">
                Stateline, Nevada · South Lake Tahoe
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
                Welcome To
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="mt-3 text-balance text-6xl font-bold leading-[0.98] sm:text-7xl">
                Tahoe Tours
                <br />
                and Rentals
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-6 max-w-md text-pretty text-lg text-primary-foreground/85">
                {brand.description}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kayak-/-sup-tours"
                  className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-foreground px-7 text-base font-medium text-primary shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                >
                  Explore Tours <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border border-primary-foreground/40 px-7 text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-foreground/10 active:scale-[0.98]"
                >
                  Book Your Adventure
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-2.5 text-sm text-primary-foreground/80">
                <span className="flex text-primary-foreground">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </span>
                TripAdvisor Certificate of Excellence
              </div>
            </Reveal>
          </div>
        </div>

        {/* Full-bleed photo, edge to edge — no text laid over it */}
        <Reveal delay={0.15} className="relative min-h-[22rem] lg:min-h-[38rem]">
          <Image
            src={`${IMG}/img-010.webp`}
            alt="Guests watching the sunset over Lake Tahoe from a mountain overlook"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            quality={80}
            className="object-cover object-top"
          />
          <div className="absolute bottom-6 right-6 hidden overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/img-031.webp`}
              alt="Scuba diver exploring Lake Tahoe's clear alpine water"
              loading="lazy"
              decoding="async"
              className="size-32 object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
