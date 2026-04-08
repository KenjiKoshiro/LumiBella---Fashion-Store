insert into public.categories (name, slug, description, is_active, sort_order)
values
  ('Accessories', 'accessories', 'Accessories and add-ons', true, 1),
  ('Dresses', 'dresses', 'Everyday and event dresses', true, 2),
  ('Tops', 'tops', 'Tanks, cardigans, and blouses', true, 3),
  ('Bottoms', 'bottoms', 'Skirts and pants', true, 4),
  ('Activewear', 'activewear', 'Sets and movement pieces', true, 5),
  ('Occasion Wear', 'occasion-wear', 'Festive and traditional edits', true, 6)
on conflict (slug) do nothing;
