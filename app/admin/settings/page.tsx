"use client";

import { AdminShell } from "@/components/admin/admin-shell";
import { useState } from "react";
import { Plus, Trash2, MoreHorizontal, User } from "lucide-react";

const teamMembers = [
  { name: "Alara Suave", email: "alara@atelier.co", role: "Owner", lastActive: "Just now", avatar: "AS" },
  { name: "Julian Sherif", email: "julian@atelier.co", role: "Owner", lastActive: "2 hours ago", avatar: "JS" }
];

export default function AdminSettingsPage() {
  const [globalSaleBanner, setGlobalSaleBanner] = useState(true);
  const [hoverEffects, setHoverEffects] = useState(false);
  const [stripEnabled, setStripEnabled] = useState(true);

  return (
    <AdminShell
      title="Settings"
      description="Refine your brand's digital presence and operational parameters."
      actions={
        <button className="rounded-xl bg-[#6b3fa0] px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-[#5a3390] transition">
          Save Changes
        </button>
      }
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* General Store Info */}
        <div className="rounded-2xl bg-white border border-[#ebebeb] p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-bold text-sm text-[#1a1a1a]">General Store Info</h2>
              <p className="text-[11px] text-[#aaa] mt-0.5">Your public-facing boutique identity.</p>
            </div>
            <div className="h-8 w-8 rounded-xl bg-[#f5f4f0] flex items-center justify-center text-sm">🏪</div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold text-[#888] uppercase tracking-wider mb-1.5">Store Name</label>
              <input
                type="text"
                defaultValue="L'Atelier Petit"
                className="w-full rounded-xl border border-[#e8e8e8] bg-[#fafafa] px-3.5 py-2.5 text-sm text-[#1a1a1a] outline-none focus:border-[#6b3fa0] transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#888] uppercase tracking-wider mb-1.5">Contact Email</label>
                <input
                  type="email"
                  defaultValue="contact@atelier.com"
                  className="w-full rounded-xl border border-[#e8e8e8] bg-[#fafafa] px-3.5 py-2.5 text-xs text-[#555] outline-none focus:border-[#6b3fa0] transition"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#888] uppercase tracking-wider mb-1.5">Phone</label>
                <input
                  type="tel"
                  defaultValue="+33 1 45 47 89 00"
                  className="w-full rounded-xl border border-[#e8e8e8] bg-[#fafafa] px-3.5 py-2.5 text-xs text-[#555] outline-none focus:border-[#6b3fa0] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#888] uppercase tracking-wider mb-1.5">Brand Logo</label>
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-[#ede9f8] border-2 border-dashed border-[#c8bcdf] flex items-center justify-center text-[#6b3fa0] text-lg font-bold">
                  L
                </div>
                <div>
                  <p className="text-xs text-[#555]">Upload your organisation mark. Recommended 512×512px.</p>
                  <p className="text-[10px] text-[#aaa]">PNG, SVG with transparent background logo mark.</p>
                  <button className="mt-1.5 text-[10px] font-semibold text-[#6b3fa0] hover:underline">Upload new logo</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payments */}
        <div className="rounded-2xl bg-white border border-[#ebebeb] p-6">
          <div className="mb-5">
            <h2 className="font-bold text-sm text-[#1a1a1a]">Payments</h2>
            <p className="text-[11px] text-[#aaa] mt-0.5">Securely process transactions through an integrated gateway.</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-[#fafafa] border border-[#f0f0f0] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded-lg bg-[#635bff] flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">S</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1a1a1a]">Stripe Integration</p>
                  <p className="text-[10px] text-[#aaa]">Live mode enabled</p>
                </div>
              </div>
              <label className="relative inline-flex cursor-pointer">
                <input type="checkbox" checked={stripEnabled} onChange={(e) => setStripEnabled(e.target.checked)} className="sr-only peer" />
                <div className="h-5 w-9 rounded-full bg-[#e0e0e0] peer-checked:bg-[#6b3fa0] transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all peer-checked:after:translate-x-4" />
              </label>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-[#fafafa] border border-[#f0f0f0] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded-lg bg-[#003087] flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">P</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1a1a1a]">PayPal Disputes</p>
                  <p className="text-[10px] text-[#aaa]">Inactive — not configured</p>
                </div>
              </div>
              <button className="text-[10px] font-semibold text-[#6b3fa0] hover:underline">Configure</button>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-[11px] font-semibold text-[#888] uppercase tracking-wider mb-1.5">Currency</label>
            <select className="w-full rounded-xl border border-[#e8e8e8] bg-[#fafafa] px-3.5 py-2.5 text-sm text-[#555] outline-none">
              <option>THB – Baht (฿)</option>
              <option>EUR – Euro (€)</option>
              <option>USD – Dollar ($)</option>
            </select>
          </div>
        </div>

        {/* Shipping Zones */}
        <div className="rounded-2xl bg-[#ede9f8] border border-[#ddd6f3] p-6">
          <div className="mb-5">
            <h2 className="font-bold text-sm text-[#2a1a5a]">Shipping Zones</h2>
            <p className="text-[11px] text-[#7a6a9a] mt-0.5">Global regions and regional rules.</p>
          </div>

          <div className="space-y-2.5">
            {["European Union", "North America", "Domestic (France)"].map((zone) => (
              <div key={zone} className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3">
                <div>
                  <p className="text-xs font-semibold text-[#2a1a5a]">{zone}</p>
                  <p className="text-[10px] text-[#9a8aba] mt-0.5">Standard shipping active</p>
                </div>
                <button className="text-[10px] font-semibold text-[#6b3fa0] hover:underline">Edit</button>
              </div>
            ))}
          </div>

          <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#c8bcdf] py-2.5 text-xs font-semibold text-[#6b3fa0] hover:bg-white/50 transition">
            <Plus className="h-3.5 w-3.5" />
            Add New Zone
          </button>
        </div>

        {/* Design Customisation */}
        <div className="rounded-2xl bg-white border border-[#ebebeb] p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-bold text-sm text-[#1a1a1a]">Design Customisation</h2>
              <p className="text-[11px] text-[#aaa] mt-0.5">Control your storefront's visual triggers.</p>
            </div>
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#ffd93d]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#6bcb77]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#f0f0f0] bg-[#fafafa] p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg">🏷️</span>
                <label className="relative inline-flex cursor-pointer">
                  <input type="checkbox" checked={globalSaleBanner} onChange={(e) => setGlobalSaleBanner(e.target.checked)} className="sr-only peer" />
                  <div className="h-5 w-9 rounded-full bg-[#e0e0e0] peer-checked:bg-[#6b3fa0] transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all peer-checked:after:translate-x-4" />
                </label>
              </div>
              <p className="text-xs font-bold text-[#1a1a1a]">Global Sale Banner</p>
              <p className="text-[10px] text-[#aaa] mt-0.5 leading-4">Displays a promotional order announce banner across all storefront pages.</p>
            </div>

            <div className="rounded-xl border border-[#f0f0f0] bg-[#fafafa] p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg">✨</span>
                <label className="relative inline-flex cursor-pointer">
                  <input type="checkbox" checked={hoverEffects} onChange={(e) => setHoverEffects(e.target.checked)} className="sr-only peer" />
                  <div className="h-5 w-9 rounded-full bg-[#e0e0e0] peer-checked:bg-[#6b3fa0] transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all peer-checked:after:translate-x-4" />
                </label>
              </div>
              <p className="text-xs font-bold text-[#1a1a1a]">Editorial Hover Effects</p>
              <p className="text-[10px] text-[#aaa] mt-0.5 leading-4">Enable cinematic image zoom-in to preserve gallery scale.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Management */}
      <div className="rounded-2xl bg-white border border-[#ebebeb] p-6 mt-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-bold text-sm text-[#1a1a1a]">Team Management</h2>
            <p className="text-[11px] text-[#aaa] mt-0.5">Control and administrate member privileges.</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#6b3fa0] px-4 py-2 text-xs font-bold text-white hover:bg-[#5a3390] transition">
            <Plus className="h-3.5 w-3.5" />
            Add Administrator
          </button>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#f0f0f0]">
              {["USER", "MAIL", "LAST ACTIVE", "ROLE", "ACTIONS"].map((h) => (
                <th key={h} className="text-left text-[10px] font-semibold text-[#bbb] tracking-wider pb-3 pr-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member) => (
              <tr key={member.email} className="border-b border-[#fafafa] hover:bg-[#fafafa] transition">
                <td className="py-3.5 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#ede9f8] flex items-center justify-center text-xs font-bold text-[#6b3fa0]">
                      {member.avatar}
                    </div>
                    <span className="text-xs font-semibold text-[#1a1a1a]">{member.name}</span>
                  </div>
                </td>
                <td className="py-3.5 pr-4 text-xs text-[#888]">{member.email}</td>
                <td className="py-3.5 pr-4 text-xs text-[#aaa]">{member.lastActive}</td>
                <td className="py-3.5 pr-4">
                  <span className="rounded-full bg-[#ede9f8] px-3 py-1 text-[10px] font-bold text-[#6b3fa0]">
                    {member.role}
                  </span>
                </td>
                <td className="py-3.5">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-lg hover:bg-[#f5f4f0] transition text-[#aaa] hover:text-[#555]">
                      <MoreHorizontal className="h-3.5 w-3.5" />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-[#fce4ec] transition text-[#aaa] hover:text-[#c62828]">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-[10px] text-[#ccc] mt-6">LumiBelle Admin · Real-time Fine-line Platform</p>
    </AdminShell>
  );
}
