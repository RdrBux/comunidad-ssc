'use client'

import { signInWithGoogle } from "@/utils/actions";
import { usePathname } from "next/navigation";
import { GoogleLogo } from "../svgs";
import { useTranslations } from "next-intl";

export default function LoginButton({ style }: { style: 'light' | 'dark' }) {
	const pathname = usePathname();
	const t = useTranslations('blog')

	async function handleLogin() {
		await signInWithGoogle(pathname);
	}

	return (
		<button onClick={handleLogin} className={`${style === 'light' ? 'text-[#1F1F1F] bg-[#F2F2F2] hover:bg-[#E8E8E8]' : 'text-[#E3E3E3] bg-[rgba(19,19,20,0.8)] hover:bg-[#1F1F1F]'} px-3 py-2.5 flex items-center gap-2.5 font-medium text-sm rounded-md duration-300`}>
			<GoogleLogo />
			{t('google-button')}
		</button>
	)
}