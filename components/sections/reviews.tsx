import { Star, Waves, Wrench, Award } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { AuroraBackground } from "@/components/magic/aurora-background";

const IMG = "/ingested/laketahoetoursandrentals";

const notes = [
  {
    icon: Waves,
    color: "text-blue-600 bg-blue-500/10 ring-blue-500/15",
    text: "Guided kayak, hiking, biking, fishing and scuba tours on both the California and Nevada sides of the lake.",
  },
  {
    icon: Wrench,
    color: "text-emerald-600 bg-emerald-500/10 ring-emerald-500/15",
    text: "The same local guides who tune skis and bikes also lead the tours, year round.",
  },
  {
    icon: Award,
    color: "text-amber-600 bg-amber-500/10 ring-amber-500/15",
    text: "Rated with a TripAdvisor Certificate of Excellence.",
  },
];

export function Reviews() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
        <AuroraBackground className="opacity-40" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal className="flex flex-col items-start">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Top Rated Reviews
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
              Trusted by travelers on TripAdvisor
            </h2>
            <div className="mt-5 flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2 backdrop-blur-sm">
              <span className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-current" />
                ))}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/img-001.webp`}
                alt="TripAdvisor Certificate of Excellence"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto"
              />
            </div>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:grid-cols-3">
            {notes.map((note) => (
              <RevealItem
                key={note.text}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className={`grid size-10 place-items-center rounded-xl ring-1 ${note.color}`}>
                  <note.icon className="size-5" />
                </span>
                <p className="text-sm text-pretty text-muted-foreground">{note.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
