'use client'

import Link from "next/link";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { ROUTES } from "@/utils/constants";
import { BookText, Menu, NotebookPen, Route, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ukFlag from '../assets/uk-flag.png'
import spainFlag from '../assets/spain-flag.png'

export default function NavMobile({ style }: { style: 'light' | 'dark' }) {
	const pathname = usePathname()

	const isBlog = pathname.includes('blog')

	return (
		<div className="lg:hidden">
			<Drawer>
				<DrawerTrigger asChild>
					<button className={`${style === 'dark' ? 'bg-neutral-900/50 text-tertiary-50 divide-white/10' : 'bg-neutral-200 text-neutral-600 divide-neutral-950/20'} h-10 flex divide-x items-center gap-2 py-1.5 px-3 text-sm font-medium rounded-md`}>
						<Menu className="w-5" />
						{!isBlog && <div className="pl-2 py-1">Menú</div>}
					</button>
				</DrawerTrigger>

				<DrawerContent>
					<div className="p-8">
						<DrawerTitle className="text-3xl font-bold tracking-tight text-neutral-950 px-4">Navegación</DrawerTitle>

						<ul className="mt-4 text-neutral-800 font-medium text-lg flex flex-col gap-1">
							<li>
								<Link className={`${pathname === ROUTES.TEORIA ? 'bg-neutral-100' : ''} py-2 px-4 rounded-md flex items-center gap-3`} href={ROUTES.TEORIA}>
									<BookText />
									La teoría
								</Link>
							</li>
							<li>
								<Link className={`${pathname === ROUTES.ACTORES ? 'bg-neutral-100' : ''} py-2 px-4 rounded-md flex items-center gap-3`} href={ROUTES.ACTORES}>
									<Users />
									Los actores
								</Link>
							</li>
							<li>
								<Link className={`${pathname === ROUTES.CAMINO ? 'bg-neutral-100' : ''} py-2 px-4 rounded-md flex items-center gap-3`} href={ROUTES.CAMINO}>
									<Route />
									El camino
								</Link>
							</li>
							<li>
								<Link className={`${pathname === ROUTES.BLOG ? 'bg-neutral-100' : ''} py-2 px-4 rounded-md flex items-center gap-3`} href={ROUTES.BLOG}>
									<NotebookPen />
									Blog
								</Link>
							</li>
						</ul>

						<hr className="my-8" />

						<h4 className="text-xl font-bold tracking-tight text-neutral-950 px-4">Idioma</h4>

						<ul className="mt-2 text-neutral-800 font-medium text-lg flex flex-col gap-1">
							<li>
								<Link className="py-1 px-4 rounded-md flex items-center gap-3" href='/'>
									<Image className="w-5" src={ukFlag} alt="Ícono bandera de Reino Unido" width={32} height={32} />
									English
								</Link>
							</li>
							<li>
								<Link className="py-1 px-4 rounded-md font-semibold flex items-center gap-3" href='/'>
									<Image className="w-5" src={spainFlag} alt="Ícono bandera de Reino Unido" width={32} height={32} />
									Español
								</Link>
							</li>
						</ul>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	)
}