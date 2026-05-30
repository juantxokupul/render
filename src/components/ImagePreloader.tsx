"use client";

import { useEffect } from "react";

// Every image used across the site. They're reused between pages, so warming
// them once on the first page makes later navigations show images instantly.
const IMAGES = [
  "/images/5374014.jpg",
  "/images/4218028.jpg",
  "/images/36366519.jpg",
  "/images/36697295.jpg",
  "/images/13902051.jpg",
  "/images/29093620.jpg",
];

// next/image's default deviceSizes — the widths the optimizer can emit.
const DEVICE_SIZES = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

// Mirror what next/image requests: /_next/image?url=…&w=…&q=75. Prefetching the
// raw file would NOT help — the browser only ever loads this optimized URL.
function optimizedUrl(src: string, width: number, quality = 75) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

export default function ImagePreloader() {
  useEffect(() => {
    const warm = () => {
      // Resolve the same width next/image picks for a full-bleed (sizes="100vw")
      // image: smallest device size >= viewport * DPR. This matches the heaviest
      // (hero) variant of each image, which is the one worth preloading.
      const target = window.innerWidth * (window.devicePixelRatio || 1);
      const width =
        DEVICE_SIZES.find((w) => w >= target) ?? DEVICE_SIZES[DEVICE_SIZES.length - 1];

      for (const src of IMAGES) {
        const img = new window.Image();
        img.src = optimizedUrl(src, width);
      }
    };

    // Wait for idle so we never compete with the current page's own loading.
    const ric = (
      window as Window & {
        requestIdleCallback?: (cb: () => void) => number;
        cancelIdleCallback?: (id: number) => void;
      }
    ).requestIdleCallback;

    if (ric) {
      const id = ric(warm);
      return () => window.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(warm, 1500);
    return () => window.clearTimeout(id);
  }, []);

  return null;
}
