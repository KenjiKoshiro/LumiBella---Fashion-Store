import { Category, Product } from "@/lib/types";

export const categories: Category[] = [
  {
    "id": "cat_01",
    "slug": "accessories",
    "name": "Accessories",
    "description": "Bags, jewelry, scarves, belts, and finishing touches.",
    "image": "/placeholders/category-accessories.svg"
  },
  {
    "id": "cat_02",
    "slug": "dresses",
    "name": "Dresses",
    "description": "Day-to-night dresses with soft lines and event-ready appeal.",
    "image": "/placeholders/category-dresses.svg"
  },
  {
    "id": "cat_03",
    "slug": "tops",
    "name": "Tops",
    "description": "Blouses, tees, camisoles, and polished layers for easy styling.",
    "image": "/placeholders/category-tops.svg"
  },
  {
    "id": "cat_04",
    "slug": "bottoms",
    "name": "Bottoms",
    "description": "Skirts, denim, and tailored pants with clean proportions.",
    "image": "/placeholders/category-bottoms.svg"
  },
  {
    "id": "cat_05",
    "slug": "activewear",
    "name": "Activewear",
    "description": "Studio-ready sets and comfort essentials for movement days.",
    "image": "/placeholders/category-activewear.svg"
  },
  {
    "id": "cat_06",
    "slug": "occasion-wear",
    "name": "Occasion Wear",
    "description": "Special-event styles with elevated finishes and statement silhouettes.",
    "image": "/placeholders/category-occasion.svg"
  }
];

