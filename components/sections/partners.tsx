import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { partners } from "@/content/activities";

export function Partners() {
  return (
    <section className="border-y border-border/70 bg-secondary/40 py-14">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <span className="block text-center text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Proud Partners
          </span>
        </Reveal>

        <RevealGroup className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {partners.map((p) => (
            <RevealItem
              key={p.name}
              className="grid h-20 w-40 place-items-center rounded-xl border border-border bg-card px-5 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.name}
                loading="lazy"
                decoding="async"
                className="max-h-12 w-auto max-w-full object-contain"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
