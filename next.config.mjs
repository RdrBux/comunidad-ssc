import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
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