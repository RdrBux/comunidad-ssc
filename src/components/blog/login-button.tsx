'use client'

import { signInWithGoogle } from "@/utils/actions";
import { usePathname } from "next/navigation";

export default function LoginButton({ style }: { style: 'light' | 'dark' }) {
	const pathname = usePathname();

	async function handleLogin() {
		await signInWithGoogle(pathname);
	}

	return (
		<button onClick={handleLogin} className={`${style === 'light' ? 'text-tertiary-50 bg-neutral-500 hover:bg-neutral-700' : 'text-tertiary-50 bg-neutral-950/50 hover:bg-neutral-950'} px-3 py-2.5 flex items-center gap-2.5 font-medium text-sm rounded-md duration-300`}>
			Iniciar sesión
		</button>
	)
}