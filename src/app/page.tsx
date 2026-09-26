import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Catalog from "@/components/Catalog";
import Services from "@/components/Services";
import Personalization from "@/components/Personalization";
import Process from "@/components/Process";
import About from "@/components/About";
import Inspiration from "@/components/Inspiration";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Projects />
      <Catalog />
      <Services />
      <Personalization />
      <Process />
      <About />
      <Inspiration />
      <Testimonials />
      <Contact />
    </main>
  );
}
