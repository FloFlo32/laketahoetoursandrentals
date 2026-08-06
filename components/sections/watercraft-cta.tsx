import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

const IMG = "/ingested/laketahoetoursandrentals";

/**
 * "Enjoy Tahoe On Your Own Personal Watercraft" — the closing banner the
 * source site repeats at the bottom of the homepage AND every inner page.
 * Mirrored here as one shared component.
 */
export function WatercraftCta() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16">
      <Reveal>
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[18rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/img-018.webp`}
              alt="Guest with a rental bike overlooking Lake Tahoe"
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>
          <div className="p-8 sm:p-10">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Grab-N-Go Rentals
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              Enjoy Tahoe On Your Own Personal Watercraft
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Kayak and paddle board rentals with easy-mount universal roof racks
              included, no extra cost. Paddle where you want, delivery also available.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/kayak-/-sup">
                See Rentals <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