export const products: Product[] = [
  {
    "id": "prd_001",
    "slug": "pleated-mini-skirt",
    "name": "Pleated Mini Skirt",
    "categoryId": "cat_04",
    "categorySlug": "bottoms",
    "categoryName": "Bottoms",
    "subcategory": "Bottoms",
    "shortDescription": "Pleated Mini Skirt in LumiBelle's polished, easy-to-style finish.",
    "description": "Pleated Mini Skirt is part of the LumiBelle edit for bottoms. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Structured fabric with comfortable movement.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "bottoms",
      "lumibelle",
      "new-season"
    ],
    "collection": "Bottom Edit",
    "price": 388.27,
    "compareAtPrice": 507.7,
    "rating": 4.9,
    "reviewCount": 31,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/images/product-1.png",
      "/placeholders/product-1b.svg",
      "/placeholders/product-1c.svg"
    ],
    "primaryImage": "/images/product-1.png",
    "inventoryCount": 11,
    "newArrival": true,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "high-waist-wide-pants",
      "distressed-skinny-jeans",
      "satin-midi-skirt",
      "cargo-utility-pants"
    ],
    "sourceImageUrl": "https://cdn.meshki.com.au/products/mura-pleated-mini-skirt-ivory-1.png",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_002",
    "slug": "high-waist-wide-pants",
    "name": "High-Waist Wide Pants",
    "categoryId": "cat_04",
    "categorySlug": "bottoms",
    "categoryName": "Bottoms",
    "subcategory": "Bottoms",
    "shortDescription": "High-Waist Wide Pants in LumiBelle's polished, easy-to-style finish.",
    "description": "High-Waist Wide Pants is part of the LumiBelle edit for bottoms. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Structured fabric with comfortable movement.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "bottoms",
      "lumibelle",
      "new-season"
    ],
    "collection": "Bottom Edit",
    "price": 497.57,
    "compareAtPrice": 666.79,
    "rating": 4.8,
    "reviewCount": 44,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-1b.svg",
      "/placeholders/product-1c.svg",
      "/placeholders/product-2.svg"
    ],
    "primaryImage": "/placeholders/product-1b.svg",
    "inventoryCount": 16,
    "newArrival": true,
    "bestSeller": false,
    "onSale": true,
    "featured": true,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "pleated-mini-skirt",
      "distressed-skinny-jeans",
      "satin-midi-skirt",
      "cargo-utility-pants"
    ],
    "sourceImageUrl": "https://ititaboutique.com/cdn/shop/products/ititaboutique_Pleated_Wide_Leg_Pants_White_1_800x.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_003",
    "slug": "distressed-skinny-jeans",
    "name": "Distressed Skinny Jeans",
    "categoryId": "cat_04",
    "categorySlug": "bottoms",
    "categoryName": "Bottoms",
    "subcategory": "Bottoms",
    "shortDescription": "Distressed Skinny Jeans in LumiBelle's polished, easy-to-style finish.",
    "description": "Distressed Skinny Jeans is part of the LumiBelle edit for bottoms. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Structured fabric with comfortable movement.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "bottoms",
      "lumibelle",
      "new-season"
    ],
    "collection": "Bottom Edit",
    "price": 775.34,
    "compareAtPrice": 1003.48,
    "rating": 4.7,
    "reviewCount": 57,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-1c.svg",
      "/placeholders/product-2.svg",
      "/placeholders/product-2b.svg"
    ],
    "primaryImage": "/placeholders/product-1c.svg",
    "inventoryCount": 21,
    "newArrival": true,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": true,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "pleated-mini-skirt",
      "high-waist-wide-pants",
      "satin-midi-skirt",
      "cargo-utility-pants"
    ],
    "sourceImageUrl": "https://cdn.shopify.com/s/files/1/0266/6217/4792/products/SkinnyJeans_White_1_800x.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_004",
    "slug": "satin-midi-skirt",
    "name": "Satin Midi Skirt",
    "categoryId": "cat_04",
    "categorySlug": "bottoms",
    "categoryName": "Bottoms",
    "subcategory": "Bottoms",
    "shortDescription": "Satin Midi Skirt in LumiBelle's polished, easy-to-style finish.",
    "description": "Satin Midi Skirt is part of the LumiBelle edit for bottoms. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Structured fabric with comfortable movement.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "bottoms",
      "lumibelle",
      "new-season"
    ],
    "collection": "Bottom Edit",
    "price": 666.79,
    "compareAtPrice": 939.9,
    "rating": 4.6,
    "reviewCount": 70,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-2.svg",
      "/placeholders/product-2b.svg",
      "/placeholders/product-2c.svg"
    ],
    "primaryImage": "/placeholders/product-2.svg",
    "inventoryCount": 26,
    "newArrival": true,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "pleated-mini-skirt",
      "high-waist-wide-pants",
      "distressed-skinny-jeans",
      "cargo-utility-pants"
    ],
    "sourceImageUrl": "https://us.peppermayo.com/cdn/shop/products/Rina-Low-Rise-Satin-Midi-Skirt-White-1_743x.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_005",
    "slug": "cargo-utility-pants",
    "name": "Cargo Utility Pants",
    "categoryId": "cat_04",
    "categorySlug": "bottoms",
    "categoryName": "Bottoms",
    "subcategory": "Bottoms",
    "shortDescription": "Cargo Utility Pants in LumiBelle's polished, easy-to-style finish.",
    "description": "Cargo Utility Pants is part of the LumiBelle edit for bottoms. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Structured fabric with comfortable movement.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "bottoms",
      "lumibelle",
      "new-season"
    ],
    "collection": "Bottom Edit",
    "price": 1082.59,
    "compareAtPrice": 1535.46,
    "rating": 4.5,
    "reviewCount": 83,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "https://thumbs.dreamstime.com/b/blank-dk-cargo-pants-template-isolated-white-background-front-view-183676020.jpg",
      "/placeholders/product-2c.svg",
      "/placeholders/product-3.svg"
    ],
    "primaryImage": "https://thumbs.dreamstime.com/b/blank-dk-cargo-pants-template-isolated-white-background-front-view-183676020.jpg",
    "inventoryCount": 31,
    "newArrival": true,
    "bestSeller": true,
    "onSale": true,
    "featured": true,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "pleated-mini-skirt",
      "high-waist-wide-pants",
      "distressed-skinny-jeans",
      "satin-midi-skirt"
    ],
    "sourceImageUrl": "https://thumbs.dreamstime.com/b/blank-dk-cargo-pants-template-isolated-white-background-front-view-183676020.jpg",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_006",
    "slug": "leather-pencil-skirt",
    "name": "Leather Pencil Skirt",
    "categoryId": "cat_04",
    "categorySlug": "bottoms",
    "categoryName": "Bottoms",
    "subcategory": "Bottoms",
    "shortDescription": "Leather Pencil Skirt in LumiBelle's polished, easy-to-style finish.",
    "description": "Leather Pencil Skirt is part of the LumiBelle edit for bottoms. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Structured fabric with comfortable movement.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "bottoms",
      "lumibelle",
      "new-season"
    ],
    "collection": "Bottom Edit",
    "price": 351.33,
    "compareAtPrice": 470.68,
    "rating": 4.4,
    "reviewCount": 96,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-2c.svg",
      "/placeholders/product-3.svg",
      "/placeholders/product-3b.svg"
    ],
    "primaryImage": "/placeholders/product-2c.svg",
    "inventoryCount": 7,
    "newArrival": true,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": true,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "pleated-mini-skirt",
      "high-waist-wide-pants",
      "distressed-skinny-jeans",
      "satin-midi-skirt"
    ],
    "sourceImageUrl": "https://lamarquecollection.com/cdn/shop/products/AVANA-Leather-Pencil-Skirt-Black-1_1200x.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_007",
    "slug": "linen-culottes",
    "name": "Linen Culottes",
    "categoryId": "cat_04",
    "categorySlug": "bottoms",
    "categoryName": "Bottoms",
    "subcategory": "Bottoms",
    "shortDescription": "Linen Culottes in LumiBelle's polished, easy-to-style finish.",
    "description": "Linen Culottes is part of the LumiBelle edit for bottoms. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Structured fabric with comfortable movement.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "bottoms",
      "lumibelle",
      "new-season"
    ],
    "collection": "Bottom Edit",
    "price": 980.28,
    "compareAtPrice": 1324.32,
    "rating": 4.3,
    "reviewCount": 109,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-3.svg",
      "/placeholders/product-3b.svg",
      "/placeholders/product-3c.svg"
    ],
    "primaryImage": "/placeholders/product-3.svg",
    "inventoryCount": 12,
    "newArrival": true,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "pleated-mini-skirt",
      "high-waist-wide-pants",
      "distressed-skinny-jeans",
      "satin-midi-skirt"
    ],
    "sourceImageUrl": "https://bunastudio.com/cdn/shop/products/Snow-White-Culottes-1_2250x.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_008",
    "slug": "pearl-ribbon-hair-clip",
    "name": "Pearl Ribbon Hair Clip",
    "categoryId": "cat_01",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Accessories",
    "shortDescription": "Pearl Ribbon Hair Clip in LumiBelle's polished, easy-to-style finish.",
    "description": "Pearl Ribbon Hair Clip is part of the LumiBelle edit for accessories. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Mixed materials with polished trim.",
    "sizeGuide": "Free Size. Designed to feel flexible across a range of fits.",
    "modelInfo": "Styled on models from 158\u2013172 cm to show drape and scale.",
    "tags": [
      "accessories",
      "lumibelle",
      "new-season"
    ],
    "collection": "Accessory Edit",
    "price": 501.99,
    "compareAtPrice": 735.51,
    "rating": 4.2,
    "reviewCount": 122,
    "sizes": [
      "Free Size"
    ],
    "freeSize": true,
    "images": [
      "/placeholders/product-3b.svg",
      "/placeholders/product-3c.svg",
      "/placeholders/product-4.svg"
    ],
    "primaryImage": "/placeholders/product-3b.svg",
    "inventoryCount": 17,
    "newArrival": true,
    "bestSeller": false,
    "onSale": true,
    "featured": true,
    "trending": false,
    "status": "active",
    "sizeChart": [],
    "relatedSlugs": [
      "crystal-drop-earrings",
      "leather-buckle-belt",
      "quilted-shoulder-bag",
      "silk-printed-scarf"
    ],
    "sourceImageUrl": "https://m.media-amazon.com/images/I/61y8Bv8zL6L._AC_SL1000_.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_009",
    "slug": "crystal-drop-earrings",
    "name": "Crystal Drop Earrings",
    "categoryId": "cat_01",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Accessories",
    "shortDescription": "Crystal Drop Earrings in LumiBelle's polished, easy-to-style finish.",
    "description": "Crystal Drop Earrings is part of the LumiBelle edit for accessories. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Mixed materials with polished trim.",
    "sizeGuide": "Free Size. Designed to feel flexible across a range of fits.",
    "modelInfo": "Styled on models from 158\u2013172 cm to show drape and scale.",
    "tags": [
      "accessories",
      "lumibelle",
      "new-season"
    ],
    "collection": "Accessory Edit",
    "price": 308.92,
    "compareAtPrice": 453.32,
    "rating": 4.9,
    "reviewCount": 135,
    "sizes": [
      "Free Size"
    ],
    "freeSize": true,
    "images": [
      "/placeholders/product-3c.svg",
      "/placeholders/product-4.svg",
      "/placeholders/product-4b.svg"
    ],
    "primaryImage": "/placeholders/product-3c.svg",
    "inventoryCount": 22,
    "newArrival": true,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": true,
    "status": "active",
    "sizeChart": [],
    "relatedSlugs": [
      "pearl-ribbon-hair-clip",
      "leather-buckle-belt",
      "quilted-shoulder-bag",
      "silk-printed-scarf"
    ],
    "sourceImageUrl": "https://gogirlusa.com/cdn/shop/products/Crystal-Drop-Earrings-Clear-1_1800x.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_010",
    "slug": "leather-buckle-belt",
    "name": "Leather Buckle Belt",
    "categoryId": "cat_01",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Accessories",
    "shortDescription": "Leather Buckle Belt in LumiBelle's polished, easy-to-style finish.",
    "description": "Leather Buckle Belt is part of the LumiBelle edit for accessories. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Mixed materials with polished trim.",
    "sizeGuide": "Free Size. Designed to feel flexible across a range of fits.",
    "modelInfo": "Styled on models from 158\u2013172 cm to show drape and scale.",
    "tags": [
      "accessories",
      "lumibelle",
      "new-season"
    ],
    "collection": "Accessory Edit",
    "price": 365.43,
    "compareAtPrice": 536.56,
    "rating": 4.8,
    "reviewCount": 148,
    "sizes": [
      "Free Size"
    ],
    "freeSize": true,
    "images": [
      "https://thumbs.dreamstime.com/b/stylish-leather-belt-white-background-85474641.jpg",
      "/placeholders/product-4b.svg",
      "/placeholders/product-4c.svg"
    ],
    "primaryImage": "https://thumbs.dreamstime.com/b/stylish-leather-belt-white-background-85474641.jpg",
    "inventoryCount": 27,
    "newArrival": true,
    "bestSeller": true,
    "onSale": true,
    "featured": true,
    "trending": false,
    "status": "active",
    "sizeChart": [],
    "relatedSlugs": [
      "pearl-ribbon-hair-clip",
      "crystal-drop-earrings",
      "quilted-shoulder-bag",
      "silk-printed-scarf"
    ],
    "sourceImageUrl": "https://thumbs.dreamstime.com/b/stylish-leather-belt-white-background-85474641.jpg",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_011",
    "slug": "quilted-shoulder-bag",
    "name": "Quilted Shoulder Bag",
    "categoryId": "cat_01",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Accessories",
    "shortDescription": "Quilted Shoulder Bag in LumiBelle's polished, easy-to-style finish.",
    "description": "Quilted Shoulder Bag is part of the LumiBelle edit for accessories. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Mixed materials with polished trim.",
    "sizeGuide": "Free Size. Designed to feel flexible across a range of fits.",
    "modelInfo": "Styled on models from 158\u2013172 cm to show drape and scale.",
    "tags": [
      "accessories",
      "lumibelle",
      "editorial"
    ],
    "collection": "Accessory Edit",
    "price": 487.49,
    "compareAtPrice": 692.12,
    "rating": 4.7,
    "reviewCount": 161,
    "sizes": [
      "Free Size"
    ],
    "freeSize": true,
    "images": [
      "/placeholders/product-4b.svg",
      "/placeholders/product-4c.svg",
      "/placeholders/product-5.svg"
    ],
    "primaryImage": "/placeholders/product-4b.svg",
    "inventoryCount": 32,
    "newArrival": true,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [],
    "relatedSlugs": [
      "pearl-ribbon-hair-clip",
      "crystal-drop-earrings",
      "leather-buckle-belt",
      "silk-printed-scarf"
    ],
    "sourceImageUrl": "https://darkdepartment.com/cdn/shop/products/LEATHER-QUILTED-MINI-BAG-OFF-WHITE-1_800x.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_012",
    "slug": "silk-printed-scarf",
    "name": "Silk Printed Scarf",
    "categoryId": "cat_01",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Accessories",
    "shortDescription": "Silk Printed Scarf in LumiBelle's polished, easy-to-style finish.",
    "description": "Silk Printed Scarf is part of the LumiBelle edit for accessories. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Mixed materials with polished trim.",
    "sizeGuide": "Free Size. Designed to feel flexible across a range of fits.",
    "modelInfo": "Styled on models from 158\u2013172 cm to show drape and scale.",
    "tags": [
      "accessories",
      "lumibelle",
      "editorial"
    ],
    "collection": "Accessory Edit",
    "price": 472.59,
    "compareAtPrice": 577.8,
    "rating": 4.6,
    "reviewCount": 174,
    "sizes": [
      "Free Size"
    ],
    "freeSize": true,
    "images": [
      "/placeholders/product-4c.svg",
      "/placeholders/product-5.svg",
      "/placeholders/product-5b.svg"
    ],
    "primaryImage": "/placeholders/product-4c.svg",
    "inventoryCount": 8,
    "newArrival": true,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": true,
    "status": "active",
    "sizeChart": [],
    "relatedSlugs": [
      "pearl-ribbon-hair-clip",
      "crystal-drop-earrings",
      "leather-buckle-belt",
      "quilted-shoulder-bag"
    ],
    "sourceImageUrl": "https://cdn.artofwhere.com/img/products/silk-habotai-scarf-1_700x.png",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_013",
    "slug": "gold-chain-necklace",
    "name": "Gold Chain Necklace",
    "categoryId": "cat_01",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Accessories",
    "shortDescription": "Gold Chain Necklace in LumiBelle's polished, easy-to-style finish.",
    "description": "Gold Chain Necklace is part of the LumiBelle edit for accessories. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Mixed materials with polished trim.",
    "sizeGuide": "Free Size. Designed to feel flexible across a range of fits.",
    "modelInfo": "Styled on models from 158\u2013172 cm to show drape and scale.",
    "tags": [
      "accessories",
      "lumibelle",
      "editorial"
    ],
    "collection": "Accessory Edit",
    "price": 681.01,
    "compareAtPrice": 907.21,
    "rating": 4.5,
    "reviewCount": 187,
    "sizes": [
      "Free Size"
    ],
    "freeSize": true,
    "images": [
      "https://t3.ftcdn.net/jpg/04/42/46/36/360_F_442463640_wiE4F2LkcuqD.jpg",
      "/placeholders/product-5b.svg",
      "/placeholders/product-5c.svg"
    ],
    "primaryImage": "https://t3.ftcdn.net/jpg/04/42/46/36/360_F_442463640_wiE4F2LkcuqD.jpg",
    "inventoryCount": 13,
    "newArrival": false,
    "bestSeller": true,
    "onSale": true,
    "featured": true,
    "trending": false,
    "status": "active",
    "sizeChart": [],
    "relatedSlugs": [
      "pearl-ribbon-hair-clip",
      "crystal-drop-earrings",
      "leather-buckle-belt",
      "quilted-shoulder-bag"
    ],
    "sourceImageUrl": "https://t3.ftcdn.net/jpg/04/42/46/36/360_F_442463640_wiE4F2LkcuqD.jpg",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_014",
    "slug": "round-sunglasses",
    "name": "Round Sunglasses",
    "categoryId": "cat_01",
    "categorySlug": "accessories",
    "categoryName": "Accessories",
    "subcategory": "Accessories",
    "shortDescription": "Round Sunglasses in LumiBelle's polished, easy-to-style finish.",
    "description": "Round Sunglasses is part of the LumiBelle edit for accessories. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Mixed materials with polished trim.",
    "sizeGuide": "Free Size. Designed to feel flexible across a range of fits.",
    "modelInfo": "Styled on models from 158\u2013172 cm to show drape and scale.",
    "tags": [
      "accessories",
      "lumibelle",
      "editorial"
    ],
    "collection": "Accessory Edit",
    "price": 447.22,
    "compareAtPrice": 575.69,
    "rating": 4.4,
    "reviewCount": 200,
    "sizes": [
      "Free Size"
    ],
    "freeSize": true,
    "images": [
      "/placeholders/product-5b.svg",
      "/placeholders/product-5c.svg",
      "/placeholders/product-6.svg"
    ],
    "primaryImage": "/placeholders/product-5b.svg",
    "inventoryCount": 18,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [],
    "relatedSlugs": [
      "pearl-ribbon-hair-clip",
      "crystal-drop-earrings",
      "leather-buckle-belt",
      "quilted-shoulder-bag"
    ],
    "sourceImageUrl": "https://www.buckle.com/images/products/845/990/9B69RcpOmqVy.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_015",
    "slug": "motion-fit-set",
    "name": "Motion Fit Set",
    "categoryId": "cat_05",
    "categorySlug": "activewear",
    "categoryName": "Activewear",
    "subcategory": "Activewear",
    "shortDescription": "Motion Fit Set in LumiBelle's polished, easy-to-style finish.",
    "description": "Motion Fit Set is part of the LumiBelle edit for activewear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Stretch knit with breathable recovery.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "activewear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Move Softly",
    "price": 867.61,
    "compareAtPrice": 1186.57,
    "rating": 4.3,
    "reviewCount": 213,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-5c.svg",
      "/placeholders/product-6.svg",
      "/placeholders/product-6b.svg"
    ],
    "primaryImage": "/placeholders/product-5c.svg",
    "inventoryCount": 23,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": true,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      },
      {
        "label": "XL",
        "heightMin": 170,
        "heightMax": 180,
        "weightMin": 64,
        "weightMax": 75
      }
    ],
    "relatedSlugs": [
      "seamless-yoga-leggings",
      "breathable-mesh-tank",
      "zip-up-training-jacket",
      "performance-sports-bra"
    ],
    "sourceImageUrl": "https://editpictureonline.com/wp-content/uploads/2021/05/White-Background-Product-Photography-for-E-commerce.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_016",
    "slug": "seamless-yoga-leggings",
    "name": "Seamless Yoga Leggings",
    "categoryId": "cat_05",
    "categorySlug": "activewear",
    "categoryName": "Activewear",
    "subcategory": "Activewear",
    "shortDescription": "Seamless Yoga Leggings in LumiBelle's polished, easy-to-style finish.",
    "description": "Seamless Yoga Leggings is part of the LumiBelle edit for activewear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Stretch knit with breathable recovery.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "activewear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Move Softly",
    "price": 583.03,
    "compareAtPrice": 832.11,
    "rating": 4.2,
    "reviewCount": 226,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-6.svg",
      "/placeholders/product-6b.svg",
      "/placeholders/product-6c.svg"
    ],
    "primaryImage": "/placeholders/product-6.svg",
    "inventoryCount": 28,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      },
      {
        "label": "XL",
        "heightMin": 170,
        "heightMax": 180,
        "weightMin": 64,
        "weightMax": 75
      }
    ],
    "relatedSlugs": [
      "motion-fit-set",
      "breathable-mesh-tank",
      "zip-up-training-jacket",
      "performance-sports-bra"
    ],
    "sourceImageUrl": "https://aoxjox.com/cdn/shop/products/Vital-Seamless-Leggings-White-1_1800x.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_017",
    "slug": "breathable-mesh-tank",
    "name": "Breathable Mesh Tank",
    "categoryId": "cat_05",
    "categorySlug": "activewear",
    "categoryName": "Activewear",
    "subcategory": "Activewear",
    "shortDescription": "Breathable Mesh Tank in LumiBelle's polished, easy-to-style finish.",
    "description": "Breathable Mesh Tank is part of the LumiBelle edit for activewear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Stretch knit with breathable recovery.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "activewear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Move Softly",
    "price": 990.52,
    "compareAtPrice": 1237.71,
    "rating": 4.9,
    "reviewCount": 239,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "freeSize": false,
    "images": [
      "https://as1.ftcdn.net/v2/jpg/04/25/77/04/1000_F_425770419_A0hog52P2aD1.jpg",
      "/placeholders/product-6c.svg",
      "/placeholders/product-7.svg"
    ],
    "primaryImage": "https://as1.ftcdn.net/v2/jpg/04/25/77/04/1000_F_425770419_A0hog52P2aD1.jpg",
    "inventoryCount": 33,
    "newArrival": false,
    "bestSeller": true,
    "onSale": true,
    "featured": true,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      },
      {
        "label": "XL",
        "heightMin": 170,
        "heightMax": 180,
        "weightMin": 64,
        "weightMax": 75
      }
    ],
    "relatedSlugs": [
      "motion-fit-set",
      "seamless-yoga-leggings",
      "zip-up-training-jacket",
      "performance-sports-bra"
    ],
    "sourceImageUrl": "https://as1.ftcdn.net/v2/jpg/04/25/77/04/1000_F_425770419_A0hog52P2aD1.jpg",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_018",
    "slug": "zip-up-training-jacket",
    "name": "Zip-Up Training Jacket",
    "categoryId": "cat_05",
    "categorySlug": "activewear",
    "categoryName": "Activewear",
    "subcategory": "Activewear",
    "shortDescription": "Zip-Up Training Jacket in LumiBelle's polished, easy-to-style finish.",
    "description": "Zip-Up Training Jacket is part of the LumiBelle edit for activewear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Stretch knit with breathable recovery.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "activewear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Move Softly",
    "price": 649.19,
    "compareAtPrice": 863.9,
    "rating": 4.8,
    "reviewCount": 252,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-6c.svg",
      "/placeholders/product-7.svg",
      "/placeholders/product-7b.svg"
    ],
    "primaryImage": "/placeholders/product-6c.svg",
    "inventoryCount": 9,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": true,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      },
      {
        "label": "XL",
        "heightMin": 170,
        "heightMax": 180,
        "weightMin": 64,
        "weightMax": 75
      }
    ],
    "relatedSlugs": [
      "motion-fit-set",
      "seamless-yoga-leggings",
      "breathable-mesh-tank",
      "performance-sports-bra"
    ],
    "sourceImageUrl": "https://m.media-amazon.com/images/I/61N-9Z7Z8GL._AC_UX679_.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_019",
    "slug": "performance-sports-bra",
    "name": "Performance Sports Bra",
    "categoryId": "cat_05",
    "categorySlug": "activewear",
    "categoryName": "Activewear",
    "subcategory": "Activewear",
    "shortDescription": "Performance Sports Bra in LumiBelle's polished, easy-to-style finish.",
    "description": "Performance Sports Bra is part of the LumiBelle edit for activewear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Stretch knit with breathable recovery.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "activewear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Move Softly",
    "price": 441.18,
    "compareAtPrice": 533.59,
    "rating": 4.7,
    "reviewCount": 25,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-7.svg",
      "/placeholders/product-7b.svg",
      "/placeholders/product-7c.svg"
    ],
    "primaryImage": "/placeholders/product-7.svg",
    "inventoryCount": 14,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      },
      {
        "label": "XL",
        "heightMin": 170,
        "heightMax": 180,
        "weightMin": 64,
        "weightMax": 75
      }
    ],
    "relatedSlugs": [
      "motion-fit-set",
      "seamless-yoga-leggings",
      "breathable-mesh-tank",
      "zip-up-training-jacket"
    ],
    "sourceImageUrl": "https://m.media-amazon.com/images/I/71R8u-P8zSL._AC_UX679_.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_020",
    "slug": "jogger-sweatpants",
    "name": "Jogger Sweatpants",
    "categoryId": "cat_05",
    "categorySlug": "activewear",
    "categoryName": "Activewear",
    "subcategory": "Activewear",
    "shortDescription": "Jogger Sweatpants in LumiBelle's polished, easy-to-style finish.",
    "description": "Jogger Sweatpants is part of the LumiBelle edit for activewear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Stretch knit with breathable recovery.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "activewear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Move Softly",
    "price": 796.74,
    "compareAtPrice": 958.55,
    "rating": 4.6,
    "reviewCount": 38,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "freeSize": false,
    "images": [
      "https://www.shutterstock.com/shutterstock/photos/2371455813/display_1500/stock-photo-black-sweatpants-isolated-on-white-background-2371455813.jpg",
      "/placeholders/product-7c.svg",
      "/placeholders/product-8.svg"
    ],
    "primaryImage": "https://www.shutterstock.com/shutterstock/photos/2371455813/display_1500/stock-photo-black-sweatpants-isolated-on-white-background-2371455813.jpg",
    "inventoryCount": 19,
    "newArrival": false,
    "bestSeller": true,
    "onSale": true,
    "featured": true,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      },
      {
        "label": "XL",
        "heightMin": 170,
        "heightMax": 180,
        "weightMin": 64,
        "weightMax": 75
      }
    ],
    "relatedSlugs": [
      "motion-fit-set",
      "seamless-yoga-leggings",
      "breathable-mesh-tank",
      "zip-up-training-jacket"
    ],
    "sourceImageUrl": "https://www.shutterstock.com/shutterstock/photos/2371455813/display_1500/stock-photo-black-sweatpants-isolated-on-white-background-2371455813.jpg",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_021",
    "slug": "lightweight-running-shorts",
    "name": "Lightweight Running Shorts",
    "categoryId": "cat_05",
    "categorySlug": "activewear",
    "categoryName": "Activewear",
    "subcategory": "Activewear",
    "shortDescription": "Lightweight Running Shorts in LumiBelle's polished, easy-to-style finish.",
    "description": "Lightweight Running Shorts is part of the LumiBelle edit for activewear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Stretch knit with breathable recovery.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "activewear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Move Softly",
    "price": 852.69,
    "compareAtPrice": 1091.54,
    "rating": 4.5,
    "reviewCount": 51,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-7c.svg",
      "/placeholders/product-8.svg",
      "/placeholders/product-8b.svg"
    ],
    "primaryImage": "/placeholders/product-7c.svg",
    "inventoryCount": 24,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": true,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      },
      {
        "label": "XL",
        "heightMin": 170,
        "heightMax": 180,
        "weightMin": 64,
        "weightMax": 75
      }
    ],
    "relatedSlugs": [
      "motion-fit-set",
      "seamless-yoga-leggings",
      "breathable-mesh-tank",
      "zip-up-training-jacket"
    ],
    "sourceImageUrl": "https://m.media-amazon.com/images/I/61r5f8zL6L._AC_UX679_.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_022",
    "slug": "golden-evening-dress-occasion",
    "name": "Golden Evening Dress",
    "categoryId": "cat_06",
    "categorySlug": "occasion-wear",
    "categoryName": "Occasion Wear",
    "subcategory": "Occasion",
    "shortDescription": "Golden Evening Dress in LumiBelle's polished, easy-to-style finish.",
    "description": "Golden Evening Dress is part of the LumiBelle edit for occasion wear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Dressy fabrication with a soft hand feel.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "occasion wear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Event Muse",
    "price": 2278.1,
    "compareAtPrice": 3232.26,
    "rating": 4.4,
    "reviewCount": 64,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-8.svg",
      "/placeholders/product-8b.svg",
      "/placeholders/product-8c.svg"
    ],
    "primaryImage": "/placeholders/product-8.svg",
    "inventoryCount": 29,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "sequin-mermaid-gown",
      "velvet-off-shoulder-dress",
      "satin-wrap-dress",
      "embellished-maxi-dress"
    ],
    "sourceImageUrl": "https://thumbs.dreamstime.com/b/fashion-model-gold-dress-woman-full-length-portrait-white-background-12345678.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_023",
    "slug": "sequin-mermaid-gown",
    "name": "Sequin Mermaid Gown",
    "categoryId": "cat_06",
    "categorySlug": "occasion-wear",
    "categoryName": "Occasion Wear",
    "subcategory": "Occasion",
    "shortDescription": "Sequin Mermaid Gown in LumiBelle's polished, easy-to-style finish.",
    "description": "Sequin Mermaid Gown is part of the LumiBelle edit for occasion wear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Dressy fabrication with a soft hand feel.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "occasion wear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Event Muse",
    "price": 2849.07,
    "compareAtPrice": 4022.57,
    "rating": 4.3,
    "reviewCount": 77,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-8b.svg",
      "/placeholders/product-8c.svg",
      "/placeholders/product-1.svg"
    ],
    "primaryImage": "/placeholders/product-8b.svg",
    "inventoryCount": 34,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "golden-evening-dress-occasion",
      "velvet-off-shoulder-dress",
      "satin-wrap-dress",
      "embellished-maxi-dress"
    ],
    "sourceImageUrl": "https://www.jovani.com/wp-content/uploads/2022/08/42600-1.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_024",
    "slug": "velvet-off-shoulder-dress",
    "name": "Velvet Off-Shoulder Dress",
    "categoryId": "cat_06",
    "categorySlug": "occasion-wear",
    "categoryName": "Occasion Wear",
    "subcategory": "Occasion",
    "shortDescription": "Velvet Off-Shoulder Dress in LumiBelle's polished, easy-to-style finish.",
    "description": "Velvet Off-Shoulder Dress is part of the LumiBelle edit for occasion wear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Dressy fabrication with a soft hand feel.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "occasion wear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Event Muse",
    "price": 1099.39,
    "compareAtPrice": 1319.86,
    "rating": 4.2,
    "reviewCount": 90,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-8c.svg",
      "/placeholders/product-1.svg",
      "/placeholders/product-1b.svg"
    ],
    "primaryImage": "/placeholders/product-8c.svg",
    "inventoryCount": 10,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": true,
    "trending": true,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "golden-evening-dress-occasion",
      "sequin-mermaid-gown",
      "satin-wrap-dress",
      "embellished-maxi-dress"
    ],
    "sourceImageUrl": "https://www.promfy.com/uploads/product/1/0/10101/Long-Formal-Off-Shoulder-Velvet-Evening-Dress-1.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_025",
    "slug": "satin-wrap-dress",
    "name": "Satin Wrap Dress",
    "categoryId": "cat_06",
    "categorySlug": "occasion-wear",
    "categoryName": "Occasion Wear",
    "subcategory": "Occasion",
    "shortDescription": "Satin Wrap Dress in LumiBelle's polished, easy-to-style finish.",
    "description": "Satin Wrap Dress is part of the LumiBelle edit for occasion wear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Dressy fabrication with a soft hand feel.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "occasion wear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Event Muse",
    "price": 903.13,
    "compareAtPrice": 1333.06,
    "rating": 4.9,
    "reviewCount": 103,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-1.svg",
      "/placeholders/product-1b.svg",
      "/placeholders/product-1c.svg"
    ],
    "primaryImage": "/placeholders/product-1.svg",
    "inventoryCount": 15,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "golden-evening-dress-occasion",
      "sequin-mermaid-gown",
      "velvet-off-shoulder-dress",
      "embellished-maxi-dress"
    ],
    "sourceImageUrl": "https://m.media-amazon.com/images/I/71z8u-P8zSL._AC_UX679_.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_026",
    "slug": "embellished-maxi-dress",
    "name": "Embellished Maxi Dress",
    "categoryId": "cat_06",
    "categorySlug": "occasion-wear",
    "categoryName": "Occasion Wear",
    "subcategory": "Occasion",
    "shortDescription": "Embellished Maxi Dress in LumiBelle's polished, easy-to-style finish.",
    "description": "Embellished Maxi Dress is part of the LumiBelle edit for occasion wear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Dressy fabrication with a soft hand feel.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "occasion wear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Event Muse",
    "price": 1350.48,
    "compareAtPrice": 1688.35,
    "rating": 4.8,
    "reviewCount": 116,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-1b.svg",
      "/placeholders/product-1c.svg",
      "/placeholders/product-2.svg"
    ],
    "primaryImage": "/placeholders/product-1b.svg",
    "inventoryCount": 20,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "golden-evening-dress-occasion",
      "sequin-mermaid-gown",
      "velvet-off-shoulder-dress",
      "satin-wrap-dress"
    ],
    "sourceImageUrl": "https://shopakira.com/cdn/shop/products/BELLE-OF-THE-BALL-SEQUIN-RUFFLE-MAXI-DRESS-IN-WHITE-1_800x.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_027",
    "slug": "tulle-ball-gown",
    "name": "Tulle Ball Gown",
    "categoryId": "cat_06",
    "categorySlug": "occasion-wear",
    "categoryName": "Occasion Wear",
    "subcategory": "Occasion",
    "shortDescription": "Tulle Ball Gown in LumiBelle's polished, easy-to-style finish.",
    "description": "Tulle Ball Gown is part of the LumiBelle edit for occasion wear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Dressy fabrication with a soft hand feel.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "occasion wear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Event Muse",
    "price": 945.56,
    "compareAtPrice": 1351.1,
    "rating": 4.7,
    "reviewCount": 129,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-1c.svg",
      "/placeholders/product-2.svg",
      "/placeholders/product-2b.svg"
    ],
    "primaryImage": "/placeholders/product-1c.svg",
    "inventoryCount": 25,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": true,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "golden-evening-dress-occasion",
      "sequin-mermaid-gown",
      "velvet-off-shoulder-dress",
      "satin-wrap-dress"
    ],
    "sourceImageUrl": "https://m.media-amazon.com/images/I/81R8u-P8zSL._AC_UX679_.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_028",
    "slug": "chic-cocktail-mini-dress",
    "name": "Chic Cocktail Mini Dress",
    "categoryId": "cat_06",
    "categorySlug": "occasion-wear",
    "categoryName": "Occasion Wear",
    "subcategory": "Occasion",
    "shortDescription": "Chic Cocktail Mini Dress in LumiBelle's polished, easy-to-style finish.",
    "description": "Chic Cocktail Mini Dress is part of the LumiBelle edit for occasion wear. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Dressy fabrication with a soft hand feel.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "occasion wear",
      "lumibelle",
      "editorial"
    ],
    "collection": "Event Muse",
    "price": 2166.49,
    "compareAtPrice": 3174.41,
    "rating": 4.6,
    "reviewCount": 142,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-2.svg",
      "/placeholders/product-2b.svg",
      "/placeholders/product-2c.svg"
    ],
    "primaryImage": "/placeholders/product-2.svg",
    "inventoryCount": 30,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "golden-evening-dress-occasion",
      "sequin-mermaid-gown",
      "velvet-off-shoulder-dress",
      "satin-wrap-dress"
    ],
    "sourceImageUrl": "https://m.media-amazon.com/images/I/61z8u-P8zSL._AC_UX679_.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_029",
    "slug": "blush-midi-dress",
    "name": "Blush Midi Dress",
    "categoryId": "cat_02",
    "categorySlug": "dresses",
    "categoryName": "Dresses",
    "subcategory": "Dresses",
    "shortDescription": "Blush Midi Dress in LumiBelle's polished, easy-to-style finish.",
    "description": "Blush Midi Dress is part of the LumiBelle edit for dresses. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Soft drape fabric with smooth lining.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "dresses",
      "lumibelle",
      "editorial"
    ],
    "collection": "Dress Studio",
    "price": 2462.85,
    "compareAtPrice": 3651.67,
    "rating": 4.5,
    "reviewCount": 155,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "https://down-th.img.susercontent.com/file/sg-11134202-7reos-m8hb8x02f2ci01@resize_w900_nl.webp",
      "/placeholders/product-2c.svg",
      "/placeholders/product-3.svg"
    ],
    "primaryImage": "https://down-th.img.susercontent.com/file/sg-11134202-7reos-m8hb8x02f2ci01@resize_w900_nl.webp",
    "inventoryCount": 6,
    "newArrival": false,
    "bestSeller": true,
    "onSale": true,
    "featured": true,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "golden-evening-dress",
      "floral-maxi-dress",
      "satin-slip-dress",
      "velvet-cocktail-dress"
    ],
    "sourceImageUrl": "https://down-th.img.susercontent.com/file/sg-11134202-7reos-m8hb8x02f2ci01@resize_w900_nl.webp",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_030",
    "slug": "golden-evening-dress",
    "name": "Golden Evening Dress",
    "categoryId": "cat_02",
    "categorySlug": "dresses",
    "categoryName": "Dresses",
    "subcategory": "Dresses",
    "shortDescription": "Golden Evening Dress in LumiBelle's polished, easy-to-style finish.",
    "description": "Golden Evening Dress is part of the LumiBelle edit for dresses. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Soft drape fabric with smooth lining.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "dresses",
      "lumibelle",
      "editorial"
    ],
    "collection": "Dress Studio",
    "price": 941.34,
    "compareAtPrice": 1219.04,
    "rating": 4.4,
    "reviewCount": 168,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-2c.svg",
      "/placeholders/product-3.svg",
      "/placeholders/product-3b.svg"
    ],
    "primaryImage": "/placeholders/product-2c.svg",
    "inventoryCount": 11,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": true,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "blush-midi-dress",
      "floral-maxi-dress",
      "satin-slip-dress",
      "velvet-cocktail-dress"
    ],
    "sourceImageUrl": "https://www.mytheresa.com/image/1094/1238/100/df/P00988145.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_031",
    "slug": "floral-maxi-dress",
    "name": "Floral Maxi Dress",
    "categoryId": "cat_02",
    "categorySlug": "dresses",
    "categoryName": "Dresses",
    "subcategory": "Dresses",
    "shortDescription": "Floral Maxi Dress in LumiBelle's polished, easy-to-style finish.",
    "description": "Floral Maxi Dress is part of the LumiBelle edit for dresses. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Soft drape fabric with smooth lining.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "dresses",
      "lumibelle",
      "editorial"
    ],
    "collection": "Dress Studio",
    "price": 1580.68,
    "compareAtPrice": 2071.56,
    "rating": 4.3,
    "reviewCount": 181,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-3.svg",
      "/placeholders/product-3b.svg",
      "/placeholders/product-3c.svg"
    ],
    "primaryImage": "/placeholders/product-3.svg",
    "inventoryCount": 16,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "blush-midi-dress",
      "golden-evening-dress",
      "satin-slip-dress",
      "velvet-cocktail-dress"
    ],
    "sourceImageUrl": "https://www.mytheresa.com/image/1094/1238/100/05/P01044776.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_032",
    "slug": "satin-slip-dress",
    "name": "Satin Slip Dress",
    "categoryId": "cat_02",
    "categorySlug": "dresses",
    "categoryName": "Dresses",
    "subcategory": "Dresses",
    "shortDescription": "Satin Slip Dress in LumiBelle's polished, easy-to-style finish.",
    "description": "Satin Slip Dress is part of the LumiBelle edit for dresses. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Soft drape fabric with smooth lining.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "dresses",
      "lumibelle",
      "editorial"
    ],
    "collection": "Dress Studio",
    "price": 2974.65,
    "compareAtPrice": 4173.97,
    "rating": 4.2,
    "reviewCount": 194,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-3b.svg",
      "/placeholders/product-3c.svg",
      "/placeholders/product-4.svg"
    ],
    "primaryImage": "/placeholders/product-3b.svg",
    "inventoryCount": 21,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "blush-midi-dress",
      "golden-evening-dress",
      "floral-maxi-dress",
      "velvet-cocktail-dress"
    ],
    "sourceImageUrl": "https://cdn-images.farfetch-contents.com/15/06/97/94/15069794_26204750_1000.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_033",
    "slug": "velvet-cocktail-dress",
    "name": "Velvet Cocktail Dress",
    "categoryId": "cat_02",
    "categorySlug": "dresses",
    "categoryName": "Dresses",
    "subcategory": "Dresses",
    "shortDescription": "Velvet Cocktail Dress in LumiBelle's polished, easy-to-style finish.",
    "description": "Velvet Cocktail Dress is part of the LumiBelle edit for dresses. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Soft drape fabric with smooth lining.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "dresses",
      "lumibelle",
      "editorial"
    ],
    "collection": "Dress Studio",
    "price": 1540.99,
    "compareAtPrice": 1883.34,
    "rating": 4.9,
    "reviewCount": 207,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1CkPdSpj_O6w0qCYKVfZtDjTox48kbU6iB299zNN9g&s",
      "/placeholders/product-4.svg",
      "/placeholders/product-4b.svg"
    ],
    "primaryImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1CkPdSpj_O6w0qCYKVfZtDjTox48kbU6iB299zNN9g&s",
    "inventoryCount": 26,
    "newArrival": false,
    "bestSeller": true,
    "onSale": true,
    "featured": true,
    "trending": true,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "blush-midi-dress",
      "golden-evening-dress",
      "floral-maxi-dress",
      "satin-slip-dress"
    ],
    "sourceImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1CkPdSpj_O6w0qCYKVfZtDjTox48kbU6iB299zNN9g&s",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_034",
    "slug": "ruffled-summer-dress",
    "name": "Ruffled Summer Dress",
    "categoryId": "cat_02",
    "categorySlug": "dresses",
    "categoryName": "Dresses",
    "subcategory": "Dresses",
    "shortDescription": "Ruffled Summer Dress in LumiBelle's polished, easy-to-style finish.",
    "description": "Ruffled Summer Dress is part of the LumiBelle edit for dresses. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Soft drape fabric with smooth lining.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "dresses",
      "lumibelle",
      "editorial"
    ],
    "collection": "Dress Studio",
    "price": 2432.71,
    "compareAtPrice": 2954.9,
    "rating": 4.8,
    "reviewCount": 220,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "https://down-th.img.susercontent.com/file/sg-11134202-7repu-m8hb80khvn9t3c@resize_w900_nl.webp",
      "/placeholders/product-4b.svg",
      "/placeholders/product-4c.svg"
    ],
    "primaryImage": "https://down-th.img.susercontent.com/file/sg-11134202-7repu-m8hb80khvn9t3c@resize_w900_nl.webp",
    "inventoryCount": 31,
    "newArrival": false,
    "bestSeller": true,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "blush-midi-dress",
      "golden-evening-dress",
      "floral-maxi-dress",
      "satin-slip-dress"
    ],
    "sourceImageUrl": "https://down-th.img.susercontent.com/file/sg-11134202-7repu-m8hb80khvn9t3c@resize_w900_nl.webp",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_035",
    "slug": "lace-a-line-dress",
    "name": "Lace A-Line Dress",
    "categoryId": "cat_02",
    "categorySlug": "dresses",
    "categoryName": "Dresses",
    "subcategory": "Dresses",
    "shortDescription": "Lace A-Line Dress in LumiBelle's polished, easy-to-style finish.",
    "description": "Lace A-Line Dress is part of the LumiBelle edit for dresses. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Soft drape fabric with smooth lining.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "dresses",
      "lumibelle",
      "editorial"
    ],
    "collection": "Dress Studio",
    "price": 1408.28,
    "compareAtPrice": 2071.01,
    "rating": 4.7,
    "reviewCount": 233,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "https://www.selinadress.com/cdn/shop/products/a-line-cap-sleeve-vintage-champagne-lace-bohemian-wedding-dress-sexy-backless-bridal-gown-sew070.png?v=1618223566",
      "/placeholders/product-4c.svg",
      "/placeholders/product-5.svg"
    ],
    "primaryImage": "https://www.selinadress.com/cdn/shop/products/a-line-cap-sleeve-vintage-champagne-lace-bohemian-wedding-dress-sexy-backless-bridal-gown-sew070.png?v=1618223566",
    "inventoryCount": 7,
    "newArrival": false,
    "bestSeller": true,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "XS",
        "heightMin": 148,
        "heightMax": 158,
        "weightMin": 40,
        "weightMax": 46
      },
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "blush-midi-dress",
      "golden-evening-dress",
      "floral-maxi-dress",
      "satin-slip-dress"
    ],
    "sourceImageUrl": "https://www.selinadress.com/cdn/shop/products/a-line-cap-sleeve-vintage-champagne-lace-bohemian-wedding-dress-sexy-backless-bridal-gown-sew070.png?v=1618223566",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_036",
    "slug": "cloud-knit-top",
    "name": "Cloud Knit Top",
    "categoryId": "cat_03",
    "categorySlug": "tops",
    "categoryName": "Tops",
    "subcategory": "Tops",
    "shortDescription": "Cloud Knit Top in LumiBelle's polished, easy-to-style finish.",
    "description": "Cloud Knit Top is part of the LumiBelle edit for tops. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Comfort-first fabric with a premium finish.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "tops",
      "lumibelle",
      "editorial"
    ],
    "collection": "Top Layer",
    "price": 610.89,
    "compareAtPrice": 877.28,
    "rating": 4.6,
    "reviewCount": 246,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "https://blui.ca/cdn/shop/files/2B9544B0-28FA-4574-9005-3B17338652A7_1080x1080.png?v=1745430996",
      "/placeholders/product-5.svg",
      "/placeholders/product-5b.svg"
    ],
    "primaryImage": "https://blui.ca/cdn/shop/files/2B9544B0-28FA-4574-9005-3B17338652A7_1080x1080.png?v=1745430996",
    "inventoryCount": 12,
    "newArrival": false,
    "bestSeller": true,
    "onSale": true,
    "featured": true,
    "trending": true,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "classic-white-shirt",
      "cropped-denim-jacket",
      "silk-camisole-top",
      "graphic-oversized-tee"
    ],
    "sourceImageUrl": "https://blui.ca/cdn/shop/files/2B9544B0-28FA-4574-9005-3B17338652A7_1080x1080.png?v=1745430996",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_037",
    "slug": "classic-white-shirt",
    "name": "Classic White Shirt",
    "categoryId": "cat_03",
    "categorySlug": "tops",
    "categoryName": "Tops",
    "subcategory": "Tops",
    "shortDescription": "Classic White Shirt in LumiBelle's polished, easy-to-style finish.",
    "description": "Classic White Shirt is part of the LumiBelle edit for tops. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Comfort-first fabric with a premium finish.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "tops",
      "lumibelle",
      "editorial"
    ],
    "collection": "Top Layer",
    "price": 560.97,
    "compareAtPrice": 802.18,
    "rating": 4.5,
    "reviewCount": 19,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "https://static.vecteezy.com/system/resources/thumbnails/065/764/489/small/classic-white-t-shirt-for-casual-wear-and-everyday-comfort-png.png",
      "/placeholders/product-5b.svg",
      "/placeholders/product-5c.svg"
    ],
    "primaryImage": "https://static.vecteezy.com/system/resources/thumbnails/065/764/489/small/classic-white-t-shirt-for-casual-wear-and-everyday-comfort-png.png",
    "inventoryCount": 17,
    "newArrival": false,
    "bestSeller": true,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "cloud-knit-top",
      "cropped-denim-jacket",
      "silk-camisole-top",
      "graphic-oversized-tee"
    ],
    "sourceImageUrl": "https://static.vecteezy.com/system/resources/thumbnails/065/764/489/small/classic-white-t-shirt-for-casual-wear-and-everyday-comfort-png.png",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_038",
    "slug": "cropped-denim-jacket",
    "name": "Cropped Denim Jacket",
    "categoryId": "cat_03",
    "categorySlug": "tops",
    "categoryName": "Tops",
    "subcategory": "Tops",
    "shortDescription": "Cropped Denim Jacket in LumiBelle's polished, easy-to-style finish.",
    "description": "Cropped Denim Jacket is part of the LumiBelle edit for tops. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Comfort-first fabric with a premium finish.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "tops",
      "lumibelle",
      "editorial"
    ],
    "collection": "Top Layer",
    "price": 855.64,
    "compareAtPrice": 1195.45,
    "rating": 4.4,
    "reviewCount": 32,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTq4ULxeKObEBY-SsvNliZ-Tj7TYaad3QquttT1co1gA&s",
      "/placeholders/product-5c.svg",
      "/placeholders/product-6.svg"
    ],
    "primaryImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTq4ULxeKObEBY-SsvNliZ-Tj7TYaad3QquttT1co1gA&s",
    "inventoryCount": 22,
    "newArrival": false,
    "bestSeller": true,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "cloud-knit-top",
      "classic-white-shirt",
      "silk-camisole-top",
      "graphic-oversized-tee"
    ],
    "sourceImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTq4ULxeKObEBY-SsvNliZ-Tj7TYaad3QquttT1co1gA&s",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_039",
    "slug": "silk-camisole-top",
    "name": "Silk Camisole Top",
    "categoryId": "cat_03",
    "categorySlug": "tops",
    "categoryName": "Tops",
    "subcategory": "Tops",
    "shortDescription": "Silk Camisole Top in LumiBelle's polished, easy-to-style finish.",
    "description": "Silk Camisole Top is part of the LumiBelle edit for tops. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Comfort-first fabric with a premium finish.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "tops",
      "lumibelle",
      "editorial"
    ],
    "collection": "Top Layer",
    "price": 645.49,
    "compareAtPrice": 878.4,
    "rating": 4.3,
    "reviewCount": 45,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-5c.svg",
      "/placeholders/product-6.svg",
      "/placeholders/product-6b.svg"
    ],
    "primaryImage": "/placeholders/product-5c.svg",
    "inventoryCount": 27,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": true,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "cloud-knit-top",
      "classic-white-shirt",
      "cropped-denim-jacket",
      "graphic-oversized-tee"
    ],
    "sourceImageUrl": "https://www.mytheresa.com/image/1094/1238/100/8c/P00942176.jpg",
    "imageAuditStatus": "broken"
  },
  {
    "id": "prd_040",
    "slug": "graphic-oversized-tee",
    "name": "Graphic Oversized Tee",
    "categoryId": "cat_03",
    "categorySlug": "tops",
    "categoryName": "Tops",
    "subcategory": "Tops",
    "shortDescription": "Graphic Oversized Tee in LumiBelle's polished, easy-to-style finish.",
    "description": "Graphic Oversized Tee is part of the LumiBelle edit for tops. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Comfort-first fabric with a premium finish.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "tops",
      "lumibelle",
      "editorial"
    ],
    "collection": "Top Layer",
    "price": 749.79,
    "compareAtPrice": 1015.59,
    "rating": 4.2,
    "reviewCount": 58,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "https://i5.walmartimages.com/asr/5e8f1883-56c0-4720-a775-2fc291642d4c.587ab1c3ae3048c98025177b6cf04360.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      "/placeholders/product-6b.svg",
      "/placeholders/product-6c.svg"
    ],
    "primaryImage": "https://i5.walmartimages.com/asr/5e8f1883-56c0-4720-a775-2fc291642d4c.587ab1c3ae3048c98025177b6cf04360.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    "inventoryCount": 32,
    "newArrival": false,
    "bestSeller": true,
    "onSale": true,
    "featured": true,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "cloud-knit-top",
      "classic-white-shirt",
      "cropped-denim-jacket",
      "silk-camisole-top"
    ],
    "sourceImageUrl": "https://i5.walmartimages.com/asr/5e8f1883-56c0-4720-a775-2fc291642d4c.587ab1c3ae3048c98025177b6cf04360.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_041",
    "slug": "striped-button-up-blouse",
    "name": "Striped Button-Up Blouse",
    "categoryId": "cat_03",
    "categorySlug": "tops",
    "categoryName": "Tops",
    "subcategory": "Tops",
    "shortDescription": "Striped Button-Up Blouse in LumiBelle's polished, easy-to-style finish.",
    "description": "Striped Button-Up Blouse is part of the LumiBelle edit for tops. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Comfort-first fabric with a premium finish.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "tops",
      "lumibelle",
      "editorial"
    ],
    "collection": "Top Layer",
    "price": 457.89,
    "compareAtPrice": 666.75,
    "rating": 4.9,
    "reviewCount": 71,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "https://down-th.img.susercontent.com/file/sg-11134201-7rbkc-locop6pltpnu6b@resize_w900_nl.webp",
      "/placeholders/product-6c.svg",
      "/placeholders/product-7.svg"
    ],
    "primaryImage": "https://down-th.img.susercontent.com/file/sg-11134201-7rbkc-locop6pltpnu6b@resize_w900_nl.webp",
    "inventoryCount": 8,
    "newArrival": false,
    "bestSeller": true,
    "onSale": true,
    "featured": false,
    "trending": false,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "cloud-knit-top",
      "classic-white-shirt",
      "cropped-denim-jacket",
      "silk-camisole-top"
    ],
    "sourceImageUrl": "https://down-th.img.susercontent.com/file/sg-11134201-7rbkc-locop6pltpnu6b@resize_w900_nl.webp",
    "imageAuditStatus": "ok"
  },
  {
    "id": "prd_042",
    "slug": "off-shoulder-ruffle-top",
    "name": "Off-Shoulder Ruffle Top",
    "categoryId": "cat_03",
    "categorySlug": "tops",
    "categoryName": "Tops",
    "subcategory": "Tops",
    "shortDescription": "Off-Shoulder Ruffle Top in LumiBelle's polished, easy-to-style finish.",
    "description": "Off-Shoulder Ruffle Top is part of the LumiBelle edit for tops. It balances a feminine silhouette with easy styling so shoppers can dress it up or keep it casual.",
    "material": "Comfort-first fabric with a premium finish.",
    "sizeGuide": "Fits true to size. Check the smart size helper for a more tailored recommendation.",
    "modelInfo": "Model is 168 cm / 52 kg and shown in the recommended size.",
    "tags": [
      "tops",
      "lumibelle",
      "editorial"
    ],
    "collection": "Top Layer",
    "price": 749.9,
    "compareAtPrice": 1104.99,
    "rating": 4.8,
    "reviewCount": 84,
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "freeSize": false,
    "images": [
      "/placeholders/product-6c.svg",
      "/placeholders/product-7.svg",
      "/placeholders/product-7b.svg"
    ],
    "primaryImage": "/placeholders/product-6c.svg",
    "inventoryCount": 13,
    "newArrival": false,
    "bestSeller": false,
    "onSale": true,
    "featured": false,
    "trending": true,
    "status": "active",
    "sizeChart": [
      {
        "label": "S",
        "heightMin": 154,
        "heightMax": 164,
        "weightMin": 45,
        "weightMax": 52
      },
      {
        "label": "M",
        "heightMin": 160,
        "heightMax": 170,
        "weightMin": 51,
        "weightMax": 59
      },
      {
        "label": "L",
        "heightMin": 166,
        "heightMax": 176,
        "weightMin": 58,
        "weightMax": 67
      }
    ],
    "relatedSlugs": [
      "cloud-knit-top",
      "classic-white-shirt",
      "cropped-denim-jacket",
      "silk-camisole-top"
    ],
    "sourceImageUrl": "https://png.pngtree.com/png-vector/20250513/ourmid/pngtree-women-s-beige-off-shoulder-top-with-crochet-detail-png-image_16247032.png",
    "imageAuditStatus": "broken"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function searchProducts(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  return products.filter((product) =>
    [
      product.name,
      product.shortDescription,
      product.description,
      product.categorySlug,
      product.subcategory ?? "",
      ...product.tags
    ]
      .join(" ")
      .toLowerCase()
      .includes(normalized)
  );
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export const okImageProducts = products.filter((product) => product.imageAuditStatus === "ok");
export const brokenImageProducts = products.filter((product) => product.imageAuditStatus === "broken");
