import type { NextConfig } from "next";

const longCache = "public, max-age=2592000, stale-while-revalidate=86400"; // 30 days

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 85],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      { source: "/videos/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
      { source: "/brand/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
      { source: "/og/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
    ];
  },
};

export default nextConfig;
