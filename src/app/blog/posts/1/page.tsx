import Navbar from "@/components/navbar";
import { FullLogo } from "@/components/svgs";
import { MEDIA } from "@/utils/constants";

export default function BlogPost() {
	return (
		<div>
			<div className="absolute left-0 right-0 h-20 top-0 bg-gradient-to-b from-black/20 to-transparent w-full"></div>
			<Navbar style="dark" />
			<main className="">
				<div className="relative flex flex-col overflow-hidden h-[70vh] lg:h-screen">
					<img className="duration-300 absolute -z-10 inset-0 h-full w-full brightness-[0.3] object-cover" src="https://plus.unsplash.com/premium_photo-1675198764473-30434364c8b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="jeje" />
					<div className="container mx-auto px-4 lg:px-16 h-full">
						<div className="text-tertiary-50 max-w-2xl py-16 flex flex-col justify-end h-full grow">
							<div className="text-tertiary-50/80 font-medium flex flex-col lg:flex-row lg:items-center gap-x-2"><div className="flex items-center gap-2">Por <a className="flex items-center gap-2" href="#"><div className="w-8 aspect-square bg-secondary-200 rounded-full"></div> <span className="text-tertiary-50">Saber Supercomplejo</span></a> <span className="hidden lg:inline">•</span></div><div>16 de julio de 2022</div></div>
							<h1 className="font-semibold text-4xl lg:text-6xl tracking-tight mt-6">Título del Post: Continuación del Título</h1>
							<p className="mt-6 lg:text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis voluptatem, quam neque magni ducimus.</p>
						</div>
					</div>
				</div>

				<div className="container mx-auto px-4 lg:px-16 pt-16 pb-12">
					<div className="grid lg:grid-cols-3 gap-16">
						<div className="lg:col-span-2 lg:mr-8">
							<div className="lg:text-xl tracking-tight text-neutral-800">
								<p>2023 unfurls as a captivating tapestry of change and rejuvenation, weaving together threads of the past’s lessons with the possibilities of the future. As we traverse this unique juncture, it’s evident that our world is not merely changing—it’s evolving.</p>
								<p className="mt-8">Our lifestyle choices, influenced by the rapid technological advances, global challenges, and internal reflections of recent years, are increasingly harmonizing with deeper values, desires, and aspirations. Travel, once a luxury, has transformed into a multidimensional experience—shaped by not just destinations, but the stories and memories we curate. This year, a sense of discovery permeates the air, whether it’s in the realm of daily living or the vast, exhilarating world of travel. As we step deeper into 2023, let’s embark on an exploration of the nuances, narratives, and novelties that will define our times.</p>

								<h2 className="mt-12 font-bold text-3xl text-neutral-950 tracking-tight">Crafting Meaningful Journeys</h2>
								<p className="mt-4">Whether it’s the aesthetics of daily living or the wanderlust-inspired journeys we embark on, there’s a vibrant fusion of tradition with innovation, and sustainability with style. The global canvas is filled with new hues, and lifestyle enthusiasts and globe-trotters alike find themselves amidst a renaissance of experiences. As we delve deeper, let’s uncover the mosaic of trends and transformations setting the tone for the year.</p>

								<h3 className="mt-12 font-bold text-2xl text-neutral-950 tracking-tight">Sustainability: Beyond Buzzwords to Daily Practice</h3>
								<p className="mt-4">The fashion realm of 2023 has embraced an eco-conscious outlook, where sustainable choices are not just admired but expected. Upcycled clothing, biodegradable materials, and a surge in thrifted fashion all signal a collective shift towards a future where fashion is both stylish and sustainable.</p>

								<figure>
									<img className="rounded-md mt-8" src="https://swyft.codesupply.co/lifestyle/wp-content/uploads/sites/2/2023/10/demo-image-0081-1024x683.webp" alt="$" />
									<figcaption className="text-sm lg:text-base text-neutral-600 mt-4">A model showcasing an upcycled ensemble, combining elegance</figcaption>
								</figure>
								<p className="mt-8">However, embrace extends far beyond our wardrobes. Homes in 2023 reflect a renewed commitment to the environment, with interiors adorned with sustainable decor, energy-efficient appliances ruling the roost, and a rise in organic home gardens. Furthermore, the modern traveler’s journey is painted with shades of green. Eco-resorts, carbon-neutral travel options, and destinations rooted in environmental conservation are becoming the go-to choices, echoing a global desire to tread lightly on the planet.</p>

								<h3 className="mt-12 font-bold text-2xl text-neutral-950 tracking-tight">Connecting with Nature: A Return to the Outdoors</h3>
								<p className="mt-4">In the midst of our evolving world, a notable trend in 2023 is the rekindling of our relationship with the great outdoors. People are rediscovering the beauty and serenity of natural landscapes, seeking solace in the embrace of forests, mountains, and beaches. This year, the call of the wild is stronger than ever.</p>
								<p className="mt-8">Amidst bustling cityscapes and the daily hustle, there’s a growing desire to escape to places where smartphones lose signal and concrete jungles are replaced by actual ones. Nature retreats, camping adventures, and wilderness hikes have surged in popularity, allowing individuals to disconnect from the digital realm and reconnect with the earth.</p>

							</div>

							<hr className="mt-12" />

							<div className="py-8 flex flex-col lg:flex-row gap-2 justify-between lg:items-center text-base text-neutral-600 font-medium">
								<div className="flex flex-col gap-1">
									<div className="flex items-center gap-2">Por <a className="flex items-center gap-2 group" href="#"><div className="w-8 aspect-square bg-secondary-200 rounded-full"></div> <span className="text-neutral-950 group-hover:text-secondary-700 duration-300">Saber Supercomplejo</span></a></div>
									<div>Actualizado al 16 de julio de 2022</div>
								</div>
								<div className="flex gap-2 text-neutral-600">
									<div className="bg-neutral-200 p-2 rounded text-sm font-medium">Educación</div>
									<div className="bg-neutral-200 p-2 rounded text-sm font-medium">Ciencia</div>
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
							<div className="rounded-md p-8 bg-neutral-100">
								<div className="w-[260px] lg:w-[220px]"><FullLogo /></div>
								<p className="mt-6">Bienvenido al blog de la comunidad. Este es un espacio dedicado a blabla. Omnis similique consectetur ipsam qui velit ratione facilis deleniti aperiam dolores recusandae.</p>
								<div className="flex gap-2 mt-6 text-neutral-800">
									<a className="p-2" title="Instagram" aria-label="Instagram" href={MEDIA.INSTAGRAM} target="_blank" rel="noopener noreferrer">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
									</a>
									<a className="p-2" title="Facebook" aria-label="Facebook" href={MEDIA.FACEBOOK} target="_blank" rel="noopener noreferrer">
										<svg className="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
									</a>
									<a className="p-2" title="LinkedIn" aria-label="LinkedIn" href={MEDIA.LINKEDIN} target="_blank" rel="noopener noreferrer">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
									</a>
								</div>
							</div>

							<hr />

							<div>
								<h4 className="text-2xl tracking-tight font-bold leading-none">Publicaciones recientes</h4>

								<div className="flex gap-4 mt-6">
									<a className="shrink-0" href="#"><img className="hover:brightness-75 duration-300 rounded-md w-24 h-24 object-cover" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>

									<div className="flex flex-col">
										<div className="font-medium text-neutral-600 text-sm">Por <a className="font-semibold text-neutral-950 hover:text-secondary-700 duration-300" href="#">Saber Supercomplejo</a></div>
										<div className="font-medium text-neutral-600 text-sm">16 de julio de 2022</div>
										<a className="text-lg hover:text-neutral-700 duration-300 font-semibold mt-3 leading-none" href="#">Título del Post: Continuación del Título</a>
									</div>
								</div>

								<hr className="my-6" />

								<div className="flex gap-4 mt-6">
									<a className="shrink-0" href="#"><img className="hover:brightness-75 duration-300 rounded-md w-24 h-24 object-cover" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>

									<div className="flex flex-col">
										<div className="font-medium text-neutral-600 text-sm">Por <a className="font-semibold text-neutral-950 hover:text-secondary-700 duration-300" href="#">Saber Supercomplejo</a></div>
										<div className="font-medium text-neutral-600 text-sm">16 de julio de 2022</div>
										<a className="text-lg hover:text-neutral-700 duration-300 font-semibold mt-3 leading-none" href="#">Título del Post: Continuación del Título</a>
									</div>
								</div>

								<hr className="my-6" />

								<div className="flex gap-4 mt-6">
									<a className="shrink-0" href="#"><img className="hover:brightness-75 duration-300 rounded-md w-24 h-24 object-cover" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>

									<div className="flex flex-col">
										<div className="font-medium text-neutral-600 text-sm">Por <a className="font-semibold text-neutral-950 hover:text-secondary-700 duration-300" href="#">Saber Supercomplejo</a></div>
										<div className="font-medium text-neutral-600 text-sm">16 de julio de 2022</div>
										<a className="text-lg hover:text-neutral-700 duration-300 font-semibold mt-3 leading-none" href="#">Título del Post: Continuación del Título</a>
									</div>
								</div>

								<hr className="my-6" />

								<div className="flex gap-4 mt-6">
									<a className="shrink-0" href="#"><img className="hover:brightness-75 duration-300 rounded-md w-24 h-24 object-cover" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>

									<div className="flex flex-col">
										<div className="font-medium text-neutral-600 text-sm">Por <a className="font-semibold text-neutral-950 hover:text-secondary-700 duration-300" href="#">Saber Supercomplejo</a></div>
										<div className="font-medium text-neutral-600 text-sm">16 de julio de 2022</div>
										<a className="text-lg hover:text-neutral-700 duration-300 font-semibold mt-3 leading-none" href="#">Título del Post: Continuación del Título</a>
									</div>
								</div>

								<hr className="my-6" />

								<div className="flex gap-4 mt-6">
									<a className="shrink-0" href="#"><img className="hover:brightness-75 duration-300 rounded-md w-24 h-24 object-cover" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>

									<div className="flex flex-col">
										<div className="font-medium text-neutral-600 text-sm">Por <a className="font-semibold text-neutral-950 hover:text-secondary-700 duration-300" href="#">Saber Supercomplejo</a></div>
										<div className="font-medium text-neutral-600 text-sm">16 de julio de 2022</div>
										<a className="text-lg hover:text-neutral-700 duration-300 font-semibold mt-3 leading-none" href="#">Título del Post: Continuación del Título</a>
									</div>
								</div>

								<hr className="my-6" />
							</div>

						</div>
					</div>
				</div>
			</main>
		</div>
	)
}