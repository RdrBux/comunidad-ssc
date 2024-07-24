import { Tables } from "@/utils/supabase/types-supabase";
import CommentBox from "./comment-box";
import { getCommentsByPostId, getUserData } from "@/utils/db";
import Link from "next/link";
import { formatDateWithTime, sortComments } from "@/lib/utils";
import LoginButton from "./login-button";
import AnswerCommentButton from "./answer-comment-button";
import DeleteCommentButton from "./delete-comment-button";

export default async function PostComments({ postId }: { postId: Tables<'posts'>['id'] }) {
	const { data: commentsData, error } = await getCommentsByPostId(postId);
	const { user } = await getUserData();

	if (error) return <div>Error</div>;
	if (!commentsData) return <div>No data</div>;

	const data = sortComments(commentsData);

	return (
		<div className="mt-12 bg-neutral-100 rounded-md p-6 lg:p-10">

			{
				data.map(comment => (
					<div key={comment.id}>
						<div className={`${comment.parent_id ? 'ml-10 lg:ml-16 mt-8' : ''}`}>
							<div className="flex items-center gap-4 relative">
								{user && user.id === comment.user_id && <DeleteCommentButton id={comment.id} />}
								{user && user.user_role === 'admin' && <DeleteCommentButton id={comment.id} />}

								<Link href={`/blog/user/${comment.user_id}`} className={`${comment.parent_id ? 'w-10 h-10' : 'w-12 h-12'} aspect-square bg-secondary-200 rounded-full`}>
									<img className={`${comment.parent_id ? 'w-10 h-10' : 'w-12 h-12'} rounded-full`} src={comment.profiles!.avatar_url} alt={comment.profiles!.full_name} />
								</Link>
								<div className="font-medium">
									<Link className="block" href={`/blog/user/${comment.user_id}`}>{comment.profiles!.full_name}</Link>
									<p className="text-sm">{formatDateWithTime(comment.created_at)}</p>
								</div>
							</div>
							<div className="lg:ml-16">
								<p className="lg:text-lg mt-4 text-neutral-600">{comment.content}</p>
								{user && <AnswerCommentButton postId={postId} parentId={comment.parent_id ?? comment.id} answerToId={comment.id} userImg={user.avatar_url} />}
							</div>
						</div>

						<hr className="my-8" />
					</div>
				))
			}

			<div className="mt-4">
				<h5 className="font-bold text-3xl tracking-tight">Deja un comentario</h5>

				{
					user && <CommentBox postId={postId} parentId={null} answerToId={null} userImg={user.avatar_url} />
				}

				{
					!user && (
						<div className="my-4 mx-2">
							<p className="mb-4">Inicia sesión para comentar</p>
							<LoginButton style="light" />
						</div>
					)
				}
			</div>
		</div>
	)
}