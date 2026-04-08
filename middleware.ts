import { NextRequest, NextResponse } from "next/server";
import { CookieOptions, createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options });
          response = NextResponse.next({ request });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: "", ...options });
          response = NextResponse.next({ request });
          response.cookies.set({ name, value: "", ...options });
        }
      }
    }
  );

  const {
    data: { user }
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;
  const isProtected = pathname.startsWith("/account") || pathname.startsWith("/checkout");
  const isAdmin = pathname.startsWith("/admin");

  if ((isProtected || isAdmin) && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAdmin && user) {
    const { data: adminUser } = await supabase
      .from("admin_users")
      .select("id")
      .eq("user_id", user.id)
      .maybeSingle();

    if (!adminUser) {
      return NextResponse.redirect(new URL("/account", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/account/:path*", "/checkout", "/admin/:path*"]
};
