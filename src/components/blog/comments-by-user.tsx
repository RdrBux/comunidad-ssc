import { formatDateWithTime } from "@/lib/utils";
import { getCommentsByUserId } from "@/utils/db";
import { Tables } from "@/utils/supabase/types-supabase";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export default async function CommentsByUser({ id }: { id: Tables<'profiles'>['id'] }) {
	const { data, error } = await getCommentsByUserId(id)
	const locale = await getLocale()
	const t = await getTranslations('blog')

	if (error) return
	if (!data) return

	return (
		<div className="mt-12 bg-neutral-100 rounded-md p-6 lg:px-10 max-w-2xl">
			<h2 className="text-xl font-bold leading-none tracking-tight text-neutral-950">
				{data.length}
				{' '}
				{locale === 'es' && <span>{data.length === 1 ? 'comentario' : 'comentarios'}</span>}
				{locale === 'en' && <span>{data.length === 1 ? 'comment' : 'comments'}</span>}
				{' '}
				{t('comments.in-the-community')}
			</h2>

			{
				data.map(comment => (
					<div key={comment.id} className="">
						<hr className="my-6" />
						<div className="font-medium">
							<div>{comment.profiles!.full_name} {t('on')} <Link className="font-bold" href={`/blog/post/${comment.posts!.id}`}>{comment.posts!.title}</Link></div>
							<div className="text-neutral-600 text-sm">{formatDateWithTime(comment.created_at, locale)}</div>
						</div>
						<p className="lg:text-lg mt-4 text-neutral-600">{comment.content}</p>

					</div>
				))
			}
		</div>
	)
}