import { useEffect, useState } from "react";
import { ArrowUpRight, Code2, Rocket, Brain, Award, Download, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Développeur Full Stack Senior",
    "Créateur de Produits SaaS",
    "Entrepreneur Tech",
    "Enthousiaste de l'IA"
  ];

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 30 : 75;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // Pause at long string entry
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 300; // Pause before typing next
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentRole.substring(0, charIndex - 1)
          : currentRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors"
    >
      {/* Dynamic Background Premium Grid & Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[700px] h-[700px] rounded-full bg-radial-gradient from-cyan-400/10 to-transparent dark:from-cyan-900/15 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-radial-gradient from-violet-400/10 to-transparent dark:from-violet-900/15 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Text */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-neutral-900 shadow-sm border border-neutral-200/50 dark:border-neutral-800/50"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] font-mono font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                Disponible pour Missions & Solutions SaaS
              </span>
            </motion.div>

            {/* Intro */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1]"
              >
                Bonjour, je suis <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-700 dark:from-white dark:via-neutral-100 dark:to-neutral-400">
                  Alexandre Gauthier
                </span>
              </motion.h1>

              {/* Dynamic Subheading */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl font-mono font-medium text-cyan-600 dark:text-cyan-400">
                  {typedText}
                  <span className="w-1.5 h-6 ml-1 bg-cyan-600 dark:bg-cyan-400 animate-pulse inline-block" />
                </span>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-xl text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed"
              >
                Concepteur de systèmes d'information haut de gamme, d'architectures orientées composants et de micro-SaaS rentables. Je transforme des architectures complexes en produits intuitifs et hautement scalables.
              </motion.p>
            </div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => onScrollToSection("#contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-900 dark:hover:bg-neutral-100 font-semibold text-sm shadow-xl transition-all duration-300 group hover:-translate-y-0.5"
                id="cta-speak"
              >
                <MessageSquare className="w-4 h-4 text-orange-500" />
                Collaborer
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onScrollToSection("#portfolio")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-semibold text-sm border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
                id="cta-projects"
              >
                Voir les projets
              </button>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Téléchargement simulé : Portfolio et CV (PDF) d'Alexandre Gauthier.");
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-neutral-200/50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 font-medium text-xs border border-neutral-200/30 dark:border-neutral-800/30 transition-all duration-200"
                id="cta-cv"
              >
                <Download className="w-3.5 h-3.5" />
                Télécharger mon CV
              </a>
            </motion.div>

            {/* Quick Metrics Labels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-4 grid grid-cols-3 gap-4 border-t border-neutral-200/50 dark:border-neutral-800/50"
            >
              <div className="flex flex-col">
                <span className="font-mono text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white">8+</span>
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-1">Ans d'Exp</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white">3</span>
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-1">SaaS Actifs</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xl sm:text-2xl font-bold text-emerald-500">99.9%</span>
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-1">SLA Code</span>
              </div>
            </motion.div>

          </div>

          {/* Interactive Right-side Grid Card Display */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Decorative background framing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-violet-500/5 to-transparent rounded-4xl blur-2xl transform rotate-3" />

            {/* Main Premium Card Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[380px] p-4 bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60 rounded-[32px] shadow-2xl shadow-neutral-200/20 dark:shadow-none hover:rotate-1 hover:scale-[1.01] transition-all duration-300 group z-10"
              id="hero-profile-card"
            >
              {/* Profile Image/Avatar */}
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-5 bg-neutral-100 dark:bg-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop"
                  alt="Alexandre Gauthier Portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float widget overlay on image */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-neutral-950/80 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider">
                  <Brain className="w-3.5 h-3.5 text-cyan-400" />
                  AI Architect
                </div>

                <div className="absolute bottom-4 left-4 p-3 rounded-2xl bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 text-neutral-900 dark:text-white flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-neutral-500">
                      SaaS Active MRR
                    </span>
                    <span className="text-xs font-bold font-mono">18,500€ MRR</span>
                  </div>
                </div>
              </div>

              {/* Card Meta details */}
              <div className="space-y-3.5 text-left px-1.5 pb-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-neutral-500 uppercase tracking-widest font-semibold text-[9px]">
                    Localisation
                  </span>
                  <span className="font-mono text-neutral-700 dark:text-white font-medium text-[11px] bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded-full">
                    Paris, France & Remote
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-neutral-500 uppercase tracking-widest font-semibold text-[9px]">
                    Spécialité SaaS
                  </span>
                  <span className="font-mono text-neutral-700 dark:text-white font-medium text-[11px] bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded-full">
                    NLP / Pipelines IA / IoT
                  </span>
                </div>

                {/* Simulated video/presentation playback trigger */}
                <button
                  onClick={() => {
                    alert("Simulation de la vidéo de présentation (30s Pitch d'Alexandre Gauthier).");
                  }}
                  className="w-full py-2.5 rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800 hover:border-cyan-500 hover:bg-neutral-50 dark:hover:bg-neutral-950/50 flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-wider text-neutral-500 hover:text-cyan-500 transition-all duration-200"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  Regarder la vidéo pitch
                </button>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
