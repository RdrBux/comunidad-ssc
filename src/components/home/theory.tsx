import { ROUTES } from "@/utils/constants";
import ButtonSection from "../button-section";
import { ImgNet } from "../svgs";
import { headers } from "next/headers";
import { useTranslations } from "next-intl";

export default function Theory() {
	const headersList = headers();
	const isInstagram = headersList.get('x-is-instagram') === 'true';

	const t = useTranslations('home.theory')

	return (
		<section className="bg-neutral-900 relative">
			<div aria-hidden="true" className="absolute pointer-events-none top-0 right-2 -translate-y-1/2 flex gap-2">
				<div className="hidden lg:block w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
			</div>
			<div className="container mx-auto px-4 lg:px-16 py-24 lg:py-32">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

					<div className="px-[80px] lg:px-24">
						<ImgNet />
					</div>

					<div className="lg:-order-1 mt-10 lg:mt-0">
						<h2 className="font-medium text-sm lg:text-base text-[#1AAD81]">{t('category')}</h2>
						<h3 className={`${isInstagram ? 'text-4xl' : 'text-[2.75rem]'} font-source leading-none lg:text-6xl text-tertiary-50 tracking-tight font-medium mt-4`}>{t('title')}</h3>
						<p className="mt-8 lg:text-lg font-light text-neutral-300">{t('paragraph-first')}</p>
						<p className="mt-4 lg:text-lg font-light text-neutral-300">{t('paragraph-second')}</p>
						<ButtonSection route={ROUTES.TEORIA} text={t('button')} />
					</div>

				</div>
			</div>
		</section>
	)
}