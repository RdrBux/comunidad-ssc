import BlogCard from "@/components/blog/blog-card";
import CategoriesList from "@/components/blog/categories-list";
import HighlightedPost from "@/components/blog/highlighted-post";
import PostsBlogHome from "@/components/blog/posts-blog-home";
import Navbar from "@/components/navbar";
import { FullLogo } from "@/components/svgs";
import { MEDIA } from "@/utils/constants";

export default function Blog() {
	return (
		<div>
			<Navbar style="light" />
			<main className="container mx-auto px-4 lg:px-16 py-24 text-neutral-950">
				<HighlightedPost />

				<div className="mt-16 grid lg:grid-cols-3 gap-16">
					<PostsBlogHome />

					<div className="flex flex-col gap-10">
						<BlogCard />

						<hr />

						<CategoriesList />

						<hr />

						<div>
							<h4 className="text-2xl tracking-tight font-bold leading-none">Comentarios recientes</h4>
							<div className="flex flex-col gap-3 mt-6 text-neutral-600 text-sm">
								<div>Saber Supercomplejo en <a className="font-semibold hover:text-secondary-700 duration-300" href="#">Título del Post: Continuación del Título</a></div>
								<div>Saber Supercomplejo en <a className="font-semibold hover:text-secondary-700 duration-300" href="#">Título del Post: Continuación del Título</a></div>
								<div>Saber Supercomplejo en <a className="font-semibold hover:text-secondary-700 duration-300" href="#">Título del Post: Continuación del Título</a></div>
								<div>Saber Supercomplejo en <a className="font-semibold hover:text-secondary-700 duration-300" href="#">Título del Post: Continuación del Título</a></div>
							</div>
						</div>
					</div>

				</div>

			</main>
		</div>
	)
}