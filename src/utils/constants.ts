export const ROUTES = {
	INICIO: '/',
	ACTORES: '/actores',
	CAMINO: '/camino',
	TEORIA: '/teoria',
	BLOG: '/blog',
} as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES];