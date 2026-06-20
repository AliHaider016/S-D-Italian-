# S&D — Italian Women's Fashion

A headless Shopify storefront built with Next.js for S&D, an Italian women's fashion brand.

The app runs out of the box with built-in mock data — no Shopify store required to develop or preview.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Shopify Integration

To connect a real Shopify store, create a `.env.local` file:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your-public-storefront-token
```

When these env vars are **not set**, the app automatically falls back to mock data so you can develop without a Shopify store.

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **State:** Zustand
- **Shopify API:** Storefront API Client (`@shopify/storefront-api-client`)
