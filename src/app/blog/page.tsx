import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Blog() {
	return (
		<div>
			<Navbar style="light" />

			<main className="container mx-auto px-4 lg:px-16 py-24">
				<div className="text-neutral-950">
					Blog
				</div>
			</main>

			<Footer />
		</div>
	)
}