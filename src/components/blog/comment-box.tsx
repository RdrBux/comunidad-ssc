'use client'

import { addComment } from "@/utils/actions";
import { Tables } from "@/utils/supabase/types-supabase";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { Button } from "../ui/button";
import CommentBoxButton from "./comment-box-button";

interface Props {
	postId: Tables<'posts'>['id']
	parentId: Tables<'comments'>['id'] | null
	answerToId: Tables<'comments'>['id'] | null
	setShowForm?: React.Dispatch<React.SetStateAction<boolean>>
	userImg: Tables<'profiles'>['avatar_url']
}

type State = {
	error: string | null;
}

const initialState: State = {
	error: '',
}

export default function CommentBox({ postId, parentId, answerToId, setShowForm, userImg }: Props) {
	const [formState, formAction] = useFormState(addComment.bind(null, postId, parentId, answerToId), initialState)
	const form = useRef<HTMLFormElement>(null)

	useEffect(() => {
		if (formState.error === null) {
			form.current?.reset()
			formState.error = '';

			if (typeof setShowForm === 'function') {
				setShowForm(false)
			}
		}
	}, [formState])

	return (
		<form ref={form} action={formAction} className="mt-6">
			{formState.error && <p className="text-red-600 my-3">{formState.error}</p>}
			<div className="w-full mb-4 border border-neutral-200 rounded-md bg-neutral-50">
				<div className="px-4 py-2 bg-white rounded-t-md">
					<label htmlFor="comment" className="sr-only">Tu comentario</label>
					<textarea id="comment" name="comment" rows={4} className="w-full px-0 text-neutral-900 bg-white border-0 outline-none focus:ring-0" placeholder="Tu comentario..." required ></textarea>
				</div>
				<div className="flex items-center justify-between p-2 border-t">
					<CommentBoxButton />
					<div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
						<div className="w-10 h-10 shrink-0 rounded-full bg-secondary-200">
							<img className="w-10 h-10 rounded-full" src={userImg} alt="Avatar del usuario" />
						</div>
					</div>
				</div>
			</div>
		</form>
	)

}