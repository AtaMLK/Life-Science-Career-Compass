import type { NextConfig } from 'next';

const nextConfig: NextConfig = { reactStrictMode: true, images:{qualities:[75,90]}, distDir: process.env.NEXT_BUILD_DIR || ".next", turbopack:{root:process.cwd()} };
export default nextConfig;
