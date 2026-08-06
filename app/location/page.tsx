import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Map } from "@/components/sections/map";
import { WatercraftCta } from "@/components/sections/watercraft-cta";

const IMG = "/ingested/laketahoetoursandrentals";

export const metadata: Metadata = {
  title: "Location",
  description: "Find Tahoe Tours and Rentals at 152 Highway 50, Stateline, Nevada.",
};

export default function LocationPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Location"
          title="Find Us at Stateline, Nevada"
          description="Right on the California / Nevada state line, minutes from South Lake Tahoe."
          image={`${IMG}/img-016.webp`}
          imageAlt="Guests riding bikes along a Lake Tahoe boardwalk trail"
        />
        <Map />
        <WatercraftCta />
      </main>
      <Footer />
    </>
  );
}
