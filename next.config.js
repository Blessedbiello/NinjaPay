/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    // This will warn but not fail the build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;