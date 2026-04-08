export default function ProfilePage() {
  return (
    <div className="rounded-[32px] bg-surface-card p-6 shadow-ambient">
      <h1 className="font-headline text-4xl font-extrabold tracking-tight">Profile</h1>
      <p className="mt-3 text-muted">Supabase Auth users can manage profile details, addresses, and saved preferences here.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">{["Full name", "Email", "Phone", "Default city"].map((field) => <label key={field} className="text-sm"><span className="mb-2 block text-muted">{field}</span><input className="w-full rounded-2xl bg-surface-low px-4 py-3 outline-none" /></label>)}</div>
    </div>
  );
}
