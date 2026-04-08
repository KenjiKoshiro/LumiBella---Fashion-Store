import { AdminShell } from "@/components/admin/admin-shell";
import { products } from "@/lib/mock-data";
import {
  ArrowUpRight,
  ArrowDownRight,
  AlertCircle,
  Download,
  TrendingUp,
  ShoppingBag,
  Users,
  Activity
} from "lucide-react";

// Soft Pink Palette
const P = {
  bgMain:     "#FFF5F7",
  bgSection:  "#F5E6E8",
  bgCard:     "#FFFFFF",
  btnPrimary: "#F8C8DC",
  btnHover:   "#F4A6B8",
  textTitle:  "#5A4A4A",
  textBody:   "#7A6A6A",
  shadow:     "0 4px 24px rgba(248,200,220,0.3)",
  border:     "rgba(244,166,184,0.15)",
  muted:      "#A89B9B",
  success:    "#A2CBB6",
  warning:    "#F4D08E",
  danger:     "#E4A1A1",
  successBg:  "rgba(162,203,182,0.15)",
  warningBg:  "rgba(244,208,142,0.15)",
  dangerBg:   "rgba(228,161,161,0.15)",
  sky:        "#AECDE3",
  skyBg:      "rgba(174,205,227,0.15)"
};

const lowStockThreshold = 10;
const estimatedOrders = Math.max(120, products.length * 7);
const estimatedRevenue = products.reduce((total, p) => total + p.price * 3.5, 0);
const lowStockProducts = products.filter((p) => (p.inventoryCount ?? 0) <= lowStockThreshold);

const kpiCards = [
  {
    label: "Total Revenue",
    value: `€${(estimatedRevenue / 1000).toFixed(3).replace(".", ",")}`,
    note: "+12.4%",
    positive: true,
    icon: TrendingUp,
    accent: P.btnHover,
    accentBg: "rgba(244,166,184,0.15)",
    bars: [40, 65, 45, 80, 60, 90, 75]
  },
  {
    label: "New Orders",
    value: estimatedOrders.toLocaleString(),
    note: "+8.9%",
    positive: true,
    icon: ShoppingBag,
    accent: P.sky,
    accentBg: P.skyBg,
    bars: [30, 55, 70, 50, 85, 65, 90]
  },
  {
    label: "Active Users",
    value: `${(estimatedOrders * 15).toLocaleString()}`,
    note: "Stable",
    positive: true,
    stable: true,
    icon: Users,
    accent: P.success,
    accentBg: P.successBg,
    bars: [60, 65, 58, 70, 62, 68, 65]
  },
  {
    label: "Inventory Health",
    value: `${Math.round(((products.length - lowStockProducts.length) / products.length) * 100)}%`,
    note: "-2.3%",
    positive: false,
    icon: Activity,
    accent: P.warning,
    accentBg: P.warningBg,
    bars: [90, 85, 88, 82, 78, 75, 83]
  }
];

const recentOrders = [
  { id: "#LP-5286", customer: "Elena Voronova",  date: "Oct 24, 2023", total: "€3,240.00", status: "DELIVERED" },
  { id: "#LP-5282", customer: "Julian S.",        date: "Oct 24, 2023", total: "€450.00",   status: "SHIPPED" },
  { id: "#LP-5280", customer: "Amara Okafor",    date: "Oct 23, 2023", total: "€2,100.00", status: "PENDING" },
  { id: "#LP-5287", customer: "Marco Polo",       date: "Oct 23, 2023", total: "€89.00",    status: "CANCELLED" }
];

const statusConfig: Record<string, { bg: string; color: string; dot: string }> = {
  DELIVERED: { bg: P.successBg, color: P.success, dot: P.success },
  SHIPPED:   { bg: P.skyBg,    color: P.sky,     dot: P.sky },
  PENDING:   { bg: P.warningBg, color: P.warning, dot: P.warning },
  CANCELLED: { bg: P.dangerBg, color: P.danger,   dot: P.danger }
};

const stockWatch = [
  { name: "Silk Evening Wrap",   left: 3, out: false },
  { name: "Linen Day Trousers",  left: 0, out: true  }
];

