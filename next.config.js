/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
      path.join(__dirname, "globalStyles"),
    ],
  },
};

module.exports = nextConfig;
