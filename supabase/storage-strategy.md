# Supabase Storage Strategy

## Buckets
- `product-images-public`: storefront-ready optimized images for public viewing
- `product-images-originals`: admin uploads and originals
- `banner-assets`: homepage and campaign assets
- `ugc-reviews`: optional customer review media, protected with signed URLs
- `profile-avatars`: authenticated user assets

## Access Rules
- Public storefront assets should use `product-images-public`
- Admin upload flow writes originals, then a Render worker or Edge Function can optimize and copy derivatives
- UGC review media should remain private and be delivered with signed URLs after moderation

## Naming Convention
- `products/{product_id}/{variant_or_color}/{filename}`
- `banners/{campaign_slug}/{filename}`
- `reviews/{review_id}/{filename}`
