export default function OrderSuccessPage({ searchParams }: { searchParams: { order?: string } }) {
  const orderId = searchParams.order ?? "LB-000001";

  return (
    <div className="mx-auto max-w-3xl rounded-[40px] bg-surface-low p-10 text-center shadow-ambient">
      <p className="font-headline text-xs font-semibold uppercase tracking-[0.35em] text-primary">Order confirmed</p>
      <h1 className="mt-4 font-headline text-5xl font-extrabold tracking-tight">Thank you for shopping LumiBelle</h1>
      <p className="mt-5 text-lg leading-8 text-muted">Your order <span className="font-semibold text-ink">{orderId}</span> has been created successfully. In production, the Render worker can send order confirmation emails, low-stock updates, and fulfillment notifications.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4"><a href="/account/orders" className="rounded-full bg-primary px-6 py-3 font-headline font-semibold text-white">View order history</a><a href="/shop" className="rounded-full bg-white px-6 py-3 font-headline font-semibold text-ink">Continue shopping</a></div>
    </div>
  );
}
