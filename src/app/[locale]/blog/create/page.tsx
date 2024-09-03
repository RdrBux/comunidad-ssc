import AddPostForm from "@/components/blog/add-post-form";
import Navbar from "@/components/navbar";
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

				<div className="bg-neutral-100 p-4 rounded-md my-4">
					<h2 className="text-lg font-bold tracking-tight">Consejos</h2>
					<ul className="mt-2 list-disc ml-4">
						<li>Se recomienda que las imágenes tengan más de 1400 píxeles de ancho.</li>
						<li>Pasar las imágenes por <a className="text-blue-600 underline font-medium" href="http://tinypng.com" target="_blank" rel="noopener noreferrer">TinyPNG</a> o <a className="text-blue-600 underline font-medium" href="https://tinyjpg.com" target="_blank" rel="noopener noreferrer">TinyJPG</a> para reducir el tamaño.</li>
						<li>El contenido aparece directamente luego del título y la descripción, por lo que se puede comenzar la redacción usando texto &quot;normal&quot; y usar los adecuados headings posteriormente.</li>
					</ul>
				</div>

				<AddPostForm />

			</main>
		</>
	)
}