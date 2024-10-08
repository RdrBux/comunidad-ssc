import { headers } from "next/headers";
import { BgHero } from "../svgs";
import { useTranslations } from "next-intl";

export default function Hero() {
	const headersList = headers();
	const isInstagram = headersList.get('x-is-instagram') === 'true';

	const t = useTranslations('home.hero')

	return (
		<section className="bg-gradient-to-b from-[#0a4a3a] to-[#0b5a46] relative">
			<div aria-hidden className="absolute inset-0 overflow-hidden">
				<BgHero className="h-screen lg:h-auto -translate-x-[45%] translate-y-[50%] lg:translate-x-[18%] lg:translate-y-[2%] opacity-50" />
			</div>
			<div aria-hidden className="absolute inset-0 overflow-hidden">
				<BgHero className="opacity-25 h-screen lg:h-auto -rotate-[165deg] -translate-x-[60%] -translate-y-[40%]" />
			</div>
			<div className="container flex flex-col justify-center gap-8 mx-auto px-4 lg:px-16 py-20 lg:py-40 min-h-[80vh] relative">
				<div className="relative z-10">
					<h1 className={`${isInstagram ? 'text-[9vw]' : 'text-[12.25vw]'} font-source text-[12.25vw] lg:text-[5.5rem] tracking-tighter font-medium leading-[0.9]`}>
						{t('title.1')} <br /> {t('title.2')} <br /> {t('title.3')}
					</h1>
					<div className="border-l-8 border-neutral-900/40 pl-4 mt-12">
						<p className="max-w-lg text-neutral-300 text-lg lg:text-2xl font-light">{t('description')}</p>
					</div>
				</div>
			</div>
		</section>
	)
}