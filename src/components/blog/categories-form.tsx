'use client'

import { addCategory } from "@/utils/actions";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

type InitialState = {
	message: string;
	error: string | null;
}

const initialState: InitialState = {
	message: '',
	error: '',
}

export default function CategoriesForm() {
	const [formState, formAction] = useFormState(addCategory, initialState)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (formState.error === null) {
			setOpen(false);
		}
	}, [formState.error])

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<button className="rounded-md text-blue-600 px-4 py-1 underline text-sm w-fit hover:text-blue-800 font-medium duration-300">Agregar categoría</button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Agregar categoría</DialogTitle>
					<DialogDescription>
						Añade una nueva categoría a la lista de categorías de este blog.
					</DialogDescription>
				</DialogHeader>

				<form action={formAction}>
					<div className="grid gap-1.5">
						<Label htmlFor="name">
							Name
						</Label>
						<Input
							id="name"
							name="name"
							type="text"
							required
						/>

						{formState.error && formState.error.length > 0 && <div className="text-red-600">{formState.error}</div>}
					</div>

					<DialogFooter className="mt-4 w-fit">
						<button type="submit" className="rounded-md text-tertiary-50 bg-neutral-950 px-4 py-2 text-sm w-fit hover:bg-neutral-800 font-medium duration-300">Añadir</button>
					</DialogFooter>

				</form>

			</DialogContent>
		</Dialog>
	)
}