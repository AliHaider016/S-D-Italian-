"use client";

import { useCartStore } from "@/store/cart";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CartDrawer() {
  const { lines, isCartOpen, closeCart, cost, totalQuantity, checkoutUrl, removeLine, updateLine } = useCartStore();

  const formatPrice = (amount: string, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format(parseFloat(amount));
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={closeCart}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <h2 className="text-lg font-bold uppercase tracking-wider">
              Shopping Bag ({totalQuantity})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {lines.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-gray-300 mb-4" />
                <p className="text-lg font-medium mb-2">Your bag is empty</p>
                <p className="text-sm text-gray-500 mb-4">
                  Add some products to your bag
                </p>
                <button
                  onClick={closeCart}
                  className="bg-black text-white px-6 py-3 uppercase text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {lines.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 border border-gray-100 rounded-lg"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded overflow-hidden relative">
                      {item.merchandise.image ? (
                        <Image
                          src={item.merchandise.image.url}
                          alt={item.merchandise.image.altText || "Product"}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/products/${item.merchandise.product.handle}`}
                        className="text-sm font-medium hover:underline line-clamp-1"
                        onClick={closeCart}
                      >
                        {item.merchandise.product.title}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">
                        {formatPrice(
                          item.merchandise.price.amount,
                          item.merchandise.price.currencyCode
                        )}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateLine(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateLine(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeLine(item.id)}
                          className="ml-2 text-xs text-gray-400 hover:text-black transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {lines.length > 0 && (
            <div className="border-t border-gray-100 p-4 space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Subtotal</span>
                <span className="text-lg font-bold">
                  {cost?.subtotalAmount
                    ? formatPrice(
                        cost.subtotalAmount.amount,
                        cost.subtotalAmount.currencyCode
                      )
                    : "$0.00"}
                </span>
              </div>

              {/* Checkout Button */}
              <a
                href={checkoutUrl}
                className="block w-full bg-black text-white text-center py-4 uppercase text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors"
              >
                Checkout
              </a>

              <button
                onClick={closeCart}
                className="block w-full text-center py-2 text-sm underline hover:no-underline transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
