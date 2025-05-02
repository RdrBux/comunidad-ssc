import { ROUTES } from "@/utils/constants";
import ButtonSection from "../button-section";
import { ImgCubes } from "../svgs";
import { useTranslations } from "next-intl";

export default function Pathway() {
	const t = useTranslations('home.pathway')

	return (
		<section className="bg-neutral-900 relative">
			<div aria-hidden="true" className="absolute pointer-events-none top-0 right-2 -translate-y-1/2 flex gap-2">
				<div className="hidden lg:block w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
			</div>
			<div className="container mx-auto px-4 lg:px-16 py-24 lg:py-32">
				<div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
					<div className="">
						<ImgCubes />
					</div>

					<div className="lg:-order-1">
						<h2 className="font-medium text-sm text-[#1AAD81] lg:text-base">{t('category')}</h2>
						<h3 className={`font-source text-4xl leading-none lg:text-5xl text-tertiary-50 tracking-tight font-medium mt-4`}>{t('title')}</h3>
						<p className="mt-8 lg:text-lg font-light text-neutral-300">{t('paragraph-first')}</p>
						<p className="mt-4 lg:text-lg font-light text-neutral-300"><b>{t('paragraph-second-bold')}</b> {t('paragraph-second')}</p>
						<p className="mt-4 lg:text-lg font-light text-neutral-300"><b>{t('paragraph-third-bold')}</b> {t('paragraph-third')}</p>
						<ButtonSection route={ROUTES.CAMINO} text={t('button')} />
					</div>

				</div>
			</div>
		</section>
	)
}