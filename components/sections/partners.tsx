import { Reveal } from "@/components/magic/reveal";
import { Marquee } from "@/components/magic/marquee";
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
      </div>
      <div className="mt-8">
        <Marquee pauseOnHover className="[--marquee-duration:28s]">
          {partners.map((p) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={p.name}
              src={p.src}
              alt={p.name}
              loading="lazy"
              decoding="async"
              className="h-14 w-auto shrink-0 opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
