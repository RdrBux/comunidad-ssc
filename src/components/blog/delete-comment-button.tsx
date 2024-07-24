'use client'

import { Tables } from "@/utils/supabase/types-supabase";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { useFormState } from "react-dom";
import { deleteComment } from "@/utils/actions";
import DeleteCommentFormButton from "./delete-comment-form-button";

type State = {
	error: string | null;
}

const initialState: State = {
	error: '',
}

export default function DeleteCommentButton({ id }: { id: Tables<'comments'>['id'] }) {
	const [formState, formAction] = useFormState(deleteComment.bind(null, id), initialState)
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<button className="absolute top-1/2 -translate-y-1/2 right-4 p-1 text-neutral-600 hover:text-neutral-800 opacity-90 bg-neutral-100 rounded-full duration-300"><X /><span className="sr-only">Eliminar comentario</span></button>
			</AlertDialogTrigger>

			<AlertDialogContent className="max-w-md">
				<AlertDialogHeader>
					<AlertDialogTitle>
						¿Deseas eliminar el comentario?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Se eliminará este comentario y las respuestas que le hayan realizado al mismo.
					</AlertDialogDescription>
				</AlertDialogHeader>
				{formState.error && formState.error.length > 0 && <div className="my-3 text-red-600">{formState.error}</div>}
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<form action={formAction}>
						<DeleteCommentFormButton />
					</form>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}