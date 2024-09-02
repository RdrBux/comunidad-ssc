import { ROUTES } from "@/utils/constants";
import ButtonSection from "../button-section";
import { ImgSSC } from "../svgs";
import { useTranslations } from "next-intl";

export default function Community() {
	const t = useTranslations('home.community')

	return (
		<section className="bg-neutral-800">
			<div className="container mx-auto px-4 lg:px-16 py-24 lg:py-32">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="lg:ml-20 2xl:ml-32 mx-[96px]">
						<ImgSSC />
					</div>

					<div className="lg:-order-1">
						<h2 className="font-medium text-sm text-[#1AAD81] lg:text-base">{t('category')}</h2>
						<h3 className={`font-source text-4xl leading-none lg:text-5xl text-tertiary-50 tracking-tight font-medium mt-4`}>{t('title')}</h3>
						<p className="mt-8 lg:text-lg font-light text-neutral-300">{t('paragraph-first')}</p>
						<p className="mt-4 lg:text-lg font-light text-neutral-300">{t('paragraph-second')}</p>
						<ButtonSection route={ROUTES.COMUNIDAD} text={t('button')} />
					</div>

				</div>
			</div>
		</section>
	)
}