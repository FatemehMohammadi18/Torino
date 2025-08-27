/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: new URL(process.env.NEXT_PUBLIC_BASE_URL).protocol.replace(":", ""),
        hostname: new URL(process.env.NEXT_PUBLIC_BASE_URL).hostname,
        port: new URL(process.env.NEXT_PUBLIC_BASE_URL).port || "",
        pathname: "/static/images/**",
      },
    ],
  },
};

export default nextConfig;
