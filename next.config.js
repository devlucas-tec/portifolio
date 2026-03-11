/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // Adicionei ambos para garantir, já que o Hygraph usa os dois
    domains: [
      'media.graphassets.com', 
      'eu-west-2.graphassets.com'
    ],
  },
}

module.exports = nextConfig