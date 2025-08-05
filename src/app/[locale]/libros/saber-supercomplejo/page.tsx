import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import btnEsAmazon from '@/assets/buttons/btn-es-amazon.png'
import btnEnAmazon from '@/assets/buttons/btn-en-amazon.png'
import btnEsGoogle from "@/assets/buttons/btn-es-google.png"
import btnEnGoogle from "@/assets/buttons/btn-en-google.png"
import ssTapaEs from "@/assets/ss-tapa-es.jpg"
import ssTapaEn from "@/assets/ss-tapa-en.jpg"
import Image, { StaticImageData } from "next/image"
import PDFViewer from "@/components/pdf-viewer"
import { getLocale, getTranslations } from "next-intl/server"

export default async function Page() {
	const locale = await getLocale();
	const t = await getTranslations('libros');

	const imageMap: { [key: string]: StaticImageData } = {
		es: ssTapaEs,
		en: ssTapaEn,
	};

	const ssTapa = imageMap[locale];

	const btnGoogle = locale === 'en' ? btnEnGoogle : btnEsGoogle;
	const btnAmazon = locale === 'en' ? btnEnAmazon : btnEsAmazon;

	return (
		<>
			<Navbar style="light" />

			<main className="container max-w-4xl mx-auto px-4 py-28">

				<div className="flex flex-col lg:flex-row gap-12 items-center">
					<Image
						className="h-96 w-fit rounded"
						src={ssTapa}
						alt={t('books.saber-supercomplejo.title')}
					/>

					<div className="grid gap-4">
						<h2 className="font-source font-semibold text-4xl leading-none lg:text-5xl tracking-tighter">
							{t('books.saber-supercomplejo.title')}
						</h2>
						<p className="text-neutral-600 text-lg">
							{t('books.saber-supercomplejo.subtitle')}
						</p>
						<p className="text-neutral-600 text-lg">
							{locale === 'en' ? 'By' : 'Por'} <span className="font-semibold text-neutral-950">{t('books.saber-supercomplejo.author')}</span>
						</p>
						<div className="flex gap-4 flex-wrap mt-2">
							<a
								href="https://play.google.com/store/books/details/Supercomplex_Knowledge?id=I6ZtEQAAQBAJ"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={btnGoogle}
									alt={`Disponible en ${t('books.saber-supercomplejo.purchase.platforms.google-books')}`}
									className="h-12 w-fit shrink-0"
								/>
							</a>

							<a
								href="https://www.amazon.com/dp/B0FHG73VHN"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={btnAmazon}
									alt={`Disponible en ${t('books.saber-supercomplejo.purchase.platforms.amazon-kindle')}`}
									className="h-12 w-fit shrink-0"
								/>
							</a>
						</div>
					</div>
				</div>

				<hr className="my-12" />

				<div className="text-lg mt-12 text-neutral-800">
					<p>
						{t.rich('books.saber-supercomplejo.description.paragraph-first', {
							semibold: (chunks) => <span className="font-semibold">{chunks}</span>
						})}
					</p>

					<p className="mt-6">
						{t('books.saber-supercomplejo.description.paragraph-second')}
					</p>

					<ul className="list-inside marker:text-primary-500 list-disc mt-4">
						<li>{t.rich('books.saber-supercomplejo.description.key-axes.1', {
							semibold: (chunks) => <span className="font-semibold">{chunks}</span>
						})}</li>
						<li>{t.rich('books.saber-supercomplejo.description.key-axes.2', {
							semibold: (chunks) => <span className="font-semibold">{chunks}</span>
						})}</li>
						<li>{t.rich('books.saber-supercomplejo.description.key-axes.3', {
							semibold: (chunks) => <span className="font-semibold">{chunks}</span>
						})}</li>
					</ul>

					<p className="mt-6">
						{t('books.saber-supercomplejo.description.paragraph-third')}
					</p>

					<p className="mt-6">
						{t('books.saber-supercomplejo.description.paragraph-fourth')}
					</p>

					<p className="mt-6">
						{t.rich('books.saber-supercomplejo.description.paragraph-fifth', {
							semibold: (chunks) => <span className="font-semibold">{chunks}</span>
						})}
					</p>

					<p className="mt-6">
						{t.rich('books.saber-supercomplejo.description.paragraph-sixth', {
							semibold: (chunks) => <span className="font-semibold">{chunks}</span>
						})}
					</p>

					<p className="mt-6 italic">
						{t('books.saber-supercomplejo.description.paragraph-seventh')}
					</p>

					<p className="mt-6 p-8 rounded bg-primary-100 text-primary-900 font-medium">
						{t.rich('books.saber-supercomplejo.features.darwin-access', {
							bold: (chunks) => <span className="font-bold text-primary-950">{chunks}</span>
						})}
					</p>
				</div>

				<PDFViewer />

				<div className="p-8 lg:p-12 mt-12 rounded bg-primary-200 border flex flex-col gap-6 items-center">
					<h3 className="font-semibold tracking-tight leading-none font-source text-3xl lg:text-4xl text-center text-primary-950">
						{t('books.saber-supercomplejo.purchase.title')}
					</h3>
					<p className="text-primary-900 lg:text-lg text-center">
						{t.rich('books.saber-supercomplejo.purchase.description', {
							semibold: (chunks) => <span className="font-semibold">{chunks}</span>
						})}
					</p>
					<div className="flex gap-4 flex-wrap items-center justify-center">
						<a
							href="https://play.google.com/store/books/details/Supercomplex_Knowledge?id=I6ZtEQAAQBAJ"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={btnGoogle}
								alt={`${t('books.saber-supercomplejo.purchase.platforms.google-books')}`}
								className="h-12 w-fit shrink-0"
							/>
						</a>

						<a
							href="https://www.amazon.com/dp/B0FHG73VHN"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={btnAmazon}
								alt={`${t('books.saber-supercomplejo.purchase.platforms.amazon-kindle')}`}
								className="h-12 w-fit shrink-0"
							/>
						</a>
					</div>
				</div>

			</main>
			<Footer />
		</>
	)
}