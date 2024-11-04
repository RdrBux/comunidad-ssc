import { CalendarIcon, GlobeIcon, RibbonIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { FileDown, FilePen } from "lucide-react";
import Juan from '../../../assets/juan.jpg'
import CursoBg from '../../../assets/curso-bg.jpg'
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Link } from "@/i18n/routing";

export default function Cursos() {
	return (
		<>
			<Navbar style="dark" />

			<main>
				<div className="relative flex flex-col overflow-hidden h-[40vh] lg:h-[70vh]">
					<Image className="absolute -z-10 inset-0 h-full w-full object-cover brightness-[0.2]" width={2144} height={1430} src={CursoBg} alt="Curso Online Gratuito - Viaje al centro de la complejidad" />
					<div className="container mx-auto px-4 lg:px-16 h-full flex flex-col items-center justify-end pb-8">
						<div className="max-w-2xl text-neutral-800 lg:text-lg">
							<p className="font-bold text-white">CURSO ONLINE / GRATUITO / 2024</p>
							<h1 className="mt-4 font-source text-5xl lg:text-7xl text-secondary-300 tracking-tight font-semibold">Viaje al centro de la complejidad</h1>
						</div>
					</div>
				</div>
				<div className="container overflow-x-clip mx-auto px-4 lg:px-16 pb-24 flex flex-col items-center">
					<div className="max-w-2xl text-neutral-800 lg:text-lg">
						<p className="mt-4 font-semibold">Descubre cómo potenciar tus proyectos personales y profesionales con las Teorías de la Complejidad y el Saber Supercomplejo.</p>

						<div className="bg-neutral-200/70 -mx-4 p-4 my-12">
							<p>Dictado por <b>Juan Pedro Rodríguez</b></p>
							<p>Dr. en Educación y Director de la Comunidad del Saber Supercomplejo</p>
						</div>

						<div className="my-12 font-bold">
							<div className="flex items-center gap-4"><CalendarIcon /> 16, 23, 30 de noviembre y 7 de diciembre</div>
							<div className="flex items-center gap-4 mt-2"><GlobeIcon /> Online - sincrónico y asincrónico</div>
							<div className="flex items-center gap-4 mt-2"><RibbonIcon /> Opcional certificación y publicación con asesoría</div>
						</div>

						<div className="my-12">
							<p className="font-semibold">¿Cómo no conmovernos y formular interrogantes ante la trama entrelazada y continua del universo y de la vida que, desde sus orígenes, se van autogenerando y evolucionando en una cuantiosa diversidad de energías y formas?</p>
							<p className="mt-2">Si te gustan los desafíos, te esperamos en este curso de descubrimiento para conocer lo que dicen las actuales Teorías de la Complejidad y, en particular, el Saber Supercomplejo y cambia tu forma de ver la realidad y de verte a ti mismo.</p>
						</div>

						<div className="my-12">
							<h3 className="font-source font-semibold tracking-tight text-3xl">Cupos limitados</h3>
							<div className="mt-6 flex flex-wrap gap-4">
								<Button className="w-fit bg-secondary-800 hover:bg-secondary-900" asChild><a href="https://forms.gle/pwebxhqoymDTw6q5A" target="_blank" rel="noopener noreferrer"><FilePen className="mr-2" size={20} /> Inscríbete ahora</a></Button>
								<Button variant='outline' className="w-fit" asChild><a href={"/pdf/PROGRAMA - Viaje al centro de la complejidad.pdf"} target="_black" rel="noopener noreferrer"><FileDown className="mr-2 text-neutral-500" size={20} /> Descarga el programa</a></Button>
							</div>
						</div>

						<section className="my-20">
							<div className="relative"><div className="absolute -left-12 lg:-left-14  top-1/2 -translate-y-1/2 h-[70%] w-10 bg-secondary-600"></div> <h2 className="font-source font-semibold tracking-tight text-4xl text-secondary-600">El Formato</h2></div>

							<ul className="my-4 list-disc list-inside">
								<li><span className="font-semibold">Cuatro encuentros en vivo</span>, online de dos horas, con cupos reducidos.</li>
								<li className="mt-4"><span className="font-semibold">Encuentros programados </span>para quienes opten por la opción con certificado de evaluación.</li>
							</ul>
						</section>

						<section className="my-20">
							<div className="relative"><div className="absolute -left-12 lg:-left-14  top-1/2 -translate-y-1/2 h-[70%] w-10 bg-secondary-600"></div> <h2 className="font-source font-semibold tracking-tight text-4xl text-secondary-600">Destinatarios</h2></div>

							<p className="mt-4">El curso está diseñado para académicos, investigadores, científicos y profesionales de diversas disciplinas interesados en el estudio y manejo de sistemas complejos. Además, es ideal para estudiantes avanzados y público en general que deseen profundizar en un enfoque integrador de la realidad, así como para líderes, gestores y emprendedores que busquen herramientas avanzadas para la toma de decisiones en entornos dinámicos.</p>
						</section>

						<section className="my-20">
							<div className="relative"><div className="absolute -left-12 lg:-left-14  top-1/2 -translate-y-1/2 h-[70%] w-10 bg-secondary-600"></div> <h2 className="font-source font-semibold tracking-tight text-4xl text-secondary-600">Doble modalidad de participación</h2></div>

							<ul className="my-4 list-disc list-inside">
								<li><span className="font-semibold">Participación con Certificado de Asistente: </span>Para quienes elijan esta modalidad, se exigirá la asistencia sincrónica o asincrónica a todos los encuentros. La participación es gratuita. </li>
								<li className="mt-4"><span className="font-semibold">Participación con Certificado de Evaluación: </span>Esta modalidad incluye una carga horaria extendida (40 horas) donde se trabajará en la producción de un escrito que será publicado en nuestra página. El costo es de ARS 20.000 y de USD 25 para extranjeros.</li>
							</ul>
						</section>


						<section className="my-20">
							<div className="relative"><div className="absolute -left-12 lg:-left-14  top-1/2 -translate-y-1/2 h-[70%] w-10 bg-secondary-600"></div> <h2 className="font-source font-semibold tracking-tight text-4xl text-secondary-600">Contenidos</h2></div>

							<div className="my-8">
								<div className="flex items-center gap-4 text-secondary-700 font-bold"><CalendarIcon /><h4>1° Encuentro: 16 de noviembre</h4></div>
								<ul className="my-4 list-disc list-inside">
									<li className="font-semibold">La situación actual de las teorías de la complejidad.</li>
									<li className="mt-4"><span className="font-semibold">Nuevas formas de repensar la complejidad:</span> a) resistencia, limitaciones e impedimentos para repensar la complejidad. b) la construcción de una actitud supercompleja.</li>
								</ul>
							</div>

							<div className="my-8">
								<div className="flex items-center gap-4 text-secondary-700 font-bold"><CalendarIcon /><h4>2° Encuentro: 23 de noviembre</h4></div>
								<ul className="my-4 list-disc list-inside">
									<li><span className="font-semibold">Las propuestas superadoras y los principios del Saber Supercomplejo: </span>a) Identificación y descripción de los principales componentes de un sistema complejo (flujos de energía, morfologías estructurales y conectividad temporal) así como los descriptores específicos de cada uno. b) los macrosistemas (micropartículas, macroscópico y biológico).</li>
								</ul>
							</div>

							<div className="my-8">
								<div className="flex items-center gap-4 text-secondary-700 font-bold"><CalendarIcon /><h4>3° Encuentro: 30 de noviembre</h4></div>
								<ul className="my-4 list-disc list-inside">
									<li><span className="font-semibold">El constructivismo complejo: </span>Introducción a la perspectiva constructivista aplicada a la complejidad, explorando cómo las realidades se construyen dinámicamente dentro de los sistemas.</li>
									<li className="mt-4"><span className="font-semibold">La nueva ciencia: </span>Mapas, algoritmos de intervención.</li>
									<li className="mt-4"><span className="font-semibold">Sistemas biológicos, sus combinatorias y subsistemas: </span>Análisis de los sistemas biológicos y sus interacciones con otros sistemas y subsistemas. </li>
								</ul>
							</div>

							<div className="my-8">
								<div className="flex items-center gap-4 text-secondary-700 font-bold"><CalendarIcon /><h4>4° Encuentro: 7 de diciembre</h4></div>
								<ul className="my-4 list-disc list-inside">
									<li><span className="font-semibold">La construcción del Saber Supercomplejo: </span>Aplicaciones del SSC en la descripción y desarrollo de sistemas complejos en diversas áreas, como la ciencia, la tecnología, la educación y más.</li>
									<li className="mt-4"><span className="font-semibold">El programa de intervención y desarrollo basado en el SSC: </span>Introducción al programa de intervención del SSC, incluyendo el uso del software especializado para modelización, mapas y algoritmos en sistemas complejos.</li>
								</ul>
							</div>
						</section>

						<section className="my-20">
							<div className="relative mb-6"><div className="absolute -left-12 lg:-left-14  top-1/2 -translate-y-1/2 h-[70%] w-10 bg-secondary-600"></div> <h2 className="font-semibold tracking-tight text-xl">DOCENTE A CARGO DEL CURSO <br /><span className="text-secondary-600 font-source text-2xl">Prof. Dr. Juan Pedro Rodríguez</span></h2></div>

							<Image className="rounded-full w-40 h-40 float-right" src={Juan} alt="Juan Pedro Rodríguez" width={400} height={400} />
							<p className="">Es doctor en Educación, investigador y filósofo. Docente titular en la UCSF y la UCA (Argentina). Su área de dedicación es la Filosofía de las Ciencias, las Teorías de la Complejidad y la  Filosofía de la Educación.</p>
							<p className="mt-4">Participó en el equipo de investigación sobre <span className="font-semibold">&quot;La relación entre el orden y el desorden en la teoría del caos determinista y en la teoría del orden implicado: convergencias y divergencias&quot;</span> dirigido por el Dr. Ibañez.</p>
							<p className="mt-4">Autor de libros, artículos y expositor de ponencias en congresos internacionales. Colaborador en universidades europeas y americanas.</p>
							<p className="mt-4 font-semibold">Es Director de la Comunidad del Saber Supercomplejo.</p>
						</section>

						<section className="my-20">
							<div className="relative"><div className="absolute -left-12 lg:-left-14  top-1/2 -translate-y-1/2 h-[70%] w-10 bg-secondary-600"></div> <h2 className="font-source font-semibold tracking-tight text-4xl text-secondary-600">¿Cómo me inscribo?</h2></div>

							<ul className="my-4 list-disc list-inside">
								<li>Completando el <a className="font-semibold underline" href="https://forms.gle/pwebxhqoymDTw6q5A" target="_blank" rel="noopener noreferrer">formulario online</a>.</li>
								<li className="mt-4">Enviando un correo electrónico a <a className="font-semibold underline" href="mailto:sabersupercomplejo@gmail.com" target="_blank" rel="noopener noreferrer">sabersupercomplejo@gmail.com</a></li>
							</ul>
						</section>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}