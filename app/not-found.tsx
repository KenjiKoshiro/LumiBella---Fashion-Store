import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-[32px] bg-surface-low p-12 text-center">
      <h1 className="font-headline text-4xl font-extrabold">Page not found</h1>
      <p className="mt-4 text-muted">The page you're looking for doesn't exist.</p>
      <Link href="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 font-headline font-semibold text-white">
        Back home
      </Link>
    </div>
  );
}
