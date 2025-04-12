/** @type {import('next').NextConfig} */

const nextConfig = {
    useFileSystemPublicRoutes: true,
    output: 'standalone',
    // output: 'export',
    async headers() {
        return [
            {
                source: '/:path*{/}?',
                headers: [
                    {
                        key: 'X-Accel-Buffering',
                        value: 'no',
                    },
                ],
            },
        ]
    },
    images: {
        domains: ['drive.google.com', 'assets.aceternity.com'],
        unoptimized: true,
    },
};

export default nextConfig;
