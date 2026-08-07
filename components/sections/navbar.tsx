"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { navGroups, infoPages, categoryColors } from "@/content/activities";
import { cn } from "@/lib/utils";

const categories = navGroups.map((g) => ({
  key: g.category,
  label: g.label,
  dot: categoryColors[g.category].solid,
  items: g.items.map((i) => ({ href: `/${i.path}`, label: i.navLabel })),
}));

// Contact + Blog are promoted to the top-level bar, so Plan Your Visit keeps the rest.
const planItems = infoPages.filter((p) => p.href !== "/contact" && p.href !== "/blog");

const navBg = "oklch(0.16 0.02 var(--brand-hue))";

export function Navbar() {
  const [openMenu, setOpenMenu] = React.useState<"adventures" | "plan" | null>(null);
  const [openCategory, setOpenCategory] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setOpenCategory(null);
  }, [pathname]);

  const closeAll = () => {
    setOpenMenu(null);
    setOpenCategory(null);
  };

  const linkClass =
    "flex cursor-pointer items-center gap-1 rounded-md px-2.5 py-1.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white";

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10 shadow-lg shadow-black/10"
      style={{ backgroundColor: navBg }}
      onMouseLeave={closeAll}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo.png"
            alt={brand.name}
            width={34}
            height={34}
            className="size-9 object-contain"
          />
          <span className="hidden font-display text-sm font-semibold leading-tight tracking-tight text-white sm:block">
            Tahoe Tours and Rentals
          </span>
        </Link>

        <div className="hidden items-center lg:flex">
          {/* Adventures — opens a category list, each category flies out its own items */}
          <div className="relative" onMouseEnter={() => setOpenMenu("adventures")}>
            <button
              type="button"
              onClick={() => setOpenMenu((m) => (m === "adventures" ? null : "adventures"))}
              className={cn(linkClass, openMenu === "adventures" && "bg-white/10 text-white")}
              aria-expanded={openMenu === "adventures"}
            >
              Adventures
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform duration-200",
                  openMenu === "adventures" && "rotate-180"
                )}
              />
            </button>

            {openMenu === "adventures" && (
              <div className="absolute left-0 top-full z-50 w-60 pt-2">
                <div className="grid gap-0.5 rounded-2xl border border-border bg-popover p-2 shadow-xl shadow-black/20">
                  {categories.map((cat) => (
                    <div
                      key={cat.key}
                      className="relative"
                      onMouseEnter={() => setOpenCategory(cat.key)}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenCategory((c) => (c === cat.key ? null : cat.key))
                        }
                        className={cn(
                          "flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm text-foreground/90 transition-colors hover:bg-accent",
                          openCategory === cat.key && "bg-accent"
                        )}
                        aria-expanded={openCategory === cat.key}
                      >
                        <span className="flex items-center gap-2">
                          <span className={cn("size-1.5 rounded-full", cat.dot)} aria-hidden />
                          {cat.label}
                        </span>
                        <ChevronRight className="size-3.5 text-muted-foreground" />
                      </button>

                      {openCategory === cat.key && (
                        <div className="absolute left-full top-0 z-50 ml-2 w-64">
                          <div className="grid gap-0.5 rounded-2xl border border-border bg-popover p-2 shadow-xl shadow-black/20">
                            {cat.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="cursor-pointer rounded-lg px-3 py-2 text-sm text-foreground/90 transition-colors hover:bg-accent"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Plan Your Visit — flat list, no third level needed */}
          <div className="relative" onMouseEnter={() => setOpenMenu("plan")}>
            <button
              type="button"
              onClick={() => setOpenMenu((m) => (m === "plan" ? null : "plan"))}
              className={cn(linkClass, openMenu === "plan" && "bg-white/10 text-white")}
              aria-expanded={openMenu === "plan"}
            >
              Plan Your Visit
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform duration-200",
                  openMenu === "plan" && "rotate-180"
                )}
              />
            </button>

            {openMenu === "plan" && (
              <div className="absolute left-0 top-full z-50 w-56 pt-2">
                <div className="grid gap-0.5 rounded-2xl border border-border bg-popover p-2 shadow-xl shadow-black/20">
                  {planItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="cursor-pointer rounded-lg px-3 py-2 text-sm text-foreground/90 transition-colors hover:bg-accent"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className={linkClass}>
            Blog
          </Link>
          <Link href="/contact" className={linkClass}>
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link href="/contact">Book Your Adventure</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-white/20 text-white hover:bg-white/10 hover:text-white lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 lg:hidden" style={{ backgroundColor: navBg }}>
          <div className="container-px mx-auto max-w-7xl divide-y divide-white/10 py-2">
            <MobileAdventures />
            <MobileGroup label="Plan Your Visit" items={planItems} />
            <div className="py-2">
              <Link
                href="/blog"
                className="flex cursor-pointer items-center rounded-md px-3 py-2.5 text-sm font-semibold text-white"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="flex cursor-pointer items-center rounded-md px-3 py-2.5 text-sm font-semibold text-white"
              >
                Contact
              </Link>
            </div>
            <div className="py-4">
              <Button asChild className="w-full">
                <Link href="/contact">Book Your Adventure</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/** Mobile: "Adventures" accordion containing one nested accordion per category. */
function MobileAdventures() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="py-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold text-white"
        aria-expanded={open}
      >
        Adventures
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="flex flex-col pl-2">
          {categories.map((cat) => (
            <MobileGroup key={cat.key} label={cat.label} dot={cat.dot} items={cat.items} nested />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileGroup({
  label,
  dot,
  items,
  nested,
}: {
  label: string;
  dot?: string | null;
  items: { href: string; label: string }[];
  nested?: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={nested ? "py-1" : "py-2"}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm text-white",
          nested ? "font-medium text-white/85" : "font-semibold"
        )}
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          {dot && <span className={cn("size-1.5 rounded-full", dot)} aria-hidden />}
          {label}
        </span>
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="flex flex-col gap-0.5 pl-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="cursor-pointer rounded-md px-3 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
