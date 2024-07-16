'use client'

import { useState } from "react"
import { Logo } from "./svgs";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";

interface Props {
	style: 'light' | 'dark';
}

export default function NavMenu({ style }: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	function showMenu() {
		setIsMenuOpen(true)
	}

	function hideMenu() {
		setIsMenuOpen(false)
	}

	function hideMenuDelayed() {
		setTimeout(() => {
			hideMenu()
		}, 500)
	}

	return (
		<div className="lg:hidden">
			<button onClick={showMenu} className={`${style === 'dark' ? 'bg-neutral-950/30' : 'bg-neutral-600'} flex items-center gap-2 py-2 px-4 text-tertiary-50  rounded-full`}>
				<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
				Menú
			</button>

			<div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'} | fixed inset-0 w-screen h-screen bg-primary-900/90 backdrop-blur text-tertiary-50`}>
				<div className="container mx-auto py-3 flex flex-col h-full">

					<div className="flex items-center justify-between border-b px-4 pb-3 border-neutral-950/30">
						<a className="w-10" aria-label="Inicio" href="/">
							<Logo />
						</a>

						<button onClick={hideMenu} className="ml-auto bg-neutral-950/30 flex items-center gap-2 py-2 px-4 text-tertiary-50  rounded-full">
							<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
							Cerrar
						</button>
					</div>

					<ul className="flex flex-col gap-0 text-[10vw] px-8 py-40 font-semibold tracking-tight">
						<li><Link onClick={hideMenuDelayed} className="nav-link | flex items-center gap-4" href={ROUTES.TEORIA}><div aria-hidden="true" className="w-3 aspect-square rotate-45 bg-secondary-500"></div> LA TEORÍA</Link></li>
						<li><Link onClick={hideMenuDelayed} className="nav-link | flex items-center gap-4" href={ROUTES.ACTORES}><div aria-hidden="true" className="w-3 aspect-square rotate-45 bg-secondary-500"></div> LOS ACTORES</Link></li>
						<li><Link onClick={hideMenuDelayed} className="nav-link | flex items-center gap-4" href={ROUTES.CAMINO}><div aria-hidden="true" className="w-3 aspect-square rotate-45 bg-secondary-500"></div> EL CAMINO</Link></li>
						<li><Link onClick={hideMenuDelayed} className="nav-link | flex items-center gap-4" href={ROUTES.BLOG}><div aria-hidden="true" className="w-3 aspect-square rotate-45 bg-secondary-500"></div> BLOG</Link></li>
					</ul>
				</div>
			</div>

		</div>
	)
}