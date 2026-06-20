"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import type { Product } from "@/types";

// ── Mock data from the provided HTML ──────────────────────────────
const MOCK_MAIN_SS26: Product[] = [
  {
    id: "gid://shopify/Product/roma-abito-moka",
    title: "Rome Moka Dress",
    description: "Rome Moka Dress",
    descriptionHtml: "<p>Rome Moka Dress</p>",
    handle: "roma-abito-moka-d8pm61a68-385",
    tags: [],
    productType: "Dress",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["XXS", "S"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/D8PM61A68-385_1.jpg?v=1773390079&width=600",
        altText: "Rome Moka Dress Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/roma-xxs",
        title: "XXS",
        price: { amount: "199.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XXS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61A68-385_1.jpg?v=1773390079&width=600",
          altText: "Rome Moka Dress Women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/roma-s",
        title: "S",
        price: { amount: "199.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61A68-385_1.jpg?v=1773390079&width=600",
          altText: "Rome Moka Dress Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "199.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "199.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/pienza-abito-pepe-rosa",
    title: "Pienza Pink Pepper Dress",
    description: "Pienza Pink Pepper Dress",
    descriptionHtml: "<p>Pienza Pink Pepper Dress</p>",
    handle: "pienza-abito-pepe-rosa-d8pm61a64-400",
    tags: [],
    productType: "Dress",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["XXS", "XS", "M", "THE"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/D8PM61A64-400_1_b9f4ef50-38a9-462f-a604-482a3788c6b8.jpg?v=1777037580&width=600",
        altText: "Pienza Women's Pepe Rosa Dress S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/pienza-xxs",
        title: "XXS",
        price: { amount: "179.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XXS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61A64-400_1_b9f4ef50-38a9-462f-a604-482a3788c6b8.jpg?v=1777037580&width=600",
          altText: "Pienza Women's Pepe Rosa Dress S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/pienza-xs",
        title: "XS",
        price: { amount: "179.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61A64-400_1_b9f4ef50-38a9-462f-a604-482a3788c6b8.jpg?v=1777037580&width=600",
          altText: "Pienza Women's Pepe Rosa Dress S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/pienza-m",
        title: "M",
        price: { amount: "179.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61A64-400_1_b9f4ef50-38a9-462f-a604-482a3788c6b8.jpg?v=1777037580&width=600",
          altText: "Pienza Women's Pepe Rosa Dress S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/pienza-the",
        title: "THE",
        price: { amount: "179.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "THE" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61A64-400_1_b9f4ef50-38a9-462f-a604-482a3788c6b8.jpg?v=1777037580&width=600",
          altText: "Pienza Women's Pepe Rosa Dress S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "179.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "179.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/dubai-a-gilet-english-rose",
    title: "Dubai-a Gilet English Rose",
    description: "Dubai-a Gilet English Rose",
    descriptionHtml: "<p>Dubai-a Gilet English Rose</p>",
    handle: "dubai-a-gilet-english-rose-d8pm61q07-a-138",
    tags: [],
    productType: "Vest",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["XS", "S", "M"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/D8PM61Q07-A-138_1.jpg?v=1773390102&width=600",
        altText: "Dubai-a Gilet English Rose women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/dubai-xs",
        title: "XS",
        price: { amount: "265.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61Q07-A-138_1.jpg?v=1773390102&width=600",
          altText: "Dubai-a Gilet English Rose women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/dubai-s",
        title: "S",
        price: { amount: "265.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61Q07-A-138_1.jpg?v=1773390102&width=600",
          altText: "Dubai-a Gilet English Rose women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/dubai-m",
        title: "M",
        price: { amount: "265.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61Q07-A-138_1.jpg?v=1773390102&width=600",
          altText: "Dubai-a Gilet English Rose women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "265.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "265.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/mexico-city-top-forest",
    title: "Mexico City Top Forest",
    description: "Mexico City Top Forest",
    descriptionHtml: "<p>Mexico City Top Forest</p>",
    handle: "citta-del-messico-top-forest-d8pm61h28-399",
    tags: [],
    productType: "Top",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["XS"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/D8PM61H28-399_1.jpg?v=1773390090&width=600",
        altText: "Mexico City Top Forest Women's S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/mexico-xs",
        title: "XS",
        price: { amount: "165.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61H28-399_1.jpg?v=1773390090&width=600",
          altText: "Mexico City Top Forest Women's S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "165.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "165.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/prague-taupe-dress",
    title: "Prague Taupe Dress",
    description: "Prague Taupe Dress",
    descriptionHtml: "<p>Prague Taupe Dress</p>",
    handle: "praga-abito-taupe-d8pm61a88-141",
    tags: [],
    productType: "Dress",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["XS", "S"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/D8PM61A88-141_1.jpg?v=1773390080&width=600",
        altText: "Prague Taupe Dress Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/prague-xs",
        title: "XS",
        price: { amount: "189.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61A88-141_1.jpg?v=1773390080&width=600",
          altText: "Prague Taupe Dress Women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/prague-s",
        title: "S",
        price: { amount: "189.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61A88-141_1.jpg?v=1773390080&width=600",
          altText: "Prague Taupe Dress Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "189.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "189.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/lecce-felpa",
    title: "Lecce Sweatshirt Grey Melange",
    description: "Lecce Sweatshirt Grey Melange",
    descriptionHtml: "<p>Lecce Sweatshirt Grey Melange</p>",
    handle: "lecce-felpa-grigio-mel-chia-d8pm61h71-93",
    tags: [],
    productType: "Sweatshirt",
    vendor: "S&D",
    availableForSale: true,
    options: [
      { id: "size", name: "Size", values: ["XXS", "XS", "S", "M", "L"] },
    ],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/D8PM61H71-093_1.jpg?v=1771922108&width=600",
        altText: "Lecce Sweatshirt Grey Melange Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/lecce-xxs",
        title: "XXS",
        price: { amount: "145.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XXS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61H71-093_1.jpg?v=1771922108&width=600",
          altText: "Lecce Sweatshirt Grey Melange Women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/lecce-s",
        title: "S",
        price: { amount: "145.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61H71-093_1.jpg?v=1771922108&width=600",
          altText: "Lecce Sweatshirt Grey Melange Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "145.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "145.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/lima-pantalone",
    title: "Lima Trousers Pink Pepper",
    description: "Lima Trousers Pink Pepper",
    descriptionHtml: "<p>Lima Trousers Pink Pepper</p>",
    handle: "lima-pantalone-pepe-rosa-d8pm61p54-400",
    tags: [],
    productType: "Trousers",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["XXS", "XS", "M", "L"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/D8PM61P54-400_1.jpg?v=1773390100&width=600",
        altText: "Lima Trousers Pink Pepper Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/lima-xxs",
        title: "XXS",
        price: { amount: "189.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XXS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61P54-400_1.jpg?v=1773390100&width=600",
          altText: "Lima Trousers Pink Pepper Women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/lima-m",
        title: "M",
        price: { amount: "189.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61P54-400_1.jpg?v=1773390100&width=600",
          altText: "Lima Trousers Pink Pepper Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "189.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "189.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/brisbane-top",
    title: "Brisbane Top Poudre",
    description: "Brisbane Top Poudre",
    descriptionHtml: "<p>Brisbane Top Poudre</p>",
    handle: "brisbane-top-poudre-d8pm61h04-255",
    tags: [],
    productType: "Top",
    vendor: "S&D",
    availableForSale: true,
    options: [
      { id: "size", name: "Size", values: ["XXS", "XS", "S", "M", "L"] },
    ],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/D8PM61H04-255_1.jpg?v=1773390088&width=600",
        altText: "Brisbane Top Poudre Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/brisbane-xxs",
        title: "XXS",
        price: { amount: "154.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XXS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61H04-255_1.jpg?v=1773390088&width=600",
          altText: "Brisbane Top Poudre Women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/brisbane-s",
        title: "S",
        price: { amount: "154.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61H04-255_1.jpg?v=1773390088&width=600",
          altText: "Brisbane Top Poudre Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "154.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "154.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/osaka-abito",
    title: "Osaka Black Dress",
    description: "Osaka Black Dress",
    descriptionHtml: "<p>Osaka Black Dress</p>",
    handle: "osaka-abito-nero-d8pm61a65-9",
    tags: [],
    productType: "Dress",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["S"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/D8PM61A65-009_1.jpg?v=1776246825&width=600",
        altText: "Osaka Black Dress Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/osaka-s",
        title: "S",
        price: { amount: "165.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61A65-009_1.jpg?v=1776246825&width=600",
          altText: "Osaka Black Dress Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "165.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "165.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/berlino-giacca",
    title: "Berlin-a Jacket Moka",
    description: "Berlin-a Jacket Moka",
    descriptionHtml: "<p>Berlin-a Jacket Moka</p>",
    handle: "berlino-a-giacca-moka-d8pm61k14-a-385",
    tags: [],
    productType: "Jacket",
    vendor: "S&D",
    availableForSale: false,
    options: [{ id: "size", name: "Size", values: [] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/D8PM61K14-A-385_1.jpg?v=1773390095&width=600",
        altText: "Berlin-a Jacket Moka Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/berlino",
        title: "Default",
        price: { amount: "249.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: false,
        selectedOptions: [],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61K14-A-385_1.jpg?v=1773390095&width=600",
          altText: "Berlin-a Jacket Moka Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "249.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "249.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/il-cairo-camicia",
    title: "Cairo Shirt Latte",
    description: "Cairo Shirt Latte",
    descriptionHtml: "<p>Cairo Shirt Latte</p>",
    handle: "il-cairo-camicia-latte-d8pm61c43-188",
    tags: [],
    productType: "Shirt",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["XS", "S", "M", "L"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/D8PM61C43-188_1.jpg?v=1771922101&width=600",
        altText: "Cairo Shirt Latte Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/cairo-xs",
        title: "XS",
        price: { amount: "249.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61C43-188_1.jpg?v=1771922101&width=600",
          altText: "Cairo Shirt Latte Women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/cairo-m",
        title: "M",
        price: { amount: "249.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61C43-188_1.jpg?v=1771922101&width=600",
          altText: "Cairo Shirt Latte Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "249.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "249.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/manila-gonna",
    title: "Manila Denim Skirt",
    description: "Manila Denim Skirt",
    descriptionHtml: "<p>Manila Denim Skirt</p>",
    handle: "manila-gonna-denim-d8pm61g104-158",
    tags: [],
    productType: "Skirt",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["XXS", "S"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/D8PM61G104-158_1.jpg?v=1771922105&width=600",
        altText: "Manila Denim Skirt Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/manila-xxs",
        title: "XXS",
        price: { amount: "245.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XXS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61G104-158_1.jpg?v=1771922105&width=600",
          altText: "Manila Denim Skirt Women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/manila-s",
        title: "S",
        price: { amount: "245.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/D8PM61G104-158_1.jpg?v=1771922105&width=600",
          altText: "Manila Denim Skirt Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "245.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "245.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/praiano-pantalone",
    title: "Praiano Trousers Meringa",
    description: "Praiano Trousers Meringa",
    descriptionHtml: "<p>Praiano Trousers Meringa</p>",
    handle: "praiano-pantalone-meringa-dp8pm61p33-167",
    tags: [],
    productType: "Trousers",
    vendor: "S&D",
    availableForSale: true,
    options: [
      { id: "size", name: "Size", values: ["XXS", "XS", "S", "M", "L", "XL"] },
    ],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/DP8PM61P33-167_1.jpg?v=1765294527&width=600",
        altText: "Praiano Trousers Meringa Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/praiano-xxs",
        title: "XXS",
        price: { amount: "190.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XXS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/DP8PM61P33-167_1.jpg?v=1765294527&width=600",
          altText: "Praiano Trousers Meringa Women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/praiano-m",
        title: "M",
        price: { amount: "190.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/DP8PM61P33-167_1.jpg?v=1765294527&width=600",
          altText: "Praiano Trousers Meringa Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "190.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "190.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/ibiza-tshirt",
    title: "Ibiza T-shirt English Rose",
    description: "Ibiza T-shirt English Rose",
    descriptionHtml: "<p>Ibiza T-shirt English Rose</p>",
    handle: "ibiza-t-shirt-english-rose-dp8pm61m32-138",
    tags: [],
    productType: "T-shirt",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["S"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/DP8PM61M32-138_1.jpg?v=1765294522&width=600",
        altText: "Ibiza T-shirt English Rose Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/ibiza-s",
        title: "S",
        price: { amount: "95.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/DP8PM61M32-138_1.jpg?v=1765294522&width=600",
          altText: "Ibiza T-shirt English Rose Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "95.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "95.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/phuket-pantalone",
    title: "Phuket Trousers Off White Melange",
    description: "Phuket Trousers Off White Melange",
    descriptionHtml: "<p>Phuket Trousers Off White Melange</p>",
    handle: "phuket-pantalone-off-white-melange-dp8pm61p20-396",
    tags: [],
    productType: "Trousers",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["XS", "S", "M", "L"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/DP8PM61P20-396_1.jpg?v=1774455069&width=600",
        altText: "Phuket Trousers Off White Melange Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/phuket-xs",
        title: "XS",
        price: { amount: "235.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/DP8PM61P20-396_1.jpg?v=1774455069&width=600",
          altText: "Phuket Trousers Off White Melange Women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/phuket-m",
        title: "M",
        price: { amount: "235.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/DP8PM61P20-396_1.jpg?v=1774455069&width=600",
          altText: "Phuket Trousers Off White Melange Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "235.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "235.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/honolulu-cardigan",
    title: "Honolulu Cardigan Blue",
    description: "Honolulu Cardigan Blue",
    descriptionHtml: "<p>Honolulu Cardigan Blue</p>",
    handle: "honolulu-cardigan-blu-dp8pm61k29-7",
    tags: [],
    productType: "Cardigan",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["XS", "S", "M"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/DP8PM61K29-007_1.jpg?v=1765294519&width=600",
        altText: "Honolulu Cardigan Blue Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/honolulu-xs",
        title: "XS",
        price: { amount: "195.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/DP8PM61K29-007_1.jpg?v=1765294519&width=600",
          altText: "Honolulu Cardigan Blue Women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/honolulu-m",
        title: "M",
        price: { amount: "195.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/DP8PM61K29-007_1.jpg?v=1765294519&width=600",
          altText: "Honolulu Cardigan Blue Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "195.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "195.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/sirmione-canotta",
    title: "Sirmione Tank Black-Butter",
    description: "Sirmione Tank Black-Butter",
    descriptionHtml: "<p>Sirmione Tank Black-Butter</p>",
    handle: "sirmione-canotta-burro-dp8pm61h38-90181",
    tags: [],
    productType: "Tank",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["M", "L"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/DP8PM61H38-009-119_1.jpg?v=1765294511&width=600",
        altText: "Sirmione Tank Black-Butter Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/sirmione-m",
        title: "M",
        price: { amount: "109.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/DP8PM61H38-009-119_1.jpg?v=1765294511&width=600",
          altText: "Sirmione Tank Black-Butter Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "109.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "109.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/nizza-gilet",
    title: "Nizza Gilet Butter",
    description: "Nizza Gilet Butter",
    descriptionHtml: "<p>Nizza Gilet Butter</p>",
    handle: "nizza-gilet-burro-dp8pm61q10-119",
    tags: [],
    productType: "Vest",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["XS", "S", "M", "L"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/DP8PM61Q10-119_1.jpg?v=1765294524&width=600",
        altText: "Nizza Gilet Butter Women S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/nizza-xs",
        title: "XS",
        price: { amount: "265.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XS" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/DP8PM61Q10-119_1.jpg?v=1765294524&width=600",
          altText: "Nizza Gilet Butter Women S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/nizza-m",
        title: "M",
        price: { amount: "265.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/DP8PM61Q10-119_1.jpg?v=1765294524&width=600",
          altText: "Nizza Gilet Butter Women S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "265.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "265.00", currencyCode: "EUR" },
    },
  },
];

const MOCK_TRAVEL_SS26: Product[] = [
  {
    id: "gid://shopify/Product/travel-1",
    title: "Travel Linen Shirt",
    description: "Travel Linen Shirt",
    descriptionHtml: "<p>Travel Linen Shirt</p>",
    handle: "travel-linen-shirt",
    tags: [],
    productType: "Shirt",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["S", "M", "L"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/travel-1.jpg?v=1773390000&width=600",
        altText: "Travel Linen Shirt S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/travel-s",
        title: "S",
        price: { amount: "145.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-1.jpg?v=1773390000&width=600",
          altText: "Travel Linen Shirt S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/travel-m",
        title: "M",
        price: { amount: "145.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-1.jpg?v=1773390000&width=600",
          altText: "Travel Linen Shirt S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/travel-l",
        title: "L",
        price: { amount: "145.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-1.jpg?v=1773390000&width=600",
          altText: "Travel Linen Shirt S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "145.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "145.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/travel-2",
    title: "Travel Cotton Trousers",
    description: "Travel Cotton Trousers",
    descriptionHtml: "<p>Travel Cotton Trousers</p>",
    handle: "travel-cotton-trousers",
    tags: [],
    productType: "Trousers",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["S", "M", "L", "XL"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/travel-2.jpg?v=1773390001&width=600",
        altText: "Travel Cotton Trousers S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/trousers-s",
        title: "S",
        price: { amount: "195.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-2.jpg?v=1773390001&width=600",
          altText: "Travel Cotton Trousers S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/trousers-m",
        title: "M",
        price: { amount: "195.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-2.jpg?v=1773390001&width=600",
          altText: "Travel Cotton Trousers S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/trousers-l",
        title: "L",
        price: { amount: "195.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-2.jpg?v=1773390001&width=600",
          altText: "Travel Cotton Trousers S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/trousers-xl",
        title: "XL",
        price: { amount: "195.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XL" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-2.jpg?v=1773390001&width=600",
          altText: "Travel Cotton Trousers S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "195.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "195.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/travel-3",
    title: "Travel Lightweight Jacket",
    description: "Travel Lightweight Jacket",
    descriptionHtml: "<p>Travel Lightweight Jacket</p>",
    handle: "travel-lightweight-jacket",
    tags: [],
    productType: "Jacket",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["M", "L", "XL"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/travel-3.jpg?v=1773390002&width=600",
        altText: "Travel Lightweight Jacket S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/jacket-m",
        title: "M",
        price: { amount: "245.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-3.jpg?v=1773390002&width=600",
          altText: "Travel Lightweight Jacket S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/jacket-l",
        title: "L",
        price: { amount: "245.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-3.jpg?v=1773390002&width=600",
          altText: "Travel Lightweight Jacket S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/jacket-xl",
        title: "XL",
        price: { amount: "245.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XL" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-3.jpg?v=1773390002&width=600",
          altText: "Travel Lightweight Jacket S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "245.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "245.00", currencyCode: "EUR" },
    },
  },
  {
    id: "gid://shopify/Product/travel-4",
    title: "Travel Resort Shorts",
    description: "Travel Resort Shorts",
    descriptionHtml: "<p>Travel Resort Shorts</p>",
    handle: "travel-resort-shorts",
    tags: [],
    productType: "Shorts",
    vendor: "S&D",
    availableForSale: true,
    options: [{ id: "size", name: "Size", values: ["S", "M", "L"] }],
    images: [
      {
        url: "https://8pm.it/cdn/shop/files/travel-4.jpg?v=1773390003&width=600",
        altText: "Travel Resort Shorts S&D",
      },
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/shorts-s",
        title: "S",
        price: { amount: "125.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-4.jpg?v=1773390003&width=600",
          altText: "Travel Resort Shorts S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/shorts-m",
        title: "M",
        price: { amount: "125.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-4.jpg?v=1773390003&width=600",
          altText: "Travel Resort Shorts S&D",
        },
      },
      {
        id: "gid://shopify/ProductVariant/shorts-l",
        title: "L",
        price: { amount: "125.00", currencyCode: "EUR" },
        compareAtPrice: null,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
        image: {
          url: "https://8pm.it/cdn/shop/files/travel-4.jpg?v=1773390003&width=600",
          altText: "Travel Resort Shorts S&D",
        },
      },
    ],
    priceRange: {
      minVariantPrice: { amount: "125.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "125.00", currencyCode: "EUR" },
    },
  },
];

// ── Types ───────────────────────────────────────────────────────
interface FeaturedSelectionProps {
  mainSs26Products: Product[];
  travelSs26Products: Product[];
}

interface ProductCardProps {
  product: Product;
}

// ── Components ──────────────────────────────────────────────────
function FeaturedProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCartStore();

  const firstVariant = product.variants[0];
  const image = firstVariant?.image || product.images[0];
  const isSoldOut = !product.availableForSale;
  const sizes =
    product.options.find(
      (o) =>
        o.name.toLowerCase() === "size" || o.name.toLowerCase() === "taglia",
    )?.values || [];

  const formatPrice = (amount: string, currency: string) => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: currency || "EUR",
    }).format(parseFloat(amount));
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!firstVariant || isSoldOut) return;

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

  return (
    <div className="product-card">
      <div className="product-card__media">
        <div className="product-card__labels">
          {isSoldOut && (
            <span className="product-card__label product-card__label--sold-out">
              SOLD OUT
            </span>
          )}
        </div>

        {image && (
          <Image
            src={image.url}
            alt={image.altText || product.title}
            width={600}
            height={800}
            className="product-card__image product-card__image--primary"
            sizes="(min-width: 375px) 50vw"
          />
        )}

        {!isSoldOut && (
          <button
            className="product-card__quick-add-button"
            onClick={handleQuickAdd}
            aria-label="Quick Add"
          >
            <svg
              enableBackground="new 0 0 50 50"
              height="50px"
              viewBox="0 0 50 50"
              width="50px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect fill="none" height="50" width="50" />
              <line
                fill="none"
                stroke="#000000"
                strokeMiterlimit="10"
                strokeWidth="4"
                x1="9"
                x2="41"
                y1="25"
                y2="25"
              />
              <line
                fill="none"
                stroke="#000000"
                strokeMiterlimit="10"
                strokeWidth="4"
                x1="25"
                x2="25"
                y1="9"
                y2="41"
              />
            </svg>
          </button>
        )}

        <button
          className="product-card__wishlist-button"
          aria-label="Add to Wishlist"
        >
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.87891 0.900391V0.90332C9.0766 0.917727 9.2303 1.07762 9.23047 1.2793V11.4082C9.23047 11.4337 9.22738 11.4587 9.22266 11.4824L9.20312 11.5498C9.18615 11.5951 9.15852 11.6413 9.12305 11.6768L9.11719 11.6816C9.08491 11.7093 9.04504 11.7385 8.99609 11.7568C8.95613 11.7718 8.91093 11.7842 8.8584 11.7842C8.81058 11.7841 8.76157 11.7722 8.7207 11.7568V11.7559C8.69484 11.7469 8.67174 11.736 8.65137 11.7227L8.59473 11.6768L5.0625 8.14453L1.53125 11.6768L1.52539 11.6816C1.49316 11.7093 1.4541 11.7385 1.40527 11.7568C1.36529 11.7718 1.32015 11.7841 1.26758 11.7842C1.24352 11.7842 1.2188 11.7812 1.19531 11.7764L1.12891 11.7568C1.10458 11.7477 1.08263 11.7353 1.0625 11.7217L1.00781 11.6768C0.991718 11.6607 0.975654 11.6423 0.961914 11.6221L0.926758 11.5547C0.91111 11.513 0.900391 11.4634 0.900391 11.4121V1.2793L0.907227 1.20215C0.942426 1.02858 1.09453 0.900548 1.2793 0.900391H8.87891ZM1.65918 10.4961L4.78223 7.37305V7.37109L4.80957 7.3418C4.95655 7.18916 5.19833 7.19149 5.34766 7.34082L8.5 10.4932V1.65918H1.65918V10.4961Z"
              fill="black"
              stroke="black"
              strokeWidth="0.2"
            />
          </svg>
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="product-card__wishlist-filled"
          >
            <path
              d="M8.87891 0.900391V0.90332C9.0766 0.917727 9.2303 1.07762 9.23047 1.2793V11.4082C9.23047 11.4337 9.22738 11.4587 9.22266 11.4824L9.20312 11.5498C9.18615 11.5951 9.15852 11.6413 9.12305 11.6768L9.11719 11.6816C9.08491 11.7093 9.04504 11.7385 8.99609 11.7568C8.95613 11.7718 8.91093 11.7842 8.8584 11.7842C8.81058 11.7841 8.76157 11.7722 8.7207 11.7568V11.7559C8.69484 11.7469 8.67174 11.736 8.65137 11.7227L8.59473 11.6768L5.0625 8.14453L1.53125 11.6768L1.52539 11.6816C1.49316 11.7093 1.4541 11.7385 1.40527 11.7568C1.36529 11.7718 1.32015 11.7841 1.26758 11.7842C1.24352 11.7842 1.2188 11.7812 1.19531 11.7764L1.12891 11.7568C1.10458 11.7477 1.08263 11.7353 1.0625 11.7217L1.00781 11.6768C0.991718 11.6607 0.975654 11.6423 0.961914 11.6221L0.926758 11.5547C0.91111 11.513 0.900391 11.4634 0.900391 11.4121V1.2793L0.907227 1.20215C0.942426 1.02858 1.09453 0.900548 1.2793 0.900391H8.87891Z"
              fill="black"
              stroke="black"
              strokeWidth="0.2"
            />
          </svg>
        </button>
      </div>

      <div className="product-card__content">
        <div className="product-card__vendor-wrapper">
          <h3 className="product-card__vendor">{product.vendor || "S&D"}</h3>
        </div>

        <div className="product-card__description-wrapper">
          <p className="product-card__description">{product.title}</p>
          {sizes.length > 0 && (
            <div className="product-card__sizes-overlay">
              <ul className="product-card__sizes-overlay__grid">
                {sizes.map((size) => (
                  <li key={size} className="product-card__sizes-overlay__item">
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="product-card__price-container">
          <span className="product-card__price">
            {firstVariant?.price
              ? formatPrice(
                  firstVariant.price.amount,
                  firstVariant.price.currencyCode,
                )
              : ""}
          </span>
        </div>
      </div>

      <Link
        href={`/products/${product.handle}`}
        className="product-card__link hover"
        aria-label={`${product.vendor || "S&D"} ${product.title}`}
      />
    </div>
  );
}

export function FeaturedSelection({
  mainSs26Products,
  travelSs26Products,
}: FeaturedSelectionProps) {
  const [activeTab, setActiveTab] = useState("collection_1");
  const mainScrollRef = useRef<HTMLDivElement>(null);
  const travelScrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Use real data if available, otherwise fallback to mock
  const mainProducts =
    mainSs26Products.length > 0 ? mainSs26Products : MOCK_MAIN_SS26;
  const travelProducts =
    travelSs26Products.length > 0 ? travelSs26Products : MOCK_TRAVEL_SS26;

  const activeProductList =
    activeTab === "collection_1" ? mainProducts : travelProducts;
  const totalPages = Math.ceil(activeProductList.length / itemsPerPage);

  const getActiveScrollRef = useCallback(() => {
    return activeTab === "collection_1" ? mainScrollRef : travelScrollRef;
  }, [activeTab]);

  const updatePagination = useCallback(() => {
    const el = getActiveScrollRef().current;
    if (el) {
      const scrollLeft = el.scrollLeft;
      const containerWidth = el.clientWidth || 1;
      const page = Math.round(scrollLeft / containerWidth) + 1;
      setCurrentPage(page);
    }
  }, [getActiveScrollRef]);

  useEffect(() => {
    const el = getActiveScrollRef().current;
    if (!el) return;

    const handleScroll = () => updatePagination();
    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, [getActiveScrollRef, updatePagination, activeTab]);

  const handlePrev = () => {
    const el = getActiveScrollRef().current;
    if (el) {
      el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    const el = getActiveScrollRef().current;
    if (el) {
      el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    const el = getActiveScrollRef().current;
    if (el) {
      el.scrollTo({
        left: (page - 1) * el.clientWidth,
        behavior: "smooth",
      });
      setCurrentPage(page);
    }
  };

  return (
    <div className="featured-selection__block">
      {/* Header */}
      <div className="featured-selection__header">
        <div className="featured-selection__header-left">
          <p className="featured-selection__title">new in</p>

          <div className="featured-selection__navigation">
            <button
              className={`featured-selection__tab ${activeTab === "collection_1" ? "active" : ""}`}
              data-collection="collection_1"
              type="button"
              onClick={() => handleTabChange("collection_1")}
            >
              MAIN SS26
            </button>
            <button
              className={`featured-selection__tab ${activeTab === "collection_2" ? "active" : ""}`}
              data-collection="collection_2"
              type="button"
              onClick={() => handleTabChange("collection_2")}
            >
              TRAVEL SS26
            </button>
          </div>
        </div>

        <div className="featured-selection__controls">
          <span className="featured-selection__counter">
            <span className="featured-selection__counter-current">
              {currentPage}
            </span>{" "}
            /{" "}
            <span className="featured-selection__counter-total">
              {totalPages}
            </span>
          </span>
          <div className="featured-selection__navigation-buttons">
            <button
              className={`featured-selection__prev ${currentPage <= 1 ? "no-active" : ""}`}
              type="button"
              onClick={handlePrev}
            >
              PREVIOUS
            </button>
            <button
              className="featured-selection__next"
              type="button"
              onClick={handleNext}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="featured-selection__slider-wrapper">
        <div
          className={`featured-selection__collection ${activeTab === "collection_1" ? "active" : ""}`}
          data-collection="collection_1"
        >
          <div className="selection__splide splide is-overflow is-initialized splide--slide splide--ltr splide--draggable is-active">
            <div
              ref={mainScrollRef}
              className="splide__track"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <ul className="splide__list">
                {mainProducts.map((product) => (
                  <li
                    key={product.id}
                    className="splide__slide"
                    style={{
                      marginRight: 2,
                      width: "calc(25% - 1.5px)",
                    }}
                  >
                    <FeaturedProductCard product={product} />
                  </li>
                ))}
              </ul>
            </div>
            {totalPages > 0 && (
              <ul
                className="splide__pagination"
                role="tablist"
                aria-label="Select a slide to show"
              >
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`splide__pagination__page ${currentPage === i + 1 ? "is-active" : ""}`}
                    role="tab"
                    aria-selected={currentPage === i + 1}
                  >
                    <button
                      type="button"
                      onClick={() => goToPage(i + 1)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div
          className={`featured-selection__collection ${activeTab === "collection_2" ? "active" : ""}`}
          data-collection="collection_2"
        >
          <div className="selection__splide splide is-overflow is-initialized splide--slide splide--ltr splide--draggable is-active">
            <div
              ref={travelScrollRef}
              className="splide__track"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <ul className="splide__list">
                {travelProducts.map((product) => (
                  <li
                    key={product.id}
                    className="splide__slide"
                    style={{
                      marginRight: 2,
                      width: "calc(25% - 1.5px)",
                    }}
                  >
                    <FeaturedProductCard product={product} />
                  </li>
                ))}
              </ul>
            </div>
            {totalPages > 0 && (
              <ul
                className="splide__pagination"
                role="tablist"
                aria-label="Select a slide to show"
              >
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`splide__pagination__page ${currentPage === i + 1 ? "is-active" : ""}`}
                    role="tab"
                    aria-selected={currentPage === i + 1}
                  >
                    <button
                      type="button"
                      onClick={() => goToPage(i + 1)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Mock categories data ──────────────────────────────────────────
const MOCK_CATEGORIES = [
  {
    id: "jackets",
    title: "Jackets - Main SS26",
    handle: "giacche-new-in",
    image: "https://8pm.it/cdn/shop/files/D8PM61K14-A-385_1.jpg?v=1773390095",
    alt: "Jackets - Main SS26",
  },
  {
    id: "top",
    title: "Top - Main SS26",
    handle: "top-new-in",
    image: "https://8pm.it/cdn/shop/files/D8PM61H04-255_1.jpg?v=1773390088",
    alt: "Top - Main SS26",
  },
  {
    id: "trousers",
    title: "Trousers - Main SS26",
    handle: "pantaloni-new-in",
    image: "https://8pm.it/cdn/shop/files/D8PM61P05-119_1.jpg?v=1771922121",
    alt: "Trousers - Main SS26",
  },
  {
    id: "blouses",
    title: "Blouses - Main SS26",
    handle: "bluse-new-in",
    image: "https://8pm.it/cdn/shop/files/D8PM61B44-138_1.jpg?v=1771922098",
    alt: "Blouses - Main SS26",
  },
];

interface CategoryCardProps {
  category: (typeof MOCK_CATEGORIES)[number];
}

function FeaturedCategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/collections/${category.handle}`}
      className="featured-category__card hover"
    >
      <div className="featured-category__image">
        <Image
          src={category.image}
          alt={category.alt}
          width={600}
          height={600}
          sizes="(max-width: 767px) 70vw, (max-width: 1400px) 33vw, 25vw"
          className="featured-category__image"
        />
      </div>
      <h3 className="featured-category__title">{category.title}</h3>
    </Link>
  );
}

export function FeaturedCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(MOCK_CATEGORIES.length / itemsPerPage);

  const handlePrev = () => {
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
    }
  };

  const goToPage = (page: number) => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({
        left: (page - 1) * el.clientWidth,
        behavior: "smooth",
      });
      setCurrentPage(page);
    }
  };

  const updatePagination = useCallback(() => {
    const el = scrollRef.current;
    if (el) {
      const scrollLeft = el.scrollLeft;
      const containerWidth = el.clientWidth || 1;
      const page = Math.round(scrollLeft / containerWidth) + 1;
      setCurrentPage(page);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => updatePagination();
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [updatePagination]);

  return (
    <div className="featured-categories__block">
      <div className="featured-categories__header">
        <div className="featured-categories__header-left">
          <p className="featured-categories__title">main ss26</p>

          <div className="featured-categories__navigation ">
            <button
              className="featured-categories__tab active"
              data-list="list_1"
              type="button"
            >
              CLOTHING
            </button>
          </div>
        </div>

        <div className="featured-categories__controls">
          <span className="featured-categories__counter">
            <span className="featured-categories__counter-current">
              {currentPage}
            </span>{" "}
            /{" "}
            <span className="featured-categories__counter-total">
              {totalPages}
            </span>
          </span>
          <div className="featured-categories__navigation-buttons">
            <button
              className={`featured-categories__prev ${currentPage <= 1 ? "no-active" : ""}`}
              type="button"
              onClick={handlePrev}
            >
              PREVIOUS
            </button>
            <button
              className="featured-categories__next"
              type="button"
              onClick={handleNext}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>

      <div className="featured-categories__slider-wrapper">
        <div className="featured-categories__list active" data-list="list_1">
          <div className="categories__splide splide is-initialized splide--slide splide--ltr splide--draggable is-active">
            <div
              ref={scrollRef}
              className="splide__track"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <ul className="splide__list">
                {MOCK_CATEGORIES.map((category) => (
                  <li
                    key={category.id}
                    className="splide__slide"
                    style={{
                      marginRight: 2,
                      width: "calc(25% - 1.5px)",
                    }}
                  >
                    <FeaturedCategoryCard category={category} />
                  </li>
                ))}
              </ul>
            </div>
            {totalPages > 0 && (
              <ul
                className="splide__pagination"
                role="tablist"
                aria-label="Select a slide to show"
              >
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`splide__pagination__page ${currentPage === i + 1 ? "is-active" : ""}`}
                    role="tab"
                    aria-selected={currentPage === i + 1}
                  >
                    <button
                      type="button"
                      onClick={() => goToPage(i + 1)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
