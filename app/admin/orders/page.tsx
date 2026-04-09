"use client";

import { AdminShell } from "@/components/admin/admin-shell";
import { ChevronDown, ChevronRight, Download, Plus, X, User } from "lucide-react";
import { useState } from "react";

const orders = [
  {
    id: "#ORD-8829",
    customer: "Juliana Moretti",
    items: 3,
    total: "฿12,400.00",
    date: "TODAY, 2:41 PM",
    status: "Processing",
    detail: {
      placed: "Placed Yesterday at 11:30 AM",
      email: "juliana@example.com",
      shipping: "18 Rue de la Paix, Paris, 75001, France",
      method: "Standard Express (Tracked)",
      items: [{ name: "Silk Evening Gown", size: "M", qty: 2, price: "฿6,200.00" }, { name: "Pearl Belt", size: "Free", qty: 1, price: "฿4,500.00" }],
      subtotal: "฿12,400.00", shippingCost: "฿250.00", tax: "฿930.00", total: "฿13,580.00"
    }
  },
  {
    id: "#ORD-8827",
    customer: "Alistair Graham",
    items: 1,
    total: "฿4,500.00",
    date: "YESTERDAY",
    status: "Ready to Ship",
    detail: {
      placed: "Placed Yesterday at 11:30 AM",
      email: "alistair@ramscom.com",
      shipping: "221B Baker St., London, NW1 6XE, UK",
      method: "Priority Express (Tracked)",
      items: [{ name: "Lavender Cashmere Coat", size: "M", qty: 1, price: "฿4,500.00" }],
      subtotal: "฿4,500.00", shippingCost: "฿250.00", tax: "฿950.00", total: "฿5,700.00"
    }
  },
  {
    id: "#ORD-8825",
    customer: "Eleanor Rigby",
    items: 5,
    total: "฿38,900.00",
    date: "2 OCT 2023",
    status: "Delivered",
    detail: {
      placed: "Placed 2 Oct 2023",
      email: "rigby@atelier.co",
      shipping: "12 Queen's Lane, Edinburgh, EH1 1AA, UK",
      method: "Standard (Tracked)",
      items: [{ name: "Velvet Evening Cape", size: "L", qty: 2, price: "฿12,000.00" }],
      subtotal: "฿38,900.00", shippingCost: "฿0.00", tax: "฿3,890.00", total: "฿42,790.00"
    }
  },
  {
    id: "#ORD-8824",
    customer: "Marcus Vane",
    items: 2,
    total: "฿9,200.00",
    date: "1 OCT 2023",
    status: "Refunded",
    detail: {
      placed: "Placed 1 Oct 2023",
      email: "m.vane@mail.com",
      shipping: "44 Via Roma, Milan, 20121, Italy",
      method: "Express",
      items: [{ name: "Cashmere Turtleneck", size: "S", qty: 2, price: "฿4,600.00" }],
      subtotal: "฿9,200.00", shippingCost: "฿150.00", tax: "฿920.00", total: "฿10,270.00"
    }
  }
];

const statusStyles: Record<string, string> = {
  "Processing":    "bg-[#e3f2fd] text-[#1565c0]",
  "Ready to Ship": "bg-[#e8f5e9] text-[#2e7d32]",
  "Delivered":     "bg-[#f3e5f5] text-[#6a1b9a]",
  "Refunded":      "bg-[#fce4ec] text-[#c62828]",
  "Pending":       "bg-[#fff8e1] text-[#f57f17]",
  "Cancelled":     "bg-[#fce4ec] text-[#c62828]"
};

