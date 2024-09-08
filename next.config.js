/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/TestFE-LineChart",
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  generateBuildId: async () => {
    return process.env.GIT_HASH;
  },
};

module.exports = nextConfig;
