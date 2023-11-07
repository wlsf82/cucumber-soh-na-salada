/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tweets-codecademy.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/cucumber-salad.jpeg',
      },
    ],
  },
}

module.exports = nextConfig
