import CommentsByUser from "@/components/blog/comments-by-user";
import PostsByUser from "@/components/blog/posts-by-user";
import Navbar from "@/components/navbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ROUTES } from "@/utils/constants";
import { getUserById } from "@/utils/db";
import Link from "next/link";

export default async function ProfilePage({ params: { id } }: { params: { id: string } }) {
	const { data, error } = await getUserById(id)

	if (error) return <div><div className="my-24 font-medium mx-auto text-center">Error: user not found</div></div>
	if (!data) return

	return (
		<div>
			<Navbar style="light" />
			<main className="container mx-auto px-4 lg:px-16 py-24 text-neutral-950">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href={ROUTES.BLOG}>Blog</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbSeparator />

						<BreadcrumbItem>
							<BreadcrumbPage>Perfil de {data.full_name}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<div className="mt-8 flex items-center gap-4">
					<img className="w-16 h-16 rounded-full" src={data.avatar_url} alt={data.full_name} />
					<h1 className="text-3xl font-bold tracking-tighter text-neutral-950">{data.full_name}</h1>
				</div>

				<PostsByUser id={id} />

				<CommentsByUser id={id} />
			</main>
		</div>
	)
}