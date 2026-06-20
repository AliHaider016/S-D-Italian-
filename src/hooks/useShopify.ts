import { useState, useEffect } from 'react';
import { client } from '@/lib/shopify/client';
import { Product, Collection } from '@/types';
import {
  getProductsQuery,
  getProductQuery,
  getCollectionsQuery,
  getCollectionQuery,
} from '@/lib/shopify/queries';

export function useProducts(limit: number = 20) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await client.request(getProductsQuery, {
          variables: { first: limit },
        } as any);
        setProducts(response.data?.products?.nodes || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching products');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [limit]);

  return { products, loading, error };
}

export function useProduct(handle: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const response = await client.request(getProductQuery, {
          variables: { handle },
        } as any);
        setProduct(response.data?.product || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching product');
      } finally {
        setLoading(false);
      }
    }

    if (handle) {
      fetchProduct();
    }
  }, [handle]);

  return { product, loading, error };
}

export function useCollections() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCollections() {
      try {
        setLoading(true);
        const response = await client.request(getCollectionsQuery, {
          variables: { first: 10 },
        } as any);
        setCollections(response.data?.collections?.nodes || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching collections');
      } finally {
        setLoading(false);
      }
    }

    fetchCollections();
  }, []);

  return { collections, loading, error };
}

export function useCollection(handle: string) {
  const [collection, setCollection] = useState<Collection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCollection() {
      try {
        setLoading(true);
        const response = await client.request(getCollectionQuery, {
          variables: { handle },
        } as any);
        const data = response.data?.collection;
        if (data) {
          setCollection({
            ...data,
            products: data.products?.nodes || [],
          });
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching collection');
      } finally {
        setLoading(false);
      }
    }

    if (handle) {
      fetchCollection();
    }
  }, [handle]);

  return { collection, loading, error };
}
