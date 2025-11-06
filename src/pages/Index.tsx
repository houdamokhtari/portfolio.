import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Downloads from "@/components/Downloads";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Skills />
        <Projects />
        <Downloads />
        <Contact />
      </main>
      <footer className="bg-primary text-primary-foreground py-8 text-center">
        <p className="text-sm">
          © 2025 Mokhtari Nourelhouda. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
