import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Info, Award, Mountain, Route, ArrowRight, MapPin } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { WatercraftCta } from "@/components/sections/watercraft-cta";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/magic/gallery";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { activities, activityByPath, categoryLabels, categoryColors } from "@/content/activities";
import { cn } from "@/lib/utils";

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
  const colors = categoryColors[activity.category];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow={categoryLabels[activity.category]}
          dotClassName={colors.solid}
          title={activity.title}
          description={activity.blurb}
          image={activity.heroImage}
          imageAlt={activity.navLabel}
          cta={{ label: "Check Availability", href: "/contact" }}
        />

        <section className="container-px mx-auto max-w-6xl py-16">
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            <div>
              <Reveal className="relative pl-6">
                <span
                  className={cn("absolute inset-y-1 left-0 w-1 rounded-full", colors.solid)}
                  aria-hidden
                />
                <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {activity.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>

              {activity.note && (
                <Reveal delay={0.08}>
                  <div className={cn("mt-8 flex items-start gap-3 rounded-2xl border p-5", colors.border, colors.bg)}>
                    <Info className={cn("mt-0.5 size-5 shrink-0", colors.text)} />
                    <p className="text-sm text-muted-foreground">{activity.note}</p>
                  </div>
                </Reveal>
              )}
            </div>

            <Reveal delay={0.1}>
              <div className={cn("rounded-2xl border p-6", colors.border, colors.bg)}>
                <span className={cn("inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em]", colors.text)}>
                  <span className={cn("size-2 rounded-full", colors.solid)} aria-hidden />
                  {categoryLabels[activity.category]}
                </span>
                <h3 className="mt-3 text-lg font-semibold">Quick Facts</h3>

                <ul className="mt-4 flex flex-col gap-3">
                  {activity.highlights?.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className={cn("mt-0.5 size-4 shrink-0", colors.text)} />
                      <span className="font-medium text-foreground/90">{h}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2.5 text-sm">
                    <MapPin className={cn("mt-0.5 size-4 shrink-0", colors.text)} />
                    <span className="font-medium text-foreground/90">Stateline, Nevada · South Lake Tahoe</span>
                  </li>
                </ul>

                <Button asChild size="lg" className="mt-6 w-full">
                  <Link href="/contact">
                    Check Availability <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {activity.guides && activity.guides.length > 0 && (
          <section className="container-px mx-auto max-w-6xl pb-16">
            <Reveal className="max-w-2xl">
              <span className={cn("text-xs font-medium uppercase tracking-[0.2em]", colors.text)}>
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
                        <Award className={cn("size-3.5", colors.text)} /> {g.years} years riding
                      </span>
                    )}
                    {g.level && (
                      <span className="flex items-center gap-1.5">
                        <Mountain className={cn("size-3.5", colors.text)} /> {g.level}
                      </span>
                    )}
                    {g.trail && (
                      <span className="col-span-2 flex items-center gap-1.5">
                        <Route className={cn("size-3.5", colors.text)} /> Favorite: {g.trail}
                      </span>
                    )}
                  </div>
                  {g.described && (
                    <span className={cn("mt-1 text-xs font-medium uppercase tracking-wide", colors.text)}>
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
            <Reveal className="flex items-center gap-3">
              <span className={cn("size-2.5 rounded-full", colors.solid)} aria-hidden />
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
                    eyebrowClassName={categoryColors[r.category].text}
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
