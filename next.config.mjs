/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "guprojects.gitam.edu",
        pathname: "/catscms2/**",
      },
    ],
  },
};

export default nextConfig;
