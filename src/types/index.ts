export interface ShopifyImage {
  url: string;
  altText: string | null;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  compareAtPrice?: {
    amount: string;
    currencyCode: string;
  } | null;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  image?: ShopifyImage | null;
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  descriptionHtml?: string;
  handle: string;
  tags: string[];
  productType: string;
  vendor: string;
  images: ShopifyImage[];
  variants: ProductVariant[];
  options: ProductOption[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  availableForSale: boolean;
  metafields?: {
    key: string;
    value: string;
  }[];
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  handle: string;
  image?: ShopifyImage | null;
  products: Product[];
}

export interface CartLineItem {
  id: string;
  quantity: number;
  merchandise: ProductVariant;
  attributes: { key: string; value: string }[];
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: { amount: string; currencyCode: string };
    totalAmount: { amount: string; currencyCode: string };
    totalTaxAmount?: { amount: string; currencyCode: string } | null;
  };
  lines: CartLineItem[];
  totalQuantity: number;
}

export interface MenuItem {
  title: string;
  url: string;
  items?: MenuItem[];
}

export interface PageInfo {
  title: string;
  description: string;
}

export interface CartItem {
  variantId: string;
  quantity: number;
  attributes?: { key: string; value: string }[];
}
