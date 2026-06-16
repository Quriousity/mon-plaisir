"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ProductGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function onScroll() {
    const el = trackRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActive(index);
  }

  function scrollTo(index: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div>
      {/* Desktop: stacked editorial grid */}
      <div className="hidden grid-cols-2 gap-2 lg:grid">
        {images.map((src, i) => (
          <div
            key={src}
            className={`relative aspect-[4/5] overflow-hidden bg-[#f4f1ec] ${
              i === 0 ? "col-span-2 aspect-[16/11]" : ""
            }`}
          >
            <Image
              src={src}
              alt={`${title} — view ${i + 1}`}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Mobile: swipe carousel */}
      <div className="lg:hidden">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto"
        >
          {images.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/5] w-full shrink-0 snap-center bg-[#f4f1ec]"
            >
              <Image
                src={src}
                alt={`${title} — view ${i + 1}`}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                active === i ? "w-6 bg-foreground" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
