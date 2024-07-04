import dotenv from 'dotenv';

dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    DOMAIN: process.env.DOMAIN,
  },
};

export default nextConfig;
