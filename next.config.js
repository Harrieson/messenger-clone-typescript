/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        reactStrictMode: false,
        swcPlugins: [
            ["next-superjson-plugin", {}]
        ]
    }
}

module.exports = nextConfig
