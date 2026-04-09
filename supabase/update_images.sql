-- SQL Script to link uploaded high-quality images to products in LumiBelle
-- Run this in the Supabase SQL Editor

-- 1. Helper Function to update image storage path by product slug
create or replace function update_product_image_by_slug(p_slug text, p_storage_path text)
returns void as $$
declare
    v_product_id uuid;
begin
    select id into v_product_id from products where slug = p_slug;
    
    if v_product_id is not null then
        -- Update the primary image for this product
        update product_images 
        set storage_path = p_storage_path
        where product_id = v_product_id and is_primary = true;
        
        -- If no primary image exists, insert one
        if not found then
            insert into product_images (product_id, storage_path, alt_text, sort_order, is_primary)
            values (v_product_id, p_storage_path, p_slug, 0, true);
        end if;
    end if;
end;
$$ language plpgsql;

-- 2. Execute Updates for uploaded images
-- Mapping based on filenames seen in the 'images' bucket
select update_product_image_by_slug('gold-chain-necklace', 'Gold Chain Necklace.webp');
select update_product_image_by_slug('blush-midi-dress', 'Blush Midi Dress.webp');
select update_product_image_by_slug('breathable-mesh-tank', 'Breathable Mesh Tank.webp');
select update_product_image_by_slug('cargo-utility-pants', 'Cargo Utility Pants.webp');
select update_product_image_by_slug('chic-cocktail-mini-dress', 'Chic Cocktail Mini Dress.webp');
select update_product_image_by_slug('classic-white-shirt', 'Classic White Shirt.webp');
select update_product_image_by_slug('cloud-knit-top', 'Cloud Knit Top.webp');
select update_product_image_by_slug('cropped-denim-jacket', 'Cropped Denim Jacket.webp');
select update_product_image_by_slug('crystal-drop-earrings', 'Crystal Drop Earrings.webp');
select update_product_image_by_slug('distressed-skinny-jeans', 'Distressed Skinny Jeans.webp');
select update_product_image_by_slug('embellished-maxi-dress', 'Embellished Maxi Dress.webp');
select update_product_image_by_slug('floral-maxi-dress', 'Floral Maxi Dress.webp');
select update_product_image_by_slug('golden-evening-dress', 'Golden Evening Dress.webp');
select update_product_image_by_slug('graphic-oversized-tee', 'Graphic Oversized Tee.webp');
select update_product_image_by_slug('off-shoulder-ruffle-top', 'Off-Shoulder Ruffle Top.webp');

-- 3. Cleanup
drop function update_product_image_by_slug(text, text);

-- Verify the updates
select p.name, pi.storage_path 
from products p 
join product_images pi on p.id = pi.product_id 
where pi.is_primary = true
order by p.name;
