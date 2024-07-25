import { getLastComments } from "@/utils/db"
import Link from "next/link";

export default async function RecentComments() {
	const { data, error } = await getLastComments();

	if (error) return
	if (!data) return

	return (
		<section>
			<h4 className={`font-source text-3xl tracking-tight font-bold leading-none`}>Comentarios recientes</h4>
			<div className="flex flex-col gap-3 mt-6 text-neutral-600 text-sm">

				{
					data.map(comment => (
						<div key={comment.id} className="flex gap-3 items-center">
							<div className="w-10 h-10 shrink-0 rounded-full bg-secondary-200">
								<img className="w-10 h-10 rounded-full" src={comment.profiles!.avatar_url} alt={comment.profiles!.full_name} />
							</div>
							<div>{comment.profiles!.full_name} en <Link className="font-semibold hover:text-secondary-700 duration-300" href={`/blog/post/${comment.post_id}`}>{comment.posts!.title}</Link></div>
						</div>
					))
				}

			</div>
		</section>
	)
}