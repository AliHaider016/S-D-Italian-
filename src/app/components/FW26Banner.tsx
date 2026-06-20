"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function FW26Banner() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-neutral-100 aspect-[2/1] md:aspect-[3/1]"
        >
          <Image
            src="https://8pm.it/cdn/shop/files/preview_images/f8f494b0db2f459d985aaf93c37aac7b.thumbnail.0000000000_small.jpg?v=1779719913"
            alt="Travel Capsule FW26"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
            <p className="text-xs uppercase tracking-[0.3em] mb-3 opacity-80">
              New in
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[0.15em] mb-4">
              Travel Capsule FW26
            </h2>
            <Link
              href="/collections/travel-capsule-fw26"
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] border-b border-white pb-1 hover:opacity-70 transition-opacity"
            >
              Scopri
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
