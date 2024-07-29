/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['a.storyblok.com'],
  }
}

export default nextConfig
