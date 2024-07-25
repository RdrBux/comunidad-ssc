import BlogCard from "@/components/blog/blog-card";
import CategoriesList from "@/components/blog/categories-list";
import HighlightedPost from "@/components/blog/highlighted-post";
import PostsBlogHome from "@/components/blog/posts-blog-home";
import RecentComments from "@/components/blog/recent-comments";
import Navbar from "@/components/navbar";

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