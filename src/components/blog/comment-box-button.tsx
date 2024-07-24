'use client'

import { useFormStatus } from "react-dom"
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

export default function CommentBoxButton() {
	const { pending } = useFormStatus();

	if (pending) {
		return <Button disabled>Comentar <LoaderCircle className="animate-spin ml-1.5 h-4 w-4" /></Button>
	}
	return <Button type="submit">Comentar</Button>

}