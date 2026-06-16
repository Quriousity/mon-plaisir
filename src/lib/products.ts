export type Variant = {
  id: string;
  name: string;
  swatch: string; // css color for the swatch dot
  available: boolean;
};

export type DetailBlock = {
  heading: string;
  body: string;
  image: string;
  align: "left" | "right";
};

export type Product = {
  slug: string;
  category: string;
  title: string;
  price: number;
  currency: string;
  shortDescription: string;
  images: string[];
  variants: Variant[];
  defaultVariant: string;
  description: string;
  composition: string[];
  dimensions: string[];
  care: string;
  detailBlocks: DetailBlock[];
};

export const products: Record<string, Product> = {
  "tote-en-canvas-rose": {
    slug: "tote-en-canvas-rose",
    category: "Bags · Canvas Tote",
    title: "Tote Bag en Canvas — Rose",
    price: 35,
    currency: "EUR",
    shortDescription:
      "A roomy everyday tote cut from heavy cotton canvas. Soft-structured, fully lined, and finished with a single interior pocket.",
    images: [
      "/images/product-1.jpg",
      "/images/product-2.jpg",
      "/images/product-3.jpg",
      "/images/product-4.jpg",
    ],
    variants: [
      { id: "rose", name: "Rose", swatch: "#e6b7b0", available: true },
      { id: "ecru", name: "Écru", swatch: "#e8e1d2", available: true },
      { id: "olive", name: "Olive", swatch: "#7c7a52", available: true },
      { id: "navy", name: "Navy", swatch: "#2b3553", available: false },
    ],
    defaultVariant: "rose",
    description:
      "An essential carry-all designed for the everyday. The canvas tote keeps a relaxed shape that softens with use, with long flat handles sized to sit comfortably over the shoulder. The interior is lined and includes a small flat pocket to keep the essentials close at hand.",
    composition: ["100% cotton canvas, 12 oz", "Cotton webbing handles", "Lining: 100% cotton"],
    dimensions: ["Height: 40 cm", "Width: 36 cm", "Depth: 12 cm", "Handle drop: 26 cm"],
    care: "Spot clean with a damp cloth. Do not tumble dry. Reshape and dry flat away from direct sunlight.",
    detailBlocks: [
      {
        heading: "Made to be lived with",
        body:
          "Cut from a dense cotton canvas, the tote holds its shape on its own yet folds flat when you need it to. Every panel is double-stitched at the points that take the most weight.",
        image: "/images/product-2.jpg",
        align: "right",
      },
      {
        heading: "The detail that counts",
        body:
          "Handles are set wide so the bag opens flat, and reinforced where they meet the body. A single interior pocket keeps keys and cards from drifting to the bottom.",
        image: "/images/product-3.jpg",
        align: "left",
      },
      {
        heading: "A colour for every day",
        body:
          "The rose canvas is dyed in small batches, so each piece carries a slightly different depth of tone. It pairs as easily with linen in summer as with wool in winter.",
        image: "/images/product-4.jpg",
        align: "right",
      },
    ],
  },
};

export function getProduct(slug: string): Product | undefined {
  return products[slug];
}

export function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(price);
}
