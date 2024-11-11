'use client'

import { ROUTES } from "@/utils/constants";
import NavLink from "./nav-link";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { GraduationCap } from "lucide-react";

export function NavCoursesLink({ style }: { style: 'light' | 'dark' }) {
	const locale = useLocale();
	if (locale !== 'es') return null;

	return (
		<li><NavLink route={ROUTES.CURSOS} text={'Cursos'} style={style} /></li>
	)
}

export function NavMobileCoursesLink() {
	const pathname = usePathname();
	const locale = useLocale();

	if (locale !== 'es') return null;

	return (
		<li>
			<Link className={`${pathname.includes(ROUTES.CURSOS) ? 'bg-neutral-100' : ''} py-2 px-4 rounded-md flex items-center gap-3`} href={ROUTES.CURSOS}>
				<GraduationCap />
				{'Cursos'}
			</Link>
		</li>
	)
}