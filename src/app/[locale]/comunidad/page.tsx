import ContentLayout from "@/components/content-layout";
import Footer from "@/components/footer";
import NextRead from "@/components/next-read";
import SharePage from "@/components/share-page";
import { ImgSSC } from "@/components/svgs";
import Team from "@/components/team";
import { ROUTES } from "@/utils/constants";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const metadata: Metadata = {
	title: "La comunidad - Comunidad del Saber Supercomplejo",
};

export default function Comunidad() {
	const tHome = useTranslations('home.community');
	const tName = useTranslations();
	const tSection = useTranslations('sections');
	const tNav = useTranslations('navigation');
	const t = useTranslations('community');

	return (
		<>
			<ContentLayout>
				<div className="grid relative">
					<div className="px-24 lg:absolute lg:pl-16 lg:pr-0 lg:w-80 lg:-right-56 lg:top-[55%] lg:-translate-y-1/2"><ImgSSC /></div>

					<div className="py-8 lg:py-20 lg:-order-1 w-fit">
						<h1 className="font-medium text-sm lg:text-base">{tHome('category')}</h1>
						<h2 className={`font-source text-4xl text-neutral-950 lg:text-6xl lg:max-w-[600px] tracking-tight font-semibold mt-2`}>{tHome('title')}</h2>
					</div>

				</div>

				<div className="mt-16">
					<h3 className={`font-source text-3xl font-bold tracking-tight text-neutral-950`}>{t('about.title')}</h3>
					<p className="mt-4">{t('about.paragraph-first')}</p>
					<p className="mt-8">{t('about.paragraph-second')}</p>
					<p className="mt-8">{t('about.paragraph-third')}</p>

					<Team />

					<h4 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>{t('mission.title')}</h4>
					<p className="mt-4">{t('mission.description')}</p>

					<h4 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>{t('vision.title')}</h4>
					<p className="mt-4">{t('vision.description')}</p>

					<h4 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>{t('values.title')}</h4>
					<ul className="list-disc flex flex-col gap-2 mt-4 pl-6">
						<li><span className="font-semibold">{t('values.bullets.1.name')}:</span> {t('values.bullets.1.description')}</li>
						<li><span className="font-semibold">{t('values.bullets.2.name')}:</span> {t('values.bullets.2.description')}</li>
						<li><span className="font-semibold">{t('values.bullets.3.name')}:</span> {t('values.bullets.3.description')}</li>
						<li><span className="font-semibold">{t('values.bullets.4.name')}:</span> {t('values.bullets.4.description')}</li>
					</ul>

					<h4 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>{t('benefits-members.title')}</h4>
					<ul className="list-disc flex flex-col gap-2 mt-4 pl-6">
						<li><span className="font-semibold">{t('benefits-members.bullets.1.name')}:</span> {t('benefits-members.bullets.1.description')}</li>
						<li><span className="font-semibold">{t('benefits-members.bullets.2.name')}:</span> {t('benefits-members.bullets.2.description')}</li>
						<li><span className="font-semibold">{t('benefits-members.bullets.3.name')}:</span> {t('benefits-members.bullets.3.description')}</li>
						<li><span className="font-semibold">{t('benefits-members.bullets.4.name')}:</span> {t('benefits-members.bullets.4.description')}</li>
						<li><span className="font-semibold">{t('benefits-members.bullets.5.name')}:</span> {t('benefits-members.bullets.5.description')}</li>
						<li><span className="font-semibold">{t('benefits-members.bullets.6.name')}:</span> {t('benefits-members.bullets.6.description')}</li>
						<li><span className="font-semibold">{t('benefits-members.bullets.7.name')}:</span> {t('benefits-members.bullets.7.description')}</li>
					</ul>

					<h4 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>{t('benefits-institutions.title')}</h4>
					<ul className="list-disc flex flex-col gap-2 mt-4 pl-6">
						<li><span className="font-semibold">{t('benefits-institutions.bullets.1.name')}:</span> {t('benefits-institutions.bullets.1.description')}</li>
						<li><span className="font-semibold">{t('benefits-institutions.bullets.2.name')}:</span> {t('benefits-institutions.bullets.2.description')}</li>
					</ul>
				</div>

				<div className="mt-16"><SharePage url='https://sabersupercomplejo.com/comunidad' text={`${tNav('comunidad')} - ${tName('name')}`} /></div>

			</ContentLayout>

			<NextRead>
				<h5 className={`font-source font-semibold tracking-tight text-4xl lg:text-5xl`}>{tSection('read-next')}</h5>
				<div className="mt-4 flex gap-4">
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-md border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.TEORIA}>{tNav('teoria')}</Link>
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-md border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.CAMINO}>{tNav('camino')}</Link>
				</div>
			</NextRead>

			<Footer />
		</>
	);
}