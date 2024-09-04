import ContentLayout from "@/components/content-layout";
import Footer from "@/components/footer";
import NextRead from "@/components/next-read";
import SharePage from "@/components/share-page";
import { ImgNet } from "@/components/svgs";
import { ROUTES } from "@/utils/constants";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
	title: "La teoría - Comunidad del Saber Supercomplejo",
};

export default function Teoria() {
	const tHome = useTranslations('home.theory');
	const tName = useTranslations();
	const tSection = useTranslations('sections');
	const tNav = useTranslations('navigation');
	const t = useTranslations('theory');

	return (
		<>
			<ContentLayout>
				<div className="grid relative">
					<div className="px-24 lg:absolute lg:px-12 lg:w-96 lg:-right-52 lg:top-1/2 lg:-translate-y-1/2"><ImgNet /></div>

					<div className="py-12 lg:py-20 lg:-order-1 w-fit">
						<h1 className="font-medium text-sm lg:text-base">{tHome('category')}</h1>
						<h2 className={`font-source text-5xl lg:text-6xl lg:max-w-[540px] text-neutral-950 tracking-tight font-semibold mt-2`}>{tHome('title')}</h2>
					</div>

				</div>

				<div className="lg:mt-16">
					<p>
						{t('section-first.paragraph-first')}
					</p>

					<p className="mt-8">
						{t('section-first.paragraph-second')}
					</p>

					<p className="mt-8">
						{t('section-first.paragraph-third')}
					</p>

					<h3 className={`font-source mt-12 text-4xl font-bold tracking-tight text-neutral-950`}>{t('section-second.title')}</h3>

					<p className="mt-4">
						{t('section-second.paragraph-first')}<span className="font-semibold">{t('section-second.paragraph-first-strong')}</span>
					</p>

					<h4 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>{t('object.title')}</h4>

					<p className="mt-4">
						{t('object.content')}
					</p>

					<div className="mt-12">
						<h4 className={`font-source text-3xl font-bold tracking-tight text-neutral-950`}>{t('principles.title')}</h4>

						<ul className="list-disc flex flex-col gap-4 mt-4 pl-6">
							<li>{t('principles.bullets.1')}</li>
							<li>{t('principles.bullets.2')}</li>
							<li>{t('principles.bullets.3')}</li>
							<li>{t('principles.bullets.4')}</li>
							<li>{t('principles.bullets.5')}</li>
						</ul>
					</div>
				</div>

				<div className="mt-16"><SharePage url='https://sabersupercomplejo.com/teoria' text={`${tNav('teoria')} - ${tName('name')}`} /></div>

			</ContentLayout>

			<NextRead>
				<h5 className={`font-source font-semibold tracking-tight text-4xl lg:text-5xl`}>{tSection('read-next')}</h5>
				<div className="mt-4 flex gap-4">
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-md border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.COMUNIDAD}>{tNav('comunidad')}</Link>
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-md border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.CAMINO}>{tNav('camino')}</Link>
				</div>
			</NextRead>

			<Footer />
		</>
	);
}