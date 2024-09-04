import { formatDate } from "@/lib/utils"
import { getHighlightedPost } from "@/utils/db"
import { getLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"

export default async function HighlightedPost() {
	const { data, error } = await getHighlightedPost()
	const locale = await getLocale()

	if (error) return
	if (!data) return

	return (
		<article>
			<Link className="group relative p-8 lg:p-16 flex flex-col rounded-md overflow-hidden min-h-[480px]" href={`/blog/post/${data.id}`}>
				<img className="group-hover:brightness-[0.35] duration-300 absolute -z-10 inset-0 h-full w-full brightness-[0.45] object-cover" src={data.img_url} alt={data.title} />
				<div className="text-tertiary-50 max-w-xl flex flex-col lg:justify-end h-full grow">
					<div className="text-tertiary-50/80 font-medium">Por <span className="text-tertiary-50">{data.profiles!.full_name}</span> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> {formatDate(data.created_at, locale)}</div>
					<h3 className="font-semibold text-4xl lg:text-5xl tracking-tight mt-auto lg:mt-6">{data.title}</h3>
					<p className="mt-6 hidden lg:block lg:text-lg font-medium">{data.description}</p>
					<div className="flex gap-2 mt-8">
						{data.post_categories!.map((category) => <div key={category.categories!.name} className="bg-neutral-300/25 p-2 rounded text-sm font-medium capitalize">{category.categories!.name}</div>)}
					</div>
				</div>
			</Link>
		</article>
	)
}