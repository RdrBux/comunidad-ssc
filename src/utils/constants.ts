export const ROUTES = {
	INICIO: '/',
	ACTORES: '/actores',
	CAMINO: '/camino',
	TEORIA: '/teoria',
	BLOG: '/blog',
} as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES];

export const MEDIA = {
	INSTAGRAM: 'https://www.instagram.com/sabersupercomplejo/',
	FACEBOOK: 'https://www.facebook.com/sabersupercomplejo/',
	LINKEDIN: 'https://www.linkedin.com/company/sabersupercomplejo/'
}