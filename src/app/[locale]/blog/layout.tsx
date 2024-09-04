import Footer from "@/components/footer";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{/* <Navbar style="light" /> */}
			{children}
			<Footer />
		</>
	)
}