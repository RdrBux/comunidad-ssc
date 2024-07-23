import Navbar from "@/components/navbar";
import { MEDIA, ROUTES } from "@/utils/constants";
import { createClient } from "@/utils/supabase/server"
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";
import { formatDate } from "@/lib/utils";
import { FullLogo } from "@/components/svgs";
import BlogCard from "@/components/blog/blog-card";
import RecentPosts from "@/components/blog/recent-posts";

export default async function BlogPage({ params }: { params: { id: string } }) {
	const supabase = createClient()
	const { data, error } = await supabase
		.from('posts')
		.select(`
			*,
			profiles (full_name),
			post_categories (
				categories (name)
			)
		`)
		.eq('id', params.id)
		.single();

	console.log(data)

	if (error) return <div><div className="my-24 font-medium mx-auto text-center">Error: post not found</div></div>
	if (!data) return
	return (
		<div>
			<Navbar style="dark" />

			<main>
				<div className="relative flex flex-col overflow-hidden h-[70vh] lg:h-screen">
					<img className="duration-300 absolute -z-10 inset-0 h-full w-full brightness-[0.25] object-cover" src={data.img_url} alt={data.title} />
					<div className="container mx-auto px-4 lg:px-16 h-full">
						<div className="text-tertiary-50 max-w-2xl py-16 flex flex-col justify-end h-full grow">
							<div className="mb-auto mt-8 text-sm font-medium flex items-center gap-2">
								<Link className="hover:text-tertiary-50/75 duration-300" href={ROUTES.BLOG}>Blog</Link>
								<ChevronRight size={14} />
								<div className="text-tertiary-50/75">{data.title}</div>

							</div>

							<div className="text-tertiary-50/75 font-medium flex flex-col lg:flex-row lg:items-center gap-x-2"><div className="flex items-center gap-2">Por <Link className="flex items-center gap-2" href={`/blog/user/${data.user_id}`}><div className="w-8 aspect-square bg-secondary-200 rounded-full"></div> <span className="text-tertiary-50">{data.profiles?.full_name}</span></Link> <span className="hidden lg:inline">•</span></div><div>{formatDate(data.created_at)}</div></div>
							<h1 className="font-semibold text-4xl lg:text-6xl tracking-tight mt-6">{data.title}</h1>
							<p className="mt-6 lg:text-lg font-medium">{data.description}</p>
						</div>
					</div>
				</div>

				<div className="container mx-auto px-4 lg:px-16 pt-16 pb-12">
					<div className="grid lg:grid-cols-3 gap-16">
						<div className="lg:col-span-2 lg:mr-8">
							<div className={styles.editor} dangerouslySetInnerHTML={{ __html: data.content }} />

							<hr className="mt-12" />

							<div className="py-8 flex flex-col lg:flex-row gap-2 justify-between lg:items-center text-base text-neutral-600 font-medium">
								<div className="flex flex-col gap-1">
									<div className="flex items-center gap-2">Por <Link className="flex items-center gap-2 group" href={`/blog/user/${data.user_id}`}><div className="w-8 aspect-square bg-secondary-200 rounded-full"></div> <span className="text-neutral-950 group-hover:text-secondary-700 duration-300">{data.profiles?.full_name}</span></Link></div>
									<div>Actualizado al {formatDate(data.updated_at)}</div>
								</div>
								<div className="flex gap-2 text-neutral-600">

									{data.post_categories?.map((category) => (
										<Link href={`/blog/category/${category.categories?.name}`} key={category.categories?.name} className="bg-neutral-200 hover:bg-neutral-300 duration-300 p-2 rounded text-sm font-medium">{category.categories?.name}</Link>
									))}
								</div>
							</div>

							<hr className="mb-12" />

							<div className="mt-12 bg-neutral-100 rounded-md p-6 lg:p-10">

								<div className="">
									<div className="flex items-center gap-4">
										<div className="w-12 aspect-square bg-secondary-200 rounded-full"></div>
										<div className="font-medium">
											<a className="block" href="#">Saber Supercomplejo</a>
											<p className="text-sm">16 de julio de 2022, 11:59 p. m.</p>
										</div>
									</div>
									<div className="lg:ml-16">
										<p className="lg:text-lg mt-4 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel illum ipsa a quod aliquid assumenda temporibus pariatur ullam itaque! Esse consectetur doloribus maxime commodi quaerat, tempore sed dolores voluptatem.</p>
										<button className="rounded flex items-center gap-1 text-neutral-950 pt-4 w-fit font-semibold">
											Responder
											<svg className="w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14 4 9l5-5" /><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" /></svg>
										</button>
									</div>
								</div>

								<hr className="my-8" />

								<div className="">
									<div className="flex items-center gap-4">
										<div className="w-12 aspect-square bg-secondary-200 rounded-full"></div>
										<div className="font-medium">
											<a className="block" href="#">Saber Supercomplejo</a>
											<p className="text-sm">16 de julio de 2022, 11:59 p. m.</p>
										</div>
									</div>
									<div className="lg:ml-16">
										<p className="lg:text-lg mt-4 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel illum ipsa a quod aliquid assumenda temporibus pariatur ullam itaque! Esse consectetur doloribus maxime commodi quaerat, tempore sed dolores voluptatem.</p>
										<button className="rounded flex items-center gap-1 text-neutral-950 pt-4 w-fit font-semibold">
											Responder
											<svg className="w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14 4 9l5-5" /><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" /></svg>
										</button>
									</div>
								</div>

								<div className="ml-10 mt-8">
									<div className="flex items-center gap-4">
										<div className="w-12 aspect-square bg-secondary-200 rounded-full"></div>
										<div className="font-medium">
											<a className="block" href="#">Saber Supercomplejo</a>
											<p className="text-sm">16 de julio de 2022, 11:59 p. m.</p>
										</div>
									</div>
									<div className="lg:ml-16">
										<p className="lg:text-lg mt-4 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel illum ipsa a quod aliquid assumenda temporibus pariatur ullam itaque! Esse consectetur doloribus maxime commodi quaerat, tempore sed dolores voluptatem.</p>
										<button className="rounded flex items-center gap-1 text-neutral-950 pt-4 w-fit font-semibold">
											Responder
											<svg className="w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14 4 9l5-5" /><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" /></svg>
										</button>
									</div>
								</div>

								<hr className="my-8" />

								<div className="mt-12">
									<h5 className="font-bold text-3xl tracking-tight">Deja un comentario</h5>

									<form className="mt-6">
										<div className="w-full mb-4 border border-neutral-200 rounded-md bg-neutral-50">
											<div className="px-4 py-2 bg-white rounded-t-md">
												<label htmlFor="comment" className="sr-only">Tu comentario</label>
												<textarea id="comment" rows={4} className="w-full px-0 text-neutral-900 bg-white border-0 outline-none focus:ring-0" placeholder="Tu comentario..." required ></textarea>
											</div>
											<div className="flex items-center justify-between p-2 border-t">
												<button type="submit" className="inline-flex items-center py-2 px-6 font-medium text-center text-white bg-neutral-950 rounded focus:ring-4 duration-300 focus:ring-neutral-200 hover:bg-neutral-700">
													Comentar
												</button>
												<div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
													<div className="w-10 h-10 rounded-full bg-secondary-200"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
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