"use client";

export default function AccountDashboardPage() {
  const cardStyle = {
    background: "#FFFFFF",
    boxShadow: "0 4px 24px rgba(248,200,220,0.3)",
    borderRadius: "32px",
    padding: "32px"
  };

  const titleStyle = { color: "#5A4A4A" };
  const bodyStyle = { color: "#7A6A6A" };
  const sectionBgStyle = { background: "#F5E6E8", borderRadius: "32px", padding: "32px" };

  return (
    <div className="space-y-8">
      {/* Header section in F5E6E8 */}
      <div style={sectionBgStyle}>
        <h1 className="font-headline text-4xl font-extrabold tracking-tight" style={titleStyle}>
          Dashboard
        </h1>
        <p className="mt-4 text-base font-medium" style={bodyStyle}>
          Welcome back to LumiBelle. Here is a quick summary of your account.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { label: "Open orders", value: "2" },
          { label: "Saved addresses", value: "3" },
          { label: "Wishlist items", value: "6" }
        ].map((card) => (
          <div key={card.label} style={cardStyle} className="transition-transform hover:-translate-y-1">
            <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "#F4A6B8" }}>
              {card.label}
            </p>
            <p className="font-headline text-5xl font-extrabold" style={titleStyle}>
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div style={cardStyle}>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-2 rounded-full" style={{ background: "#F8C8DC" }} />
          <h2 className="font-headline text-2xl font-extrabold" style={titleStyle}>
            Recommended for you
          </h2>
        </div>
        <p className="text-base leading-relaxed max-w-2xl" style={bodyStyle}>
          Personalization hooks can use purchase history, wishlists, browsing history, and best-seller signals stored in Supabase.
        </p>
        <button
          className="mt-6 px-8 py-3.5 rounded-2xl font-bold transition-all"
          style={{ background: "#F8C8DC", color: "#FFFFFF", boxShadow: "0 4px 14px rgba(248,200,220,0.4)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#F4A6B8"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#F8C8DC"; }}
        >
          View Recommendations
        </button>
      </div>
    </div>
  );
}
