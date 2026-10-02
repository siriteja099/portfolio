// Static export so the site can be hosted for free (GitHub Pages, Vercel, Netlify, Cloudflare Pages).
// For GitHub Pages project sites set NEXT_PUBLIC_BASE_PATH=/<repo-name> at build time.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
