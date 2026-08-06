import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";

export function SignMeUp() {
  return (
    <section id="cta" className="container-px mx-auto max-w-7xl py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center sm:px-16">
          <AuroraBackground />
          <GridPattern variant="dots" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Sign Me Up :)
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
            Ready for real adventure on Lake Tahoe?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Tell us what you&apos;re after and we&apos;ll pair you with the right guide,
            gear and tour, on either the California or Nevada side of the lake.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Sign Me Up <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${brand.social.email}`}>
                <Mail className="size-4" /> {brand.social.email}
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
