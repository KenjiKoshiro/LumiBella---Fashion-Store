"use client";

import { AdminShell } from "@/components/admin/admin-shell";
import { products } from "@/lib/mock-data";
import { Plus, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useState } from "react";

const categoryOptions = ["All Categories", "Bottoms", "Tops", "Dresses", "Accessories", "Activewear", "Occasion Wear"];
const stockOptions = ["All Stock Levels", "In Stock", "Low Stock", "Out of Stock"];
const statusOptions = ["All Status", "Active", "Draft", "Archived"];

const selectStyle = {
  background: "white",
  border: "1px solid rgba(124,58,237,0.15)",
  color: "#333",
  boxShadow: "0 2px 8px rgba(124,58,237,0.06)"
};

export default function AdminInventoryPage() {
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [stockFilter, setStockFilter] = useState("All Stock Levels");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filtered = products.filter((p) => {
    const matchCat = categoryFilter === "All Categories" || p.categoryName === categoryFilter;
    const matchStock =
      stockFilter === "All Stock Levels" ||
      (stockFilter === "In Stock" && p.inventoryCount > 10) ||
      (stockFilter === "Low Stock" && p.inventoryCount > 0 && p.inventoryCount <= 10) ||
      (stockFilter === "Out of Stock" && p.inventoryCount === 0);
    const matchStatus =
      statusFilter === "All Status" || p.status.toLowerCase() === statusFilter.toLowerCase();
    return matchCat && matchStock && matchStatus;
  });

  return (
    <AdminShell
      subtitle="Inventory Management"
      title="The Collection"
      actions={
        <button
          className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition hover:scale-105"
          style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", boxShadow: "0 4px 20px rgba(124,58,237,0.4)" }}
        >
          <Plus className="h-4 w-4" />
          Add New Product
        </button>
      }
    >
      {/* Filter bar */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        {[
          { value: categoryFilter, setter: setCategoryFilter, options: categoryOptions },
          { value: stockFilter, setter: setStockFilter, options: stockOptions },
          { value: statusFilter, setter: setStatusFilter, options: statusOptions }
        ].map(({ value, setter, options }, idx) => (
          <div key={idx} className="relative">
            <select
              value={value}
              onChange={(e) => setter(e.target.value)}
              className="appearance-none rounded-xl px-4 py-2 pr-8 text-xs font-medium outline-none cursor-pointer"
              style={selectStyle}
            >
              {options.map((o) => <option key={o}>{o}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-purple-300" />
          </div>
        ))}

        <button
          className="rounded-xl p-2 transition"
          style={{ background: "white", border: "1px solid rgba(124,58,237,0.15)", boxShadow: "0 2px 8px rgba(124,58,237,0.06)" }}
        >
          <SlidersHorizontal className="h-4 w-4 text-purple-400" />
        </button>

        <div className="ml-auto relative">
          <select
            className="appearance-none rounded-xl px-4 py-2 pr-8 text-xs font-bold outline-none cursor-pointer"
            style={{ background: "linear-gradient(135deg, #ede9fe, #ddd6fe)", color: "#7c3aed", border: "1px solid rgba(124,58,237,0.2)" }}
          >
            <option>Bulk Actions</option>
            <option>Mark Active</option>
            <option>Mark Draft</option>
            <option>Export CSV</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-purple-500" />
        </div>
      </div>

      {/* Product cards */}
      <div className="space-y-3">
        {filtered.map((product) => {
          const isLowStock = product.inventoryCount <= 10 && product.inventoryCount > 0;
          const isOutOfStock = product.inventoryCount === 0;
          const isActive = product.status === "active";

          const stockColor = isOutOfStock ? "#ef4444" : isLowStock ? "#f59e0b" : "#10b981";
          const stockBg = isOutOfStock ? "rgba(239,68,68,0.08)" : isLowStock ? "rgba(245,158,11,0.08)" : "rgba(16,185,129,0.08)";
          const stockLabel = isOutOfStock
            ? "Out of stock"
            : isLowStock
            ? `Low stock (${product.inventoryCount})`
            : `${product.inventoryCount} in stock`;

          return (
            <div
              key={product.id}
              className="flex items-center gap-5 rounded-2xl p-5 transition-all group cursor-pointer"
              style={{
                background: "white",
                border: "1px solid rgba(124,58,237,0.08)",
                boxShadow: "0 2px 12px rgba(124,58,237,0.04)"
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(124,58,237,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(124,58,237,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.08)";
              }}
            >
              {/* Checkbox */}
              <div
                className="h-4 w-4 flex-shrink-0 rounded cursor-pointer transition"
                style={{ border: "1.5px solid rgba(124,58,237,0.25)" }}
              />

              {/* Product image */}
              <div
                className="h-16 w-16 flex-shrink-0 rounded-xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, #ede9fe, #ddd6fe)", border: "1px solid rgba(124,58,237,0.1)" }}
              />

              {/* SKU + Name */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold tracking-wider uppercase mb-0.5" style={{ color: "#c084fc" }}>
                  SKU: {product.id.replace("prd_", "LP-").padEnd(7, "0")}
                </p>
                <p className="text-sm font-bold text-[#1a0a2e] leading-snug">{product.name}</p>
                <p className="text-xs mt-0.5">
                  <span className="font-semibold" style={{ color: "#7c3aed" }}>{product.categoryName}</span>
                  <span className="text-[#ccc] mx-1">·</span>
                  <span className="italic text-[#bbb]">{product.collection}</span>
                </p>
              </div>

              {/* Inventory pill */}
              <div className="flex-shrink-0 text-center w-32">
                <p className="text-[10px] font-bold text-[#ccc] uppercase tracking-wider mb-1.5">Inventory</p>
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{ background: stockBg }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                    style={{ background: stockColor, boxShadow: `0 0 5px ${stockColor}` }}
                  />
                  <span className="text-xs font-semibold" style={{ color: stockColor }}>{stockLabel}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex-shrink-0 text-center w-24">
                <p className="text-[10px] font-bold text-[#ccc] uppercase tracking-wider mb-1.5">Pricing</p>
                <p className="text-sm font-extrabold text-[#1a0a2e]">${product.price.toFixed(2)}</p>
                {product.compareAtPrice && (
                  <p className="text-[10px] text-[#ccc] line-through">${product.compareAtPrice.toFixed(0)}</p>
                )}
              </div>

              {/* Status badge */}
              <div className="flex-shrink-0">
                <span
                  className="inline-block rounded-full px-3 py-1 text-[10px] font-extrabold tracking-wide"
                  style={isActive
                    ? { background: "rgba(16,185,129,0.1)", color: "#059669", border: "1px solid rgba(16,185,129,0.2)" }
                    : { background: "rgba(107,114,128,0.08)", color: "#9ca3af", border: "1px solid rgba(107,114,128,0.15)" }
                  }
                >
                  {isActive ? "ACTIVE" : "DRAFT"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-between">
        <p className="text-xs" style={{ color: "#a0aec0" }}>
          Showing {filtered.length} of {products.length} masterpieces
        </p>
        <div className="flex items-center gap-1">
          {["‹", "1", "2", "3", "…", "12", "›"].map((page, i) => (
            <button
              key={i}
              className="rounded-lg px-2.5 py-1.5 text-xs transition"
              style={page === "1" ? {
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                color: "white",
                fontWeight: "700",
                boxShadow: "0 2px 8px rgba(124,58,237,0.4)"
              } : {
                color: "#888",
                background: "transparent"
              }}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
