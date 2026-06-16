"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function SearchModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Search"
        onClick={() => setOpen(true)}
        className="text-foreground/80 transition-colors hover:text-foreground"
      >
        <Search className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <button
            type="button"
            aria-label="Close search"
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-black/40 backdrop-blur-sm"
          />
          <div className="relative mt-[16vh] w-full max-w-lg border border-line bg-background p-8 shadow-xl">
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-muted transition-colors hover:text-foreground"
            >
              <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </button>

            <div className="flex flex-col items-center py-12 text-center">
              <Search className="h-7 w-7 text-muted" strokeWidth={1.25} aria-hidden="true" />
              <span className="mt-5 inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
