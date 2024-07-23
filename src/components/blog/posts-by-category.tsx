import { formatDate } from "@/lib/utils";
import { getPostsByCategoryName } from "@/utils/db";
import { Tables } from "@/utils/supabase/types-supabase";
import Link from "next/link";

export default async function PostsByCategory({ category }: { category: Tables<'categories'>['name'] }) {
	const { data, error } = await getPostsByCategoryName(category);

	if (error) return <div>Error</div>;
	if (!data) return <div>No data</div>;

	console.log({ data, error })

	return (
		<div className="mt-4">
			<p className="font-medium text-neutral-600">{data.length} post<span className={`${data.length > 1 ? '' : 'hidden'}`}>s</span></p>

			<div className="mt-8 grid gap-6 lg:grid-cols-3">
				{
					data.map(post => (
						<article key={post.id} className="flex flex-col gap-3">
							<Link href={`/blog/post/${post.id}`}><img className="hover:brightness-75 duration-300 rounded h-full w-full object-cover object-center aspect-[3/2]" src={post.img_url} alt={post.title} /></Link>
							<div className="text-sm text-neutral-600 font-medium">Por <Link href={`/blog/user/${post.user_id}`} className="text-neutral-950 font-semibold hover:text-secondary-700 duration-300">{post.full_name}</Link> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> {formatDate(post.created_at)}</div>
							<Link className="hover:text-neutral-700 duration-300" href={`/blog/post/${post.id}`}><h3 className="font-semibold text-2xl tracking-tighter leading-tight">{post.title}</h3></Link>
						</article>
					))
				}

			</div>
		</div>
	)
}