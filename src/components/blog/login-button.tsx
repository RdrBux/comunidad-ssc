'use client'

import { createClient } from "@/utils/supabase/client"

export default function LoginButton({ style }: { style: 'light' | 'dark' }) {
	const supabase = createClient();

	function signInWithGoogle() {
		supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `http://localhost:3000/auth/callback`,
			},
		})
	}

	return (
		<button onClick={signInWithGoogle} className={`${style === 'light' ? 'text-tertiary-50 bg-neutral-500 hover:bg-neutral-700' : 'text-tertiary-50 bg-neutral-950/50 hover:bg-neutral-950'} px-3 py-2.5 flex items-center gap-2.5 font-medium text-sm rounded-md duration-300`}>
			Iniciar sesión
		</button>
	)
}