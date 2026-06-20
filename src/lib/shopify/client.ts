import {
  createStorefrontApiClient,
  ClientResponse,
} from "@shopify/storefront-api-client";
import {
  getProductsQuery,
  getProductQuery,
  createCartMutation,
  addToCartMutation,
  updateCartLineMutation,
  removeCartLineMutation,
  getCartQuery,
  getCollectionsQuery,
  getCollectionQuery,
} from "./queries";
import { Product, Collection, Cart, CartItem } from "@/types";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

if (!domain || !token) {
  throw new Error("Shopify store domain and storefront token must be provided");
}

export const client = createStorefrontApiClient({
  storeDomain: domain,
  apiVersion: "2024-07",
  publicAccessToken: token,
});

export async function getProducts(first: number = 20): Promise<Product[]> {
  try {
    const response: ClientResponse<any> = await client.request(
      getProductsQuery,
      {
        variables: { first },
      },
    );
    const products = response.data?.products?.nodes || [];
    return products.map((product: any) => normalizeProduct(product));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

function normalizeProduct(product: any): Product {
  return {
    ...product,
    images: product.images?.nodes || [],
    variants: product.variants?.nodes || [],
  };
}

export async function getProduct(handle: string): Promise<Product | null> {
  try {
    const response: ClientResponse<any> = await client.request(
      getProductQuery,
      {
        variables: { handle },
      },
    );
    const product = response.data?.product;
    if (!product) return null;
    return normalizeProduct(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function getCollections(): Promise<Collection[]> {
  try {
    const response: ClientResponse<any> = await client.request(
      getCollectionsQuery,
      {
        variables: { first: 10 },
      },
    );
    return response.data?.collections?.nodes || [];
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
}

export async function getCollection(
  handle: string,
): Promise<Collection | null> {
  try {
    const response: ClientResponse<any> = await client.request(
      getCollectionQuery,
      {
        variables: { handle },
      },
    );
    const collection = response.data?.collection;
    if (!collection) return null;

    // Normalize products from { nodes: [...] } to flat array and normalize nested fields
    const products =
      collection.products?.nodes.map((product: any) =>
        normalizeProduct(product),
      ) || [];

    return {
      ...collection,
      products,
    };
  } catch (error) {
    console.error("Error fetching collection:", error);
    return null;
  }
}

export async function createCart(): Promise<Cart> {
  try {
    const response: ClientResponse<any> =
      await client.request(createCartMutation);
    return response.data?.cartCreate?.cart;
  } catch (error) {
    console.error("Error creating cart:", error);
    throw error;
  }
}

export async function addToCart(cartId: string, item: CartItem): Promise<Cart> {
  try {
    const response: ClientResponse<any> = await client.request(
      addToCartMutation,
      {
        variables: {
          cartId,
          lines: [
            {
              merchandiseId: item.variantId,
              quantity: item.quantity,
              attributes: item.attributes || [],
            },
          ],
        },
      },
    );
    return response.data?.cartLinesAdd?.cart;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}

export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number,
): Promise<Cart> {
  try {
    const response: ClientResponse<any> = await client.request(
      updateCartLineMutation,
      {
        variables: {
          cartId,
          lines: [{ id: lineId, quantity }],
        },
      },
    );
    return response.data?.cartLinesUpdate?.cart;
  } catch (error) {
    console.error("Error updating cart line:", error);
    throw error;
  }
}

export async function removeCartLine(
  cartId: string,
  lineId: string,
): Promise<Cart> {
  try {
    const response: ClientResponse<any> = await client.request(
      removeCartLineMutation,
      {
        variables: { cartId, lineIds: [lineId] },
      },
    );
    return response.data?.cartLinesRemove?.cart;
  } catch (error) {
    console.error("Error removing cart line:", error);
    throw error;
  }
}

export async function getCart(cartId: string): Promise<Cart | null> {
  try {
    const response: ClientResponse<any> = await client.request(getCartQuery, {
      variables: { cartId },
    });
    return response.data?.cart || null;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return null;
  }
}
