const nextConfig = {
  reactStrictMode: false,
};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/",
      },
    ],
  },
};
