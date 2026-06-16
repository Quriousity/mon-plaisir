import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { formatPrice } from "@/lib/products";

export const metadata = { title: "Cart · Mon plaisir" };

export default function CartPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-[1100px] px-5 py-16 lg:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Your bag
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-medium md:text-4xl">Cart</h1>
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
              Coming soon
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">
            {/* Line items — empty state */}
            <div className="flex flex-col items-center justify-center border border-line py-24 text-center">
              <ShoppingBag
                className="h-8 w-8 text-muted"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <p className="mt-5 text-sm text-muted">Your cart is empty.</p>
              <Link
                href="/shop"
                className="mt-7 inline-flex items-center bg-black px-8 py-3 text-sm tracking-wide text-white transition-colors hover:bg-black/80"
              >
                Continue shopping
              </Link>
            </div>

            {/* Order summary */}
            <aside className="h-fit border border-line p-6">
              <h2 className="text-sm font-medium uppercase tracking-wider">
                Summary
              </h2>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted">Subtotal</dt>
                  <dd>{formatPrice(0, "EUR")}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Shipping</dt>
                  <dd className="text-muted">Calculated at checkout</dd>
                </div>
              </dl>
              <div className="mt-5 flex justify-between border-t border-line pt-5 text-sm font-medium">
                <span>Total</span>
                <span>{formatPrice(0, "EUR")}</span>
              </div>
              <button
                type="button"
                disabled
                className="mt-6 w-full cursor-not-allowed bg-[#b91c1c] px-8 py-3 text-sm tracking-wide text-white opacity-50"
              >
                Checkout
              </button>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
