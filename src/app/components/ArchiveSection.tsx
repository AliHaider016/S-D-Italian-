"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/types";

interface ArchiveSectionProps {
  products: Product[];
}

export function ArchiveSection({ products }: ArchiveSectionProps) {
  const archiveProducts = products.slice(0, 8);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(archiveProducts.length / itemsPerPage);

  const visible = archiveProducts.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage,
  );

  const next = () => setCurrentPage((p) => (p + 1) % totalPages);
  const prev = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

  const formatPrice = (amount: string, currency: string) => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: currency || "EUR",
    }).format(parseFloat(amount));
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
              Sale / Archive
            </p>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.15em]">
              Archive
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-8 h-8 flex items-center justify-center border border-neutral-200 hover:bg-neutral-100 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-8 h-8 flex items-center justify-center border border-neutral-200 hover:bg-neutral-100 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Counter */}
        <p className="text-xs text-neutral-500 mb-6">
          {currentPage + 1}/{totalPages}
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {visible.map((product, index) => {
            const firstVariant = product.variants[0];
            const image = product.images[0] || firstVariant?.image;
            const price = firstVariant?.price;
            const compareAtPrice = firstVariant?.compareAtPrice;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/products/${product.handle}`} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-3">
                    {image && (
                      <Image
                        src={image.url}
                        alt={image.altText || product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    )}
                    {compareAtPrice && price && (
                      <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                        -
                        {Math.round(
                          (1 -
                            parseFloat(price.amount) /
                              parseFloat(compareAtPrice.amount)) *
                            100,
                        )}
                        %
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      S&D
                    </p>
                    <h3 className="text-sm font-medium">{product.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      {compareAtPrice && (
                        <span className="text-neutral-400 line-through">
                          {formatPrice(
                            compareAtPrice.amount,
                            compareAtPrice.currencyCode,
                          )}
                        </span>
                      )}
                      {price && (
                        <span className="font-medium">
                          {formatPrice(price.amount, price.currencyCode)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/collections/archive"
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:opacity-70 transition-opacity"
          >
            View All Archive
          </Link>
        </div>
      </div>
    </section>
  );
}
