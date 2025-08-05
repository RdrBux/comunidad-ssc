import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ssTapaEs from "@/assets/ss-tapa-es.jpg"
import ssTapaEn from "@/assets/ss-tapa-en.jpg"
import Image, { StaticImageData } from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Page() {
	const locale = await getLocale();

	const t = await getTranslations('libros');

	const imageMap: { [key: string]: StaticImageData } = {
		es: ssTapaEs,
		en: ssTapaEn,
	};

	const ssTapa = imageMap[locale];

	return (
		<div>
			<Navbar style="light" />
			<main className="container mx-auto px-4 lg:px-16 py-24 max-w-4xl text-neutral-950">
				<h2 className={`font-source text-4xl text-neutral-950 tracking-tight font-semibold mt-2`}>{t('title')}</h2>
				<div className="mt-8 grid gap-4">
					<Link href="/libros/saber-supercomplejo">
						<article className="flex flex-col lg:flex-row gap-8 items-center p-4 rounded border">
							<Image className="h-80 w-fit rounded" src={ssTapa} alt="Libro Saber Supercomplejo" />
							<div className="grid gap-2">
								<h2 className="font-source font-semibold text-3xl tracking-tighter leading-tight">{t('books.saber-supercomplejo.title')}</h2>
								<p className="text-neutral-600">{t('books.saber-supercomplejo.subtitle')}</p>
								<p className="text-neutral-600">{locale === 'en' ? 'By' : 'Por'} <span className="font-semibold text-neutral-950">{t('books.saber-supercomplejo.author')}</span></p>
								<Button className="w-fit mt-4">{locale === 'en' ? 'Get it' : 'Conseguilo'}</Button>
							</div>
						</article>
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	)
}