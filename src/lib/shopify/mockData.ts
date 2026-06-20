import type { Product, Collection } from "@/types";

export const MOCK_PRODUCTS: Product[] = [
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

export const MOCK_MAIN_SS26: Product[] = MOCK_PRODUCTS;

export const MOCK_TRAVEL_SS26: Product[] = [
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
        url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
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
          url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
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
          url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
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
          url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
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
        url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600",
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
          url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600",
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
          url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600",
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
          url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600",
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
          url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600",
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
        url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
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
          url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
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
          url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
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
          url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
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
        url: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600",
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
          url: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600",
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
          url: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600",
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
          url: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600",
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

export const MOCK_COLLECTIONS: Record<string, Collection> = {
  "main-ss26": {
    id: "gid://shopify/Collection/main-ss26",
    title: "Main SS26",
    description: "Main Spring/Summer 2026 collection",
    handle: "main-ss26",
    image: {
      url: "https://8pm.it/cdn/shop/files/Progetto_senza_titolo_-_2026-05-27T101943.338.png?v=1779870176&width=2000",
      altText: "Main SS26 Collection",
    },
    products: MOCK_MAIN_SS26,
  },
  "travel-capsule-ss26": {
    id: "gid://shopify/Collection/travel-capsule-ss26",
    title: "Travel Capsule SS26",
    description: "Travel Capsule Spring/Summer 2026",
    handle: "travel-capsule-ss26",
    image: {
      url: "https://8pm.it/cdn/shop/files/Progetto_senza_titolo_-_2026-05-27T102033.734.png?v=1779870170&width=2000",
      altText: "Travel Capsule SS26 Collection",
    },
    products: MOCK_TRAVEL_SS26,
  },
};

/** Mock request handler for the hooks that use `client.request()` directly */
export function mockClientRequest(
  query: string,
  _variables?: Record<string, unknown>,
) {
  // Products queries
  if (query.includes("GetProducts")) {
    return {
      data: {
        products: {
          nodes: MOCK_PRODUCTS,
        },
      },
    };
  }
  if (query.includes("GetProduct")) {
    const handle = _variables?.handle as string;
    const product = MOCK_PRODUCTS.find((p) => p.handle === handle) || null;
    return { data: { product } };
  }
  // Collection queries
  if (query.includes("GetCollections")) {
    const collections = Object.values(MOCK_COLLECTIONS).map((c) => ({
      id: c.id,
      title: c.title,
      handle: c.handle,
      description: c.description,
      image: c.image,
    }));
    return {
      data: {
        collections: { nodes: collections },
      },
    };
  }
  if (query.includes("GetCollection")) {
    const handle = _variables?.handle as string;
    const collection = MOCK_COLLECTIONS[handle] || null;
    return { data: { collection } };
  }
  // Cart mutations – return empty cart
  if (query.includes("cartCreate")) {
    return {
      data: {
        cartCreate: {
          cart: {
            id: "mock-cart-id",
            checkoutUrl: "#",
            cost: {
              subtotalAmount: { amount: "0.00", currencyCode: "EUR" },
              totalAmount: { amount: "0.00", currencyCode: "EUR" },
            },
            lines: [],
            totalQuantity: 0,
          },
        },
      },
    };
  }
  if (
    query.includes("cartLinesAdd") ||
    query.includes("cartLinesUpdate") ||
    query.includes("cartLinesRemove")
  ) {
    return {
      data: {
        cartLinesAdd: {
          cart: {
            id: "mock-cart-id",
            checkoutUrl: "#",
            cost: {
              subtotalAmount: { amount: "0.00", currencyCode: "EUR" },
              totalAmount: { amount: "0.00", currencyCode: "EUR" },
            },
            lines: [],
            totalQuantity: 0,
          },
        },
      },
    };
  }
  if (query.includes("GetCart")) {
    return {
      data: {
        cart: {
          id: "mock-cart-id",
          checkoutUrl: "#",
          cost: {
            subtotalAmount: { amount: "0.00", currencyCode: "EUR" },
            totalAmount: { amount: "0.00", currencyCode: "EUR" },
          },
          lines: [],
          totalQuantity: 0,
        },
      },
    };
  }
  return { data: null };
}
