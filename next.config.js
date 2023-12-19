/** @type {import('next').NextConfig} */
const nextConfig = {};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled:
    process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" &&
    process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
