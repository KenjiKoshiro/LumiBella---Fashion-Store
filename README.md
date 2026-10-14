# LumiBelle — fashion demo

A Thailand-based fashion storefront demo using Next.js, React, Tailwind and Supabase. Product base prices are THB. **No real payments, orders, deliveries, or emails are created.**

Production: https://lumi-bella-fashion-store.vercel.app

## October 2026 repair and redesign

- Restored the paused original Supabase project. Verified 42 products, 6 categories and 42 product-image records without reseeding or replacing them.
- Enabled row-level security on categories, products, product_images and admin_users. Visitors can read active catalog entries; client writes are denied. Authenticated users can read only their own admin membership. The SQL is recorded in `supabase/migrations/20261014173441_secure_lumibelle_demo_catalog.sql`.
- Reworked catalog queries around the actual database schema. Removed calls to absent variant/size-chart tables, used existing stock, preserved saved size information and kept fallback browsing for missing, empty or unreachable databases. A failed live search no longer invents fallback matches.
- Redesigned the home page and navigation using UI/UX Pro Max guidance: warm blush surfaces, dark rose actions, readable typography, visible keyboard focus, labelled inputs, mobile navigation and reduced-motion support. System fonts avoid external font downloads during builds.
- Added working category filters and price/name sorting. Search supports up to 100 characters. Broken product images have local illustration fallbacks.
- Added currency selection for THB, USD, EUR, GBP, JPY, SGD and AUD. Cards, details, bags and receipts share the same formatter. Selection persists when browser storage is available.
- Added guest demo checkout and a session-only sample receipt. It collects no address or payment details. A fabricated URL order number cannot confirm a purchase. Failed receipt storage preserves the bag.
- Replaced the cart overlay with a native modal dialog for focus containment and Escape handling. Saved bag/wishlist data is validated; corrupt or blocked storage no longer crashes the app or overwrites the bag during hydration.
- Made the contact form a browser-only demonstration. Removed fictional contact details, delivery promises and testimonials. Account/admin sample screens are labelled; profile inputs do not pretend to save data. Admin/account routes retain authentication guards.
- Kept real checkout/contact API routes disabled with HTTP 503 and explanatory demo responses. No Shopify, payment processor or email service is installed.

## APIs and services

**Supabase:** the original project is `wzuxnpxkpbjgotnccoav`. The app reads its catalog with the existing public anon key under RLS. Never place a service-role key in a `NEXT_PUBLIC_` variable. Free projects may pause again after inactivity; the saved catalog keeps the demonstration browseable. No artificial keep-alive job is installed.

**Frankfurter:** listed in [public-apis](https://github.com/public-apis/public-apis#currency-exchange). `/api/currencies` fetches THB reference rates from [Frankfurter v2](https://frankfurter.dev/), caches for one hour, validates the response, and uses an eight-second upstream timeout. Rates are dated estimates, not payment quotes. If unavailable, the selector stays in THB and explains why. Customer data is not sent to this API.

**SerpApi:** evaluated but **not integrated** because the owner has no account/API key. The demo uses its existing real-product catalog. No scraped Google Shopping listings are presented as LumiBelle inventory. Adding a discovery section later requires a server-only key, quota controls, source attribution and review of content reuse rights.

## Local setup

Use Node.js 22 or 24 and npm. Run `npm ci`.

Create an ignored `.env.local` with the project's `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`, or pull them from the linked Vercel project using `vercel env pull .env.local`. Without these settings, the saved catalog remains available. Do not commit credentials.

```sh
npm run dev
npm test
npm run typecheck
npm run build
npm start
```

Development uses `.next-dev`; production uses `.next`. This separation avoids a OneDrive `readlink` error caused by dev startup deleting the production cache. Both directories are ignored.

## Database migrations

The historical `0001_init.sql` / `0002_rls.sql` describe a larger schema than the restored project. **Do not blindly replay them or the old seed files on the existing database.** The October security migration targets the inspected four-table schema and preserves existing catalog rows. It was applied through Supabase's migration API; the matching SQL file records the repair. Provisioning a new database is a separate setup task.

Verification: all four tables have RLS enabled; anonymous inserts and authenticated updates are denied; an anonymous-role SELECT still returns all 42 active products. Post-repair advisors report no RLS errors. Catalog GraphQL visibility is intentional; admin membership rows remain owner-restricted. Supabase's leaked-password-protection warning remains and should be addressed before collecting real customer accounts: https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection

## Verification and limitations

The 12 regression tests use Node's built-in test runner and the existing TypeScript compiler, with no new test dependency. They cover rate validation, currency conversion/fallback, persisted-cart validation, invalid/empty checkout, sample receipt integrity and zero demo shipping/tax. TypeScript and production builds are also checked.

Browser verification covers catalog loading, filtering/sorting, currency changes, adding/increasing bag items, guest demo checkout, receipt display and wishlist persistence. Deployment verification checks the public Vercel site after release. These checks are not a complete security audit or a guarantee against third-party outages.

Real payments, real email, SerpApi search, inventory reservations and real customer/admin order management are outside this demo. Sample account/admin layouts remain previews; successful authenticated signup/admin editing is not part of the tested demo journey. Some original product image links are unavailable and intentionally use local illustrations. No paid plan, domain purchase or provider agreement is required for the implemented demo flow.

## Vercel release

Project: `lumi-bella-fashion-store`, team: `kenjikoshiros-projects`. Keep Supabase configuration in the intended Preview/Production environments. Run tests, type checks and the production build before release, then inspect deployment status and exercise the public site. Keep this repo's default branch aligned with the released commit. Never disable deployment protection merely to test a preview.

### Product photo repair - 2026-10-15

All 42 catalog photo URLs returned HTTP 200 with WebP image data. Historical
`broken` flags in the fallback catalog were overriding valid Supabase photos.
Live image records now take precedence in modern and legacy queries. Existing
storage files are preserved; no external photo API or replacement uploads are
needed. Runtime image-error placeholders remain for unavailable photos.
