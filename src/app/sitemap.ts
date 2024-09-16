import { BASE_URL, ROUTES } from '@/utils/constants'
import { getSitemapPosts } from '@/utils/db'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const { data: blogPosts } = await getSitemapPosts()

	const sitemap: MetadataRoute.Sitemap = []

	Object.values(ROUTES).forEach(url => {
		sitemap.push({
			url: `${BASE_URL}${url}`,
			alternates: {
				languages: {
					es: `${BASE_URL}/es${url}`,
					en: `${BASE_URL}/en${url}`,
				}
			}
		})
		sitemap.push({
			url: `${BASE_URL}/es${url}`,
			alternates: {
				languages: {
					es: `${BASE_URL}/es${url}`,
					en: `${BASE_URL}/en${url}`,
				}
			}
		})
		sitemap.push({
			url: `${BASE_URL}/en${url}`,
			alternates: {
				languages: {
					es: `${BASE_URL}/es${url}`,
					en: `${BASE_URL}/en${url}`,
				}
			}
		})
	})

	if (blogPosts) {
		blogPosts.forEach(post => {
			sitemap.push({
				url: `${BASE_URL}/${post.lang}/blog/post/${post.id}`,
				lastModified: post.updated_at
			})
		})

	}
	return sitemap
}