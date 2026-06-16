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

  "pump-a-fleurs-bleu": {
    slug: "pump-a-fleurs-bleu",
    category: "Footwear · Pump",
    title: "Pump à Fleurs — Bleu",
    price: 180,
    currency: "EUR",
    shortDescription:
      "A pointed-toe pump in floral-printed satin, set on a slim covered heel. Cut for a clean line and finished with a leather sole.",
    images: ["/images/floral-heel.jpg"],
    variants: [
      { id: "bleu", name: "Bleu Floral", swatch: "#2f6fb0", available: true },
      { id: "noir", name: "Noir", swatch: "#1a1a1a", available: true },
      { id: "ecru", name: "Écru", swatch: "#e8e1d2", available: false },
    ],
    defaultVariant: "bleu",
    description:
      "An evening pump that keeps things light. The floral satin upper is mounted on a slim 9 cm covered heel, with a lightly padded footbed so it stays wearable through the night. The pointed toe lengthens the line of the foot without pinching.",
    composition: ["Upper: printed satin", "Lining: leather", "Sole: leather"],
    dimensions: ["Heel height: 9 cm", "Pointed toe", "True to size"],
    care: "Wipe gently with a soft dry cloth. Store with shoe trees away from direct light. Avoid wet conditions.",
    detailBlocks: [
      {
        heading: "Print, placed by hand",
        body:
          "Each upper is cut so the floral repeat falls cleanly along the vamp, which means no two pairs are printed exactly alike.",
        image: "/images/floral-heel.jpg",
        align: "right",
      },
    ],
  },

  "sac-structure-corail": {
    slug: "sac-structure-corail",
    category: "Bags · Top Handle",
    title: "Sac Structuré en Cuir — Corail",
    price: 290,
    currency: "EUR",
    shortDescription:
      "A structured top-handle bag in smooth coral leather, with a polished turn-lock and a detachable shoulder strap.",
    images: ["/images/leather-handbag.jpg"],
    variants: [
      { id: "corail", name: "Corail", swatch: "#e2574c", available: true },
      { id: "noir", name: "Noir", swatch: "#1a1a1a", available: true },
      { id: "camel", name: "Camel", swatch: "#b88a5a", available: true },
    ],
    defaultVariant: "corail",
    description:
      "A neat top-handle bag that holds its shape. Cut from smooth calf leather and built over a firm frame, it opens with a polished turn-lock to a lined interior with a slip pocket. Carry it by the rolled top handle, or clip on the strap to wear it across the body.",
    composition: ["Smooth calf leather", "Lining: cotton twill", "Palladium-finish hardware"],
    dimensions: ["Height: 22 cm", "Width: 26 cm", "Depth: 12 cm", "Strap drop: 52 cm"],
    care: "Wipe with a soft dry cloth. Keep away from prolonged sunlight and moisture. Store in the dust bag when not in use.",
    detailBlocks: [
      {
        heading: "Held by a single lock",
        body:
          "The turn-lock is machined from solid metal and seated on a leather-backed plate, so it stays flush and closes with a clean, quiet click.",
        image: "/images/leather-handbag.jpg",
        align: "right",
      },
    ],
  },

  "sweat-molletonne-blanc": {
    slug: "sweat-molletonne-blanc",
    category: "Knitwear · Sweatshirt",
    title: "Sweat Molletonné — Blanc",
    price: 85,
    currency: "EUR",
    shortDescription:
      "A relaxed crew-neck sweatshirt in brushed-back loopback cotton, with ribbed trims and a slightly dropped shoulder.",
    images: ["/images/white-sweatshirt.jpg"],
    variants: [
      { id: "blanc", name: "Blanc", swatch: "#f3f1ec", available: true },
      { id: "gris", name: "Gris Chiné", swatch: "#b8b8b8", available: true },
      { id: "marine", name: "Marine", swatch: "#2b3553", available: true },
    ],
    defaultVariant: "blanc",
    description:
      "An everyday crew-neck cut from heavyweight loopback cotton, brushed on the inside for softness. The shoulder drops just slightly for an easy fit, with ribbed collar, cuffs and hem that hold their shape wash after wash.",
    composition: ["100% organic cotton, 340 gsm", "Ribbed trims: 95% cotton, 5% elastane"],
    dimensions: ["Relaxed fit", "Dropped shoulder", "Mid-weight"],
    care: "Machine wash cold, inside out. Do not tumble dry. Wash with similar colours to keep the white bright.",
    detailBlocks: [
      {
        heading: "Weight you can feel",
        body:
          "At 340 gsm the loopback sits with a real drape and brushes soft against the skin, the kind of piece that becomes a default by the second wear.",
        image: "/images/white-sweatshirt.jpg",
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
