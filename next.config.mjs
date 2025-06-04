/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? '/your-repository-name/' : '',
    basePath: isProd ? '/website' : '',
    output: 'export',
};

export default nextConfig;
