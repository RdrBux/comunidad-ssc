import { formatDate } from "@/lib/utils";
import { getPostsByUserId } from "@/utils/db";
import { Tables } from "@/utils/supabase/types-supabase";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function PostsByUser({ id }: { id: Tables<'profiles'>['id'] }) {
	const t = await getTranslations('blog');
	const locale = await getLocale();

	const { data, error } = await getPostsByUserId(id, locale);

	if (error) return;
	if (!data || data.length < 1) return;

	return (
		<div className="mt-12">
			<p className="font-medium text-neutral-600">
				{data.length}
				{' '}
				{locale === 'es' && <span>{data.length === 1 ? 'publicación' : 'publicaciones'}</span>}
				{locale === 'en' && <span>{data.length === 1 ? 'post' : 'posts'}</span>}
			</p>

			<div className="mt-8 grid gap-6 lg:grid-cols-3">
				{
					data.map(post => (
						<article key={post.id} className="flex flex-col gap-3">
							<Link href={`/blog/post/${post.id}`}><img className="hover:brightness-75 duration-300 rounded h-full w-full object-cover object-center aspect-[3/2]" src={post.img_url} alt={post.title} /></Link>
							<div className="text-sm text-neutral-600 font-medium">{t('by')} <Link href={`/blog/user/${post.user_id}`} className="text-neutral-950 font-semibold hover:text-secondary-700 duration-300">{post.profiles!.full_name}</Link> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> {formatDate(post.created_at, locale)}</div>
							<Link className="hover:text-neutral-700 duration-300" href={`/blog/post/${post.id}`}><h3 className="font-semibold text-2xl tracking-tighter leading-tight">{post.title}</h3></Link>
						</article>
					))
				}

			</div>
		</div>
	)

}