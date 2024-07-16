import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


// https://swyft.codesupply.co/lifestyle/
export default function Blog() {
	return (
		<div>
			<Navbar style="light" />

			<main className="container mx-auto px-4 lg:px-16 py-24 text-neutral-950">
				<article className="relative overflow-hidden rounded-xl min-h-[480px] bg-center bg-no-repeat bg-cover 2bg-[url(https://plus.unsplash.com/premium_photo-1675198764473-30434364c8b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
					<img className="absolute -z-10 inset-0 h-full w-full brightness-50 object-cover" src="https://plus.unsplash.com/premium_photo-1675198764473-30434364c8b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="jeje" />
					<div className="flex flex-col gap-4 justify-center">
						<div className="">Por Saber Supercomplejo • 16 de julio de 2022</div>
						<h3>Título del Post</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</article>

			</main>

			<Footer />
		</div>
	)
}