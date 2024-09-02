import Footer from "@/components/footer";
import Articles from "@/components/home/articles";
import Community from "@/components/home/community";
import Hero from "@/components/home/hero";
import Pathway from "@/components/home/pathway";
import Theory from "@/components/home/theory";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar style="dark" />

      <main className="min-h-screen text-tertiary-50">
        <Hero />

        <Theory />

        <Community />

        <Pathway />

        <Articles />

      </main>

      <Footer />
    </div>
  );
}
