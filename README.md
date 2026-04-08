# LumiBelle storefront

## What changed

- Reworked the product model so the storefront, cart, wishlist, size recommendation, and admin screens use one consistent TypeScript shape.
- Added a resilient catalog data layer that tries the modern Supabase schema first, then a legacy simple products table, then a local fallback dataset.
- Replaced brittle mock content with a **42-product** fallback catalog based on the uploaded product image list.
- Used the uploaded image audit so **14 verified image URLs** stay live and **28 broken links** fall back to local placeholders.
- Refreshed the home page, shop, product, category, search, contact, about, FAQ, new arrivals, best sellers, and sale pages.
- Simplified runtime setup by removing dependency on remote Google font fetches during build.
- Added `supabase/seed_products.sql` to help populate the richer database schema.

## Environment variables

Copy `.env.example` to `.env.local` and fill in your real keys.

## Run locally

```bash
npm install
npm run dev
```

## Supabase

Run the migrations first, then `supabase/seed_products.sql` if you want the richer schema populated with the included catalog.
