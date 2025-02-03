/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  basePath: '/web-portfolio',
}

export default nextConfig;