const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, "modules"),
      path.join(__dirname, "globalStyles"),
    ],
  },
};

module.exports = nextConfig;
