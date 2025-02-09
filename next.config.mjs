/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/elveatetest", // Add your GitHub repository name here
  trailingSlash: true,
  images: {
    unoptimized: true, // Necessary for GitHub Pages since it does not support optimized images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecommerce.routemisr.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
