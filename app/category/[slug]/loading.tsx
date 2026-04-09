export default function CategoryLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Header skeleton */}
      <div className="mb-10 space-y-3">
        <div className="h-9 w-40 animate-pulse rounded-full bg-[#F5E6E8]" />
        <div className="h-5 w-80 animate-pulse rounded-full bg-[#F5E6E8]" />
      </div>

      {/* Product grid skeleton – same pattern as shop */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-[30px] bg-white"
            style={{ boxShadow: "0 4px 24px rgba(248,200,220,0.15)" }}
          >
            <div className="aspect-[4/5] w-full animate-pulse bg-[#F5E6E8]" />
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between">
                <div className="h-3 w-24 animate-pulse rounded-full bg-[#F5E6E8]" />
                <div className="h-5 w-12 animate-pulse rounded-full bg-[#F5E6E8]" />
              </div>
              <div className="h-5 w-36 animate-pulse rounded-full bg-[#F5E6E8]" />
              <div className="h-4 w-full animate-pulse rounded-full bg-[#F5E6E8]" />
              <div className="h-4 w-4/5 animate-pulse rounded-full bg-[#F5E6E8]" />
              <div className="flex items-center justify-between pt-1">
                <div className="h-6 w-20 animate-pulse rounded-full bg-[#F8C8DC]/50" />
                <div className="h-9 w-24 animate-pulse rounded-full bg-[#F8C8DC]/50" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