export default function AdminOrdersPage() {
  const [selected, setSelected] = useState(orders[1]);

  return (
    <AdminShell
      subtitle="Management"
      title={<><span className="font-headline">Orders </span><span className="font-light italic text-[#555]">Archive</span></>}
      actions={
        <>
          <button className="flex items-center gap-2 rounded-xl border border-[#6b3fa0] px-4 py-2.5 text-xs font-semibold text-[#6b3fa0] hover:bg-[#ede9f8] transition">
            <Download className="h-3.5 w-3.5" />
            Export CSV
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-[#6b3fa0] px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-[#5a3390] transition">
            <Plus className="h-3.5 w-3.5" />
            Manual Order
          </button>
        </>
      }
    >
      {/* Filters */}
      <div className="flex items-end gap-4 mb-6 flex-wrap">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#aaa]">Order Status</span>
          <div className="relative">
            <select className="appearance-none rounded-xl border border-[#e0e0e0] bg-white px-3 py-2 pr-7 text-xs font-medium text-[#333] outline-none">
              <option>All Statuses</option>
              <option>Processing</option>
              <option>Ready to Ship</option>
              <option>Delivered</option>
              <option>Refunded</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-[#aaa]" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#aaa]">Date Range</span>
          <div className="flex items-center gap-2">
            <input type="date" className="rounded-xl border border-[#e0e0e0] bg-white px-3 py-2 text-xs text-[#555] outline-none" />
            <span className="text-xs text-[#aaa]">to</span>
            <input type="date" className="rounded-xl border border-[#e0e0e0] bg-white px-3 py-2 text-xs text-[#555] outline-none" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#aaa]">Amount Range</span>
          <div className="flex items-center gap-2">
            <input type="number" placeholder="Min" className="w-20 rounded-xl border border-[#e0e0e0] bg-white px-3 py-2 text-xs text-[#555] outline-none placeholder:text-[#ccc]" />
            <input type="number" placeholder="Max" className="w-20 rounded-xl border border-[#e0e0e0] bg-white px-3 py-2 text-xs text-[#555] outline-none placeholder:text-[#ccc]" />
          </div>
        </div>
        <button className="mt-auto text-xs font-medium text-[#6b3fa0] hover:underline">Reset Filters</button>
      </div>

      {/* Two-panel layout */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-5">
        {/* Orders list */}
        <div className="space-y-3">
          {orders.map((order) => {
            const isSelected = selected?.id === order.id;
            return (
              <div
                key={order.id}
                onClick={() => setSelected(order)}
                className={`flex items-center gap-4 rounded-2xl border p-4 cursor-pointer transition-all ${
                  isSelected
                    ? "border-[#6b3fa0] bg-[#fafafe] shadow-sm"
                    : "border-[#ebebeb] bg-white hover:border-[#c8bcdf]"
                }`}
              >
                {/* Order icon */}
                <div className={`h-10 w-10 flex-shrink-0 rounded-xl flex items-center justify-center text-sm ${
                  isSelected ? "bg-[#ede9f8]" : "bg-[#f5f4f0]"
                }`}>
                  📦
                </div>

                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-bold ${isSelected ? "text-[#6b3fa0]" : "text-[#1a1a1a]"}`}>
                    {order.id}
                  </p>
                  <p className="text-xs text-[#888] mt-0.5">
                    {order.customer} · {order.items} item{order.items !== 1 ? "s" : ""}
                  </p>
                </div>

                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-[#1a1a1a]">{order.total}</p>
                  <p className="text-[10px] text-[#bbb] mt-0.5">{order.date}</p>
                </div>

                <div className="flex-shrink-0">
                  <div className="relative">
                    <select
                      value={order.status}
                      className={`appearance-none rounded-xl px-3 py-1.5 pr-7 text-[10px] font-bold outline-none cursor-pointer ${
                        statusStyles[order.status] ?? "bg-[#f0f0f0] text-[#888]"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option>{order.status}</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-2.5 w-2.5 opacity-60" />
                  </div>
                </div>

                <ChevronRight className="h-4 w-4 text-[#ccc] flex-shrink-0" />
              </div>
            );
          })}
        </div>

        {/* Order detail panel */}
        {selected && (
          <div className="rounded-2xl bg-white border border-[#ebebeb] p-5 self-start sticky top-24">
            <div className="flex items-start justify-between mb-1">
              <div>
                <p className="text-sm font-bold text-[#1a1a1a]">Order {selected.id}</p>
                <p className="text-[10px] text-[#aaa] mt-0.5">{selected.detail.placed}</p>
              </div>
              <button onClick={() => setSelected(null as any)} className="rounded-full p-1 hover:bg-[#f5f4f0] transition">
                <X className="h-3.5 w-3.5 text-[#aaa]" />
              </button>
            </div>

            <div className="border-t border-[#f0f0f0] mt-4 pt-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#bbb] mb-3">Customer Details</p>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#ede9f8] flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4 text-[#6b3fa0]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1a1a1a]">{selected.customer}</p>
                  <p className="text-[10px] text-[#888]">{selected.detail.email}</p>
                </div>
              </div>
              <div className="mt-3 space-y-1.5 text-xs text-[#555]">
                <p><span className="font-semibold text-[#888]">Shipping:</span> {selected.detail.shipping}</p>
                <p><span className="font-semibold text-[#888]">Method:</span> {selected.detail.method}</p>
              </div>
            </div>

            <div className="border-t border-[#f0f0f0] mt-4 pt-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#bbb] mb-3">Items Purchased</p>
              {selected.detail.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-[#f5f4f0] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#1a1a1a] truncate">{item.name}</p>
                    <p className="text-[10px] text-[#aaa]">Size {item.size} · Qty {item.qty}</p>
                  </div>
                  <p className="text-xs font-bold text-[#1a1a1a]">{item.price}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#f0f0f0] mt-2 pt-4 space-y-1.5 text-xs">
              <div className="flex justify-between text-[#555]">
                <span>Subtotal</span><span>{selected.detail.subtotal}</span>
              </div>
              <div className="flex justify-between text-[#555]">
                <span>Shipping</span><span>{selected.detail.shippingCost}</span>
              </div>
              <div className="flex justify-between text-[#555]">
                <span>VAT (20%)</span><span>{selected.detail.tax}</span>
              </div>
              <div className="flex justify-between font-bold text-[#1a1a1a] text-sm pt-1 border-t border-[#f0f0f0]">
                <span>Total</span><span>{selected.detail.total}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 rounded-xl border border-[#e0e0e0] py-2 text-xs font-semibold text-[#555] hover:bg-[#f5f4f0] transition">
                Packing Slip
              </button>
              <button className="flex-1 rounded-xl border border-[#e0e0e0] py-2 text-xs font-semibold text-[#555] hover:bg-[#f5f4f0] transition">
                Invoice
              </button>
            </div>
            <button className="w-full mt-3 rounded-xl bg-[#6b3fa0] py-2.5 text-xs font-bold text-white hover:bg-[#5a3390] transition">
              Mark as Shipped
            </button>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
