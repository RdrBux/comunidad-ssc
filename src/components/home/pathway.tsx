import ButtonSection from "../button-section";
import { ImgCubes } from "../svgs";

export default function Pathway() {
	return (
		<section className="bg-neutral-900 relative">
			<div aria-hidden="true" className="absolute pointer-events-none top-0 right-2 -translate-y-1/2 flex gap-2">
				<div className="hidden lg:block w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
				<div className="w-1 h-8 bg-neutral-950 -skew-x-12"></div>
			</div>
			<div className="container mx-auto px-4 lg:px-16 py-24 lg:py-32">
				<div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
					<div className="">
						<ImgCubes />
					</div>

					<div className="lg:-order-1">
						<h2 className="font-medium">EL CAMINO</h2>
						<h3 className="text-4xl xl:text-5xl tracking-tight font-semibold mt-6">¿Qué acciones permiten que nuestros proyectos, nuestra comunidad y sus miembros crezcan?</h3>
						<p className="mt-8 lg:text-lg font-light text-neutral-300">Se trata de construir escenarios concretos de crecimiento de la teoría y de las propuestas de intervención desde este nuevo paradigma. Un futuro mejor es posible y el Saber Supercomplejo quiere estar presente en el desarrollo de comprensiones y alternativas de acción para potencial el desarrollo institucional, personal y profesional y, con ello, brindar propuestas concretas para las grandes problemáticas sociales y planetarias.</p>
						<ButtonSection href="/camino" text="Leer sobre el camino" />
					</div>

				</div>
			</div>
		</section>
	)
}