import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar style="light" />
			{children}
			<Footer />
		</>
	)
}