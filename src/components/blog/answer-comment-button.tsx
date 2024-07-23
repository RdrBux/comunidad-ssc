'use client'

import { useState } from "react"
import CommentBox from "./comment-box"
import { Tables } from "@/utils/supabase/types-supabase"
import { X } from "lucide-react"

interface Props {
	postId: Tables<'posts'>['id']
	parentId: Tables<'comments'>['id']
	answerToId: Tables<'comments'>['id']
}

export default function AnswerCommentButton({ postId, parentId, answerToId }: Props) {
	const [showForm, setShowForm] = useState(false)

	return (
		<>
			{!showForm && (
				<button onClick={() => setShowForm(true)} className="rounded flex items-center gap-1 text-neutral-950 pt-4 w-fit font-semibold">
					Responder
					<svg className="w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14 4 9l5-5" /><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" /></svg>
				</button>
			)}

			{showForm && (
				<div className="relative">
					<button onClick={() => setShowForm(false)} className="absolute bg-white rounded-full opacity-90 top-2 right-4 text-neutral-700 hover:text-neutral-950 duration-300"><X /></button>
					<CommentBox postId={postId} parentId={parentId} answerToId={answerToId} setShowForm={setShowForm} />
				</div>
			)}
		</>

	)
}