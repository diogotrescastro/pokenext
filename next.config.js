/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains: ['cdn.traction.one', 'img.pokemondb.net']
  }
}

module.exports = nextConfig
