/**
 * Every inner page from the source site (laketahoetoursandrentals.com), scraped
 * into ideas/laketahoetoursandrentals/brand.json + content.md, PLUS a deeper
 * per-page image/content scan of the live site (each tour page was fetched
 * individually). `path` matches the original URL path (minus the leading
 * slash) so the catch-all route at app/[...slug]/page.tsx serves the exact
 * same site map. Every heroImage below is a distinct file — none is reused
 * across two different pages, except emerald-bay-tour, which deliberately
 * uses the real Emerald Bay/Eagle Falls photo (no people in frame) because
 * it's a literal, unique match rather than a generic stand-in.
 */

const IMG = "/ingested/laketahoetoursandrentals";

export type Guide = {
  name: string;
  bio: string;
  years?: string;
  level?: string;
  trail?: string;
  described?: string;
};

export type Activity = {
  path: string;
  navLabel: string;
  title: string;
  category: "Water" | "Land" | "Winter" | "Tours" | "Services";
  blurb: string;
  description: string[];
  highlights?: string[];
  heroImage: string;
  gallery?: string[];
  guides?: Guide[];
  note?: string;
};

export const activities: Activity[] = [
  {
    path: "kayak-/-sup-tours",
    navLabel: "Kayak / SUP Tours",
    title: "Lake Tahoe Kayak Tours & Paddle Board Tours",
    category: "Water",
    blurb: "Best Kayak / Stand-up PaddleBoard Tours | Lake Tahoe",
    description: [
      "Skip the crowds and join us on the most beautiful water in the world — Tahoe's most famous and best beaches. Our kayak and paddle board tours at Sand Harbor and Cave Rock are the highlight of any Lake Tahoe trip.",
    ],
    highlights: ["Paddlesport Tours"],
    heroImage: `${IMG}/img-030.webp`,
  },
  {
    path: "cave-rock-kayak-/-sup-tour",
    navLabel: "Cave Rock Kayak / SUP Tour",
    title: "Cave Rock Kayak Tour & Paddle Board Adventure Lake Tahoe",
    category: "Water",
    blurb: "Glide through Tahoe's crystal-clear waters to the legendary Cave Rock.",
    description: [
      "Glide through Tahoe's crystal-clear waters while uncovering the fascinating history and stunning beauty of the legendary Cave Rock.",
    ],
    highlights: ["Kayak & Paddle Board Tours at Cave Rock"],
    heroImage: `${IMG}/img-034.webp`,
    note: "Unavailable for the 2026 season.",
  },
  {
    path: "sand-harbor-kayak-sup-tour",
    navLabel: "Sand Harbor Kayak / SUP Tour",
    title: "Sand Harbor Kayak Tour & Paddle Board Adventure Lake Tahoe",
    category: "Water",
    blurb: "The only Sand Harbor tour with transportation from South Lake Tahoe.",
    description: [
      "The only Sand Harbor tour with transportation from South Lake Tahoe. We shuttle you directly to Tahoe's most iconic beach in our bus. Paddle crystal clear waters and out to Bonsai Rock.",
    ],
    highlights: ["Kayak & Paddle board Tours at Sand Harbor"],
    heroImage: `${IMG}/img-018.webp`,
  },
  {
    path: "kayak-/-sup",
    navLabel: "Kayak / SUP Rentals",
    title: "Lake Tahoe Kayak Rentals & Paddle Board Rentals",
    category: "Water",
    blurb: "Grab-N-go Kayak and stand up paddle board rentals.",
    description: [
      "Grab-N-go Kayak and stand up paddle board rentals. Easy-mount universal roof racks included.",
      "\"Grab 'N Go\" Kayak & SUP rental in Lake Tahoe. Universal kayak racks included at no extra cost. Paddle where you want. Delivery also available.",
    ],
    highlights: ["Kayak & Paddle board Rentals in Lake Tahoe"],
    heroImage: `${IMG}/img-017.webp`,
  },
  {
    path: "hiking-tours-lake-tahoe",
    navLabel: "Hiking",
    title: "Lake Tahoe Guided Hiking Tours & Scenic Trails",
    category: "Land",
    blurb: "Join us on the best hiking trails in Lake Tahoe.",
    description: [
      "Join us on the best hiking trails in Lake Tahoe. Experience the best viewpoints and views in Tahoe.",
    ],
    highlights: ["Hiking Tours", "Tour Info", "What To Bring"],
    heroImage: `${IMG}/img-013.webp`,
  },
  {
    path: "mountain-biking",
    navLabel: "Biking",
    title: "Lake Tahoe Mountain Bike Tours & Bike Rentals",
    category: "Land",
    blurb: "Ride the best paved & unpaved bike trails in Lake Tahoe.",
    description: [
      "Ride the best paved & unpaved bike trails in Lake Tahoe. Choose guided or self guided bike tours.",
      "Explore the best mountain bike trails in Lake Tahoe on our electric mountain bikes, or chose a road bike; great for cruising bike paths and accessing some of the best views and beaches on our tours.",
      "Bring your own MTB, or rent a bike separately here: Roll Tahoe or Shoreline. (For standard bikes, you can choose when booking.)",
    ],
    highlights: ["Standard Bikes", "Mountain Bike Tours", "Mountain Bike Tours & Lessons for Beginners to Advance"],
    heroImage: `${IMG}/img-020.webp`,
    guides: [
      {
        name: "Casey",
        bio: "Casey has been an outdoor enthusiast his entire life. Casey is very detail-focused when teaching others, and can accommodate all skill levels.",
        years: "22",
        level: "Expert",
        trail: "Flume Trail",
        described: "Charismatic and optimistic",
      },
      {
        name: "Robyn",
        bio: "Robyn started racing cross country, cyclocross, and downhill at a young age. She is now a national champion and earned her pro license.",
        years: "20",
        level: "Pro",
        trail: "Mr. Toads Wild Ride",
        described: "Energetic",
      },
      {
        name: "Jo",
        bio: "Jo has been a mountain bike coach for Woodward Tahoe and other camps, while working in the outdoor education and recreation field since graduating.",
        years: "6",
        level: "Expert",
        trail: "Kingsbury Stinger",
        described: "Joyful",
      },
    ],
  },
  {
    path: "just-the-tip",
    navLabel: "Downhill Thrill (MTB)",
    title: "Mountain Bike Tours | Lake Tahoe Tours & Rentals",
    category: "Land",
    blurb: "The best downhill mountain bike trail. Advance to intermediate.",
    description: [
      "Downhill Thrill: the best downhill mountain bike trail in Lake Tahoe. Advance to intermediate riders.",
    ],
    highlights: ["Highlights"],
    heroImage: `${IMG}/img-028.webp`,
  },
  {
    path: "the-whole-shebang",
    navLabel: "The Whole Shebang (MTB)",
    title: "Most Scenic Mountain Bike Tours | South Lake Tahoe",
    category: "Land",
    blurb: "\"The Best Mountain Bike Trail in Lake Tahoe.\"",
    description: [
      "The Whole Shebang: widely considered the best mountain bike trail in Lake Tahoe, strung together for maximum scenery.",
    ],
    highlights: ["Highlights", "What To Bring"],
    heroImage: `${IMG}/img-021.webp`,
  },
  {
    path: "out-of-the-gate",
    navLabel: "Out of the Gate (MTB)",
    title: "Beginner Mountain Bike Tours | South Lake Tahoe",
    category: "Land",
    blurb: "Learn the basics with views to last a lifetime.",
    description: [
      "Out of the Gate: learn the basics with views to last a lifetime. Built for first-time mountain bikers.",
    ],
    highlights: ["Tour Info", "What To Bring", "The Trails"],
    heroImage: `${IMG}/img-022.webp`,
  },
  {
    path: "bike-tours",
    navLabel: "Hike 'N Bike",
    title: "Tahoe Guided Bike Tours & Electric Bike Tours",
    category: "Land",
    blurb: "Guided and electric bike tours around Lake Tahoe.",
    description: [
      "Ride the best paved & unpaved bike trails in Lake Tahoe. Choose guided or self guided bike tours.",
    ],
    highlights: ["Bike Tours", "Lake Tahoe"],
    heroImage: `${IMG}/img-016.webp`,
  },
  {
    path: "scuba-diving-tours",
    navLabel: "Scuba Diving Tours",
    title: "Lake Tahoe Scuba Diving Tours & Underwater Adventures",
    category: "Water",
    blurb: "Lake Tahoe guided scuba tours and classes.",
    description: [
      "Lake Tahoe guided scuba tours and classes. Dive crystal clear water in this unique alpine setting.",
    ],
    highlights: ["Dive / Scuba Tour Info", "Dive Certifications"],
    heroImage: `${IMG}/img-029.webp`,
  },
  {
    path: "kayak-/fly-fishing-tours-/-classes",
    navLabel: "Fly Fishing",
    title: "Lake Tahoe Fly Fishing Guides & Casting Lessons",
    category: "Water",
    blurb: "Learn from the legend himself, Adventure Guide Brian.",
    description: [
      "Learn from the legend himself, Adventure Guide Brian. Fish the best private fishing access in Lake Tahoe.",
    ],
    highlights: ["Fly Fishing Lake Tahoe"],
    heroImage: `${IMG}/img-035.webp`,
  },
  {
    path: "fly-fishing-tours",
    navLabel: "Fly Fishing Tours",
    title: "Lake Tahoe Guided Fly Fishing Trips | Fishing Tours in South Lake Tahoe",
    category: "Water",
    blurb: "Guided fly fishing trips with private access.",
    description: [
      "Learn from the legend himself, Adventure Guide Brian. Fish the best private fishing access in Lake Tahoe.",
    ],
    highlights: ["Meet Your Guide", "Will we catch fish?", "Do we need to bring anything?", "Can we keep the fish?"],
    heroImage: `${IMG}/fly-fishing-classes-photo.webp`,
  },
  {
    path: "fly-fishing-classes",
    navLabel: "Fly Fishing Classes",
    title: "Lake Tahoe Fly Fishing Classes & Casting Lessons",
    category: "Water",
    blurb: "Casting lessons and fly fishing fundamentals on the water.",
    description: [
      "New to fly fishing? Learn casting fundamentals on the water with the same guides behind our fly fishing tours.",
    ],
    heroImage: `${IMG}/img-009.webp`,
  },
  {
    path: "disc-golf-test-1",
    navLabel: "Disc Golf",
    title: "Lake Tahoe Disc Golf Lessons",
    category: "Land",
    blurb: "Experience what's known as \"the most beautiful course in America.\"",
    description: [
      "Experience what's known as \"the most beautiful course in America.\" Learn how to disc golf with a coach.",
    ],
    heroImage: `${IMG}/img-023.webp`,
  },
  {
    path: "sightseeing-tours0cdc8de3",
    navLabel: "Sightseeing Tours",
    title: "Lake Tahoe Sightseeing Tours",
    category: "Tours",
    blurb: "Let us guide you to the best destinations in Lake Tahoe.",
    description: [
      "Let us guide you to the best destinations in Lake Tahoe. Experience the best drives in Lake Tahoe.",
    ],
    heroImage: `${IMG}/img-014.webp`,
  },
  {
    path: "team-building-activities",
    navLabel: "Team Building Events",
    title: "Lake Tahoe Team Building Events",
    category: "Tours",
    blurb: "Team building, corporate gatherings, & group events.",
    description: [
      "Allow us to host your event! Team building, corporate gatherings, & group events. Let's grow your team spirit!",
    ],
    heroImage: `${IMG}/img-024.webp`,
  },
  {
    path: "sightseeing-tours",
    navLabel: "Sightseeing Tours",
    title: "Lake Tahoe Sightseeing & Shuttle Tours",
    category: "Tours",
    blurb: "Personal driver to shuttle your group.",
    description: [
      "Let us guide you to the best destinations in Lake Tahoe. Experience the best drives in Lake Tahoe.",
      "Personal driver to shuttle your group. Weddings, bachelor / bachelorette parties, & corporate events!",
    ],
    heroImage: `${IMG}/virginia-city-2.webp`,
  },
  {
    path: "lake-loop-tour",
    navLabel: "Lake Loop Tour",
    title: "Lake Tahoe Lake Loop Tour",
    category: "Tours",
    blurb: "The best drives all the way around Lake Tahoe.",
    description: [
      "Let us guide you to the best destinations in Lake Tahoe. Experience the best drives in Lake Tahoe, all the way around the shoreline.",
    ],
    heroImage: `${IMG}/img-032.webp`,
  },
  {
    path: "virginia-city-tour",
    navLabel: "Virginia City Tour",
    title: "Virginia City Tour from Lake Tahoe",
    category: "Tours",
    blurb: "The best drives to historic Virginia City, Nevada.",
    description: [
      "Let us guide you to the best destinations near Lake Tahoe. Experience the best drives, including the historic streets of Virginia City, Nevada.",
    ],
    heroImage: `${IMG}/virginia-city.webp`,
  },
  {
    path: "emerald-bay-tour",
    navLabel: "Emerald Bay Tour",
    title: "Emerald Bay Tour, Lake Tahoe",
    category: "Tours",
    blurb: "The best drives to Tahoe's most photographed bay.",
    description: [
      "Let us guide you to the best destinations in Lake Tahoe. Experience the best drives in Lake Tahoe, including the turquoise waters of Emerald Bay.",
    ],
    heroImage: `${IMG}/emerald-bay.webp`,
  },
  {
    path: "moonbikes",
    navLabel: "Electric Snow Bike / Snowmobile",
    title: "Lake Tahoe Moonbike Tours (Electric Snow Bike / Snowmobile)",
    category: "Winter",
    blurb: "A fun way to experience Tahoe's backcountry for all skill sets.",
    description: [
      "Moonbiking is a fun way to experience Tahoe's backcountry for all skill sets: electric snow bike / snowmobile touring.",
    ],
    heroImage: `${IMG}/moonbike-rental.webp`,
  },
  {
    path: "snowshoe-tours-rentals",
    navLabel: "Snowshoes",
    title: "Lake Tahoe Snowshoe Tours & Rentals",
    category: "Winter",
    blurb: "A laid back way to experience the Tahoe backcountry.",
    description: [
      "Snowshoeing in Lake Tahoe is a must for those looking for a laid back experience in the Tahoe backcountry.",
    ],
    heroImage: `${IMG}/skibike-guide4.webp`,
  },
  {
    path: "sightseeing-tours7d5663eb",
    navLabel: "Sightseeing Tours",
    title: "Lake Tahoe Sightseeing Tours",
    category: "Tours",
    blurb: "Let us guide you to the best destinations in Lake Tahoe.",
    description: [
      "Let us guide you to the best destinations in Lake Tahoe. Experience the best drives in Lake Tahoe.",
    ],
    heroImage: `${IMG}/img-033.webp`,
  },
  {
    path: "ski-bike-rentals-tours-lessons",
    navLabel: "Ski Bikes",
    title: "Lake Tahoe Ski Bike Rentals, Tours & Lessons",
    category: "Winter",
    blurb: "SkiBiking is the newest trend: mountain biking with skis.",
    description: [
      "SkiBiking is the newest trend. Riding a ski bike is like mountain biking with skis, a perfect alternative to skiing.",
      "Skibyk Ski Bikes are the leader in the ski bike industry.",
    ],
    heroImage: `${IMG}/skibike-casey.webp`,
  },
  {
    path: "snowboard-tours",
    navLabel: "Ski & Board Mountain Tours",
    title: "Lake Tahoe Ski & Snowboard Mountain Tours",
    category: "Winter",
    blurb: "The best skiing alternative: skateboarding with a ski, no wheels.",
    description: [
      "Experience the best skiing alternative. Imagine skateboarding with a ski, no wheels.",
    ],
    heroImage: `${IMG}/heavenly-snowboard.webp`,
  },
  {
    path: "additional-services",
    navLabel: "Additional Services",
    title: "Additional Services | Lake Tahoe Tours & Rentals",
    category: "Services",
    blurb: "Full wax & tune service, plus event hosting.",
    description: [
      "We offer a full wax & tune service from hot wax and base grind, to core shots. Pick-up & drop-off available.",
      "Allow us to host your event! From team building to corporate gatherings, we will help your team grow.",
    ],
    heroImage: `${IMG}/skibike-randy.webp`,
  },
];

