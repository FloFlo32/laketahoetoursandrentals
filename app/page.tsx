import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ActivityShowcase } from "@/components/sections/activity-showcase";
import { Reviews } from "@/components/sections/reviews";
import { Partners } from "@/components/sections/partners";
import { SignMeUp } from "@/components/sections/sign-me-up";
import { WatercraftCta } from "@/components/sections/watercraft-cta";
import { Footer } from "@/components/sections/footer";
import { activityByPath } from "@/content/activities";

const summerPaths = [
  "kayak-/-sup-tours",
  "sand-harbor-kayak-sup-tour",
  "hiking-tours-lake-tahoe",
  "mountain-biking",
  "scuba-diving-tours",
  "fly-fishing-tours",
  "emerald-bay-tour",
  "kayak-/-sup",
];

const winterPaths = [
  "moonbikes",
  "snowshoe-tours-rentals",
  "ski-bike-rentals-tours-lessons",
  "snowboard-tours",
];

export default function Home() {
  const summer = summerPaths.map((p) => activityByPath.get(p)).filter(Boolean) as NonNullable<
    ReturnType<typeof activityByPath.get>
  >[];
  const winter = winterPaths.map((p) => activityByPath.get(p)).filter(Boolean) as NonNullable<
    ReturnType<typeof activityByPath.get>
  >[];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ActivityShowcase
          id="summer"
          eyebrow="Lake Tahoe's Best Summer Activities"
          title="Lake Tahoe Summer Activities"
          description="Kayaking, hiking, biking, scuba diving and fly fishing, guided by locals on both shores of the lake."
          items={summer}
        />
        <ActivityShowcase
          id="winter"
          eyebrow="Lake Tahoe's Best Winter Activities"
          title="Lake Tahoe Winter Activities"
          description="Moonbikes, snowshoes, ski bikes and snowboard mountain tours through Tahoe's backcountry."
          items={winter}
        />
        <Reviews />
        <Partners />
        <SignMeUp />
        <WatercraftCta />
      </main>
      <Footer />
    </>
  );
}
