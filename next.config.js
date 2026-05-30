/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The marketing photos never change, so let the optimizer's output be
    // cached aggressively (browser + any CDN in front of /_next/image). This is
    // what turns the slow first on-demand optimization into a one-time cost
    // instead of paying it on every visit.
    minimumCacheTTL: 31536000, // 1 year
  },
}

module.exports = nextConfig
