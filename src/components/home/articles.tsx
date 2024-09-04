import { formatDate } from "@/lib/utils"
import { getPostsBlogHome } from "@/utils/db"
import { Link } from "@/i18n/routing"
import { Logo } from "../svgs"
import { getLocale, getTranslations } from "next-intl/server"
import Image from "next/image"

export default async function Articles() {
	const t = await getTranslations('home.articles')
	const tBlog = await getTranslations('blog')
	const locale = await getLocale();

	const { data, error } = await getPostsBlogHome(locale)

	if (error) return
	if (!data) return

	const topThreePosts = data.slice(0, 3)

	return (
		<section className="bg-[#0a4a3a] text-tertiary-50 relative overflow-hidden">
			<div className="absolute top-4 right-0 h-[95%] lg:h-[200%] aspect-square opacity-10"><Logo /></div>
			<div className="container mx-auto px-4 lg:px-16 py-12 lg:py-16 relative z-10">

				<h2 className="font-source text-4xl leading-none lg:text-5xl tracking-tight font-medium mt-4">{t('title')}</h2>

				<div className="mt-8 lg:mt-16 grid gap-12 lg:grid-cols-3">

					{
						topThreePosts.map((post) => (
							<article key={post.id} className="flex flex-col gap-3 shrink-0">
								<Link href={`/blog/post/${post.id}`}><Image width={2400} height={1600} className="shadow-md shadow-primary-950/20 hover:brightness-75 duration-300 rounded h-full w-full object-cover object-center aspect-[3/2]" src={post.img_url} alt={post.title} /></Link>
								<div className="text-sm text-neutral-400 font-medium">{tBlog('by')} <Link href={`/blog/user/${post.user_id}`} className="text-tertiary-50 font-semibold hover:text-secondary-300 duration-300">{post.profiles!.full_name}</Link> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> {formatDate(post.created_at, locale)}</div>
								<Link className="hover:text-neutral-300 duration-300" href={`/blog/post/${post.id}`}><h3 className={`font-source font-semibold text-xl tracking-tight leading-tight`}>{post.title}</h3></Link>
								<div className="flex gap-2 text-neutral-600">

									{
										post.post_categories!.map((category) => (
											<Link key={category.categories!.name} href={`/blog/category/${category.categories!.name}`} className="bg-primary-700 hover:bg-primary-600 duration-300 text-neutral-300 p-2 rounded text-sm font-medium capitalize">{category.categories!.name}</Link>
										))
									}

								</div>
							</article>
						))
					}

				</div>
			</div>
		</section>
	)
}