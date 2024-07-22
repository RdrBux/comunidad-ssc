import CategoriesToggler from "@/components/blog/categories-toggler";
import Navbar from "@/components/navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserData } from "@/utils/db";
import dynamic from "next/dynamic";

const EditorNoSSR = dynamic(() => import('@/components/blog/editor'), { ssr: false })

export default async function CreatePost() {
	const { user, error } = await getUserData()

	if (!user) return <p className="py-20 text-center">No authenticated user</p>

	if (user.user_role !== 'admin') return <p className="py-20 text-center">Unauthorized</p>

	return (
		<>
			<Navbar style="light" />

			<main className="container max-w-3xl mx-auto px-4 lg:px-16 py-24 text-neutral-800">
				<h1 className="text-3xl font-bold tracking-tight text-neutral-950">Crear un nuevo Post</h1>

				<div className="grid w-full items-center gap-1.5 mt-6">
					<Label htmlFor="tile">Título</Label>
					<Input type="text" id="tile" required />
				</div>

				<div className="grid w-full items-center gap-1.5 mt-6">
					<Label htmlFor="description">Descripción</Label>
					<Input type="text" id="description" />
				</div>

				<div className="grid w-full items-center gap-1.5 mt-6">
					<Label htmlFor="img">Imagen</Label>
					<Input id="img" type="file" />
				</div>

				<div className="grid gap-1.5 mt-6">
					<Label>Contenido</Label>
					<EditorNoSSR />
				</div>

				<CategoriesToggler />
			</main>
		</>
	)
}