"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Internships from "@/components/Internships";
import ExtraCurricular from "@/components/ExtraCurricular";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-900 font-sans bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f8fafc_50%,_#f1f5f9_100%)]">
      <Header />
      <main className="space-y-20">
        <Hero />
        <About />
        <Skills />
        <Internships />
        <Projects />
        <Certifications />
        <ExtraCurricular />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}