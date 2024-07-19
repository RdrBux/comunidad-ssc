'use client'

import Link from "next/link";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { ROUTES } from "@/utils/constants";
import { BookText, Menu, NotebookPen, Route, Users } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavMobile({ style }: { style: 'light' | 'dark' }) {
	const pathname = usePathname()

	return (
		<div className="lg:hidden">
			<Drawer>
				<DrawerTrigger asChild>
					<button className={`${style === 'dark' ? 'bg-neutral-950/30' : 'bg-neutral-600'} flex divide-x divide-white/10 items-center gap-2 py-1.5 px-3 text-sm font-medium text-tertiary-50 rounded-md`}>
						<Menu className="w-5" /> <div className="pl-2 py-1">Menú</div>
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
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	)
}