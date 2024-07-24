import { ROUTES } from "@/utils/constants";
import ButtonSection from "../button-section";
import { ImgSSC } from "../svgs";

export default function Community() {
	return (
		<section className="bg-neutral-800">
			<div className="container mx-auto px-4 lg:px-16 py-24 lg:py-32">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="lg:ml-20 2xl:ml-32 mx-24">
						<ImgSSC />
					</div>

					<div className="lg:-order-1">
						<h2 className="font-medium">LA COMUNIDAD</h2>
						<h3 className="text-4xl xl:text-5xl tracking-tight font-semibold mt-6">¿Qué es la Comunidad del SSC, qué objetivos tiene y qué beneficios tienen sus miembros?</h3>
						<p className="mt-8 lg:text-lg font-light text-neutral-300">Somos un equipo de investigación y desarrollo que tenemos el objetivo de instalar este paradigma como alternativo e integrador, generando comprensiones integrales y multidimensionales de la realidad y estrategias de intervención superadoras de problemáticas sociales y planetarias emergentes.</p>
						<p className="mt-4 lg:text-lg font-light text-neutral-300">El <span className="font-semibold">Programa de Intervención y Desarrollo</span> está pensado para atender demandas de crecimiento y potenciación de administraciones de gobierno, empresas e instituciones interesadas en mejorar el cumplimiento de sus funciones y objetivos.</p>
						<ButtonSection route={ROUTES.COMUNIDAD} text="Leer sobre la comunidad" />
					</div>

				</div>
			</div>
		</section>
	)
}