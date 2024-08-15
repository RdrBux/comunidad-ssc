import { headers } from "next/headers";
import { BgHero } from "../svgs";

export default function Hero() {
	const headersList = headers();
	const isInstagram = headersList.get('x-is-instagram') === 'true';

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
						Comunidad <br /> del Saber <br /> Supercomplejo
					</h1>
					<div className="border-l-8 border-neutral-900/40 pl-4 mt-12">
						<p className="max-w-lg text-neutral-300 text-lg lg:text-2xl font-light">“Un nuevo paradigma filosófico, científico y tecnológico ante la complejidad del universo y de la vida”</p>
					</div>
				</div>

				<div className="absolute inset-0 w-full h-full">


					{/* <div className="w-0 border-l-2 border-dashed border-neutral-900/30 h-full absolute right-4"></div>
					<div className="w-0 border-l-2 border-dashed border-neutral-900/30 h-full absolute right-12"></div>
					<div className="w-0 border-l-2 border-dashed border-neutral-900/30 h-full absolute right-20"></div>
					<div className="h-0 border-t-2 border-dashed border-neutral-900/30 w-full absolute bottom-8"></div>
					<div className="h-0 border-t-2 border-dashed border-neutral-900/30 w-full absolute bottom-16"></div>
					<div className="h-0 border-t-2 border-dashed border-neutral-900/30 w-full absolute bottom-24"></div> */}
				</div>
			</div>
		</section>
	)
}