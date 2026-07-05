/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'i.ibb.co' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
        ],
        deviceSizes: [384, 640],
        imageSizes: [256],
    },
  reactCompiler: true,
};

export default nextConfig;
