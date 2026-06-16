import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { products, formatPrice } from "@/lib/products";

export default function Shop() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-[1400px] px-5 pt-10 lg:px-10">
          <h1 className="max-w-2xl text-3xl font-medium leading-tight md:text-5xl">
            A study of the everyday object.
          </h1>
          <p className="mt-4 max-w-lg text-sm text-muted">
            Browse the collection. This is a Next.js layout reference — open a
            product to see the detail page.
          </p>
        </section>

        <section className="mx-auto mt-12 max-w-[1400px] px-5 lg:px-10">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {Object.values(products).map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f4f1ec]">
                  <Image
                    src={p.images[0]}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-sm">{p.title}</h3>
                <p className="text-sm text-muted">
                  {formatPrice(p.price, p.currency)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
