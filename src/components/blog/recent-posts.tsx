import { formatDate } from "@/lib/utils"
import { getRecentPosts } from "@/utils/db"
import { Tables } from "@/utils/supabase/types-supabase"
import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"

export default async function RecentPosts({ id }: { id: Tables<'posts'>['id'] }) {
	const locale = await getLocale();
	const t = await getTranslations('blog')
	const { data, error } = await getRecentPosts(id, locale)

	if (error) return
	if (!data) return

	return (
		<div>
			<h4 className={`font-source text-2xl tracking-tight font-bold leading-none`}>{t('recent-posts')}</h4>

			{
				data.map(post => (
					<>
						<div className="flex gap-4 mt-6">
							<Link className="shrink-0" href={`/blog/post/${post.id}`}><img className="hover:brightness-75 duration-300 rounded-md w-24 h-24 object-cover" src={post.img_url} alt={post.title} /></Link>

							<div className="flex flex-col">
								<div className="font-medium text-neutral-600 text-sm">{t('by')} <Link className="font-semibold text-neutral-950 hover:text-secondary-700 duration-300" href={`/blog/user/${post.user_id}`}>{post.profiles?.full_name}</Link></div>
								<div className="font-medium text-neutral-600 text-sm">{formatDate(post.created_at, locale)}</div>
								<Link className="text-lg hover:text-neutral-700 duration-300 font-semibold mt-3 leading-none" href={`/blog/post/${post.id}`}>{post.title}</Link>
							</div>
						</div>

						<hr className="my-6" />
					</>
				))
			}
		</div>
	)
}