import { formatDateWithTime } from "@/lib/utils";
import { getCommentsByUserId } from "@/utils/db";
import { Tables } from "@/utils/supabase/types-supabase";
import Link from "next/link";

export default async function CommentsByUser({ id }: { id: Tables<'profiles'>['id'] }) {
	const { data, error } = await getCommentsByUserId(id)

	if (error) return
	if (!data) return

	return (
		<div className="mt-12 bg-neutral-100 rounded-md p-6 lg:px-10 max-w-2xl">
			<h2 className="text-xl font-bold leading-none tracking-tight text-neutral-950">{data.length} comentario{data.length > 1 ? 's' : ''} en la comunidad</h2>

			{
				data.map(comment => (
					<div key={comment.id} className="">
						<hr className="my-6" />
						<div className="font-medium">
							<div>{comment.profiles!.full_name} en <Link className="font-bold" href={`/blog/post/${comment.posts!.id}`}>{comment.posts!.title}</Link></div>
							<div className="text-neutral-600 text-sm">{formatDateWithTime(comment.created_at)}</div>
						</div>
						<p className="lg:text-lg mt-4 text-neutral-600">{comment.content}</p>

					</div>
				))
			}
		</div>
	)
}