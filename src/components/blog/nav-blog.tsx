'use client'

import { usePathname } from "next/navigation"

export default function NavBlog({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	if (!pathname.includes('/blog')) return null

	return (
		<>
			{children}
		</>
	)

}