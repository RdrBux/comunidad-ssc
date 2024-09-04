import PostsByCategory from "@/components/blog/posts-by-category";
import Navbar from "@/components/navbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ROUTES } from "@/utils/constants";
import { Tables } from "@/utils/supabase/types-supabase";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
	params: { name: Tables<'categories'>['name'] }
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {

	const name = params.name

	return {
		title: `Categoría: ${name} | Comunidad del Saber Supercomplejo`
	}
}

export default function CategoryPage({ params: { name } }: { params: { name: string } }) {
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
							<BreadcrumbPage className="capitalize">{name}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>


				<h1 className="text-3xl font-bold text-neutral-950 tracking-tight mt-10 capitalize">{name}</h1>

				<PostsByCategory category={name} />
			</main>
		</div>
	)
}