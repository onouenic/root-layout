/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
  async rewrites() {
    return [
      {
        source: '/tasks',
        destination: 'http://localhost:3001/task'
      },
      {
        source: '/login',
        destination: 'http://localhost:3001/task/login/348ccb21-1833-4254-8a91-cfa9683dc470'
      }
    ]
  }
}

module.exports = nextConfig
