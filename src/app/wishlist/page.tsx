import Link from "next/link";
import { Heart } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = { title: "Wishlist · Mon plaisir" };

export default function WishlistPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-[1100px] px-5 py-16 lg:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Saved</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-medium md:text-4xl">Wishlist</h1>
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
              Coming soon
            </span>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center border border-line py-24 text-center">
            <Heart
              className="h-8 w-8 text-muted"
              strokeWidth={1.25}
              aria-hidden="true"
            />
            <p className="mt-5 text-sm text-muted">Your wishlist is empty.</p>
            <p className="mt-1 max-w-xs text-sm text-muted">
              Tap the heart on any piece to keep it here for later.
            </p>
            <Link
              href="/shop"
              className="mt-7 inline-flex items-center bg-black px-8 py-3 text-sm tracking-wide text-white transition-colors hover:bg-black/80"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
