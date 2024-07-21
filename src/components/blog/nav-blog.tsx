'use client'

import { usePathname } from "next/navigation"
import NavUserMenu from "./nav-user-menu";

export default function NavBlog({ style }: { style: 'dark' | 'light' }) {
	const pathname = usePathname();
	if (!pathname.includes('/blog')) return null

	return <NavUserMenu style={style} />

}