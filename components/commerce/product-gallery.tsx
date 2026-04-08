"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
  alt: string;
  selectedImage: string;
  onSelectImage: (image: string) => void;
};

export function ProductGallery({
  images,
  alt,
  selectedImage,
  onSelectImage
}: ProductGalleryProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-[100px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {images.map((image, index) => {
          const active = selectedImage === image;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => onSelectImage(image)}
              className={`min-w-20 overflow-hidden rounded-[20px] bg-surface-low border transition ${
                active
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-outline/10 hover:border-primary/40"
              }`}
            >
              <Image
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                width={100}
                height={125}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="px-2 py-1 text-[11px] font-medium text-muted text-left">
                {index === 0 ? "Main" : `Look ${index + 1}`}
              </div>
            </button>
          );
        })}
      </div>

      <motion.div
        key={selectedImage}
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="order-1 overflow-hidden rounded-[32px] bg-surface-low lg:order-2"
      >
        <Image
          src={selectedImage}
          alt={alt}
          width={960}
          height={1200}
          className="aspect-[4/5] w-full object-cover"
        />
      </motion.div>
    </div>
  );
}