import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden">
      <Header />
      {/* Hero */}
      <section id="hero" className="shrink-0 snap-center">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center shrink-0">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center shrink-0">
        <Experience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-center shrink-0">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-center shrink-0">
        <Projects />
      </section>
      {/* Contact us */}
      <section id="contact" className="snap-center shrink-0">
        <ContactMe />
      </section>
    </main>
  );
}
