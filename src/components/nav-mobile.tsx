'use client'

import { Link } from "@/i18n/routing";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { ROUTES } from "@/utils/constants";
import { BookText, Menu, NotebookPen, Route, Users } from "lucide-react";
import Image from "next/image";
import ukFlag from '../assets/uk-flag.png'
import spainFlag from '../assets/spain-flag.png'
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { redirectedPathname } from "@/lib/utils";
import { NavMobileCoursesLink } from "./courses-link";

export default function NavMobile({ style }: { style: 'light' | 'dark' }) {
	const router = useRouter()
	const pathname = usePathname()
	const t = useTranslations('navigation')
	const locale = useLocale()

	console.log(pathname)

	function handleClick(lang: 'es' | 'en') {
		router.replace(redirectedPathname(pathname, lang))
	}

	const isBlog = pathname.includes('blog')

	return (
		<div className="lg:hidden">
			<Drawer>
				<DrawerTrigger asChild>
					<button className={`${style === 'dark' ? 'bg-neutral-900/50 text-tertiary-50 divide-white/10' : 'bg-neutral-200 text-neutral-600 divide-neutral-950/20'} h-10 flex divide-x items-center gap-2 py-1.5 px-3 text-sm font-medium rounded-md`}>
						<Menu className="w-5" />
						{!isBlog && <div className="pl-2 py-1">{t('menu')}</div>}
					</button>
				</DrawerTrigger>

				<DrawerContent>
					<div className="p-8">
						<DrawerHeader>
							<DrawerTitle className="text-3xl font-bold tracking-tight text-neutral-950 px-4">{t('navigation')}</DrawerTitle>
							<DrawerDescription className="sr-only">{t('description')}</DrawerDescription>
						</DrawerHeader>

						<ul className="mt-4 text-neutral-800 font-medium text-lg flex flex-col gap-1">
							<li>
								<Link className={`${pathname.includes(ROUTES.TEORIA) ? 'bg-neutral-100' : ''} py-2 px-4 rounded-md flex items-center gap-3`} href={ROUTES.TEORIA}>
									<BookText />
									{t('teoria')}
								</Link>
							</li>
							<li>
								<Link className={`${pathname.includes(ROUTES.COMUNIDAD) ? 'bg-neutral-100' : ''} py-2 px-4 rounded-md flex items-center gap-3`} href={ROUTES.COMUNIDAD}>
									<Users />
									{t('comunidad')}
								</Link>
							</li>
							<li>
								<Link className={`${pathname.includes(ROUTES.CAMINO) ? 'bg-neutral-100' : ''} py-2 px-4 rounded-md flex items-center gap-3`} href={ROUTES.CAMINO}>
									<Route />
									{t('camino')}
								</Link>
							</li>
							<li>
								<Link className={`${pathname.includes(ROUTES.BLOG) ? 'bg-neutral-100' : ''} py-2 px-4 rounded-md flex items-center gap-3`} href={ROUTES.BLOG}>
									<NotebookPen />
									{t('blog')}
								</Link>
							</li>
							<NavMobileCoursesLink />
						</ul>

						<hr className="my-8" />

						<h4 className="text-xl font-bold tracking-tight text-neutral-950 px-4">{t('lang')}</h4>

						<ul className="mt-2 text-neutral-800 font-medium text-lg flex flex-col gap-1">
							<li>
								<button onClick={() => handleClick('en')} className={`${locale === 'en' ? 'font-semibold' : ''} py-1 px-4 w-full rounded-md flex items-center gap-3`}>
									<Image className="w-5" src={ukFlag} alt="Ícono bandera de Reino Unido" width={32} height={32} />
									English
								</button>
							</li>
							<li>
								<button onClick={() => handleClick('es')} className={`${locale === 'es' ? 'font-semibold' : ''} py-1 px-4 w-full rounded-md flex items-center gap-3`}>
									<Image className="w-5" src={spainFlag} alt="Ícono bandera de España" width={32} height={32} />
									Español
								</button>
							</li>
						</ul>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	)
}