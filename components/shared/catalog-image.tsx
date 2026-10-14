"use client";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";
export function CatalogImage({ src, alt, ...props }: ImageProps) {
  const [failedSource, setFailedSource] = useState<ImageProps["src"] | null>(null);
  return <Image {...props} src={failedSource === src ? "/placeholders/hero-main.svg" : src} alt={alt} onError={() => setFailedSource(src)} />;
}
