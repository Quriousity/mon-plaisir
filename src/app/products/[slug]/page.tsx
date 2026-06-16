import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import EditorialSection from "@/components/EditorialSection";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.title} · Mon plaisir`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[1400px] px-5 pt-5 lg:px-10">
          <nav className="text-xs text-muted">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/" className="hover:text-foreground">
              Bags
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.title}</span>
          </nav>
        </div>

        {/* Product: gallery + info */}
        <div className="mx-auto max-w-[1400px] px-5 pt-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[55%_1fr] lg:gap-14">
            <ProductGallery images={product.images} title={product.title} />
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Editorial detail page */}
        <div className="mx-auto mt-24 max-w-[1100px] space-y-20 px-5 lg:px-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              The details
            </p>
            <h2 className="mt-3 text-2xl font-medium md:text-3xl">
              Built around how it&apos;s carried
            </h2>
          </div>
          {product.detailBlocks.map((block) => (
            <EditorialSection key={block.heading} block={block} />
          ))}
        </div>

        {/* Specs strip */}
        <div className="mx-auto mt-24 max-w-[1100px] px-5 lg:px-10">
          <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
            {[
              { k: "Material", v: "12 oz cotton canvas" },
              { k: "Made in", v: "Portugal" },
              { k: "Dimensions", v: "40 × 36 × 12 cm" },
            ].map((s) => (
              <div key={s.k} className="bg-background px-6 py-8 text-center">
                <p className="text-xs uppercase tracking-[0.14em] text-muted">
                  {s.k}
                </p>
                <p className="mt-2 text-sm">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
