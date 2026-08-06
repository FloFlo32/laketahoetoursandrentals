import { Reveal } from "@/components/magic/reveal";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import type { Activity } from "@/content/activities";
import { categoryLabels } from "@/content/activities";

export function ActivityShowcase({
  id,
  eyebrow,
  title,
  description,
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: Activity[];
}) {
  return (
    <section id={id} className="container-px mx-auto max-w-7xl py-16">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
        <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">{title}</h2>
        {description && <p className="mt-4 text-pretty text-muted-foreground">{description}</p>}
      </Reveal>

      <div className="mt-10">
        <AutoSlider>
          {items.map((item) => (
            <ImageCard
              key={item.path}
              href={`/${item.path}`}
              src={item.heroImage}
              alt={item.navLabel}
              eyebrow={categoryLabels[item.category]}
              title={item.navLabel}
              description={item.blurb}
            />
          ))}
        </AutoSlider>
      </div>
    </section>
  );
}
