import BlogCard from "@/components/blog/blog-card";
import CategoriesList from "@/components/blog/categories-list";
import PostsBlogHome from "@/components/blog/posts-blog-home";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog - Comunidad del Saber Supercomplejo",
};

export default function Blog() {
	return (
		<div>
			<Navbar style="light" />
			<main className="container mx-auto px-4 lg:px-16 py-24 text-neutral-950">
				{/* <HighlightedPost /> */}

				<div className="!!!mt-16 mt-4 grid lg:grid-cols-3 gap-16">
					<PostsBlogHome />

					<div className="flex flex-col gap-10">
						<BlogCard />

						<hr />

						<CategoriesList />

						{/* <hr />

						<RecentComments /> */}
					</div>

				</div>

			</main>
		</div>
	)
}