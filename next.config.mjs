/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Not: Eğer kdrglobal.net bağlamayacak, doğrudan github.io üzerinden yayınlayacaksanız alt satırı aktif edin:
  // basePath: '/kdrglobal',
};

export default nextConfig;
