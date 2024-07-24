import ContentLayout from "@/components/content-layout";
import Footer from "@/components/footer";
import NextRead from "@/components/next-read";
import SharePage from "@/components/share-page";
import { ImgCubes } from "@/components/svgs";
import { ROUTES } from "@/utils/constants";
import Link from "next/link";

export default function Camino() {
	return (
		<>
			<ContentLayout>
				<div className="grid relative mt-4">
					<div className="lg:absolute lg:w-[460px] lg:-right-[58%] lg:top-[65%] lg:-translate-y-1/2"><ImgCubes /></div>

					<div className="lg:py-20 lg:-order-1 w-fit">
						<h1 className="font-medium lg:text-lg">EL CAMINO</h1>
						<h2 className="text-4xl text-neutral-950 lg:text-6xl tracking-tight font-semibold mt-2">¿Qué acciones permiten que nuestros proyectos, nuestra comunidad y sus miembros crezcan?</h2>
					</div>

				</div>

				<div className="mt-24 lg:mt-12 flex flex-col gap-4">

					<h3 className="text-2xl text-neutral-950 font-semibold tracking-tight">
						CRONOGRAMA DE EVENTOS PARA EL PRESENTE AÑO
					</h3>

					<h4 className="mt-6 text-xl text-neutral-950 font-semibold">Julio del 2024</h4>

					<ul className="list-disc flex flex-col gap-4 mt-2 pl-6">
						<li><span className="font-semibold">Lanzamiento de la Comunidad:</span> la Comunidad del Saber Supercomplejo es un equipo de investigación y desarrollo cuyo objetivo es instalar este paradigma como alternativo e integrador, generando comprensiones integrales y multidimensionales de la realidad y estrategias de intervención superadoras de problemáticas sociales y planetarias emergentes. Se hace la presentación del Programa de Intervención y Desarrollo SuperComplex Program y del software SuperComplex Systems Developer, diseñados para analizar e intervenir en sistemas de alta complejidad.</li>
						<li><span className="font-semibold">Presentación del libro:</span> el libro es nuestra primera presentación en sociedad. Se trata de un libro que pretende revolucionar el escenario de la ciencia, la filosofía y la tecnología actuales. El Saber Supercomplejo representa la construcción de un paradigma que intenta integrar y superar al Pensamiento Complejo y a las Ciencias de la Complejidad, comenzando por la redefinición de su objeto de estudio, postulando una nueva gnoseología de base (el constructivismo complejo) y una reconfiguración de los componentes de los sistemas complejos (flujos de energía, morfologías estructurales y conectividad temporal en interacción). Articulando, de esta manera, una taxonomía completa de los macrosistemas micropartículas, macroscópicos y biológicos con sus respectivos solapamientos, generadores de comportamientos realmente increíbles y muy poco tenidos en cuenta. Se propone, además, una relectura del espacio y el tiempo en clave de supercomplejidad; una metodología de descripción que articula lo matemático, lo informático y lo conceptual.  Se postula, también, una revisión de las categorías antropológicas actuales postulando el advenimiento del “Homo Supercomplexus” en esta nueva era del Antropoceno y el Tecnoceno. </li>
					</ul>

					<h4 className="mt-8 text-xl text-neutral-950 font-semibold">Octubre del 2024</h4>

					<ul className="list-disc flex flex-col gap-4 mt-2 pl-6">
						<li><span className="font-semibold">Curso &quot;Decodificando la Complejidad desde el Saber Supercomplejo&quot;:</span> el formato es de cuatro encuentros en vivo on-line de dos horas con cupos reducidos y dos encuentros extras para formular interrogantes, aportes o consultas sobre la publicación (optativo) Se incluye material y los miembros de la Comunidad del Saber Supercomplejo lo tienen bonificado. Se otorgarán certificados de asistencia para este curso y de aprobación (80 horas) (optativo) para quienes presenten un artículo, el que surgirá de la interacción del participante con los responsables y el que será publicado en nuestra página web.</li>
						<li><span className="font-semibold">Nuestro segundo libro:</span> comenzaremos a trabajar en nuestro segundo libro.</li>
					</ul>

					<h4 className="mt-8 text-xl text-neutral-950 font-semibold">Noviembre del 2024</h4>

					<ul className="list-disc flex flex-col gap-4 mt-2 pl-6">
						<li>Publicación del libro sobre Saber Supercomplejo en redes internacionales y traducido a varios idiomas. </li>
						<li>Participación en congresos internacionales. </li>
						<li>Preparación de artículos para revistas científicas internacionales. </li>
					</ul>

					<h4 className="mt-8 text-xl text-neutral-950 font-semibold">Diciembre del 2024</h4>

					<ul className="list-disc flex flex-col gap-4 mt-2 pl-6">
						<li>Primer campamento (team building) de la CSS. </li>
					</ul>
				</div>

				<div className="mt-16"><SharePage url='https://sabersupercomplejo.com/camino' text='Saber Supercomplejo - El Camino' /></div>

			</ContentLayout>

			<NextRead>
				<h5 className="font-semibold tracking-tight text-4xl lg:text-5xl">Continuar leyendo</h5>
				<div className="mt-4 flex gap-4">
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-md border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.TEORIA}>La teoría</Link>
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-md border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.COMUNIDAD}>La comunidad</Link>
				</div>
			</NextRead>

			<Footer />
		</>
	)
}