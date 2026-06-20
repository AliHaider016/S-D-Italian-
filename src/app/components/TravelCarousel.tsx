"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const travelItems = [
  {
    name: "Giacche Travel SS26",
    image:
      "https://8pm.it/cdn/shop/files/DP8PM61K18-200_2.jpg?v=1765294515&width=600",
    href: "/collections/giacche-travel-new-in",
  },
  {
    name: "Abiti Travel SS26",
    image:
      "https://8pm.it/cdn/shop/files/DP8PM61A42-111_2.jpg?v=1765294500&width=600",
    href: "/collections/abiti-travel-new-in",
  },
  {
    name: "Top Travel SS26",
    image:
      "https://8pm.it/cdn/shop/files/DP8PM61H38-188-111_2.jpg?v=1765294510&width=600",
    href: "/collections/top-travel-new-in",
  },
  {
    name: "Gonne Travel SS26",
    image:
      "https://8pm.it/cdn/shop/files/DP8PM61G08-385_2.jpg?v=1765294507&width=600",
    href: "/collections/gonne-travel-new-in",
  },
  {
    name: "Pantaloni Travel SS26",
    image:
      "https://8pm.it/cdn/shop/files/DP8PM61P20-200_1.jpg?v=1765294527&width=600",
    href: "/collections/pantaloni-travel-new-in",
  },
  {
    name: "Accessori Travel SS26",
    image:
      "https://8pm.it/cdn/shop/files/DP8PM61CZ37-193_1.jpg?v=1765294506&width=600",
    href: "/collections/accessori-travel-new-in",
  },
];

export function TravelCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2 text-center">
          Travel capsule
        </p>
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-[0.15em] text-center mb-2">
          Abbigliamento
        </h2>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-8 text-center">
          Accessori
        </p>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {travelItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex-shrink-0 w-[220px] sm:w-[260px] group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-sm font-bold uppercase tracking-[0.1em]">
                      {item.name.split(" Travel")[0]}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white transition-colors shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white transition-colors shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
