/**
 * Supabase Storage Utilities
 * Handles public URL construction for assets stored in Supabase buckets.
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

/**
 * Returns the public URL for a file in a Supabase storage bucket.
 * 
 * @param path The path to the file within the bucket (e.g., 'products/main.webp')
 * @param bucket The name of the storage bucket (defaults to 'images')
 * @returns The full public URL to the asset
 */
export function getStoragePublicUrl(path: string | null | undefined, bucket: string = "images"): string {
  if (!path) return "/placeholders/product-1.svg";

  // If it's already a full URL, return it as is
  if (path.startsWith("http")) return path;

  // Ensure path doesn't start with a slash
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  
  // URL encode the path segments (e.g., spaces to %20)
  const encodedPath = cleanPath.split("/").map(part => encodeURIComponent(part)).join("/");
  
  // Construct Supabase public storage URL
  // Format: https://[PROJECT_REF].supabase.co/storage/v1/object/public/[BUCKET_NAME]/[FILE_PATH]
  return `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${encodedPath}`;
}
