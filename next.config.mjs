/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  // 性能優化
  experimental: {
    optimizeCss: false, // 優化 CSS 輸出
  },

  // 現代瀏覽器編譯目標 (減少 polyfills)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ohya.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.ohya.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
