export const ROUTES = {
	INICIO: '/',
	COMUNIDAD: '/comunidad',
	CAMINO: '/camino',
	TEORIA: '/teoria',
	BLOG: '/blog',
} as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES];

export const MEDIA = {
	INSTAGRAM: 'https://www.instagram.com/sabersupercomplejo/',
	FACEBOOK: 'https://www.facebook.com/sabersupercomplejo/',
	YOUTUBE: 'https://www.youtube.com/channel/sabersupercomplejo/',
	LINKEDIN: 'https://www.linkedin.com/company/sabersupercomplejo/',
}

export const BUCKETS_PUBLIC_URL = 'https://rjtizbdqgsxuwwmrcmwc.supabase.co/storage/v1/object/public/'