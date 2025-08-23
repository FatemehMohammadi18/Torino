/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "6500",
        pathname: "/static/images/**",
      },
      {
        protocol: "https",
        hostname: "constant-kiersten-my-personal-frontend-project-322b1f0a.koyeb.app",
        pathname: "/static/images/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://constant-kiersten-my-personal-frontend-project-322b1f0a.koyeb.app/:path*",
      },
    ];
  },
};

export default nextConfig;
