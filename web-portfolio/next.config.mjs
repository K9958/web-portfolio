/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/web-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/web-portfolio/' : '',
  trailingSlash: true,
}

export default nextConfig;