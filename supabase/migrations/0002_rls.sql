alter table public.profiles enable row level security;
alter table public.admin_users enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.product_images enable row level security;
alter table public.product_variants enable row level security;
alter table public.size_charts enable row level security;
alter table public.size_chart_rules enable row level security;
alter table public.inventory enable row level security;
alter table public.carts enable row level security;
alter table public.cart_items enable row level security;
alter table public.wishlists enable row level security;
alter table public.wishlist_items enable row level security;
alter table public.coupons enable row level security;
alter table public.addresses enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.reviews enable row level security;
alter table public.banners enable row level security;

create or replace function public.is_admin()
returns boolean language sql stable as $$
  select exists (
    select 1 from public.admin_users where user_id = auth.uid()
  );
$$;

create policy "public catalog" on public.categories for select using (is_active = true);
create policy "public products" on public.products for select using (status = 'active');
create policy "public images" on public.product_images for select using (true);
create policy "public variants" on public.product_variants for select using (status = 'active');
create policy "public size charts" on public.size_charts for select using (true);
create policy "public size rules" on public.size_chart_rules for select using (true);
create policy "public banners" on public.banners for select using (is_active = true);

create policy "own profile read" on public.profiles for select using (id = auth.uid());
create policy "own profile update" on public.profiles for update using (id = auth.uid());
create policy "own addresses" on public.addresses for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own carts" on public.carts for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own cart items" on public.cart_items for all using (exists (select 1 from public.carts c where c.id = cart_items.cart_id and c.user_id = auth.uid())) with check (exists (select 1 from public.carts c where c.id = cart_items.cart_id and c.user_id = auth.uid()));
create policy "own wishlist" on public.wishlists for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own wishlist items" on public.wishlist_items for all using (exists (select 1 from public.wishlists w where w.id = wishlist_items.wishlist_id and w.user_id = auth.uid())) with check (exists (select 1 from public.wishlists w where w.id = wishlist_items.wishlist_id and w.user_id = auth.uid()));
create policy "own orders read" on public.orders for select using (user_id = auth.uid());
create policy "own order items read" on public.order_items for select using (exists (select 1 from public.orders o where o.id = order_items.order_id and o.user_id = auth.uid()));
create policy "reviews approved or own" on public.reviews for select using (status = 'approved' or user_id = auth.uid());
create policy "reviews own insert" on public.reviews for insert with check (user_id = auth.uid());
create policy "reviews own update" on public.reviews for update using (user_id = auth.uid());

create policy "admin profiles" on public.profiles for all using (public.is_admin()) with check (public.is_admin());
create policy "admin admin_users" on public.admin_users for all using (public.is_admin()) with check (public.is_admin());
create policy "admin categories" on public.categories for all using (public.is_admin()) with check (public.is_admin());
create policy "admin products" on public.products for all using (public.is_admin()) with check (public.is_admin());
create policy "admin product_images" on public.product_images for all using (public.is_admin()) with check (public.is_admin());
create policy "admin product_variants" on public.product_variants for all using (public.is_admin()) with check (public.is_admin());
create policy "admin size_charts" on public.size_charts for all using (public.is_admin()) with check (public.is_admin());
create policy "admin size_chart_rules" on public.size_chart_rules for all using (public.is_admin()) with check (public.is_admin());
create policy "admin inventory" on public.inventory for all using (public.is_admin()) with check (public.is_admin());
create policy "admin coupons" on public.coupons for all using (public.is_admin()) with check (public.is_admin());
create policy "admin orders" on public.orders for all using (public.is_admin()) with check (public.is_admin());
create policy "admin order_items" on public.order_items for all using (public.is_admin()) with check (public.is_admin());
create policy "admin reviews" on public.reviews for all using (public.is_admin()) with check (public.is_admin());
create policy "admin banners" on public.banners for all using (public.is_admin()) with check (public.is_admin());
