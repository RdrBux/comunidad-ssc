import Navbar from "@/components/navbar";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
	title: "Política de Privacidad - Comunidad del Saber Supercomplejo",
};

export default function PrivacyPolicies() {
	const t = useTranslations('privacy')

	return (
		<div className="text-neutral-800">
			<Navbar style="light" />

			<div className="py-32 max-w-2xl px-4 mx-auto">
				<h1 className="text-4xl font-bold text-neutral-950 font-source">{t('title')}</h1>
				<p className="mt-4">{t('updated')}</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">1. {t('sections.1.title')}</h2>
				<p className="mt-4">{t('sections.1.description')}</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">2. {t('sections.2.title')}</h2>
				<p className="mt-4">{t('sections.2.description')}</p>
				<ul>
					<li>{t('sections.2.bullets.1')}</li>
					<li>{t('sections.2.bullets.2')}</li>
					<li>{t('sections.2.bullets.3')}</li>
					<li>{t('sections.2.bullets.4')}</li>
				</ul>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">3. {t('sections.3.title')}</h2>
				<p className="mt-4">{t('sections.3.description')}</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">4. {t('sections.4.title')}</h2>
				<p className="mt-4">{t('sections.4.description')}</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">5. {t('sections.5.title')}</h2>
				<p className="mt-4">{t('sections.5.description')}</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">6. {t('sections.6.title')}</h2>
				<p className="mt-4">{t('sections.6.description')}</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">7. {t('sections.7.title')}</h2>
				<p className="mt-4">{t('sections.7.description')}</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">8. {t('sections.8.title')}</h2>
				<p className="mt-4">{t('sections.8.description')}</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">9. {t('sections.9.title')}</h2>
				<p className="mt-4">{t('sections.9.description')} <a className="text-secondary-700 underline" href="mailto:sabersupercomplejo@gmail.com">sabersupercomplejo@gmail.com</a>.</p>
			</div>
		</div>
	)
}
