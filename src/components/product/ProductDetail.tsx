"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Check, ChevronLeft, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/cart";
import type { Product } from "@/types";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCartStore();

  const images = product.images;

  // Filter available variants by selected options
  const handleOptionSelect = (optionName: string, value: string) => {
    if (!selectedVariant) return;
    
    const newOptions = selectedVariant.selectedOptions.map((opt) =>
      opt.name === optionName ? { ...opt, value } : opt
    );

    const matchingVariant = product.variants.find((variant) =>
      newOptions.every(
        (opt) =>
          variant.selectedOptions.find((vo) => vo.name === opt.name)?.value ===
          opt.value
      )
    );

    if (matchingVariant) {
      setSelectedVariant(matchingVariant);
    }
  };

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    addToCart({
      id: `${product.id}-${Date.now()}`,
      quantity,
      merchandise: {
        id: selectedVariant.id,
        title: selectedVariant.title,
        image: images[selectedImage] || null,
        price: selectedVariant.price,
        product: {
          title: product.title,
          handle: product.handle,
        },
      },
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const formatPrice = (amount: string, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format(parseFloat(amount));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-6 transition-colors"
      >
        <ChevronLeft size={16} />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
            {images[selectedImage] && (
              <Image
                src={images[selectedImage].url}
                alt={images[selectedImage].altText || product.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.altText || `${product.title} - ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Title & Price */}
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
              {product.vendor}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {product.title}
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">
                {selectedVariant
                  ? formatPrice(
                      selectedVariant.price.amount,
                      selectedVariant.price.currencyCode
                    )
                  : "Price unavailable"}
              </span>
              {selectedVariant?.compareAtPrice && (
                <span className="text-xl text-gray-400 line-through">
                  {formatPrice(
                    selectedVariant.compareAtPrice.amount,
                    selectedVariant.compareAtPrice.currencyCode
                  )}
                </span>
              )}
            </div>
          </div>

          {/* Product Options */}
          {selectedVariant &&
            product.options.map(
              (option) =>
                option.name.toLowerCase() !== "title" && (
                  <div key={option.name}>
                    <h3 className="text-sm font-medium mb-2">
                      {option.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value) => {
                        const isSelected =
                          selectedVariant.selectedOptions.find(
                            (opt) => opt.name === option.name
                          )?.value === value;

                        return (
                          <button
                            key={value}
                            onClick={() => handleOptionSelect(option.name, value)}
                            className={`px-4 py-2 border-2 text-sm font-medium transition-colors ${
                              isSelected
                                ? "border-black bg-black text-white"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            {value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )
            )}

          {/* Quantity */}
          <div>
            <h3 className="text-sm font-medium mb-2">Quantity</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="text-lg font-medium w-12 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedVariant?.availableForSale}
            className={`w-full py-4 px-6 flex items-center justify-center gap-3 uppercase text-sm font-bold tracking-wider transition-all duration-200 ${
              isAdded
                ? "bg-green-600 text-white"
                : "bg-black text-white hover:bg-gray-800 disabled:bg-gray-300"
            }`}
          >
            {isAdded ? (
              <>
                <Check size={18} />
                Added to Bag
              </>
            ) : !selectedVariant?.availableForSale ? (
              "Out of Stock"
            ) : (
              <>
                <ShoppingBag size={18} />
                Add to Bag
              </>
            )}
          </button>

          {/* Product Description */}
          <div className="pt-6 border-t border-gray-100">
            <h3 className="text-lg font-bold mb-3">Description</h3>
            <div
              className="prose prose-sm max-w-none text-gray-600"
              dangerouslySetInnerHTML={{
                __html: product.descriptionHtml || product.description,
              }}
            />
          </div>

          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-medium mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
