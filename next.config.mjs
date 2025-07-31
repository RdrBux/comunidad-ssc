import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
    esmExternals: 'loose', // para que acepte .mjs sin romperse
  },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
        hostname: 'rjtizbdqgsxuwwmrcmwc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/blog-images/**',
			}
		]
	}
};

export default withNextIntl(nextConfig);