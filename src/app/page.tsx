import Footer from "@/components/footer";
import Community from "@/components/home/community";
import Hero from "@/components/home/hero";
import Pathway from "@/components/home/pathway";
import Theory from "@/components/home/theory";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen text-tertiary-50">
        <Hero />

        <Theory />

        <Community />

        <Pathway />

      </main>

      <Footer />
    </div>
  );
}
