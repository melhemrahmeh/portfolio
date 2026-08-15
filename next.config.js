/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    // Pin the workspace root: an unrelated pnpm-lock.yaml sits one directory up,
    // which Turbopack would otherwise try to infer the workspace root from.
    root: __dirname,
  },
};

module.exports = nextConfig;
