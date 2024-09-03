'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import spainFlag from '../assets/spain-flag.png'
import ukFlag from '../assets/uk-flag.png'
import Image from "next/image";
import { Languages } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { redirectedPathname } from "@/lib/utils";

export default function LangSelector({ style }: { style: 'dark' | 'light' }) {
	const pathname = usePathname();
	const isBlog = pathname.includes('blog')
	const locale = useLocale();
	const t = useTranslations('navigation');

	const langs = {
		'es': 'Español',
		'en': 'English',
	}

	return (
		<div className="hidden lg:block">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className={`${style === 'dark' ? 'bg-neutral-900/50 text-tertiary-50 divide-white/10 hover:bg-neutral-900' : 'bg-neutral-200 text-neutral-900 divide-neutral-950/20 hover:bg-neutral-300'} h-10 flex divide-x items-center gap-2 py-1.5 px-3 text-sm font-medium duration-300 rounded-md`}>
						<Languages className={`${style === 'light' ? 'text-neutral-700' : ''} w-5`} />
						{!isBlog && <div className="pl-2 py-1">{langs[locale as 'es' | 'en']}</div>}
					</button>
				</DropdownMenuTrigger>

				<DropdownMenuContent align="end">
					<DropdownMenuLabel>{t('lang')}</DropdownMenuLabel>

					<DropdownMenuSeparator />

					<DropdownMenuItem asChild>
						<Link href={redirectedPathname(pathname, 'en')} className="flex items-center gap-2">
							<Image className="w-5" src={ukFlag} alt="Ícono bandera de Reino Unido" width={32} height={32} />
							English
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href={redirectedPathname(pathname, 'es')} className="flex items-center gap-2">
							<Image className="w-5" src={spainFlag} alt="Ícono bandera de España" width={32} height={32} />
							Español
						</Link>
					</DropdownMenuItem>

				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}