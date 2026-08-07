import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { InstagramIcon } from "@/components/icons";
import { navGroups, infoPages, partners } from "@/content/activities";

/**
 * Deliberately dark footer for contrast against the light site, using the
 * same on-brand navy the design tokens already define for dark surfaces
 * (not a global dark-mode toggle, just this one section).
 */
export function Footer() {
  return (
    <footer
      className="mt-auto text-white"
      style={{ backgroundColor: "oklch(0.16 0.02 var(--brand-hue))" }}
    >
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2.7fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt={brand.name} width={48} height={48} className="size-12 object-contain" />
              <span className="font-display text-lg font-semibold leading-tight text-white">
                Tahoe Tours
                <br />
                <span className="text-sm font-medium text-white/60">and Rentals</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm text-pretty text-white/65">
              {brand.description}
            </p>
            <div className="mt-5 flex flex-col gap-2.5 text-sm text-white/70">
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {brand.contact.address}
              </span>
              <a href={`mailto:${brand.social.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="size-4 shrink-0 text-primary" />
                {brand.social.email}
              </a>
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <InstagramIcon className="size-4 shrink-0 text-primary" />
                @skibyk_skibikes
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {navGroups.map((group) => (
              <div key={group.category}>
                <h4 className="font-display text-sm font-semibold text-white">{group.label}</h4>
                <ul className="mt-4 space-y-2.5">
                  {group.items.slice(0, 8).map((item) => (
                    <li key={item.path}>
                      <Link
                        href={`/${item.path}`}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {item.navLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-display text-sm font-semibold text-white">Plan Your Visit</h4>
              <ul className="mt-4 space-y-2.5">
                {infoPages.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-sm text-white/60 transition-colors hover:text-white">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Proud partners
          </span>
          {partners.map((p) => (
            <span key={p.name} className="grid h-10 place-items-center rounded-md bg-white px-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.name} loading="lazy" decoding="async" className="h-6 w-auto object-contain" />
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-px mx-auto max-w-7xl text-sm text-white/50">
          © 2026 {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
