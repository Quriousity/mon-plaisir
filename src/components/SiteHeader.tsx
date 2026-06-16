import Link from "next/link";
import { Search, User, Heart, ShoppingBag } from "lucide-react";

const NAV = [
  { label: "New", href: "#" },
  { label: "Shop", href: "/shop" },
  { label: "Gifts", href: "#" },
  { label: "Home", href: "#" },
  { label: "Stories", href: "#" },
];

const ICONS = [
  { label: "Search", Icon: Search },
  { label: "Account", Icon: User },
  { label: "Wishlist", Icon: Heart },
  { label: "Cart", Icon: ShoppingBag },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="bg-[#b91c1c] py-2 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white">
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

          <div className="absolute right-0 flex items-center gap-4 sm:gap-5">
            {ICONS.map(({ label, Icon }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
            ))}
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
    </header>
  );
}
