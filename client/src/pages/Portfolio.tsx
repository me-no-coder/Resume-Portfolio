import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);
  
  const homeInView = useInView(homeRef, { amount: 0.5 });
  const aboutInView = useInView(aboutRef, { amount: 0.5 });
  const experienceInView = useInView(experienceRef, { amount: 0.5 });
  const projectsInView = useInView(projectsRef, { amount: 0.5 });
  const skillsInView = useInView(skillsRef, { amount: 0.5 });
  const certificationsInView = useInView(certificationsRef, { amount: 0.5 });
  const contactInView = useInView(contactRef, { amount: 0.5 });

  useEffect(() => {
    // This determines which section is currently in view
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (experienceInView) setActiveSection("experience");
    else if (projectsInView) setActiveSection("projects");
    else if (skillsInView) setActiveSection("skills");
    else if (certificationsInView) setActiveSection("certifications");
    else if (contactInView) setActiveSection("contact");
  }, [
    homeInView,
    aboutInView,
    experienceInView,
    projectsInView,
    skillsInView,
    certificationsInView,
    contactInView,
  ]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Theme Toggle */}
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle />
      </div>

      {/* Sidebar */}
      <Sidebar activeSection={activeSection} />
      
      {/* Mobile Navigation */}
      <MobileNav activeSection={activeSection} />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 pb-16 lg:pb-0">
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={certificationsRef}>
          <Certifications />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
