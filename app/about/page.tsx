import type { Metadata } from "next";
import { Users, Waves, Mountain, Award } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { WatercraftCta } from "@/components/sections/watercraft-cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { brand } from "@/brand.config";

const IMG = "/ingested/laketahoetoursandrentals";

export const metadata: Metadata = {
  title: "About",
  description: brand.description,
};

const pillars = [
  {
    icon: Waves,
    title: "Both shores of the lake",
    body: "Tours and rentals on the California and Nevada sides of Lake Tahoe, from Sand Harbor to Cave Rock.",
  },
  {
    icon: Mountain,
    title: "Local guides, real adventures",
    body: "Every tour is led by a local guide, not a script, including Adventure Guide Brian on the water.",
  },
  {
    icon: Award,
    title: "TripAdvisor Certificate of Excellence",
    body: "Recognized by travelers for guided kayaking, hiking, biking, fishing, diving and winter tours.",
  },
  {
    icon: Users,
    title: "Proud partners",
    body: "We work alongside SkiByk, the American SkiBike Association and Golden Gate Rides.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="About Us"
          title="Tahoe Tours and Rentals"
          description={brand.description}
          image={`${IMG}/img-014.webp`}
          imageAlt="Group of guests watching the sunset over Lake Tahoe from a mountain overlook"
        />

        <section className="container-px mx-auto max-w-6xl py-16">
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <RevealItem
                key={p.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <p.icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">{p.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-4xl pb-16">
          <Reveal className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Kayaking, biking, hiking, fishing and more</h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Tahoe Tours And Rentals offers kayaking, biking, hiking, fishing, and more,
              pairing you with local guides for real adventures on both the California and
              Nevada sides of the lake. In winter, the same team runs moonbike, snowshoe,
              ski bike and snowboard mountain tours, plus a full ski and board wax and tune
              service.
            </p>
          </Reveal>
        </section>

        <WatercraftCta />
      </main>
      <Footer />
    </>
  );
}
