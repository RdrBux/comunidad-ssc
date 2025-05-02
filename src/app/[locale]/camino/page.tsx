import ContentLayout from "@/components/content-layout";
import Footer from "@/components/footer";
import NextRead from "@/components/next-read";
import SharePage from "@/components/share-page";
import { ImgCubes } from "@/components/svgs";
import { ROUTES } from "@/utils/constants";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {

	const t = await getTranslations('namespace')

	return {
		title: t('camino'),
	}
}

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

					<h3 className={`font-source mt-12 text-3xl lg:text-4xl font-bold tracking-tight text-neutral-950`}>
						{t('title')}
					</h3>

					<div>
						<h4 className={`font-source mt-9 text-2xl text-neutral-950 font-bold`}>{t('ssc.title')}</h4>

						<p className="mt-4">{t('ssc.paragraph-first')}</p>
						<p className="mt-2">{t('ssc.paragraph-second')}</p>

						<h5 className={`font-source mt-9 text-xl text-neutral-950 font-bold`}>{t('ssc.bullets.title')}</h5>

						<ul className="list-disc flex flex-col gap-4 mt-4 pl-6">
							<li>
								<p className="font-semibold">{t('ssc.bullets.1.title')}:</p>
								<p>{t('ssc.bullets.1.description')}</p>
							</li>
							<li>
								<p className="font-semibold">{t('ssc.bullets.2.title')}:</p>
								<p>{t('ssc.bullets.2.description-first')}</p>
								<p>{t('ssc.bullets.2.description-second')}</p>
							</li>
							<li>
								<p className="font-semibold">{t('ssc.bullets.3.title')}:</p>
								<p>{t('ssc.bullets.3.description-first')}</p>
								<p>{t('ssc.bullets.3.description-second')}</p>
							</li>
							<li>
								<p className="font-semibold">{t('ssc.bullets.4.title')}:</p>
								<p>{t('ssc.bullets.4.description-first')}</p>
								<p>{t('ssc.bullets.4.description-second')}</p>
							</li>
							<li>
								<p className="font-semibold">{t('ssc.bullets.5.title')}:</p>
								<p>{t('ssc.bullets.5.description')}</p>
							</li>
						</ul>
					</div>

					<div>
						<h4 className={`font-source mt-16 text-2xl text-neutral-950 font-bold`}>{t('coenerg.title')}</h4>

						<p className="mt-4">{t('coenerg.paragraph-first')}</p>
						<p className="mt-2">{t('coenerg.paragraph-second')}</p>
						<p className="mt-2">{t('coenerg.paragraph-third')}</p>

						<ul className="list-disc flex flex-col gap-2 mt-2 pl-6">
							<li>
								{t('coenerg.bullets.1')}
							</li>
							<li>
								{t('coenerg.bullets.2')}
							</li><li>
								{t('coenerg.bullets.3')}
							</li>
						</ul>

						<p className="mt-4">{t('coenerg.paragraph-fourth')}</p>
					</div>

					<div>
						<h4 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>{t('why-us.title')}</h4>
						<p className="mt-4">{t('why-us.paragraph-first')}</p>
						<p className="mt-2"><span className="font-semibold">{t('why-us.paragraph-second')}</span></p>
					</div>

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