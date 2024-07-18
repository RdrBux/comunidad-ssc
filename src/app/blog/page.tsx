import Navbar from "@/components/navbar";
import { FullLogo } from "@/components/svgs";


// https://swyft.codesupply.co/lifestyle/
export default function Blog() {
	return (
		<div>
			<Navbar style="light" />
			<main className="container mx-auto px-4 lg:px-16 py-24 text-neutral-950">
				<article className="">
					<a className="group relative p-8 lg:p-16 flex flex-col rounded-xl overflow-hidden min-h-[480px]" href="blog/posts/1">
						<img className="group-hover:brightness-[0.4] duration-300 absolute -z-10 inset-0 h-full w-full brightness-50 object-cover" src="https://plus.unsplash.com/premium_photo-1675198764473-30434364c8b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="jeje" />
						<div className="text-tertiary-50 max-w-xl flex flex-col lg:justify-end h-full grow">
							<div className="text-tertiary-50/80 font-medium">Por <span className="text-tertiary-50">Saber Supercomplejo</span> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> 16 de julio de 2022</div>
							<h3 className="font-semibold text-4xl lg:text-5xl tracking-tight mt-auto lg:mt-6">Título del Post: Continuación del Título</h3>
							<p className="mt-6 hidden lg:block lg:text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis voluptatem, quam neque magni ducimus.</p>
							<div className="flex gap-2 mt-8">
								<div className="bg-neutral-300/25 p-2 rounded text-sm font-medium">Educación</div>
								<div className="bg-neutral-300/25 p-2 rounded text-sm font-medium">Ciencia</div>
							</div>
						</div>
					</a>
				</article>

				<div className="mt-16 grid lg:grid-cols-3 gap-16">
					<div className="lg:col-span-2 grid gap-x-8 gap-y-12 lg:gap-y-16 lg:grid-cols-2">
						<h2 className="font-bold lg:col-span-2 tracking-tight text-3xl lg:text-4xl -mb-6 lg:-mb-8">Publicaciones recientes</h2>

						<article className="flex flex-col gap-3">
							<a href="#"><img className="hover:brightness-75 duration-300 rounded-xl h-full w-full object-cover object-center aspect-[3/2]" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
							<div className="text-sm text-neutral-600 font-medium">Por <a href="#" className="text-neutral-950 font-semibold hover:text-secondary-700 duration-300">Saber Supercomplejo</a> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> 16 de julio de 2022</div>
							<a className="hover:text-neutral-700 duration-300" href="#"><h3 className="font-semibold text-2xl tracking-tighter leading-tight">Título del Post: Continuación del Título</h3></a>
							<div className="flex gap-2 text-neutral-600">
								<div className="bg-neutral-200 p-2 rounded text-sm font-medium">Educación</div>
								<div className="bg-neutral-200 p-2 rounded text-sm font-medium">Ciencia</div>
							</div>
						</article>

						<article className="flex flex-col gap-3">
							<a href="#"><img className="hover:brightness-75 duration-300 rounded-xl h-full w-full object-cover object-center aspect-[3/2]" src="https://images.unsplash.com/photo-1443926818681-717d074a57af?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
							<div className="text-sm text-neutral-600 font-medium">Por <a href="#" className="text-neutral-950 font-semibold hover:text-secondary-700 duration-300">Saber Supercomplejo</a> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> 16 de julio de 2022</div>
							<a className="hover:text-neutral-700 duration-300" href="#"><h3 className="font-semibold text-2xl tracking-tighter leading-tight">Título del Post: Continuación del Título</h3></a>
							<div className="flex gap-2 text-neutral-600">
								<div className="bg-neutral-200 p-2 rounded text-sm font-medium">Educación</div>
								<div className="bg-neutral-200 p-2 rounded text-sm font-medium">Ciencia</div>
							</div>
						</article>

						<article className="flex flex-col gap-3">
							<a href="#"><img className="hover:brightness-75 duration-300 rounded-xl h-full w-full object-cover object-center aspect-[3/2]" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
							<div className="text-sm text-neutral-600 font-medium">Por <a href="#" className="text-neutral-950 font-semibold hover:text-secondary-700 duration-300">Saber Supercomplejo</a> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> 16 de julio de 2022</div>
							<a className="hover:text-neutral-700 duration-300" href="#"><h3 className="font-semibold text-2xl tracking-tighter leading-tight">Título del Post: Continuación del Título</h3></a>
							<div className="flex gap-2 text-neutral-600">
								<div className="bg-neutral-200 p-2 rounded text-sm font-medium">Educación</div>
								<div className="bg-neutral-200 p-2 rounded text-sm font-medium">Ciencia</div>
							</div>
						</article>

						<article className="flex flex-col gap-3">
							<a href="#"><img className="hover:brightness-75 duration-300 rounded-xl h-full w-full object-cover object-center aspect-[3/2]" src="https://images.unsplash.com/photo-1443926818681-717d074a57af?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
							<div className="text-sm text-neutral-600 font-medium">Por <a href="#" className="text-neutral-950 font-semibold hover:text-secondary-700 duration-300">Saber Supercomplejo</a> <span className="hidden lg:inline">•</span><br className="lg:hidden" /> 16 de julio de 2022</div>
							<a className="hover:text-neutral-700 duration-300" href="#"><h3 className="font-semibold text-2xl tracking-tighter leading-tight">Título del Post: Continuación del Título</h3></a>
							<div className="flex gap-2 text-neutral-600">
								<div className="bg-neutral-200 p-2 rounded text-sm font-medium">Educación</div>
								<div className="bg-neutral-200 p-2 rounded text-sm font-medium">Ciencia</div>
							</div>
						</article>
					</div>

					<div className="flex flex-col gap-10">
						<div className="rounded-xl p-8 bg-neutral-100">
							<div className="w-[260px] lg:w-[220px]"><FullLogo /></div>
							<p className="mt-6">Bienvenido al blog de la comunidad. Este es un espacio dedicado a blabla. Omnis similique consectetur ipsam qui velit ratione facilis deleniti aperiam dolores recusandae.</p>
							<div className="flex gap-2 mt-6 text-neutral-800">
								<a className="p-2" title="Instagram" aria-label="Instagram" href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
								</a>
								<a className="p-2" title="Facebook" aria-label="Facebook" href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
									<svg className="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
								</a>
								<a className="p-2" title="LinkedIn" aria-label="LinkedIn" href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
								</a>
							</div>
						</div>

						<hr />

						<div>
							<h4 className="text-2xl tracking-tight font-bold leading-none">Explorar categorías</h4>
							<div className="flex gap-2 flex-wrap mt-6">
								<a href="#" className="bg-neutral-200 hover:bg-neutral-300 duration-300 flex gap-2 items-center p-2 rounded text-sm font-medium">Educación <div className="bg-white rounded px-1.5">5</div></a>
								<a href="#" className="bg-neutral-200 hover:bg-neutral-300 duration-300 flex gap-2 items-center p-2 rounded text-sm font-medium">Ciencia <div className="bg-white rounded px-1.5">5</div></a>
							</div>
						</div>

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