export const activityByPath = new Map(activities.map((a) => [a.path, a]));

export const activityCategories = ["Water", "Land", "Winter", "Tours", "Services"] as const;

export const categoryLabels: Record<Activity["category"], string> = {
  Water: "Water Adventures",
  Land: "Land Adventures",
  Winter: "Winter Adventures",
  Tours: "Tours & Events",
  Services: "Services",
};

/**
 * Category accent colors, pulled from the logo itself: the lake (blue), the
 * pines (green), the snowcap (icy cyan), plus one warm accent for tours so
 * the palette isn't entirely cool. Primary teal stays reserved for actions.
 */
export const categoryColors: Record<
  Activity["category"],
  { text: string; bg: string; ring: string; solid: string; border: string; badge: string }
> = {
  Water: {
    text: "text-blue-600",
    bg: "bg-blue-500/10",
    ring: "ring-blue-500/15",
    solid: "bg-blue-500",
    border: "border-blue-500/20",
    badge: "border-blue-500/20 bg-blue-500/10 text-blue-600",
  },
  Land: {
    text: "text-emerald-600",
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/15",
    solid: "bg-emerald-500",
    border: "border-emerald-500/20",
    badge: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600",
  },
  Winter: {
    text: "text-cyan-600",
    bg: "bg-cyan-500/10",
    ring: "ring-cyan-500/15",
    solid: "bg-cyan-500",
    border: "border-cyan-500/20",
    badge: "border-cyan-500/20 bg-cyan-500/10 text-cyan-600",
  },
  Tours: {
    text: "text-amber-600",
    bg: "bg-amber-500/10",
    ring: "ring-amber-500/15",
    solid: "bg-amber-500",
    border: "border-amber-500/20",
    badge: "border-amber-500/20 bg-amber-500/10 text-amber-600",
  },
  Services: {
    text: "text-primary",
    bg: "bg-primary/10",
    ring: "ring-primary/15",
    solid: "bg-primary",
    border: "border-primary/20",
    badge: "border-primary/20 bg-primary/5 text-primary",
  },
};

/** Grouped for the mega-menu + footer, in scrape order within each group. */
export const navGroups = activityCategories.map((category) => ({
  category,
  label: categoryLabels[category],
  items: activities.filter((a) => a.category === category),
}));

export const infoPages = [
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/our-policies", label: "Our Policies" },
];

export const partners = [
  { name: "TripAdvisor Certificate of Excellence", src: `${IMG}/img-001.webp` },
  { name: "SkiByk", src: `${IMG}/img-004.webp` },
  { name: "American SkiBike Association", src: `${IMG}/img-005.webp` },
  { name: "Golden Gate Rides", src: `${IMG}/img-006.webp` },
];
