import type { Metadata } from "next";
import { CalendarClock, CloudRain, ShieldCheck, Bike } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { WatercraftCta } from "@/components/sections/watercraft-cta";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { brand } from "@/brand.config";

const IMG = "/ingested/laketahoetoursandrentals";

export const metadata: Metadata = {
  title: "Our Policies",
  description: "Booking, weather, safety and rental policies for Tahoe Tours and Rentals.",
};

const policies = [
  {
    icon: CalendarClock,
    title: "Booking & Cancellation",
    body: "Tours and rentals are booked in advance for specific dates and group sizes. Contact us directly for our current booking and cancellation terms before you reserve.",
  },
  {
    icon: CloudRain,
    title: "Weather & Conditions",
    body: "Lake Tahoe weather can change quickly, especially at elevation. Some tours may be rescheduled for safety in high wind, storms, or unsafe trail/water conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Waivers",
    body: "All guided tours (kayaking, biking, hiking, fishing, diving and winter sports) require a signed waiver and a safety briefing with your guide before departure.",
  },
  {
    icon: Bike,
    title: "Rentals & Equipment",
    body: "Kayak, paddle board, bike, ski and snowboard rentals include the gear listed on that activity's page. Universal roof racks are included with kayak and SUP rentals at no extra cost.",
  },
];

export default function OurPoliciesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Our Policies"
          title="Booking, Safety & Rental Policies"
          description="The essentials before you book. For full details on any policy, contact us directly."
          image={`${IMG}/img-011.webp`}
          imageAlt="A waterfall along a Lake Tahoe trail"
          cta={{ label: "Contact Us", href: "/contact" }}
        />

        <section className="container-px mx-auto max-w-6xl py-16">
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {policies.map((p) => (
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

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Questions about a specific tour or rental? Email{" "}
            <a href={`mailto:${brand.social.email}`} className="text-primary underline-offset-4 hover:underline">
              {brand.social.email}
            </a>{" "}
            before you book.
          </p>
        </section>

        <WatercraftCta />
      </main>
      <Footer />
    </>
  );
}
