import Image from "next/image";
import Link from "next/link";
import { Heart, Lock, Mailbox, CreditCard, Phone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Slideshow from "@/components/Slideshow";
import VideoReel from "@/components/VideoReel";
import { formatPrice } from "@/lib/products";

const SERVICES = [
  {
    Icon: Lock,
    title: "Secure payment on line",
    sub: "Visa, Mastercard, Paypal, Amex.",
  },
  {
    Icon: Mailbox,
    title: "Ships within 48h within France",
    sub: "International delivery",
  },
  {
    Icon: CreditCard,
    title: "Payment in 4x free of charge",
    sub: "With Alma",
  },
  {
    Icon: Phone,
    title: "Customer service",
    sub: "+33 (0)1 42 77 73 58 ou par mail",
  },
];

const CLIPS = Array.from({ length: 4 }, (_, i) => `/videos/clip-${i + 1}.mp4`);

const SLIDES = [
  "/images/product-1.jpg",
  "/images/product-2.jpg",
  "/images/product-3.jpg",
  "/images/product-4.jpg",
];

const EDIT = [
  {
    image: "/images/edit-1.jpg",
    category: "Outerwear",
    title: "Wool Overcoat — Camel",
    price: 320,
  },
  {
    image: "/images/edit-2.jpg",
    category: "Denim",
    title: "Relaxed Jean — Indigo",
    price: 95,
    compareAt: 130,
  },
  {
    image: "/images/edit-3.jpg",
    category: "Shirts",
    title: "Oxford Shirt — White",
    price: 78,
  },
  {
    image: "/images/edit-4.jpg",
    category: "Knitwear",
    title: "Cable Cardigan — Grey",
    price: 145,
  },
];

const EDIT_TWO = [
  {
    image: "/images/edit2-1.jpg",
    category: "Footwear",
    title: "Suede Boot — Tan",
    price: 240,
  },
  {
    image: "/images/edit2-2.jpg",
    category: "Accessories",
    title: "Leather Belt — Brown",
    price: 58,
  },
  {
    image: "/images/edit2-3.jpg",
    category: "Trousers",
    title: "Pleated Trouser — Stone",
    price: 110,
    compareAt: 150,
  },
  {
    image: "/images/edit2-4.jpg",
    category: "Bags",
    title: "Weekend Holdall — Olive",
    price: 285,
  },
];

const FEATURED = [
  {
    image: "/images/product-1.jpg",
    category: "Bags",
    title: "Tote Bag en Canvas — Rose",
    price: 35,
    compareAt: 49,
  },
  {
    image: "/images/product-2.jpg",
    category: "Knitwear",
    title: "Merino Crewneck — Écru",
    price: 120,
  },
  {
    image: "/images/product-3.jpg",
    category: "Accessories",
    title: "Wool Scarf — Olive",
    price: 65,
  },
  {
    image: "/images/product-4.jpg",
    category: "Shoes",
    title: "Leather Loafer — Navy",
    price: 210,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white">
            <h1 className="max-w-3xl text-4xl font-medium leading-tight md:text-6xl">
              A study of the everyday object.
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/80 md:text-base">
              A Next.js layout reference — objects chosen for how they live with
              you, every day.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex items-center bg-[#b91c1c] px-8 py-3 text-sm tracking-wide text-white transition-colors hover:bg-[#991b1b]"
            >
              Shop the collection
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-xl font-medium md:text-2xl">New arrivals</h2>
            <Link
              href="/shop"
              className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4 md:gap-x-10">
            {FEATURED.map((p) => (
              <Link key={p.title} href="/shop" className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f4f1ec]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.compareAt && (
                    <span className="absolute left-3 top-3 bg-[#b91c1c] px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                      Sale
                    </span>
                  )}
                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-white drop-shadow transition-colors hover:text-[#b91c1c]"
                  >
                    <Heart className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </div>
                <p className="mt-3 text-xs uppercase tracking-wider text-muted">
                  {p.category}
                </p>
                <h3 className="mt-1 text-sm">{p.title}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <span
                    className={p.compareAt ? "text-[#b91c1c]" : "text-foreground"}
                  >
                    {formatPrice(p.price, "EUR")}
                  </span>
                  {p.compareAt && (
                    <span className="text-muted line-through">
                      {formatPrice(p.compareAt, "EUR")}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <Slideshow images={SLIDES} intervalMs={1000} />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              The craft
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight md:text-5xl">
              Made slowly, worn for years.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
              Each piece is cut and finished in small batches, so no two are
              exactly alike. We choose materials that age well and shapes that
              stay with you — the opposite of disposable.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex items-center bg-black px-8 py-3 text-sm tracking-wide text-white transition-colors hover:bg-black/80"
            >
              Discover
            </Link>
          </div>
        </section>

        <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden">
          <Image
            src="/images/feature.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-8 text-white md:p-14">
            <h2 className="max-w-xl text-3xl font-medium leading-tight md:text-5xl">
              The autumn edit.
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/80 md:text-base">
              Textures and tones made for cooler days — chosen to layer and last.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center bg-[#b91c1c] px-8 py-3 text-sm tracking-wide text-white transition-colors hover:bg-[#991b1b]"
            >
              Discover
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-xl font-medium md:text-2xl">The edit</h2>
            <Link
              href="/shop"
              className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4 md:gap-x-10">
            {EDIT.map((p) => (
              <Link key={p.title} href="/shop" className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f4f1ec]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.compareAt && (
                    <span className="absolute left-3 top-3 bg-[#b91c1c] px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                      Sale
                    </span>
                  )}
                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-white drop-shadow transition-colors hover:text-[#b91c1c]"
                  >
                    <Heart className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </div>
                <p className="mt-3 text-xs uppercase tracking-wider text-muted">
                  {p.category}
                </p>
                <h3 className="mt-1 text-sm">{p.title}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <span
                    className={p.compareAt ? "text-[#b91c1c]" : "text-foreground"}
                  >
                    {formatPrice(p.price, "EUR")}
                  </span>
                  {p.compareAt && (
                    <span className="text-muted line-through">
                      {formatPrice(p.compareAt, "EUR")}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {["/images/feature-2.jpg", "/images/feature-3.jpg"].map((image) => (
              <div
                key={image}
                className="relative h-[70vh] min-h-[460px] w-full overflow-hidden"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-10 flex justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center bg-black px-8 py-3 text-sm tracking-wide text-white transition-colors hover:bg-black/80"
            >
              Discover
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-xl font-medium md:text-2xl">More to explore</h2>
            <Link
              href="/shop"
              className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4 md:gap-x-10">
            {EDIT_TWO.map((p) => (
              <Link key={p.title} href="/shop" className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f4f1ec]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.compareAt && (
                    <span className="absolute left-3 top-3 bg-[#b91c1c] px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                      Sale
                    </span>
                  )}
                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-white drop-shadow transition-colors hover:text-[#b91c1c]"
                  >
                    <Heart className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </div>
                <p className="mt-3 text-xs uppercase tracking-wider text-muted">
                  {p.category}
                </p>
                <h3 className="mt-1 text-sm">{p.title}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <span
                    className={p.compareAt ? "text-[#b91c1c]" : "text-foreground"}
                  >
                    {formatPrice(p.price, "EUR")}
                  </span>
                  {p.compareAt && (
                    <span className="text-muted line-through">
                      {formatPrice(p.compareAt, "EUR")}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
          <VideoReel sources={CLIPS} poster="/images/feature-2.jpg" />
        </section>

        <section className="border-t border-line">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-12 px-5 py-16 text-center lg:grid-cols-4 lg:px-10">
            {SERVICES.map(({ Icon, title, sub }) => (
              <div key={title} className="flex flex-col items-center px-4">
                <Icon
                  className="h-7 w-7 text-[#e2574c]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-sm italic text-muted">{sub}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
