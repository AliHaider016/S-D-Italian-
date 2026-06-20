"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Giacche - Main SS26",
    image:
      "https://8pm.it/cdn/shop/files/D8PM61K14-A-385_1.jpg?v=1773390095&width=600",
    href: "/collections/giacche-new-in",
  },
  {
    name: "Top - Main SS26",
    image:
      "https://8pm.it/cdn/shop/files/D8PM61H04-255_1.jpg?v=1773390088&width=600",
    href: "/collections/top-new-in",
  },
  {
    name: "Pantaloni - Main SS26",
    image:
      "https://8pm.it/cdn/shop/files/D8PM61P05-119_1.jpg?v=1771922121&width=600",
    href: "/collections/pantaloni-new-in",
  },
  {
    name: "Bluse - Main SS26",
    image:
      "https://8pm.it/cdn/shop/files/D8PM61B44-138_1.jpg?v=1771922098&width=600",
    href: "/collections/bluse-new-in",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={cat.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-sm font-bold uppercase tracking-[0.1em]">
                      {cat.name.split(" - ")[0]}
                    </h3>
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
