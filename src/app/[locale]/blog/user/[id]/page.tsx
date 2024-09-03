import CommentsByUser from "@/components/blog/comments-by-user";
import PostsByUser from "@/components/blog/posts-by-user";
import Navbar from "@/components/navbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ROUTES } from "@/utils/constants";
import { getUserById } from "@/utils/db";
import { Tables } from "@/utils/supabase/types-supabase";
import { Metadata, ResolvingMetadata } from "next";
import { getLocale } from "next-intl/server";
import Link from "next/link";

type Props = {
	params: { id: Tables<'profiles'>['id'] }
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {

	const id = params.id

	const { data, error } = await getUserById(id)
	if (error || !data) return ({
		title: 'Blog | Comunidad del Saber Supercomplejo'
	})

	return {
		title: `Perfil de ${data.full_name} | Comunidad del Saber Supercomplejo`
	}
}

export default async function ProfilePage({ params: { id } }: { params: { id: string } }) {
	const { data, error } = await getUserById(id)
	const locale = await getLocale();

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
							<BreadcrumbPage>{locale === 'es' && 'Perfil de '} {data.full_name}</BreadcrumbPage>
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