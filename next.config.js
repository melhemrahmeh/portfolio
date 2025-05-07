/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Enable styled-components if you use them
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
