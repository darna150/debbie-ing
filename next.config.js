/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Breakpoints that match this portfolio's actual display widths.
    // Max image is 50vw on 1920px desktop = 960px → 2× retina = 1920px.
    // Removing 2048/3840 stops Vercel generating huge variants nobody requests.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Small fixed-size images: logos (96px), thumbnails (up to 512px)
    imageSizes: [64, 128, 256, 384, 512],
    // Cache optimized images for 1 year (same as vercel.json for raw assets)
    minimumCacheTTL: 31536000,
  },
  compress: true,
};

module.exports = nextConfig;
