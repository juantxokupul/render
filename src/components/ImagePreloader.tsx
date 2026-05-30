"use client";

import { useEffect } from "react";

// Every image used across the site, paired with the largest `sizes` it renders
// at anywhere. They're reused between pages, so warming the *exact* variant a
// later page will request makes that navigation show images instantly. Warming
// a different width (e.g. always w=1920) just generates heavy variants no page
// displays — wasted optimizer CPU and bandwidth.
const IMAGES: { src: string; sizes: string }[] = [
  { src: "/images/5374014.jpg", sizes: "100vw" }, // home hero (full-bleed)
  { src: "/images/13902051.jpg", sizes: "100vw" }, // fiestas hero (full-bleed)
  { src: "/images/36697295.jpg", sizes: "100vw" }, // inauguracion hero (full-bleed)
  { src: "/images/4218028.jpg", sizes: "(max-width: 768px) 100vw, 550px" }, // cards
  { src: "/images/36366519.jpg", sizes: "(max-width: 768px) 100vw, 350px" }, // cards
  { src: "/images/29093620.jpg", sizes: "(max-width: 768px) 100vw, 350px" }, // gallery
];

// next/image's default deviceSizes — the widths the optimizer can emit.
const DEVICE_SIZES = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

// Mirror what next/image requests: /_next/image?url=…&w=…&q=75. Prefetching the
// raw file would NOT help — the browser only ever loads this optimized URL.
function optimizedUrl(src: string, width: number, quality = 75) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

// Resolve a CSS `<length>` token from a `sizes` string to pixels. Only the two
// forms next/image emits here appear: "<n>vw" and "<n>px".
function toPx(value: string) {
  return value.endsWith("vw")
    ? window.innerWidth * (parseFloat(value) / 100)
    : parseFloat(value);
}

// Evaluate a `sizes` string the same way the browser does: walk the
// comma-separated "(media) <length>" entries and take the first matching
// condition's length (or the trailing bare length).
function resolveSizePx(sizes: string) {
  for (const part of sizes.split(",").map((s) => s.trim())) {
    const match = part.match(/^(\(.+\))\s+(.+)$/);
    if (!match) return toPx(part); // bare fallback length
    if (window.matchMedia(match[1]).matches) return toPx(match[2]);
  }
  return toPx(sizes);
}

export default function ImagePreloader() {
  useEffect(() => {
    const warm = () => {
      const dpr = window.devicePixelRatio || 1;
      for (const { src, sizes } of IMAGES) {
        // Same selection next/image makes: smallest device size >= the slot's
        // displayed width scaled by DPR.
        const target = resolveSizePx(sizes) * dpr;
        const width =
          DEVICE_SIZES.find((w) => w >= target) ?? DEVICE_SIZES[DEVICE_SIZES.length - 1];
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
