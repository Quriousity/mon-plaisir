"use client";

import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  { label: "New", href: "/shop" },
  { label: "Shop", href: "/shop" },
  { label: "Gifts", href: "/shop" },
];

const LINKS = [
  { label: "Account", href: "/account", Icon: User },
  { label: "Wishlist", href: "/wishlist", Icon: Heart },
  { label: "Cart", href: "/cart", Icon: ShoppingBag },
];

export default function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll + Escape while the search modal is open.
  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  // Escape closes the mobile dropdown.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const iconBtn = "text-foreground/80 transition-colors hover:text-foreground";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="hidden bg-[#b91c1c] py-2 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white min-[1100px]:block">
        Complimentary shipping &amp; gift wrapping on every order
      </div>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="relative flex h-16 items-center justify-center">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight md:text-3xl"
          >
            <span className="text-accent">Mon plaisir</span>
          </Link>

          <div className="absolute right-0 flex items-center">
            {/* Desktop: full icon row (≥ 1100px) */}
            <div className="hidden items-center gap-5 min-[1100px]:flex">
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className={iconBtn}
              >
                <Search className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
              {LINKS.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className={iconBtn}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </Link>
              ))}
            </div>

            {/* Mobile: menu button (< 1100px) */}
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className={`min-[1100px]:hidden ${iconBtn}`}
            >
              {menuOpen ? (
                <X className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <nav className="flex items-center justify-center gap-7 pb-3 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile dropdown: full width, height fits its items */}
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[55] cursor-default min-[1100px]:hidden"
          />
          <div className="absolute inset-x-0 top-full z-[60] border-b border-line bg-background shadow-xl min-[1100px]:hidden">
            <div className="mx-auto flex max-w-[1400px] flex-col px-5 lg:px-10">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="flex items-center gap-3 border-b border-line py-4 text-sm transition-colors hover:text-accent"
              >
                <Search className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                Search
              </button>
              {LINKS.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 border-b border-line py-4 text-sm transition-colors last:border-b-0 hover:text-accent"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Search modal — shared by both layouts */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <button
            type="button"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
            className="absolute inset-0 cursor-default bg-black/40 backdrop-blur-sm"
          />
          <div className="relative mt-[16vh] w-full max-w-lg border border-line bg-background p-8 shadow-xl">
            <button
              type="button"
              aria-label="Close"
              onClick={() => setSearchOpen(false)}
              className="absolute right-4 top-4 text-muted transition-colors hover:text-foreground"
            >
              <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
            <div className="flex flex-col items-center py-12 text-center">
              <Search
                className="h-7 w-7 text-muted"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <span className="mt-5 inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
