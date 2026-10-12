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

## Recovery and service availability

The public storefront keeps displaying the existing preview catalog when Supabase
is missing or unreachable. A status banner identifies that catalog as a preview.
Local placeholder image paths stay local. The current category query matches
the checked-in schema, which has no `categories.image` column.

Checkout and contact delivery currently return HTTP 503 instead of inventing an
order confirmation or claiming that an email was sent. Failed checkout requests
preserve the cart. The confirmation page does not treat a query-string order
number as proof of a purchase.

Real commerce and email are pending Shopify and Resend connection, provider terms,
merchant setup, and sender verification. Keep ordering unavailable until those
services are connected and the full checkout and delivery flows have been tested.
