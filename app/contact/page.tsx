import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { WatercraftCta } from "@/components/sections/watercraft-cta";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { brand } from "@/brand.config";

const IMG = "/ingested/laketahoetoursandrentals";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tahoe Tours and Rentals to book your adventure.",
};

const cards = [
  { icon: Mail, label: "Email", value: brand.social.email, href: `mailto:${brand.social.email}` },
  { icon: MapPin, label: "Visit", value: brand.contact.address, href: "/location" },
  { icon: InstagramIcon, label: "Instagram", value: "@skibyk_skibikes", href: brand.social.instagram },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="Book Your Adventure"
          description="Tell us what you're after and we'll pair you with the right guide, gear and tour."
          image={`${IMG}/img-020.webp`}
          imageAlt="Guides smiling together after a Lake Tahoe mountain bike tour"
        />

        <section className="container-px mx-auto max-w-6xl py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
            <div className="flex flex-col gap-4">
              {cards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                    <c.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="block text-sm font-medium text-pretty">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <ContactForm />
          </div>
        </section>

        <WatercraftCta />
      </main>
      <Footer />
    </>
  );
}
