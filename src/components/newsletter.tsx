'use client'

import { subscribeToNewsletter } from "@/utils/actions";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import NewsletterButton from "./newsletter-button";

type State = {
	error: string | null;
}

const initialState: State = {
	error: '',
}

export default function Newsletter() {
	const [formState, formAction] = useFormState(subscribeToNewsletter, initialState)
	const form = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (formState.error === null) {
			form.current?.reset();
		}

	}, [formState.error])

	return (
		<div className="mb-24 mt-4 lg:m-0">
			<h3 className="text-xl font-medium">ÚNETE A LA COMUNIDAD</h3>

			<p className="text-neutral-400 text-sm mb-6 mt-3">
				Suscríbete de forma gratuita a nuestro sitio y accede a contenido exclusivo, novedades, eventos especiales y oportunidades de desarrollo profesional.
			</p>

			<form ref={form} action={formAction} className="grid gap-4 mt-4">
				<div className="relative">
					<input type="text" id="name" name="name" className="block rounded-t-md px-2.5 pb-2.5 pt-5 w-full text-sm bg-neutral-500/5 border-0 border-b-2 appearance-none text-tertiary-50 border-neutral-700 focus:border-secondary-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
					<label htmlFor="name" className="absolute text-sm text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-secondary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre completo</label>
				</div>

				<div className="relative">
					<input type="email" id="email" name="email" className="block rounded-t-md px-2.5 pb-2.5 pt-5 w-full text-sm bg-neutral-500/5 border-0 border-b-2 appearance-none text-tertiary-50 border-neutral-700 focus:border-secondary-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
					<label htmlFor="email" className="absolute text-sm text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-secondary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Correo electrónico</label>
				</div>

				<NewsletterButton />

				{formState.error && formState.error.length > 0 && <p className="text-red-500">{formState.error}</p>}
				{formState.error === null && <p className="text-green-500">Gracias por suscribirte</p>}
			</form>
		</div>
	)
}