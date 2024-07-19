import Navbar from "./navbar";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar style="light" />
			<main className="container overflow-x-clip mx-auto px-4 lg:px-16 py-24 flex flex-col items-center">
				<div className="max-w-2xl text-neutral-800 lg:text-lg">
					{children}
				</div>
			</main>
		</>
	)
}