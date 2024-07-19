import ContentLayout from "@/components/content-layout";
import Footer from "@/components/footer";
import NextRead from "@/components/next-read";
import SharePage from "@/components/share-page";
import { ImgSSC } from "@/components/svgs";
import { ROUTES } from "@/utils/constants";
import Link from "next/link";

export default function Actores() {
	return (
		<>
			<ContentLayout>
				<div className="grid relative">
					<div className="px-24 lg:absolute lg:pl-16 lg:pr-0 lg:w-80 lg:-right-56 lg:top-[55%] lg:-translate-y-1/2"><ImgSSC /></div>

					<div className="py-12 lg:py-20 lg:-order-1 w-fit">
						<h1 className="font-medium lg:text-lg">LOS ACTORES</h1>
						<h2 className="text-4xl text-neutral-950 lg:text-6xl tracking-tight font-semibold mt-2">¿Qué es la Comunidad del SSC, qué objetivos tiene y qué beneficios tienen sus miembros?</h2>
					</div>

				</div>

				<div className="lg:mt-16 flex flex-col gap-4">
					<p>
						La Comunidad del Saber Supercomplejo es un equipo de investigación y desarrollo cuyo objetivo es instalar al Saber Supercomplejo como teoría alternativa y superadora, generando de comprensiones integrales y multidimensionales de la realidad y estrategias de intervención superadoras de problemáticas sociales y planetarias emergentes.
					</p>
					<p>
						Su Programa de Asistencia y Desarrollo está pensado para atender demandas de crecimiento y potenciación de administraciones de gobierno, empresas e instituciones interesadas en mejorar en el cumplimiento de sus funciones y objetivos. Las posibilidades de implementación del Programa son múltiples, a modo de ejemplo: sistemas de protección de recursos naturales; descubrimiento de nuevos elementos químicos y sus combinatorias; desarrollo astronómico y climatológico; diseño de fuentes de energía alternativas; atención a problemáticas sociales como el desarrollo de sistemas de salud, educativos, de justicia; estrategias de lucha contra la desnutrición, las enfermedades, la corrupción o el narcotráfico; potenciamiento de sistemas de producción y ventas en instituciones industriales y comerciales. Estás invitado a sumarte a nuestra Comunidad. La membresía, por tiempo limitado, es gratuita.
					</p>

					<h3 className="mt-12 text-neutral-950 text-3xl font-semibold">
						Quiénes somos
					</h3>
					<p>???</p>

					<h3 className="mt-12 text-neutral-950 text-3xl font-semibold">Qué Ofrecemos a Nuestros Miembros</h3>

					<ul className="list-disc flex flex-col gap-2 mt-2 pl-6">
						<li><b>Participación Activa:</b> formar parte del equipo de investigación y difusión del SSC.</li>
						<li><b>Desarrollo Profesional:</b> oportunidades para ser desarrolladores en el “Supercomplex Program”.</li>
						<li><b>Formación Continua:</b> capacitación constante con énfasis en el campo profesional o laboral del miembro.</li>
						<li><b>Reconocimiento Académico:</b> certificaciones y reconocimiento por la pertenencia a la comunidad.</li>
						<li><b>Publicaciones:</b> oportunidad de publicar libros bajo nuestro sello editorial y artículos en nuestra página web.</li>
						<li><b>Eventos:</b> organización de congresos y encuentros de trabajo con instituciones afines.</li>
						<li><b>Team Building:</b> Participación en campamentos de integración y desarrollo de equipo.</li>
					</ul>

					<h3 className="mt-12 text-neutral-950 text-3xl font-semibold">Qué Ofrecemos a Instituciones</h3>

					<ul className="list-disc flex flex-col gap-2 mt-2 pl-6">
						<li><b>Programas de Intervención:</b> implementación del “Supercomplex Program” con el software “Supercomplex Systems Developer”.</li>
						<li><b>Capacitación:</b> cursos específicos para profesionales y emprendedores sobre el SSC, adaptados a diversas áreas y problemáticas.</li>
					</ul>
				</div>

				<div className="mt-16"><SharePage url='https://sabersupercomplejo.com/actores' text='Saber Supercomplejo - Los Actores' /></div>

			</ContentLayout>

			<NextRead>
				<h5 className="font-semibold tracking-tight text-4xl lg:text-5xl">Continuar leyendo</h5>
				<div className="mt-4 flex gap-4">
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-md border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.TEORIA}>La Teoría</Link>
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-md border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.CAMINO}>El Camino</Link>
				</div>
			</NextRead>

			<Footer />
		</>
	);
}