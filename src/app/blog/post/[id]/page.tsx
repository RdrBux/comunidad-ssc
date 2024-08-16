import Navbar from "@/components/navbar";
import { ROUTES } from "@/utils/constants";
import Link from "next/link";
import styles from "./page.module.css";
import { formatDate } from "@/lib/utils";
import BlogCard from "@/components/blog/blog-card";
import RecentPosts from "@/components/blog/recent-posts";
import PostComments from "@/components/blog/post-comments";
import { getPostById } from "@/utils/db";
import { Tables } from "@/utils/supabase/types-supabase";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import SharePage from "@/components/share-page";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: { id: Tables<'posts'>['id'] }
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {

	const id = params.id

	const { data, error } = await getPostById(id)
	if (error || !data) return ({
		title: 'Blog | Comunidad del Saber Supercomplejo'
	})

	return {
		title: `${data.title} | Comunidad del Saber Supercomplejo`
	}
}

export default async function BlogPage({ params }: { params: { id: Tables<'posts'>['id'] } }) {
	const { data, error } = await getPostById(params.id)

	if (error) return <div><div className="my-24 font-medium mx-auto text-center">Error: post not found</div></div>
	if (!data) return
	return (
		<div>
			<Navbar style="dark" />

			<main>
				<div className="relative flex flex-col overflow-hidden h-[80vh] lg:h-screen">
					<img className="duration-300 absolute -z-10 inset-0 h-full w-full brightness-[0.25] object-cover" src={data.img_url} alt={data.title} />
					<div className="container mx-auto px-4 lg:px-16 h-full">
						<div className="text-tertiary-50 max-w-3xl py-16 flex flex-col justify-end h-full grow">
							<div className="mb-auto mt-8">
								<Breadcrumb>
									<BreadcrumbList>
										<BreadcrumbItem>
											<BreadcrumbLink className="text-tertiary-50 hover:text-tertiary-50/75 duration-300" asChild>
												<Link href={ROUTES.BLOG}>Blog</Link>
											</BreadcrumbLink>
										</BreadcrumbItem>

										<BreadcrumbSeparator />

										<BreadcrumbItem>
											<BreadcrumbPage className="text-tertiary-50/75">{data.title}</BreadcrumbPage>
										</BreadcrumbItem>
									</BreadcrumbList>
								</Breadcrumb>

							</div>

							<div className="text-tertiary-50/75 font-medium flex flex-col lg:flex-row lg:items-center gap-x-2"><div className="flex items-center gap-2">Por <Link className="flex items-center gap-2" href={`/blog/user/${data.user_id}`}><div className="w-8 aspect-square bg-secondary-200 rounded-full"><img className="w-8 h-8 rounded-full" src={data.profiles!.avatar_url} alt={data.profiles!.full_name} /></div> <span className="text-tertiary-50">{data.profiles?.full_name}</span></Link> <span className="hidden lg:inline">•</span></div><div>{formatDate(data.created_at)}</div></div>
							<h1 className={`font-source font-semibold text-4xl lg:text-6xl tracking-tight mt-6`}>{data.title}</h1>
							<p className="hidden md:block mt-6 lg:text-lg font-medium">{data.description}</p>
						</div>
					</div>
				</div>

				<div className="container mx-auto px-4 lg:px-16 pt-16 pb-12">
					<div className="grid lg:grid-cols-3 gap-16">
						<div className="lg:col-span-2 lg:mr-8">
							<div className={styles.editor} dangerouslySetInnerHTML={{ __html: data.content }} />

							<div className="mt-12"><SharePage url={`https://sabersupercomplejo.com/blog/post/${data.id}`} text={data.title} /></div>

							<hr className="mt-12" />

							<div className="py-8 flex flex-col lg:flex-row gap-2 justify-between lg:items-center text-base text-neutral-600 font-medium">
								<div className="flex flex-col gap-1">
									<div className="flex items-center gap-2">Por <Link className="flex items-center gap-2 group" href={`/blog/user/${data.user_id}`}><div className="w-8 aspect-square bg-secondary-200 rounded-full"><img className="w-8 h-8 rounded-full" src={data.profiles!.avatar_url} alt={data.profiles!.full_name} /></div> <span className="text-neutral-950 group-hover:text-secondary-700 duration-300">{data.profiles?.full_name}</span></Link></div>
									<div>Actualizado al {formatDate(data.updated_at)}</div>
								</div>
								<div className="flex gap-2 text-neutral-600">

									{data.post_categories?.map((category) => (
										<Link key={category.categories!.name} href={`/blog/category/${category.categories!.name}`} className="bg-neutral-200 hover:bg-neutral-300 duration-300 p-2 rounded text-sm font-medium capitalize">{category.categories!.name}</Link>
									))}
								</div>
							</div>

							<hr className="mb-12" />

							<PostComments postId={data.id} />

						</div>

						<div className="flex flex-col gap-10">
							<BlogCard />

							<hr />

							<RecentPosts id={data.id} />

						</div>
					</div>


				</div>
			</main>
		</div>
	)

}