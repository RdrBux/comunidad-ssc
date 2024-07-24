export default function Team() {
	return (
		<div className="mt-16">
			<div className="p-6 pb-8 border rounded-md shadow">
				<div className="flex items-center gap-4">
					<div className="w-24 h-24 shrink-0 rounded-md bg-secondary-300">
					</div>
					<div>
						<p className="text-xl font-bold tracking-tight text-neutral-950">Juan Pedro Rodríguez</p>
						<p className="text-base">Director de la Comunidad del Saber Supercomplejo</p>
					</div>
				</div>

				<div className="text-sm lg:text-base px-2 mt-6 text-neutral-600">
					<p>Es doctor en Educación. Docente titular en la UCSF y la UCA (Argentina).</p>
					<p className="mt-2">Participó en el equipo de investigación sobre &quot;La relación entre el orden y el desorden en la teoría del caos determinista y en la teoría del orden implicado: convergencias y divergencias&quot;.</p>
					<p className="mt-2">Autor de libros, artículos y expositor de ponencias en congresos internacionales. Colaborador en universidades europeas y americanas.</p>
				</div>
			</div>

			<div className="mt-8 p-6 pb-8 border rounded-md shadow">
				<div className="flex items-center gap-4">
					<div className="w-24 h-24 shrink-0 rounded-md bg-secondary-300">
					</div>
					<div>
						<p className="text-xl font-bold tracking-tight text-neutral-950">Facundo Osuna</p>
						<p className="text-base">Co-director de la Comunidad del Saber Supercomplejo</p>
					</div>
				</div>

				<div className="text-sm lg:text-base px-2 mt-6 text-neutral-600">
					<p>Es abogado independiente con experiencia en el tercer sector.</p>
					<p className="mt-2">Maestrando en Teoría Constitucional y Derechos Humanos.</p>
				</div>
			</div>
		</div>
	)
}