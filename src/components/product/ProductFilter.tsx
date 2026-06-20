"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Product } from "@/types";
import { ProductGrid } from "./ProductGrid";

interface ProductFilterProps {
  products: Product[];
}

export function ProductFilter({ products }: ProductFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories from products
  const categories = Array.from(
    new Set(products.map((product) => product.productType))
  ).filter(Boolean);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      !selectedCategory || product.productType === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
          />
        </div>
      </div>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 text-sm font-medium uppercase tracking-wider border-2 transition-colors ${
              !selectedCategory
                ? "border-black bg-black text-white"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wider border-2 transition-colors ${
                selectedCategory === category
                  ? "border-black bg-black text-white"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Results Count */}
      <p className="text-sm text-gray-500 mb-4">
        {filteredProducts.length} product
        {filteredProducts.length !== 1 ? "s" : ""}
      </p>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-gray-400">
            No products found. Try a different search or filter.
          </p>
        </div>
      )}
    </div>
  );
}