const signaturePieces = products.slice(0, 3).map((p, i) => ({
  name:  p.name,
  sold:  p.reviewCount,
  price: `€${p.price.toFixed(0)}`,
  index: i + 1
}));

export default function AdminDashboardPage() {
  return (
    <AdminShell
      title="Morning, Curator."
      description="L'Atelier is looking beautiful today."
    >
      {/* ── KPI cards ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {kpiCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="relative rounded-3xl p-6 overflow-hidden transition-all hover:-translate-y-1"
              style={{
                background: P.bgCard,
                border: `1px solid ${P.border}`,
                boxShadow: P.shadow
              }}
            >
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl"
                style={{ background: card.accentBg }}
              >
                <Icon className="h-5 w-5" style={{ color: card.accent }} />
              </div>

              <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: P.muted }}>
                {card.label}
              </p>
              <p className="font-headline text-3xl font-extrabold leading-none mb-4" style={{ color: P.textTitle }}>
                {card.value}
              </p>

              {/* mini bar chart */}
              <div className="flex items-end gap-[3px] h-8 mb-4">
                {card.bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-[3px]"
                    style={{ height: `${h}%`, background: card.accent, opacity: 0.5 + (i / card.bars.length) * 0.5, minHeight: 4 }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                {card.stable ? (
                  <span className="text-xs font-semibold" style={{ color: P.muted }}>≈ {card.note}</span>
                ) : card.positive ? (
                  <>
                    <ArrowUpRight className="h-4 w-4" style={{ color: P.success }} />
                    <span className="text-xs font-bold" style={{ color: P.success }}>{card.note}</span>
                  </>
                ) : (
                  <>
                    <ArrowDownRight className="h-4 w-4" style={{ color: P.danger }} />
                    <span className="text-xs font-bold" style={{ color: P.danger }}>{card.note}</span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Main grid ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">

        {/* Recent Orders table */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: P.bgCard,
            border: `1px solid ${P.border}`,
            boxShadow: P.shadow
          }}
        >
          <div
            className="flex items-center justify-between px-7 py-6"
            style={{ borderBottom: `1px solid ${P.border}` }}
          >
            <div>
              <h2 className="font-headline text-lg font-bold" style={{ color: P.textTitle }}>Recent Orders</h2>
              <p className="text-xs mt-1" style={{ color: P.muted }}>Latest acquisitions from your clients.</p>
            </div>
            <a
              href="/admin/orders"
              className="text-xs font-bold px-4 py-2 rounded-full tracking-wide transition hover:opacity-80"
              style={{
                background: P.btnPrimary,
                color: "white"
              }}
            >
              View All
            </a>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: P.bgSection, borderBottom: `1px solid ${P.border}` }}>
                {["ORDER ID", "CUSTOMER", "DATE", "TOTAL", "STATUS", ""].map((h) => (
                  <th key={h} className="text-left text-[10px] font-bold tracking-widest px-7 py-3.5" style={{ color: P.textBody }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => {
                const st = statusConfig[order.status] ?? { bg: P.bgSection, color: P.muted, dot: "#ccc" };
                return (
                  <tr
                    key={order.id}
                    className="transition-colors hover:bg-[#FFF5F7] group"
                    style={{ borderTop: `1px solid ${P.border}` }}
                  >
                    <td className="px-7 py-4.5">
                      <span className="text-xs font-extrabold" style={{ color: P.btnHover }}>{order.id}</span>
                    </td>
                    <td className="px-7 py-4.5 text-xs font-bold" style={{ color: P.textTitle }}>{order.customer}</td>
                    <td className="px-7 py-4.5 text-xs font-medium" style={{ color: P.textBody }}>{order.date}</td>
                    <td className="px-7 py-4.5 text-xs font-extrabold" style={{ color: P.textTitle }}>{order.total}</td>
                    <td className="px-7 py-4.5">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold"
                        style={{ background: st.bg, color: st.color }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: st.dot }} />
                        {titleCase(order.status)}
                      </span>
                    </td>
                    <td className="px-7 py-4.5 text-xs tracking-widest cursor-pointer hover:opacity-60 transition" style={{ color: P.btnPrimary }}>•••</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">

          {/* Stock Watch */}
          <div
            className="rounded-3xl p-6"
            style={{ background: P.bgCard, border: `1px solid ${P.border}`, boxShadow: P.shadow }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-8 w-8 rounded-xl flex items-center justify-center"
                style={{ background: P.warningBg }}
              >
                <AlertCircle className="h-4 w-4" style={{ color: P.warning }} />
              </div>
              <h3 className="text-base font-bold" style={{ color: P.textTitle }}>Stock Watch</h3>
            </div>

            <div className="space-y-3">
              {stockWatch.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl p-4"
                  style={{
                    background: item.out ? P.dangerBg : P.warningBg,
                    border: `1px solid ${item.out ? "rgba(228,161,161,0.3)" : "rgba(244,208,142,0.3)"}`
                  }}
                >
                  <div>
                    <p className="text-xs font-bold leading-tight mb-1" style={{ color: P.textTitle }}>{item.name}</p>
                    <p className="text-[10px] font-medium" style={{ color: item.out ? P.danger : P.warning }}>
                      {item.left > 0 ? `${item.left} items left` : "Out of stock"}
                    </p>
                  </div>
                  <span
                    className="text-[9px] font-extrabold px-3 py-1.5 rounded-full tracking-wider"
                    style={item.out
                      ? { background: P.danger, color: "white" }
                      : { background: P.bgCard, color: P.warning, border: `1px solid rgba(244,208,142,0.5)` }
                    }
                  >
                    {item.out ? "RESTOCK" : "REVIEW"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Signature Pieces */}
          <div
            className="rounded-3xl p-6 flex-1"
            style={{ background: P.bgCard, border: `1px solid ${P.border}`, boxShadow: P.shadow }}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-bold" style={{ color: P.textTitle }}>Top Sellers</h3>
              <span className="text-[10px] font-bold rounded-full px-2.5 py-1" style={{ background: P.bgSection, color: P.textBody }}>Top 3</span>
            </div>
            <div className="space-y-4">
              {signaturePieces.map((piece) => (
                <div key={piece.name} className="flex items-center gap-3.5">
                  <div
                    className="h-10 w-10 rounded-[14px] flex-shrink-0 flex items-center justify-center text-xs font-extrabold shadow-sm"
                    style={{ background: P.btnPrimary, color: "white" }}
                  >
                    #{piece.index}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate leading-tight" style={{ color: P.textTitle }}>{piece.name}</p>
                    <p className="text-[10px] mt-1 font-medium" style={{ color: P.muted }}>{piece.sold} units sold</p>
                  </div>
                  <span className="text-sm font-extrabold flex-shrink-0" style={{ color: P.btnHover }}>{piece.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Seasonal Forecast Banner ───────────────────────────────── */}
      <div
        className="mt-6 rounded-3xl p-8 relative overflow-hidden"
        style={{
          background: P.btnPrimary,
          boxShadow: P.shadow
        }}
      >
        {/* Decorative Orbs */}
        <div
          className="absolute -top-10 -right-10 h-64 w-64 rounded-full"
          style={{ background: `radial-gradient(circle, ${P.bgCard}40, transparent 70%)` }}
        />
        <div
          className="absolute -bottom-10 right-48 h-40 w-40 rounded-full"
          style={{ background: `radial-gradient(circle, ${P.bgCard}40, transparent 70%)` }}
        />

        <div className="relative flex items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-[2px] w-8 bg-white/60 rounded-full" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-white">
                Intelligence
              </span>
            </div>
            <h3 className="font-headline text-2xl font-extrabold text-white">
              The Spring Collection is peaking.
            </h3>
            <p className="mt-2 text-sm leading-6 max-w-lg font-medium text-white/90">
              Analytics suggest a <span className="font-extrabold text-white">40% increase</span> in sundress demand
              over the next fortnight. Prepare inventory for high-volume fulfillment!
            </p>
          </div>
          <button
            className="flex-shrink-0 flex items-center gap-2 rounded-2xl px-6 py-4 text-xs font-bold transition hover:scale-105"
            style={{
              background: P.bgCard,
              color: P.btnHover,
              boxShadow: "0 4px 14px rgba(0,0,0,0.05)"
            }}
          >
            <Download className="h-4 w-4" />
            Download Report
          </button>
        </div>
      </div>
    </AdminShell>
  );
}

function titleCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
