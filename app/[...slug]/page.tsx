import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Info, Award, Mountain, Route } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { WatercraftCta } from "@/components/sections/watercraft-cta";
import { Gallery } from "@/components/magic/gallery";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { activities, activityByPath, categoryLabels } from "@/content/activities";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.path.split("/") }));
}

function findActivity(slugParts: string[]) {
  return activityByPath.get(slugParts.join("/"));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const activity = findActivity(slug);
  if (!activity) return {};
  return {
    title: activity.title,
    description: activity.blurb,
  };
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const activity = findActivity(slug);
  if (!activity) notFound();

  const related = activities
    .filter((a) => a.category === activity.category && a.path !== activity.path)
    .slice(0, 6);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow={categoryLabels[activity.category]}
          title={activity.title}
          description={activity.blurb}
          image={activity.heroImage}
          imageAlt={activity.navLabel}
          cta={{ label: "Check Availability", href: "/contact" }}
        />

        <section className="container-px mx-auto max-w-4xl py-16">
          <Reveal className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {activity.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          {activity.note && (
            <Reveal delay={0.08}>
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-secondary/50 p-5">
                <Info className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{activity.note}</p>
              </div>
            </Reveal>
          )}

          {activity.highlights && activity.highlights.length > 0 && (
            <RevealGroup className="mt-8 grid gap-3 sm:grid-cols-2">
              {activity.highlights.map((h) => (
                <RevealItem
                  key={h}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-4"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{h}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </section>

        {activity.guides && activity.guides.length > 0 && (
          <section className="container-px mx-auto max-w-6xl pb-16">
            <Reveal className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Meet Our Guides
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
                Who you&apos;ll ride with
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-3">
              {activity.guides.map((g) => (
                <RevealItem
                  key={g.name}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="text-lg font-semibold">Meet {g.name}</h3>
                  <p className="text-sm text-pretty text-muted-foreground">{g.bio}</p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    {g.years && (
                      <span className="flex items-center gap-1.5">
                        <Award className="size-3.5 text-primary" /> {g.years} years riding
                      </span>
                    )}
                    {g.level && (
                      <span className="flex items-center gap-1.5">
                        <Mountain className="size-3.5 text-primary" /> {g.level}
                      </span>
                    )}
                    {g.trail && (
                      <span className="col-span-2 flex items-center gap-1.5">
                        <Route className="size-3.5 text-primary" /> Favorite: {g.trail}
                      </span>
                    )}
                  </div>
                  {g.described && (
                    <span className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                      Described as: {g.described}
                    </span>
                  )}
                </RevealItem>
              ))}
            </RevealGroup>
          </section>
        )}

        {activity.gallery && activity.gallery.length > 1 && (
          <section className="container-px mx-auto max-w-6xl pb-16">
            <Reveal>
              <Gallery
                images={activity.gallery.map((src) => ({ src, alt: activity.navLabel }))}
              />
            </Reveal>
          </section>
        )}

        {related.length > 0 && (
          <section className="container-px mx-auto max-w-7xl py-16">
            <Reveal>
              <h2 className="text-3xl font-bold sm:text-4xl">
                More {categoryLabels[activity.category]}
              </h2>
            </Reveal>
            <div className="mt-10">
              <AutoSlider>
                {related.map((r) => (
                  <ImageCard
                    key={r.path}
                    href={`/${r.path}`}
                    src={r.heroImage}
                    alt={r.navLabel}
                    eyebrow={categoryLabels[r.category]}
                    title={r.navLabel}
                    description={r.blurb}
                  />
                ))}
              </AutoSlider>
            </div>
          </section>
        )}

        <WatercraftCta />
      </main>
      <Footer />
    </>
  );
}
