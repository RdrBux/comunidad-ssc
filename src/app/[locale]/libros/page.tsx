import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ssTapa from "@/assets/ss-tapa-es.jpg"
import Image from "next/image";

export default function Page() {
	const t = useTranslations('libros');

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
								<h2 className="font-source font-semibold text-3xl tracking-tighter leading-tight">Saber Supercomplejo</h2>
								<p className="text-neutral-600">El nuevo paradigma emergente ante la complejidad del universo, la vida y el cerebro humano</p>
								<p className="text-neutral-600">Por <span className="font-semibold text-neutral-950">Juan Pedro Rodríguez</span></p>
								<Button className="w-fit mt-4">Conseguilo</Button>
							</div>
						</article>
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	)
}