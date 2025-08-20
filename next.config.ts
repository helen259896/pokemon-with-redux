import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.pokemondb.net',
        port: '',
        pathname: '/artwork/large/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname:
          '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**',
      },
      {
        protocol: 'https',
        hostname: 'pokeapi.co',
        port: '',
        pathname: '/api/v2/pokemon/**',
      },
    ],
  },
  // experimental: {
  //   serverActions: true,
  // },
};

export default nextConfig;
