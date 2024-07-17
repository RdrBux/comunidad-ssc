export default function BlogPost() {
	return (
		<main className="container mx-auto px-4 lg:px-16 py-24 text-neutral-950">
			<div className="group relative p-8 lg:p-16 flex flex-col rounded-xl overflow-hidden lg:min-h-[440px]">
				<img className="group-hover:brightness-[0.4] duration-300 absolute -z-10 inset-0 h-full w-full brightness-50 object-cover" src="https://plus.unsplash.com/premium_photo-1675198764473-30434364c8b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="jeje" />
				<div className="text-tertiary-50 max-w-xl flex flex-col lg:justify-end h-full grow">
					<div className="text-tertiary-50/80 font-medium flex flex-col lg:flex-row lg:items-center gap-x-2"><div className="flex items-center gap-2">Por <a className="flex items-center gap-2" href="#"><div className="w-8 aspect-square bg-secondary-200 rounded-full"></div> <span className="text-tertiary-50">Saber Supercomplejo</span></a> <span className="hidden lg:inline">•</span></div><div>16 de julio de 2022</div></div>
					<h3 className="font-semibold text-4xl lg:text-5xl tracking-tight mt-32 lg:mt-4">Título del Post: Continuación del Título</h3>
					<p className="mt-6 hidden lg:block lg:text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis voluptatem, quam neque magni ducimus.</p>
				</div>
			</div>
		</main>
	)
}