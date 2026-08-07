import { Handshake } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { partners } from "@/content/activities";

const rings = [
  "ring-blue-500/25",
  "ring-amber-500/25",
  "ring-cyan-500/25",
  "ring-emerald-500/25",
];

const shortNames: Record<string, string> = {
  "TripAdvisor Certificate of Excellence": "TripAdvisor",
  "American SkiBike Association": "SkiBike Assoc.",
};

export function Partners() {
  return (
    <section className="relative overflow-hidden border-y border-border/70 bg-secondary/40 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="container-px relative mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center">
          <span className="grid size-11 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
            <Handshake className="size-5" />
          </span>
          <span className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Proud Partners
          </span>
        </Reveal>

        <RevealGroup className="mt-10 flex flex-wrap items-start justify-center gap-8 sm:gap-12">
          {partners.map((p, i) => (
            <RevealItem key={p.name} className="flex w-24 flex-col items-center gap-3 text-center">
              <span
                className={`grid size-24 place-items-center overflow-hidden rounded-full bg-white p-3 shadow-md ring-4 ${rings[i % rings.length]} transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-contain"
                />
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {shortNames[p.name] ?? p.name}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
