const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, "modules"),
      path.join(__dirname, "globalStyles"),
    ],
  },
  env: {
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
    EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
