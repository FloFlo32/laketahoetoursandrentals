import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { WatercraftCta } from "@/components/sections/watercraft-cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { activities } from "@/content/activities";

const IMG = "/ingested/laketahoetoursandrentals";

export const metadata: Metadata = {
  title: "Blog",
  description: "Trip notes and trail guides from the Tahoe Tours and Rentals team.",
};

const topics = activities.slice(0, 6);

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Blog"
          title="Trip Notes From the Guides"
          description="New stories are on the way. In the meantime, jump straight into the tour that caught your eye."
          image={`${IMG}/img-009.webp`}
          imageAlt="Two guests watching the sunset over Lake Tahoe"
        />

        <section className="container-px mx-auto max-w-4xl py-16 text-center">
          <Reveal>
            <p className="text-pretty text-muted-foreground">
              We&apos;re moving our trip reports and trail guides over to the new site.
              Check back soon, or explore a tour below while you wait.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-16">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <RevealItem key={t.path}>
                <a
                  href={`/${t.path}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.heroImage}
                    alt={t.navLabel}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[5/4] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{t.navLabel}</h3>
                    <p className="mt-1.5 text-sm text-pretty text-muted-foreground">{t.blurb}</p>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <WatercraftCta />
      </main>
      <Footer />
    </>
  );
}
