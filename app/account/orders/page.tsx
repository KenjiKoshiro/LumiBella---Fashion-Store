const orders = [
  { id: "LB-24001", status: "Processing", total: "$136.00", date: "Mar 28, 2026" },
  { id: "LB-23988", status: "Delivered", total: "$82.00", date: "Mar 11, 2026" },
  { id: "LB-23931", status: "Delivered", total: "$58.00", date: "Feb 25, 2026" }
];

export default function OrderHistoryPage() {
  return (
    <div className="rounded-[32px] bg-surface-card p-6 shadow-ambient">
      <h1 className="font-headline text-4xl font-extrabold tracking-tight">Order history</h1>
      <p className="mt-3 text-muted">Customers can view order statuses, reorder items, and track fulfillment here.</p>

      <div className="mt-8 overflow-hidden rounded-[28px] border border-outline/15">
        <table className="min-w-full bg-white text-left text-sm">
          <thead className="bg-surface-low">
            <tr>{["Order", "Date", "Status", "Total"].map((head) => <th key={head} className="px-5 py-4 font-semibold text-ink">{head}</th>)}</tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-outline/10"><td className="px-5 py-4 font-semibold">{order.id}</td><td className="px-5 py-4 text-muted">{order.date}</td><td className="px-5 py-4"><span className="rounded-full bg-secondary px-3 py-1 font-semibold text-ink">{order.status}</span></td><td className="px-5 py-4">{order.total}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
