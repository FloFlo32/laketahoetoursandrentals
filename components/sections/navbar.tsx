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

const planItems = infoPages.map((p) => ({ href: p.href, label: p.label }));

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<"adventures" | "plan" | null>(null);
  const [openCategory, setOpenCategory] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setOpenCategory(null);
  }, [pathname]);

  const closeAll = () => {
    setOpenMenu(null);
    setOpenCategory(null);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      )}
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
          <span className="hidden font-display text-sm font-semibold leading-tight tracking-tight sm:block">
            Tahoe Tours and Rentals
          </span>
        </Link>

        <div className="hidden items-center lg:flex">
          {/* Adventures — opens a category list, each category flies out its own items */}
          <div className="relative" onMouseEnter={() => setOpenMenu("adventures")}>
            <button
              type="button"
              onClick={() => setOpenMenu((m) => (m === "adventures" ? null : "adventures"))}
              className={cn(
                "flex cursor-pointer items-center gap-1 rounded-md px-2.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground",
                openMenu === "adventures" && "bg-accent text-foreground"
              )}
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
                <div className="grid gap-0.5 rounded-2xl border border-border bg-popover p-2 shadow-xl shadow-primary/5">
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
                          <div className="grid gap-0.5 rounded-2xl border border-border bg-popover p-2 shadow-xl shadow-primary/5">
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
              className={cn(
                "flex cursor-pointer items-center gap-1 rounded-md px-2.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground",
                openMenu === "plan" && "bg-accent text-foreground"
              )}
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
                <div className="grid gap-0.5 rounded-2xl border border-border bg-popover p-2 shadow-xl shadow-primary/5">
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
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link href="/contact">Book Your Adventure</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border/60 bg-background lg:hidden">
          <div className="container-px mx-auto max-w-7xl divide-y divide-border/60 py-2">
            <MobileAdventures />
            <MobileGroup label="Plan Your Visit" items={planItems} />
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
        className="flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold"
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
          "flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm",
          nested ? "font-medium text-foreground/90" : "font-semibold"
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
              className="cursor-pointer rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
