'use client'

import { useFormStatus } from "react-dom"
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

export default function DeleteCommentFormButton() {
	const { pending } = useFormStatus();

	if (pending) {
		return <Button disabled>Confirmar <LoaderCircle className="animate-spin ml-1.5 h-4 w-4" /></Button>
	}
	return <Button type="submit">Confirmar</Button>

}