import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images from the public directory (default) 
    // and set reasonable quality defaults
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/video-edit",
        destination: "/video-edits",
        permanent: true,
      },
      {
        source: "/graphic-design",
        destination: "/graphic-designs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
