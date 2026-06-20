"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Check } from "lucide-react";
import { useCartStore } from "@/store/cart";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCartStore();
  const [imageLoaded, setImageLoaded] = useState(false);

  const firstVariant = product.variants[0];
  const image = firstVariant?.image || product.images[0];

  const formatPrice = (amount: string, currency: string) => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: currency || "EUR",
    }).format(parseFloat(amount));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!firstVariant) return;

    addToCart({
      id: `${product.id}-${Date.now()}`,
      quantity: 1,
      merchandise: {
        id: firstVariant.id,
        title: firstVariant.title,
        image: image || null,
        price: firstVariant.price,
        product: {
          title: product.title,
          handle: product.handle,
        },
      },
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const price = firstVariant?.price;
  const compareAtPrice = firstVariant?.compareAtPrice;

  return (
    <Link href={`/products/${product.handle}`} className="group block">
      <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-3">
        {image && (
          <Image
            src={image.url}
            alt={image.altText || product.title}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 py-3 px-4 flex items-center justify-center gap-2 uppercase text-xs font-bold tracking-[0.15em] transition-all duration-200 ${
            isAdded
              ? "bg-neutral-800 text-white"
              : "bg-black text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          }`}
        >
          {isAdded ? (
            <>
              <Check size={16} />
              Added
            </>
          ) : (
            <>
              <ShoppingBag size={16} />
              Add to Bag
            </>
          )}
        </button>

        {/* Sale Badge */}
        {compareAtPrice && (
          <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">
            Sale
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1.5">
        <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
          8PM
        </p>
        <h3 className="text-sm font-medium group-hover:underline">
          {product.title}
        </h3>
        <div className="flex items-center gap-2 text-sm">
          {compareAtPrice && (
            <span className="text-neutral-400 line-through">
              {formatPrice(compareAtPrice.amount, compareAtPrice.currencyCode)}
            </span>
          )}
          <span className="font-medium">
            {price
              ? formatPrice(price.amount, price.currencyCode)
              : "Price unavailable"}
          </span>
        </div>
      </div>
    </Link>
  );
}
