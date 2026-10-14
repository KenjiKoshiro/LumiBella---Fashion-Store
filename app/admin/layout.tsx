export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#f5f4f0] min-h-screen"><p className="bg-white p-4 text-center font-semibold">LumiBelle admin preview · sample metrics and orders, not live sales.</p>{children}</div>;
}
