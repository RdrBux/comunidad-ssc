import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import btnEsAmazon from '@/assets/buttons/btn-es-amazon.png'
import btnEsGoogle from "@/assets/buttons/btn-es-google.png"
import ssTapa from "@/assets/ss-tapa-es.jpg"
import Image from "next/image"
import dynamic from "next/dynamic"
import PDFViewer from "@/components/pdf-viewer"

export default function Page() {
	return (
		<>
			<Navbar style="light" />

			<main className="container max-w-4xl mx-auto px-4 py-28">

				<div className="flex flex-col lg:flex-row gap-12 items-center">
					<Image className="h-96 w-fit rounded" src={ssTapa} alt="Libro Saber Supercomplejo" />

					<div className="grid gap-4">
						<h2 className="font-source font-semibold text-4xl leading-none lg:text-5xl tracking-tighter">Saber Supercomplejo</h2>
						<p className="text-neutral-600 text-lg">El nuevo paradigma emergente ante la complejidad del universo, la vida y el cerebro humano</p>
						<p className="text-neutral-600 text-lg">Por <span className="font-semibold text-neutral-950">Juan Pedro Rodríguez</span></p>
						<div className="flex gap-4 flex-wrap mt-2">
							<a
								href="https://play.google.com/store/books/details/Supercomplex_Knowledge?id=I6ZtEQAAQBAJ"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={btnEsGoogle}
									alt="Disponible en Google Play"
									className="h-12 w-fit shrink-0"
								/>
							</a>

							<a
								href="https://www.amazon.com/dp/B0FHG73VHN"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={btnEsAmazon}
									alt="Disponible en Amazon Kindle"
									className="h-12 w-fit shrink-0"
								/>
							</a>
						</div>
					</div>
				</div>

				<hr className="my-12" />

				<div className="text-lg mt-12 text-neutral-800">
					<p>
						Este libro propone una nueva forma de entender el universo, la vida y la mente: el <span className="font-semibold">Saber Supercomplejo (SSC)</span>. Se trata de un paradigma que busca ir más allá de las limitaciones de las Ciencias de la Complejidad y del Pensamiento Complejo, ofreciendo una mirada integral, práctica y profundamente transformadora sobre los sistemas que nos rodean.
					</p>

					<p className="mt-6">
						En lugar de explicar el mundo con herramientas fragmentadas, el SSC plantea una visión transdisciplinaria y evolutiva. Propone una base científica renovada, basada en el constructivismo complejo multiescalar y en tres ejes clave para describir y transformar la realidad:
					</p>

					<ul className="list-inside marker:text-primary-500 list-disc mt-4">
						<li>los <span className="font-semibold">Flujos de Energía</span>,</li>
						<li>la <span className="font-semibold">Morfología Estructural</span>,</li>
						<li>y la <span className="font-semibold">Conectividad Temporal</span>.</li>
					</ul>

					<p className="mt-6">
						Esta tríada permite pensar cualquier sistema —desde una célula hasta una red social— como un conjunto dinámico de relaciones entre energía, forma y tiempo.
					</p>

					<p className="mt-6">
						El libro también ofrece una clasificación innovadora de los sistemas complejos, y analiza cómo surgen la estabilidad, el cambio repentino y la evolución progresiva. Para eso, recorre los tres grandes planos de organización del universo: el de las micropartículas, el del mundo visible (macroscópico) y el de los sistemas biológicos. Pero no los estudia por separado, sino en su interacción profunda.
					</p>

					<p className="mt-6">
						Lo más potente del SSC es que <span className="font-semibold">no se queda en la teoría</span>: propone herramientas concretas para pensar y rediseñar sistemas reales. Entre ellas se destacan los <span className="font-semibold">Mapas Dinámicos Adaptativos</span>, las <span className="font-semibold">ecuaciones supercomplejas</span> y el simulador tetradimensional <span className="font-semibold">COMPLEX CUORE</span>, una tecnología única para visualizar y transformar sistemas en tiempo real.
					</p>

					<p className="mt-6">
						Además, este enfoque cambia también nuestra forma de aprender. El SSC propone una combinación original entre cómputo, mapeo y cronometraje que permite pensar, crear y decidir mejor. De ahí surge una nueva forma de ser: el <span className="font-semibold">Homo Supercomplexus</span>, una persona capaz de enfrentarse a la complejidad con creatividad, conciencia y responsabilidad.
					</p>

					<p className="mt-6 italic">
						Este libro es una guía para quienes intuyen que el futuro necesita nuevas ideas y nuevas herramientas. Es también una invitación a imaginar y construir soluciones más integrales, sabias y humanas para los desafíos actuales.
					</p>

					<p className="mt-6 p-8 rounded bg-primary-100 text-primary-900 font-medium">
						Incluye acceso gratuito al nodo inteligente <span className="font-bold text-primary-950">DARWIN SSC </span>(versión especializada de ChatGPT adaptada al paradigma).
					</p>
				</div>

				<PDFViewer />

				<div className="p-8 lg:p-12 mt-12 rounded bg-primary-200 border flex flex-col gap-6 items-center">
					<h3 className="font-semibold tracking-tight leading-none font-source text-3xl lg:text-4xl text-center text-primary-950">Accede a la obra completa</h3>
					<p className="text-primary-900 lg:text-lg text-center">Explora todos los desarrollos teóricos, herramientas prácticas y recursos digitales del paradigma supercomplejo. Disponible en <span className="font-semibold">Google Books</span> y <span className="font-semibold">Amazon Kindle</span>.</p>
					<div className="flex gap-4 flex-wrap items-center justify-center">
						<a
							href="https://play.google.com/store/books/details/Supercomplex_Knowledge?id=I6ZtEQAAQBAJ"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={btnEsGoogle}
								alt="Disponible en Google Play"
								className="h-12 w-fit shrink-0"
							/>
						</a>

						<a
							href="https://www.amazon.com/dp/B0FHG73VHN"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={btnEsAmazon}
								alt="Disponible en Amazon Kindle"
								className="h-12 w-fit shrink-0"
							/>
						</a>
					</div>
				</div>


			</main>
			<Footer />
		</>
	)
}