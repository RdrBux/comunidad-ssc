import { ROUTES } from "@/utils/constants";
import ButtonSection from "../button-section";
import { ImgNet } from "../svgs";

export default function Theory() {

	return (
		<section className="bg-neutral-900 relative">
			<div aria-hidden="true" className="absolute pointer-events-none top-0 right-2 -translate-y-1/2 flex gap-2">
				<div className="hidden lg:block w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="hidden lg:block w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
				<div className="w-1 h-8 bg-secondary-700 -skew-x-12"></div>
			</div>
			<div className="container mx-auto px-4 lg:px-16 py-24 lg:py-32">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

					<div className="px-24">
						<ImgNet />
					</div>

					<div className="lg:-order-1">
						<h2 className="font-medium">LA TEORÍA</h2>
						<h3 className="text-4xl lg:text-5xl tracking-tight font-semibold mt-6">¿Qué es el Saber Supercomplejo?</h3>
						<p className="mt-8 lg:text-lg font-light text-neutral-300">Se trata de una propuesta paradigmática integradora y superadora del Pensamiento Complejo y de las Ciencias de la Complejidad, redefiniendo su objeto de estudio, es decir, los sistemas complejos, en la interrelación de sus componentes fundamentales: los flujos de energía, las morfologías estructurales y la conectividad temporal. </p>
						<p className="mt-4 lg:text-lg font-light text-neutral-300">El SSC propone una reconfiguración de suprasistemas (micropartículas, macroscópico y biológico) que se superponen y articulan desde la supercomplejidad del universo y de la vida. También postula una metodología de descripción, predicción e intervención que construye y vincula mapas y algoritmos como herramientas para descubrir, entender y manipular las dinámicas y estructuras de sistemas complejos.</p>
						<ButtonSection route={ROUTES.TEORIA} text="Leer la teoria" />
					</div>

				</div>
			</div>
		</section>
	)
}