import Image from "next/image";
import type { DetailBlock } from "@/lib/products";

export default function EditorialSection({ block }: { block: DetailBlock }) {
  const imageFirst = block.align === "left";

  return (
    <section className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <div
        className={`relative aspect-[4/3] overflow-hidden bg-[#f4f1ec] ${
          imageFirst ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={block.image}
          alt={block.heading}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className={imageFirst ? "md:order-2" : "md:order-1"}>
        <h2 className="text-xl font-medium md:text-2xl">{block.heading}</h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          {block.body}
        </p>
      </div>
    </section>
  );
}
