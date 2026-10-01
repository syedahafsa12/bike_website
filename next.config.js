/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/demo-store", permanent: false }];
  },
};

export default nextConfig;
