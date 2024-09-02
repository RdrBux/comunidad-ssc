'use state'

import { LoaderCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom"

export default function NewsletterButton() {
	const { pending } = useFormStatus();
	const t = useTranslations('home.footer.newsletter')

	if (pending) {
		return (
			<button disabled className="whitespace-nowrap rounded flex gap-2 items-center justify-center bg-secondary-200 text-neutral-950 px-6 font-medium py-2 w-full">{t('button')}  <LoaderCircle className="animate-spin ml-1.5 h-4 w-4" /></button>
		)
	}

	return (
		<button type="submit" className="whitespace-nowrap rounded bg-secondary-400 text-neutral-950 px-6 font-medium py-2 w-full hover:bg-secondary-300 duration-300">{t('button')}</button>
	)

}