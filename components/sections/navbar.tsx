"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, MapPin, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { navGroups, infoPages } from "@/content/activities";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState<string | null>(null);
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
    setOpenGroup(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      )}
      onMouseLeave={() => setOpenGroup(null)}
    >
      {/* Top utility strip — editorial detail, not the generic centered bar */}
      <div className="hidden border-b border-border/50 bg-primary/5 md:block">
        <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-1.5 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-primary" />
            {brand.contact.address}
          </span>
          <a
            href={`mailto:${brand.social.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Phone className="size-3.5 text-primary" />
            {brand.social.email}
          </a>
        </div>
      </div>

      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/logo.png"
            alt={brand.name}
            width={44}
            height={44}
            className="size-11 object-contain"
          />
          <span className="hidden font-display text-base font-semibold leading-tight tracking-tight sm:block">
            Tahoe Tours
            <br />
            <span className="text-sm font-medium text-muted-foreground">and Rentals</span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navGroups.map((group) => (
            <div
              key={group.category}
              className="relative"
              onMouseEnter={() => setOpenGroup(group.category)}
            >
              <button
                type="button"
                onClick={() => setOpenGroup((g) => (g === group.category ? null : group.category))}
                className={cn(
                  "flex cursor-pointer items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground",
                  openGroup === group.category && "bg-accent text-foreground"
                )}
                aria-expanded={openGroup === group.category}
              >
                {group.label}
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-200",
                    openGroup === group.category && "rotate-180"
                  )}
                />
              </button>

              {openGroup === group.category && (
                <div className="absolute left-0 top-full z-50 w-[22rem] pt-2">
                  <div className="grid gap-1 rounded-2xl border border-border bg-popover p-3 shadow-xl shadow-primary/5">
                    {group.items.map((item) => (
                      <Link
                        key={item.path}
                        href={`/${item.path}`}
                        className="cursor-pointer rounded-lg px-3 py-2.5 text-sm text-foreground/90 transition-colors hover:bg-accent"
                      >
                        {item.navLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="mx-1 h-5 w-px bg-border" />

          {infoPages.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {p.label}
            </Link>
          ))}
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
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border/60 bg-background lg:hidden">
          <div className="container-px mx-auto max-w-7xl divide-y divide-border/60 py-2">
            {navGroups.map((group) => (
              <MobileGroup key={group.category} label={group.label} items={group.items} />
            ))}
            <div className="flex flex-col gap-1 py-3">
              {infoPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent"
                >
                  {p.label}
                </Link>
              ))}
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

function MobileGroup({
  label,
  items,
}: {
  label: string;
  items: { path: string; navLabel: string }[];
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="py-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="flex flex-col gap-0.5 pl-3">
          {items.map((item) => (
            <Link
              key={item.path}
              href={`/${item.path}`}
              className="cursor-pointer rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              {item.navLabel}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
