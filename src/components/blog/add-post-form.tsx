'use client'

import { addPost } from "@/utils/actions"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import CategoriesToggler from "./categories-toggler"
import { useState } from "react"
import dynamic from "next/dynamic"
import { useFormState } from "react-dom"
const EditorNoSSR = dynamic(() => import('@/components/blog/editor'), { ssr: false })

type State = {
	error: string | null;
}

const initialState: State = {
	error: '',
}

export default function AddPostForm() {
	const [formState, formAction] = useFormState(addPost, initialState)

	const [selectedCategories, setSelectedCategories] = useState<string[]>([])
	const [editorValue, setEditorValue] = useState('');

	return (
		<div>
			<form action={formAction}>
				<div className="grid w-full items-center gap-1.5 mt-6">
					<Label htmlFor="title">Título</Label>
					<Input type="text" id="title" name="title" required />
				</div>

				<div className="grid w-full items-center gap-1.5 mt-6">
					<Label htmlFor="description">Descripción</Label>
					<Input type="text" id="description" name="description" />
				</div>

				<div className="grid w-full items-center gap-1.5 mt-6">
					<Label htmlFor="img">Imagen</Label>
					<Input id="img" type="file" name="img" accept="image/*" required />
				</div>

				<div className="grid gap-1.5 mt-6">
					<Label>Contenido</Label>
					<EditorNoSSR value={editorValue} onChange={setEditorValue} />
				</div>

				<CategoriesToggler setSelectedCategories={setSelectedCategories} />

				<input type="hidden" name="content" value={editorValue} />

				<input type="hidden" name="categories" value={JSON.stringify(selectedCategories)} />

				{formState.error && <p className="text-red-600 font-medium mt-3">{formState.error}</p>}

				<button type='submit' className="mt-6 rounded-md text-tertiary-50 bg-neutral-950 px-4 py-2 text-sm w-fit hover:bg-neutral-800 font-medium duration-300">Publicar</button>

			</form>
		</div>
	)
}