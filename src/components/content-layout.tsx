export default function ContentLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="container overflow-x-clip mx-auto px-4 lg:px-16 py-24 flex flex-col items-center">
			<div className="max-w-2xl text-neutral-950 lg:text-lg">
				{children}
			</div>
		</main>
	)
}