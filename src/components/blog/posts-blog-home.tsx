import { formatDate } from "@/lib/utils"
import { getPostsBlogHome } from "@/utils/db"
import Link from "next/link"

export default async function PostsBlogHome() {
	const { data, error } = await getPostsBlogHome()

	if (error) return <div>Error</div>
	if (!data) return <div>No data</div>

	return (
		<div className="lg:col-span-2 grid gap-x-8 gap-y-12 lg:gap-y-16 lg:grid-cols-2">
			<h2 className="lg:hidden font-bold tracking-tight text-3xl -mb-6">Publicaciones recientes</h2>

			{
				data.map((post) => (
					<article key={post.id} className="flex flex-col gap-3">
						<Link href={`/blog/post/${post.id}`}><img className="hover:brightness-75 duration-300 rounded h-full w-full object-cover object-center aspect-[3/2]" src={post.img_url} alt={post.title} /></Link>
						<div className="text-sm text-neutral-600 font-medium">Por <Link href={`/blog/user/${post.user_id}`} className="text-neutral-950 font-semibold hover:text-secondary-700 duration-300">{post.profiles!.full_name}</Link> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> {formatDate(post.created_at)}</div>
						<Link className="hover:text-neutral-700 duration-300" href={`/blog/post/${post.id}`}><h3 className="font-semibold text-2xl tracking-tighter leading-tight">{post.title}</h3></Link>
						<div className="flex gap-2 text-neutral-600">

							{
								post.post_categories!.map((category) => (
									<Link key={category.categories!.name} href={`/blog/category/${category.categories!.name}`} className="bg-neutral-200 p-2 rounded text-sm font-medium capitalize">{category.categories!.name}</Link>
								))
							}

						</div>
					</article>
				))
			}

		</div>
	)
}