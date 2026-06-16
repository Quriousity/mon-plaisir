"use client";

import { useState, type ReactNode } from "react";

export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: { title: string; content: ReactNode }[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-4 text-left text-sm font-medium"
              aria-expanded={isOpen}
            >
              {item.title}
              <span className="text-lg leading-none text-muted">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-5 text-sm leading-relaxed text-muted">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
