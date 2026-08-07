import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

const IMG = "/ingested/laketahoetoursandrentals";

const features = [
  "Universal roof racks included, no extra cost",
  "Delivery available, paddle wherever you want",
  "Easy-mount setup so you're on the water in minutes",
];

/**
 * "Enjoy Tahoe On Your Own Personal Watercraft" — the closing banner the
 * source site repeats at the bottom of the homepage AND every inner page.
 * Mirrored here as one shared component. Both columns share a fixed
 * min-height so the photo never dwarfs a short block of copy.
 */
export function WatercraftCta() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16">
      <Reveal>
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2">
          <div className="relative min-h-[18rem] md:min-h-[26rem]">
            <Image
              src={`${IMG}/img-030.webp`}
              alt="Guest standing on a rock in Lake Tahoe's turquoise water"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
              className="object-cover object-top"
            />
          </div>
          <div className="flex min-h-[18rem] flex-col justify-center p-8 md:min-h-[26rem] sm:p-10">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Grab-N-Go Rentals
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              Enjoy Tahoe On Your Own Personal Watercraft
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Kayak and paddle board rentals built for spontaneous plans. Grab your
              gear and go, no reservation gymnastics required.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-pretty text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-7 w-fit">
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
