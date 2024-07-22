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

			<main className="container mx-auto px-4 lg:px-16 py-24 text-neutral-800">
				<h1 className="text-3xl font-bold tracking-tight text-neutral-950">Crear un nuevo Post</h1>

				<EditorNoSSR />
			</main>
		</>
	)
}