"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface FocusBannerProps {
  image: string;
  title: string;
  linkText: string;
  href: string;
  reversed?: boolean;
}

export function FocusBanner({
  image,
  title,
  linkText,
  href,
  reversed = false,
}: FocusBannerProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-neutral-100"
        >
          <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch`}>
            {/* Image */}
            <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16">
              <div className="text-center max-w-md">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
                  Focus category
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.15em] mb-6">
                  {title}
                </h2>
                <Link
                  href={href}
                  className="inline-block text-xs font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  {linkText}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
