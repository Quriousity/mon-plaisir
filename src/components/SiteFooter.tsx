const COLUMNS = [
  { title: "Shop", links: ["New arrivals", "Bags", "Home", "Stationery", "Gifts"] },
  { title: "About", links: ["Our story", "The shop in Paris", "Journal", "Sustainability"] },
  { title: "Help", links: ["Shipping", "Returns", "Size guide", "Contact"] },
];

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <div className="text-2xl font-semibold">
              <span className="text-accent">Mon plaisir</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              A concept store layout study. Built with Next.js — for design
              reference only.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium">{col.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Mon plaisir. All rights reserved.</span>
          <span>Images via Unsplash</span>
        </div>
      </div>
    </footer>
  );
}
