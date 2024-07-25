import ContentLayout from "@/components/content-layout";
import Footer from "@/components/footer";
import NextRead from "@/components/next-read";
import SharePage from "@/components/share-page";
import { ImgSSC } from "@/components/svgs";
import Team from "@/components/team";
import { ROUTES } from "@/utils/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "La comunidad - Comunidad del Saber Supercomplejo",
};

export default function Comunidad() {
	return (
		<>
			<ContentLayout>
				<div className="grid relative">
					<div className="px-24 lg:absolute lg:pl-16 lg:pr-0 lg:w-80 lg:-right-56 lg:top-[55%] lg:-translate-y-1/2"><ImgSSC /></div>

					<div className="py-8 lg:py-20 lg:-order-1 w-fit">
						<h1 className="font-medium text-sm lg:text-base">LA COMUNIDAD</h1>
						<h2 className={`font-source text-4xl text-neutral-950 lg:text-6xl tracking-tight font-semibold mt-2`}>¿Qué es la Comunidad del SSC, qué objetivos tiene y qué beneficios tienen sus miembros?</h2>
					</div>

				</div>

				<div className="mt-16">
					<h3 className={`font-source text-3xl font-bold tracking-tight text-neutral-950`}>Quiénes somos</h3>
					<p className="mt-4">Somos una comunidad dedicada a la investigación y desarrollo del paradigma del Saber Supercomplejo como una herramienta poderosa para entender y transformar la realidad multidimensional que nos rodea.</p>
					<p className="mt-8">Nuestro Programa de Asistencia y Desarrollo está pensado para atender demandas de crecimiento y potenciación de administraciones de gobierno, empresas e instituciones interesadas en mejorar en el cumplimiento de sus funciones y objetivos. Las posibilidades de implementación del Programa son múltiples, a modo de ejemplo: sistemas de protección de recursos naturales; descubrimiento de nuevos elementos químicos y sus combinatorias; desarrollo astronómico y climatológico; diseño de fuentes de energía alternativas; atención a problemáticas sociales como el desarrollo de sistemas de salud, educativos, de justicia; estrategias de lucha contra la desnutrición, las enfermedades, la corrupción o el narcotráfico; potenciamiento de sistemas de producción y ventas en instituciones industriales y comerciales.</p>
					<p className="mt-8">Esta propuesta surge luego de años de trabajo y estudio por parte del docente e investigador Dr. Juan Pedro Rodríguez, movido por la inquietud de ofrecer una teoría integradora y superadora del Pensamiento Complejo y las Ciencias de la Complejidad que permita, además de un desarrolló teórico, su aplicación práctica y metodológica.</p>

					<Team />

					<h4 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>Misión</h4>
					<p className="mt-4">Investigar, desarrollar y promover el Saber Supercomplejo como una alternativa integradora y superadora del Pensamiento Complejo y las Ciencias de la Complejidad. Nos proponemos generar comprensiones integrales y estrategias de intervención efectivas para abordar distintas problemáticas en los ámbitos institucionales, organizacionales y sociales.</p>

					<h4 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>Visión</h4>
					<p className="mt-4">Expandir la propuesta del Saber Supercomplejo y su capacidad para ofrecer soluciones en diferentes ámbitos de la praxis social. Aspiramos a constituirnos como una referencia nacional e internacional a partir de una propuesta original y con apertura para integrar nuevas miradas. Un futuro mejor es posible y el Saber Supercomplejo quiere estar presente en el desarrollo de herramientas de acción para dar respuesta a problemáticas sociales y planetarias.</p>

					<h4 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>Valores</h4>
					<ul className="list-disc flex flex-col gap-2 mt-4 pl-6">
						<li><span className="font-semibold">Libertad de Pensamiento:</span> Fomentamos la diversidad de ideas para desarrollar comprensiones profundas y complejas.</li>
						<li><span className="font-semibold">Trabajo en Equipo:</span> Creemos en la colaboración multidisciplinaria como clave para el avance del Saber Supercomplejo.</li>
						<li><span className="font-semibold">Resolución de Conflictos:</span> Desarrollamos metodologías para abordar conflictos complejos de manera constructiva.</li>
						<li><span className="font-semibold">Transparencia:</span> Mantenemos una comunicación abierta y honesta con todos nuestros miembros y colaboradores.</li>
					</ul>

					<h4 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>Qué Ofrecemos a Nuestros Miembros</h4>
					<ul className="list-disc flex flex-col gap-2 mt-4 pl-6">
						<li><span className="font-semibold">Participación Activa:</span> formar parte del equipo de investigación y difusión del SSC.</li>
						<li><span className="font-semibold">Desarrollo Profesional:</span> oportunidades para ser desarrolladores en el “Supercomplex Program”.</li>
						<li><span className="font-semibold">Formación Continua:</span> capacitación constante con énfasis en el campo profesional o laboral del miembro.</li>
						<li><span className="font-semibold">Reconocimiento Académico:</span> certificaciones y reconocimiento por la pertenencia a la comunidad.</li>
						<li><span className="font-semibold">Publicaciones:</span> oportunidad de publicar libros bajo nuestro sello editorial y artículos en nuestra página web.</li>
						<li><span className="font-semibold">Eventos:</span> organización de congresos y encuentros de trabajo con instituciones afines.</li>
						<li><span className="font-semibold">Team Building:</span> Participación en campamentos de integración y desarrollo de equipo.</li>
					</ul>

					<h4 className={`font-source mt-12 text-3xl font-bold tracking-tight text-neutral-950`}>Qué Ofrecemos a Instituciones</h4>
					<ul className="list-disc flex flex-col gap-2 mt-4 pl-6">
						<li><span className="font-semibold">Programas de Intervención:</span> implementación del “Supercomplex Program” con el software “Supercomplex Systems Developer”.</li>
						<li><span className="font-semibold">Capacitación:</span> cursos específicos para profesionales y emprendedores sobre el SSC, adaptados a diversas áreas y problemáticas.</li>
					</ul>
				</div>

				<div className="mt-16"><SharePage url='https://sabersupercomplejo.com/comunidad' text='La comunidad - Comunidad del Saber Supercomplejo' /></div>

			</ContentLayout>

			<NextRead>
				<h5 className={`font-source font-semibold tracking-tight text-4xl lg:text-5xl`}>Continuar leyendo</h5>
				<div className="mt-4 flex gap-4">
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-md border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.TEORIA}>La teoría</Link>
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-md border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.CAMINO}>El camino</Link>
				</div>
			</NextRead>

			<Footer />
		</>
	);
}