"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Our story
            </p>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.15em] mb-4">
              Since 2009
            </h2>
            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p>
                S&D nasce a gennaio del 2009 dalla passione e dedizione di un
                team di designers per la couture, i materiali preziosi, volumi
                ricercati e l&apos;arte della sartorialità, così come
                l&apos;intento di concepire un abbigliamento quotidiano,
                confortevole e accessibile per tutti senza perdere
                l&apos;eleganza e la creatività.
              </p>
              <p>
                Brand italiano di abbigliamento femminile: S&D, Everywhere it's 8pm.
              </p>
            </div>
            <Link
              href="/pages/about"
              className="inline-block mt-8 text-xs font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:opacity-70 transition-opacity"
            >
              About us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="https://8pm.it/cdn/shop/files/Progetto_senza_titolo_-_2026-05-27T103605.861.png?v=1779871063&width=1000"
              alt="S&D Our Story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
