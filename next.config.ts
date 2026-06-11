import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Same-origin proxy for Wowhead's model viewer assets — the browser can't
    // fetch wow.zamimg.com cross-origin, but a rewrite can.
    return [
      {
        source: "/modelviewer/:path*",
        destination: "https://wow.zamimg.com/modelviewer/:path*",
      },
    ];
  },
};

export default nextConfig;
