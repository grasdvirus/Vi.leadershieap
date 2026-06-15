import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navbar({ darkMode, onToggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "À Propos", href: "#about" },
    { label: "Compétences", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "SaaS", href: "#saas" },
    { label: "Apps Mobiles", href: "#apps" },
    { label: "Outils", href: "#tools" },
    { label: "Parcours", href: "#timeline" },
    { label: "Blog", href: "#blog" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 py-3 shadow-lg shadow-neutral-100/10 dark:shadow-neutral-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-2.5 group"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center font-display font-bold text-lg shadow-md transition-transform duration-300 group-hover:scale-110">
              AG
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-neutral-900 dark:text-white leading-none">
                Alexandre Gauthier
              </span>
              <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 mt-1 flex items-center gap-0.5 uppercase tracking-widest font-bold">
                <Sparkles className="w-2.5 h-2.5 text-orange-500 animate-pulse" /> Tech Entrepreneur
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center space-x-1.5 p-1 bg-neutral-100/50 dark:bg-neutral-900/50 rounded-full border border-neutral-200/20 dark:border-neutral-800/20">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="ml-4 p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors border border-neutral-200/50 dark:border-neutral-800/50"
              aria-label="Toggle theme"
              id="theme-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4 text-cyan-400" /> : <Moon className="w-4 h-4 text-neutral-800" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-800/50"
              aria-label="Toggle theme mobile"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
