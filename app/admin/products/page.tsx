import { AdminShell } from "@/components/admin/admin-shell";
import { products } from "@/lib/mock-data";

export default function AdminProductsPage() {
  return (
    <AdminShell title="Product management" description="Product CRUD, category assignment, merchandising tags, banner placement, and size chart editing.">
      <div className="mb-6 flex flex-wrap gap-3">{["Add product", "Manage categories", "Manage banners", "Manage coupons"].map((action) => <button key={action} className="rounded-full bg-primary px-5 py-3 font-headline font-semibold text-white">{action}</button>)}</div>
      <div className="overflow-hidden rounded-[32px] bg-surface-card shadow-ambient">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-surface-low"><tr>{["Product", "Category", "Price", "Stock", "Flags"].map((head) => <th key={head} className="px-5 py-4 font-semibold">{head}</th>)}</tr></thead>
          <tbody>{products.map((product) => <tr key={product.id} className="border-t border-outline/10"><td className="px-5 py-4 font-semibold">{product.name}</td><td className="px-5 py-4 text-muted">{product.categorySlug}</td><td className="px-5 py-4">${product.price}</td><td className="px-5 py-4">{product.inventoryCount}</td><td className="px-5 py-4 text-muted">{[product.newArrival && "New", product.bestSeller && "Best seller", product.onSale && "Sale"].filter(Boolean).join(", ")}</td></tr>)}</tbody>
        </table>
      </div>
    </AdminShell>
  );
}
