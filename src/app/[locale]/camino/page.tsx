import ContentLayout from "@/components/content-layout";
import Footer from "@/components/footer";
import NextRead from "@/components/next-read";
import SharePage from "@/components/share-page";
import { ImgCubes } from "@/components/svgs";
import { ROUTES } from "@/utils/constants";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
	title: "El camino - Comunidad del Saber Supercomplejo",
};

export default function Camino() {
	const tHome = useTranslations('home.pathway');
	const tName = useTranslations();
	const tSection = useTranslations('sections');
	const tNav = useTranslations('navigation');
	const t = useTranslations('pathway');

	return (
		<>
			<ContentLayout>
				<div className="grid relative mt-4">
					<div className="lg:absolute lg:w-[460px] lg:-right-[58%] lg:top-[65%] lg:-translate-y-1/2"><ImgCubes /></div>

					<div className="lg:py-20 lg:-order-1 w-fit">
						<h1 className="font-medium text-sm lg:text-base">{tHome('category')}</h1>
						<h2 className={`font-source text-4xl text-neutral-950 lg:text-6xl tracking-tight font-semibold mt-2`}>{tHome('title')}</h2>
					</div>

				</div>

				<div className="mt-24 lg:mt-12 flex flex-col gap-4">

					<h3 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>
						{t('title')}
					</h3>

					<h4 className={`font-source mt-6 text-2xl text-neutral-950 font-bold`}>{t('2024.july.title')}</h4>

					<ul className="list-disc flex flex-col gap-4 mt-2 pl-6">
						<li><span className="font-semibold">{t('2024.july.bullets.1.name')}:</span> {t('2024.july.bullets.1.description')}</li>
						<li><span className="font-semibold">{t('2024.july.bullets.2.name')}:</span> {t('2024.july.bullets.2.description')}</li>
					</ul>

					<h4 className={`font-source mt-6 text-2xl text-neutral-950 font-bold`}>{t('2024.october.title')}</h4>

					<ul className="list-disc flex flex-col gap-4 mt-2 pl-6">
						<li><span className="font-semibold">{t('2024.october.bullets.1.name')}:</span> {t('2024.october.bullets.1.description')}</li>
						<li><span className="font-semibold">{t('2024.october.bullets.2.name')}:</span> {t('2024.october.bullets.2.description')}</li>
					</ul>

					<h4 className={`font-source mt-6 text-2xl text-neutral-950 font-bold`}>{t('2024.november.title')}</h4>

					<ul className="list-disc flex flex-col gap-4 mt-2 pl-6">
						<li>{t('2024.november.bullets.1.description')}</li>
						<li>{t('2024.november.bullets.2.description')}</li>
						<li>{t('2024.november.bullets.3.description')}</li>
					</ul>

					<h4 className={`font-source mt-6 text-2xl text-neutral-950 font-bold`}>{t('2024.december.title')}</h4>

					<ul className="list-disc flex flex-col gap-4 mt-2 pl-6">
						<li>{t('2024.december.bullets.1.description')}</li>
					</ul>
				</div>

				<div className="mt-16"><SharePage url='https://sabersupercomplejo.com/camino' text={`${tNav('camino')} - ${tName('name')}`} /></div>

			</ContentLayout>

			<NextRead>
				<h5 className={`font-source font-semibold tracking-tight text-4xl lg:text-5xl`}>{tSection('read-next')}</h5>
				<div className="mt-4 flex gap-4">
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-md border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.TEORIA}>{tNav('teoria')}</Link>
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-md border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.COMUNIDAD}>{tNav('comunidad')}</Link>
				</div>
			</NextRead>

			<Footer />
		</>
	)
}