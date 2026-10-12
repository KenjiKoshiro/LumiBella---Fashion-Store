export default function OrderSuccessPage({ searchParams }: { searchParams: { order?: string } }) {
  // A URL parameter is not proof of an order. Confirmations require verification
  // by the merchant integration before they can be displayed.
  const orderId = searchParams.order;

  return (
    <div className="mx-auto max-w-3xl rounded-[40px] bg-surface-low p-10 text-center shadow-ambient">
      <p className="font-headline text-xs font-semibold uppercase tracking-[0.35em] text-primary">Order status unavailable</p>
      <h1 className="mt-4 font-headline text-5xl font-extrabold tracking-tight">We cannot confirm this order</h1>
      <p className="mt-5 text-lg leading-8 text-muted">{orderId ? <>We could not verify order <span className="font-semibold text-ink">{orderId}</span>. </> : null}Online ordering is temporarily unavailable. No purchase is confirmed by this page.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4"><a href="/account/orders" className="rounded-full bg-primary px-6 py-3 font-headline font-semibold text-white">View order history</a><a href="/shop" className="rounded-full bg-white px-6 py-3 font-headline font-semibold text-ink">Continue shopping</a></div>
    </div>
  );
}
