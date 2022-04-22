/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com', 'lh3.googleusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
