"use client";

import { useState } from "react";
import Accordion from "@/components/Accordion";
import { formatPrice, type Product } from "@/lib/products";

export default function ProductInfo({ product }: { product: Product }) {
  const [variant, setVariant] = useState(product.defaultVariant);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const selected = product.variants.find((v) => v.id === variant);

  function addToCart() {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="lg:sticky lg:top-24">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">
        {product.category}
      </p>
      <h1 className="mt-3 text-2xl font-medium leading-tight md:text-3xl">
        {product.title}
      </h1>
      <p className="mt-3 text-lg">
        {formatPrice(product.price, product.currency)}
      </p>

      <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
        {product.shortDescription}
      </p>

      {/* Variants */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Colour</span>
          <span className="text-sm text-muted">{selected?.name}</span>
        </div>
        <div className="mt-3 flex gap-3">
          {product.variants.map((v) => {
            const isActive = v.id === variant;
            return (
              <button
                key={v.id}
                disabled={!v.available}
                onClick={() => setVariant(v.id)}
                title={v.available ? v.name : `${v.name} — sold out`}
                aria-label={v.name}
                className={`relative h-9 w-9 rounded-full transition disabled:cursor-not-allowed ${
                  isActive ? "ring-2 ring-foreground ring-offset-2" : "ring-1 ring-line"
                }`}
                style={{ backgroundColor: v.swatch }}
              >
                {!v.available && (
                  <span className="absolute inset-0 m-auto h-px w-full rotate-45 bg-foreground/40" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quantity + add to cart */}
      <div className="mt-8 flex gap-3">
        <div className="flex items-center border border-line">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-4 py-3 text-lg leading-none text-muted hover:text-foreground"
            aria-label="Decrease quantity"
          >
            –
          </button>
          <span className="w-8 text-center text-sm">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="px-4 py-3 text-lg leading-none text-muted hover:text-foreground"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          onClick={addToCart}
          className="flex-1 bg-foreground py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
        >
          {added ? "Added ✓" : "Add to cart"}
        </button>
      </div>

      <p className="mt-3 text-xs text-muted">
        Free shipping over {formatPrice(80, product.currency)} · Ships within 2–3 days
      </p>

      {/* Details accordions */}
      <div className="mt-10">
        <Accordion
          items={[
            {
              title: "Description",
              content: <p>{product.description}</p>,
            },
            {
              title: "Composition & dimensions",
              content: (
                <div className="space-y-3">
                  <ul className="list-disc space-y-1 pl-4">
                    {product.composition.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <ul className="list-disc space-y-1 pl-4">
                    {product.dimensions.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ),
            },
            {
              title: "Care",
              content: <p>{product.care}</p>,
            },
            {
              title: "Shipping & returns",
              content: (
                <p>
                  Delivered in 2–3 working days. Free returns within 30 days,
                  unworn and with tags attached.
                </p>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
