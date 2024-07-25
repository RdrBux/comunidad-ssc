import Link from "next/link";
import { Logo } from "./svgs";
import { MEDIA, ROUTES } from "@/utils/constants";
import Newsletter from "./newsletter";
import { sourceSerif } from "@/utils/fonts";

export default function Footer() {
	return (

		<section className="bg-neutral-950 text-tertiary-50">
			<div className="container mx-auto px-4 lg:px-16 py-16">
				<div className="grid lg:grid-cols-3 border-2 rounded-md border-neutral-900">
					<div className="p-8 lg:border-r-2 border-neutral-900 flex flex-col justify-evenly">
						<div className={`font-source tracking-tight leading-none text-[9.5vw] sm:text-6xl lg:text-3xl xl:text-4xl`}>Comunidad <br /> del Saber <br /> Supercomplejo</div>

						<div className="hidden lg:flex gap-4 items-center">
							<div className="w-12"><Logo /></div>
							<div className="text-neutral-300">
								<p>© 2024</p>
								<p>Todos los derechos reservados</p>
							</div>
						</div>
					</div>

					<div className="p-8 xl:px-12 flex flex-col gap-8 justify-evenly">
						<ul className="grid grid-cols-2 gap-2">
							<li><Link className="hover:text-secondary-500 duration-300" href={ROUTES.INICIO}>Inicio</Link></li>
							<li><Link className="hover:text-secondary-500 duration-300" href={ROUTES.TEORIA}>La teoría</Link></li>
							<li><Link className="hover:text-secondary-500 duration-300" href={ROUTES.COMUNIDAD}>La comunidad</Link></li>
							<li><Link className="hover:text-secondary-500 duration-300" href={ROUTES.CAMINO}>El camino</Link></li>
							<li><Link className="hover:text-secondary-500 duration-300" href={ROUTES.BLOG}>Blog</Link></li>
						</ul>

						<a className="hidden lg:block underline hover:text-secondary-500 duration-300" href="mailto:sabersupercomplejo@gmail.com">sabersupercomplejo@gmail.com</a>

						<ul className="hidden lg:flex gap-2">
							<li>
								<a title="Instagram" className="border-2 rounded-md border-neutral-900 p-2 grid place-content-center w-fit group" aria-label="Instagram" href={MEDIA.INSTAGRAM} target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-secondary-500 duration-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
								</a>
							</li>

							<li>
								<a title="Facebook" className="border-2 rounded-md border-neutral-900 p-2 grid place-content-center w-fit group" aria-label="Facebook" href={MEDIA.FACEBOOK} target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-secondary-500 duration-300"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
								</a>
							</li>

							{/* <li>
								<a title="YouTube" className="border-2 rounded-md border-neutral-900 p-2 grid place-content-center w-fit group" aria-label="YouTube" href={MEDIA.YOUTUBE} target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-secondary-500 duration-300"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
								</a>
							</li> */}

							<li>
								<a title="LinkedIn" className="border-2 rounded-md border-neutral-900 p-2 grid place-content-center w-fit group" aria-label="LinkedIn" href={MEDIA.LINKEDIN} target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-secondary-500 duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
								</a>
							</li>
						</ul>
					</div>

					<div className="p-8">
						<Newsletter />
						{/* <h3 className="text-xl font-medium">ENVÍA UN MENSAJE</h3>
						<form className="grid gap-4 mt-4">
							<div className="relative">
								<input type="text" id="name" className="block rounded-t-md px-2.5 pb-2.5 pt-5 w-full text-sm bg-neutral-500/5 border-0 border-b-2 appearance-none text-tertiary-50 border-neutral-700 focus:border-secondary-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
								<label htmlFor="name" className="absolute text-sm text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-secondary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre completo</label>
							</div>

							<div className="relative">
								<input type="email" id="email" className="block rounded-t-md px-2.5 pb-2.5 pt-5 w-full text-sm bg-neutral-500/5 border-0 border-b-2 appearance-none text-tertiary-50 border-neutral-700 focus:border-secondary-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
								<label htmlFor="email" className="absolute text-sm text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-secondary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Correo electrónico</label>
							</div>

							<div className="relative">
								<textarea id="message" rows={3} className="block rounded-t-md px-2.5 pb-2.5 pt-5 w-full text-sm bg-neutral-500/5 border-0 border-b-2 appearance-none text-tertiary-50 border-neutral-700 focus:border-secondary-500 focus:outline-none focus:ring-0 peer" placeholder="" required ></textarea>
								<label htmlFor="message" className="absolute text-sm text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-secondary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Mensaje</label>
							</div>

							<button className="whitespace-nowrap rounded bg-secondary-400 text-neutral-950 px-6 font-medium py-2 w-full hover:bg-secondary-300 duration-300">Enviar</button>
						</form> */}

						<a className="block lg:hidden underline mt-16 mb-4 hover:text-secondary-500 duration-300" href="mailto:sabersupercomplejo@gmail.com">sabersupercomplejo@gmail.com</a>

						<ul className="flex lg:hidden gap-2">
							<li>
								<a title="Instagram" className="border-2 rounded-md border-neutral-900 p-2 grid place-content-center w-fit group" aria-label="Instagram" href={MEDIA.INSTAGRAM} target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-secondary-500 duration-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
								</a>
							</li>

							<li>
								<a title="Facebook" className="border-2 rounded-md border-neutral-900 p-2 grid place-content-center w-fit group" aria-label="Facebook" href={MEDIA.FACEBOOK} target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-secondary-500 duration-300"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
								</a>
							</li>

							{/* <li>
								<a title="YouTube" className="border-2 rounded-md border-neutral-900 p-2 grid place-content-center w-fit group" aria-label="YouTube" href={MEDIA.YOUTUBE} target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-secondary-500 duration-300"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
								</a>
							</li> */}

							<li>
								<a title="LinkedIn" className="border-2 rounded-md border-neutral-900 p-2 grid place-content-center w-fit group" aria-label="LinkedIn" href={MEDIA.LINKEDIN} target="_blank" rel="noopener noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-secondary-500 duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
								</a>
							</li>
						</ul>

						<div className="flex lg:hidden mt-16 gap-4 items-center">
							<div className="w-12"><Logo /></div>
							<div className="text-neutral-300">
								<p>© 2024</p>
								<p>Todos los derechos reservados</p>
							</div>
						</div>
					</div>


				</div>
			</div>
		</section>
	)
}
