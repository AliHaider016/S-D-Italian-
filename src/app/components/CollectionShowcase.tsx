"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Main SS26",
    image:
      "https://8pm.it/cdn/shop/files/Progetto_senza_titolo_-_2026-05-27T101943.338.png?v=1779870176&width=2000",
    href: "/collections/main-ss26",
    label: "Focus category",
  },
  {
    title: "Travel Capsule SS26",
    image:
      "https://8pm.it/cdn/shop/files/Progetto_senza_titolo_-_2026-05-27T102033.734.png?v=1779870170&width=2000",
    href: "/collections/travel-capsule-ss26",
    label: "Focus category",
  },
];

export function CollectionShowcase() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {collections.map((col, index) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                href={col.href}
                className="group block relative overflow-hidden bg-neutral-100"
              >
                <div className="relative aspect-[4/5] md:aspect-[1/1] overflow-hidden">
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                    <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 opacity-80">
                      {col.label}
                    </p>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.15em]">
                      {col.title}
                    </h3>
                    <span className="mt-6 text-xs font-bold uppercase tracking-[0.2em] border-b border-white pb-1 hover:opacity-70 transition-opacity">
                      Shop Now
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
