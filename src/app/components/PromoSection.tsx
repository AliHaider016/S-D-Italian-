"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function PromoSection() {
  const promos = [
    {
      title: "Best Sellers",
      description: "Our most loved products",
      image: "/promo-bestsellers.jpg",
      href: "/collections/best-sellers",
      color: "bg-rose-50",
    },
    {
      title: "New Arrivals",
      description: "The latest drops",
      image: "/promo-new.jpg",
      href: "/collections/new-arrivals",
      color: "bg-amber-50",
    },
    {
      title: "Sale",
      description: "Up to 50% off",
      image: "/promo-sale.jpg",
      href: "/collections/sale",
      color: "bg-gray-50",
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our curated collections and find your perfect match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo, index) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Link href={promo.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  {/* Image */}
                  <div className="absolute inset-0 bg-gray-800">
                    <Image
                      src={promo.image}
                      alt={promo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">
                      {promo.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{promo.description}</p>
                    <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider group-hover:underline">
                      Shop Now
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
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
