"use client";

import { ProductCard } from "./ProductCard";
import type { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

export function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  const getGridCols = () => {
    switch (columns) {
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-2 md:grid-cols-3";
      case 6:
        return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";
      default:
        return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";
    }
  };

  return (
    <div className={`grid ${getGridCols()} gap-4 sm:gap-6`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
