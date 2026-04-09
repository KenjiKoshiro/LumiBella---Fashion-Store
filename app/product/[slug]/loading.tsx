export default function ProductLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">

        {/* Gallery shimmer */}
        <div className="space-y-3">
          <div className="aspect-[4/5] w-full animate-pulse rounded-[28px] bg-[#F5E6E8]" />
          <div className="flex gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-20 w-20 animate-pulse rounded-[16px] bg-[#F5E6E8]"
              />
            ))}
          </div>
        </div>

        {/* Detail shimmer */}
        <div className="space-y-6 py-2">
          {/* Collection badge */}
          <div className="h-3 w-32 animate-pulse rounded-full bg-[#F5E6E8]" />
          {/* Title */}
          <div className="space-y-2">
            <div className="h-9 w-3/4 animate-pulse rounded-full bg-[#F5E6E8]" />
            <div className="h-9 w-1/2 animate-pulse rounded-full bg-[#F5E6E8]" />
          </div>
          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded-full bg-[#F5E6E8]" />
            <div className="h-4 w-5/6 animate-pulse rounded-full bg-[#F5E6E8]" />
          </div>
          {/* Price + rating */}
          <div className="flex items-center gap-4">
            <div className="h-8 w-28 animate-pulse rounded-full bg-[#F8C8DC]/50" />
            <div className="h-6 w-20 animate-pulse rounded-full bg-[#F5E6E8]" />
            <div className="h-6 w-28 animate-pulse rounded-full bg-[#F5E6E8]" />
          </div>
          {/* Size pills */}
          <div className="rounded-[28px] bg-[#FFF5F7] p-5 space-y-3">
            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-9 w-16 animate-pulse rounded-full bg-[#F5E6E8]"
                />
              ))}
            </div>
            {/* CTA buttons */}
            <div className="flex gap-3 pt-2">
              <div className="h-11 flex-1 animate-pulse rounded-full bg-[#F8C8DC]/60" />
              <div className="h-11 w-28 animate-pulse rounded-full bg-[#F5E6E8]" />
              <div className="h-11 w-11 animate-pulse rounded-full bg-[#F5E6E8]" />
            </div>
          </div>
          {/* Trust badges */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-28 animate-pulse rounded-[28px] bg-[#F5E6E8]" />
            <div className="h-28 animate-pulse rounded-[28px] bg-[#F5E6E8]" />
          </div>
          {/* Details block */}
          <div className="h-40 animate-pulse rounded-[28px] bg-[#F5E6E8]" />
        </div>
      </div>

      {/* Related products skeleton */}
      <div className="mt-16 space-y-6">
        <div className="h-8 w-44 animate-pulse rounded-full bg-[#F5E6E8]" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[30px] bg-white"
              style={{ boxShadow: "0 4px 24px rgba(248,200,220,0.14)" }}
            >
              <div className="aspect-[4/5] w-full animate-pulse bg-[#F5E6E8]" />
              <div className="space-y-3 p-5">
                <div className="h-4 w-28 animate-pulse rounded-full bg-[#F5E6E8]" />
                <div className="h-5 w-40 animate-pulse rounded-full bg-[#F5E6E8]" />
                <div className="h-4 w-full animate-pulse rounded-full bg-[#F5E6E8]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
