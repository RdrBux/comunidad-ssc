import ContentLayout from "@/components/content-layout";
import Footer from "@/components/footer";
import NextRead from "@/components/next-read";
import SharePage from "@/components/share-page";
import { ImgNet } from "@/components/svgs";
import { ROUTES } from "@/utils/constants";
import Link from "next/link";

export default function Teoria() {
	return (
		<>
			<ContentLayout>
				<div className="grid relative">
					<div className="px-24 lg:absolute lg:px-12 lg:w-96 lg:-right-52 lg:top-1/2 lg:-translate-y-1/2"><ImgNet /></div>

					<div className="py-12 lg:py-20 lg:-order-1 w-fit">
						<h1 className="font-medium lg:text-lg">LA TEORÍA</h1>
						<h2 className="text-5xl lg:text-6xl tracking-tight font-semibold mt-2">¿Qué es el Saber Supercomplejo?</h2>
					</div>

				</div>

				<div className="lg:mt-16 flex flex-col gap-4">
					<p>
						Numerosos pensadores han coincidido en que el siglo XXI es el “siglo de la complejidad”. Ahora bien, el concepto de “complejidad” es polisémico, multívoco, multidimensional y polifacético. Hay cierto acuerdo en cuanto a la etimología de lo complejo como “aquello que está unido y entrelazado”. Una red de sistemas imbricados y conectados unos con otros sin vacíos.
					</p>

					<p>
						A mediados del siglo XX que las Teorías de la Complejidad se comenzaron a construir como una alternativa a las explicaciones monocausales, simplificadas y deterministas, ancladas sobre los principios rectores del mecanicismo, el reduccionismo y el empirismo que predominaban en la ciencia de esa época.
					</p>

					<p>
						El Pensamiento Complejo y las Ciencias de la Complejidad surgen y se consolidan como los dos enfoques más representativos. Es cierto que estos enfoques, en ocasiones, se perciben como enfoques opuestos y con un gran nivel de tensiones entre ellos, tensiones que surgen de las diferencias en sus metodologías, supuestos y áreas de énfasis.
					</p>

					<p>
						El objetivo de nuestra investigación y de nuestro trabajo es elaborar una propuesta unificadora y superadora del enorme mosaiquismo, que hoy ha hecho de las Teorías de la Complejidad un edificio con muchas teorías inconexas, de difícil acceso y escasa utilización en problemáticas sociales y humanas. El Saber Supercomplejo (SSC) se nutre de las jugosas raíces del Pensamiento Complejo y de las Ciencias de la Complejidad, como así también de los saberes preexistentes sobre los que abrevaban las primeras propuestas y también de los actuales, que fortalecen y dinamizan nuevas y superadoras perspectivas.
					</p>

					<p>
						El Saber Supercomplejo tiene como objeto de estudio los sistemas complejos, postulando una nueva gnoseología de base (el constructivismo complejo) y una reconfiguración de los componentes de los sistemas complejos (flujos de energía, morfologías estructurales y conectividad temporal en interacción) articulando, de esta manera, una taxonomía completa de los macrosistemas micropartículas, macroscópicos y biológicos con sus respectivos solapamientos, generadores de comportamientos realmente increíbles y muy poco tenidos en cuenta. Se propone, además, una relectura del espacio y el tiempo en clave de supercomplejidad; una metodología de descripción que articula lo matemático, lo informático y lo conceptual. La circularidad entre teoría y acción poniendo especial énfasis en la construcción de mapas y algoritmos con una herramienta de software propia para la intervención y mejoramiento de instituciones y problemáticas planetarias.
					</p>

					<div className="mt-12">
						<h3 className="font-semibold text-3xl">Los ejes de la propuesta del Saber Supercomplejo son:</h3>

						<ul className="list-disc flex flex-col gap-4 mt-6 pl-6">
							<li>Una redefinición de los sistemas complejos como objeto de estudio. No se puede desconocer que tanto la Inteligencia Artificial, la Ciencia de Datos y el Deep Learning han revolucionado y profundizado el modelado y la comprensión de los sistemas complejos. Asimismo, el desarrollo de instrumentos avanzados como sensores y software especializados están facilitando cada vez más dicha tarea.</li>
							<li>Una propuesta novedosa sobre los componentes de los sistemas complejos: flujos de energía, morfologías estructurales y conectividad temporal en interacción.</li>
							<li>Una selección de eventos como la inflación cósmica, la aparición de objetos cósmicos y el surgimiento de la vida como generadores de distintos niveles de complejidad y de increíbles comportamientos complejos.</li>
							<li>Una propuesta de taxonomía de macrosistemas (micropartículas, macroscópicos y biológicos), sistemas y subsistemas complejos derivados y un modelo de triple solapamiento dinámico entre dichos macrosistemas que demuestran que no existe una flecha de la complejidad.</li>
							<li>Una metodología de descripción, predicción e intervención que construye y vincula mapas y algoritmos como herramientas para descubrir, entender y manipular las dinámicas y estructuras de sistemas complejos y presentar un programa de intervención y desarrollo y un software asociado para dar cuenta de la marcha y la eventual mejora de sistemas complejos concretos y con proyección a todas las grandes problemáticas sociales y planetarias.</li>
						</ul>
					</div>
				</div>

				<div className="mt-16"><SharePage url='https://sabersupercomplejo.com/teoria' text='Saber Supercomplejo - La Teoría' /></div>

			</ContentLayout>

			<NextRead>
				<h5 className="font-semibold tracking-tight text-4xl lg:text-5xl">Continuar leyendo</h5>
				<div className="mt-4 flex gap-4">
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-full border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.ACTORES}>Los Actores</Link>
					<Link className="w-fit text-lg mt-4 block px-4 py-2 border rounded-full border-neutral-950 hover:bg-neutral-950 hover:text-secondary-300 duration-300" href={ROUTES.CAMINO}>El Camino</Link>
				</div>
			</NextRead>

			<Footer />
		</>
	);
}