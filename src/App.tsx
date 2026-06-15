import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import PortfolioSection from "./components/Portfolio";
import PersonalTools from "./components/PersonalTools";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AICopilot from "./components/AICopilot";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Apply Tailwind theme class at runtime
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-sans selection:bg-cyan-500 selection:text-neutral-900">
      {/* Premium Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Structural Page content */}
      <main>
        {/* Full-width interactive hero */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Narrative bio, mission, values */}
        <About />

        {/* Real-time certified metrics */}
        <Stats />

        {/* Dynamic technology grids & progress */}
        <Skills />

        {/* Multi-tier display grids (Classic Projects, Active SaaS, Mobile native apps) */}
        <PortfolioSection />

        {/* Micro-lab utilities */}
        <PersonalTools />

        {/* Career chronological path & timeline */}
        <Timeline />

        {/* Interfaces & conferences mockups gallery */}
        <Gallery />

        {/* Client reviews slider */}
        <Testimonials />

        {/* Publication technical blog nodes */}
        <Blog />

        {/* Direct messages dispatch & Booking slot scheduler calendar */}
        <Contact />
      </main>

      {/* Footer navigation channels & legalpopups */}
      <Footer />

      {/* Cyber/Futuristic interactive AI assistant co-pilot */}
      <AICopilot />
    </div>
  );
}
