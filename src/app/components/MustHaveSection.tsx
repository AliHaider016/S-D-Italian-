"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MustHaveSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="https://8pm.it/cdn/shop/files/Progetto_senza_titolo_-_2026-05-27T104250.665.png?v=1779871378&width=1000"
              alt="MUST HAVE"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Must Have
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.15em] mb-2">
              S&D
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-[0.3em] text-neutral-400">
              SS26
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
