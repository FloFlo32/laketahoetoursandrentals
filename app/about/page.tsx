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
    color: "text-blue-600 bg-blue-500/10 ring-blue-500/15",
  },
  {
    icon: Mountain,
    title: "Local guides, real adventures",
    body: "Every tour is led by a local guide, not a script, including Adventure Guide Brian on the water.",
    color: "text-emerald-600 bg-emerald-500/10 ring-emerald-500/15",
  },
  {
    icon: Award,
    title: "TripAdvisor Certificate of Excellence",
    body: "Recognized by travelers for guided kayaking, hiking, biking, fishing, diving and winter tours.",
    color: "text-amber-600 bg-amber-500/10 ring-amber-500/15",
  },
  {
    icon: Users,
    title: "Proud partners",
    body: "We work alongside SkiByk, the American SkiBike Association and Golden Gate Rides.",
    color: "text-primary bg-primary/10 ring-primary/15",
  },
];

const team = [
  {
    name: "Casey",
    role: "Tour Specialist / Adventure Guide",
    quote:
      "Casey has been an outdoor enthusiast his whole life. He has a passion for getting people outdoors and living life to the fullest.",
  },
  {
    name: "Randy",
    role: "Shop Manager / Adventure Coach",
    quote: "Randy has always been into the fun having scene in the Lake Tahoe area.",
  },
  {
    name: "Philip",
    role: "Tour Coordinator / Adventure Guide",
    quote:
      "Philip is an avid adventurer. He has been in the scene for many years, and plans to be for many more to come.",
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
          image={`${IMG}/about-mount-tallac.webp`}
          imageAlt="Guides posing with their dog on a snowy Mount Tallac summit overlooking Lake Tahoe"
        />

        <section className="container-px mx-auto max-w-4xl pt-16 text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Our Story
            </span>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-2xl font-semibold leading-snug sm:text-3xl">
              &ldquo;We started with a dream to share our adventures with the world. Our
              goal is to have you experience the area like a local.&rdquo;
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-6xl py-16">
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <RevealItem
                key={p.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <span className={`grid size-11 place-items-center rounded-xl ring-1 ${p.color}`}>
                  <p.icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">{p.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-16">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Meet The Team
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
              The guides behind every tour
            </h2>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3">
            {team.map((t) => (
              <RevealItem
                key={t.name}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-12 place-items-center rounded-full bg-primary/10 font-display text-lg font-semibold text-primary ring-1 ring-primary/15">
                  {t.name.charAt(0)}
                </span>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                  {t.role}
                </span>
                <p className="mt-1 text-sm text-pretty text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
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
