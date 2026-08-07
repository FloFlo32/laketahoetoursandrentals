import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { brand } from "@/brand.config";
import { Reveal } from "@/components/magic/reveal";

const IMG = "/ingested/laketahoetoursandrentals";

export function SignMeUp() {
  return (
    <section id="cta" className="container-px mx-auto max-w-7xl py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative min-h-[26rem] sm:min-h-[30rem]">
            <Image
              src={`${IMG}/moonbike-rental.webp`}
              alt="Guests riding electric snow bikes through fresh Tahoe powder"
              fill
              sizes="1200px"
              quality={78}
              className="object-cover object-top"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, color-mix(in oklch, var(--color-foreground) 55%, transparent) 0%, color-mix(in oklch, var(--color-foreground) 78%, transparent) 100%)",
              }}
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-background sm:px-16">
            <span className="rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
              Sign Me Up :)
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
              Ready for real adventure on Lake Tahoe?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-background/85">
              Tell us what you&apos;re after and we&apos;ll pair you with the right guide,
              gear and tour, on either the California or Nevada side of the lake.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-7 text-base font-medium text-primary-foreground shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              >
                Sign Me Up <ArrowRight className="size-4" />
              </Link>
              <a
                href={`mailto:${brand.social.email}`}
                className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border border-background/40 px-7 text-base font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-background/10 active:scale-[0.98]"
              >
                <Mail className="size-4" /> {brand.social.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
