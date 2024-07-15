export default function NextRead({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-secondary-200 text-neutral-950">
			<section className="max-w-2xl mx-auto px-4 py-24">
				{children}
			</section>
		</div>
	)
}