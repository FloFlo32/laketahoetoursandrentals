import { Star } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const IMG = "/ingested/laketahoetoursandrentals";

const notes = [
  "Guided kayak, hiking, biking, fishing and scuba tours on both the California and Nevada sides of the lake.",
  "The same local guides who tune skis and bikes also lead the tours, year round.",
  "Rated with a TripAdvisor Certificate of Excellence.",
];

export function Reviews() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16">
      <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <Reveal className="flex flex-col items-start">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Top Rated Reviews
          </span>
          <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
            Trusted by travelers on TripAdvisor
          </h2>
          <div className="mt-5 flex items-center gap-3">
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
              className="h-12 w-auto"
            />
          </div>
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-3">
          {notes.map((note) => (
            <RevealItem
              key={note}
              className="rounded-2xl border border-border bg-background p-5 text-sm text-pretty text-muted-foreground"
            >
              {note}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
