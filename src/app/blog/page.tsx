import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


// https://swyft.codesupply.co/lifestyle/
export default function Blog() {
	return (
		<div>
			<Navbar style="light" />

			<main className="container mx-auto px-4 lg:px-16 py-24 text-neutral-950">
				<article className="">
					<a className="group relative p-8 lg:p-16 flex flex-col overflow-hidden rounded-xl min-h-[480px]" href="#">
						<img className="group-hover:brightness-[0.4] duration-300 absolute -z-10 inset-0 h-full w-full brightness-50 object-cover" src="https://plus.unsplash.com/premium_photo-1675198764473-30434364c8b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="jeje" />
						<div className="text-tertiary-50 max-w-xl flex flex-col lg:justify-end h-full grow">
							<div className="text-tertiary-50/80 font-medium">Por <span className="text-tertiary-50">Saber Supercomplejo</span> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> 16 de julio de 2022</div>
							<h3 className="font-semibold text-4xl lg:text-5xl tracking-tight mt-auto lg:mt-6">Título del Post: Continuación del Título</h3>
							<p className="mt-6 hidden lg:block lg:text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis voluptatem, quam neque magni ducimus.</p>
							<div className="flex gap-2 mt-8">
								<div className="bg-neutral-300/25 p-2 rounded-md text-sm font-medium">Educación</div>
								<div className="bg-neutral-300/25 p-2 rounded-md text-sm font-medium">Ciencia</div>
							</div>
						</div>
					</a>
				</article>

				<div className="mt-16 grid lg:grid-cols-3 gap-16">
					<div className="lg:col-span-2 grid gap-x-8 gap-y-12 lg:gap-y-16 lg:grid-cols-2">
						<article className="flex flex-col gap-3">
							<a href="#"><img className="hover:brightness-75 duration-300 rounded-xl h-full w-full object-cover object-center aspect-[3/2]" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
							<div className="text-sm text-neutral-600 font-medium">Por <a href="#" className="text-neutral-950 font-semibold hover:text-secondary-700 duration-300">Saber Supercomplejo</a> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> 16 de julio de 2022</div>
							<a className="hover:text-neutral-700 duration-300" href="#"><h3 className="font-semibold text-2xl tracking-tighter leading-tight">Título del Post: Continuación del Título</h3></a>
							<div className="flex gap-2 text-neutral-600">
								<div className="bg-neutral-200 p-2 rounded-md text-sm font-medium">Educación</div>
								<div className="bg-neutral-200 p-2 rounded-md text-sm font-medium">Ciencia</div>
							</div>
						</article>

						<article className="flex flex-col gap-3">
							<a href="#"><img className="hover:brightness-75 duration-300 rounded-xl h-full w-full object-cover object-center aspect-[3/2]" src="https://images.unsplash.com/photo-1443926818681-717d074a57af?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
							<div className="text-sm text-neutral-600 font-medium">Por <a href="#" className="text-neutral-950 font-semibold hover:text-secondary-700 duration-300">Saber Supercomplejo</a> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> 16 de julio de 2022</div>
							<a className="hover:text-neutral-700 duration-300" href="#"><h3 className="font-semibold text-2xl tracking-tighter leading-tight">Título del Post: Continuación del Título</h3></a>
							<div className="flex gap-2 text-neutral-600">
								<div className="bg-neutral-200 p-2 rounded-md text-sm font-medium">Educación</div>
								<div className="bg-neutral-200 p-2 rounded-md text-sm font-medium">Ciencia</div>
							</div>
						</article>

						<article className="flex flex-col gap-3">
							<a href="#"><img className="hover:brightness-75 duration-300 rounded-xl h-full w-full object-cover object-center aspect-[3/2]" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
							<div className="text-sm text-neutral-600 font-medium">Por <a href="#" className="text-neutral-950 font-semibold hover:text-secondary-700 duration-300">Saber Supercomplejo</a> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> 16 de julio de 2022</div>
							<a className="hover:text-neutral-700 duration-300" href="#"><h3 className="font-semibold text-2xl tracking-tighter leading-tight">Título del Post: Continuación del Título</h3></a>
							<div className="flex gap-2 text-neutral-600">
								<div className="bg-neutral-200 p-2 rounded-md text-sm font-medium">Educación</div>
								<div className="bg-neutral-200 p-2 rounded-md text-sm font-medium">Ciencia</div>
							</div>
						</article>

						<article className="flex flex-col gap-3">
							<a href="#"><img className="hover:brightness-75 duration-300 rounded-xl h-full w-full object-cover object-center aspect-[3/2]" src="https://images.unsplash.com/photo-1443926818681-717d074a57af?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
							<div className="text-sm text-neutral-600 font-medium">Por <a href="#" className="text-neutral-950 font-semibold hover:text-secondary-700 duration-300">Saber Supercomplejo</a> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> 16 de julio de 2022</div>
							<a className="hover:text-neutral-700 duration-300" href="#"><h3 className="font-semibold text-2xl tracking-tighter leading-tight">Título del Post: Continuación del Título</h3></a>
							<div className="flex gap-2 text-neutral-600">
								<div className="bg-neutral-200 p-2 rounded-md text-sm font-medium">Educación</div>
								<div className="bg-neutral-200 p-2 rounded-md text-sm font-medium">Ciencia</div>
							</div>
						</article>
					</div>

					<div className="flex flex-col gap-10">
						<div className="rounded-xl p-8 bg-neutral-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis similique consectetur ipsam qui velit ratione facilis deleniti aperiam dolores recusandae, accusantium voluptate id dolorem adipisci modi error suscipit tempora? Vel!</div>

						<hr />

						<div>
							<h4 className="text-2xl font-bold leading-none">Explorar categorías</h4>
							<div className="flex gap-2 flex-wrap mt-6">
								<a href="#" className="bg-neutral-200 hover:bg-neutral-300 duration-300 flex gap-2 items-center p-2 rounded-md text-sm font-medium">Educación <div className="bg-white rounded px-1.5">5</div></a>
								<a href="#" className="bg-neutral-200 hover:bg-neutral-300 duration-300 flex gap-2 items-center p-2 rounded-md text-sm font-medium">Ciencia <div className="bg-white rounded px-1.5">5</div></a>
							</div>
						</div>

						<hr />

						<div>
							<h4 className="text-2xl font-bold leading-none">Comentarios recientes</h4>
							<div className="flex flex-col gap-3 mt-6 text-neutral-600 text-sm">
								<div>Saber Supercomplejo en <a className="font-semibold hover:text-secondary-700 duration-300" href="#">Título del Post: Continuación del Título</a></div>
								<div>Saber Supercomplejo en <a className="font-semibold hover:text-secondary-700 duration-300" href="#">Título del Post: Continuación del Título</a></div>
							</div>
						</div>
					</div>

				</div>

			</main>

			<Footer />
		</div>
	)
}