import React from "react";
import { Globe, Heart, Eye, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const cards = [
    {
      icon: <TargetIcon className="w-6 h-6 text-orange-500" />,
      title: "Ma Mission",
      desc: "Démystifier l'ingénierie complexe et concevoir des architectures informatiques ultra-performantes, sécurisées et humainement inspirantes pour libérer l'innovation."
    },
    {
      icon: <Eye className="w-6 h-6 text-cyan-500" />,
      title: "Ma Vision",
      desc: "Bâtir un écosystème de produits SaaS autonomes, intégrant l'IA générative non comme un gadget, mais comme un accélérateur d'intelligence d'affaires concret."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Mes Valeurs",
      desc: "Simplicité du code, transparence radicale, démarche Lean, recherche constante de l'esthétique algorithmique (Craftsmanship) et respect strict des données utilisateurs."
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-neutral-950 border-b border-neutral-200/40 dark:border-neutral-900/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Profil & Ambition
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-950 dark:text-white tracking-tight">
            Ingénieur de code, bâtisseur d'entreprises.
          </h2>
          <div className="w-16 h-1 bg-neutral-950 dark:bg-white rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio text detail */}
          <div className="lg:col-span-7 space-y-6 text-left text-neutral-600 dark:text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              Je m'appelle Alexandre Gauthier, un ingénieur logiciel et créateur de solutions SaaS résidant à Paris. Passionné par l'intersection entre le <span className="font-semibold text-neutral-900 dark:text-white">développement Full-Stack de pointe</span> et la stratégie entrepreneuriale, je conçois des systèmes d'information robustes de A à Z.
            </p>
            <p>
              Dès mon plus jeune âge, j'ai été fasciné par la capacité du code à matérialiser instantanément des idées. Au fil des années, j'ai perfectionné mon expertise en développant des infrastructures robustes pour des entreprises de toutes tailles, tout en lançant des produits SaaS indépendants auto-financés.
            </p>
            <p>
              Mon approche est résolument pragmatique : concevoir des applications légères, faciles à maintenir, hautement optimisées et répondant à de vrais besoins d'affaires. Qu'il s'agisse d'architecturer une plateforme cloud asynchrone ou de concevoir l'interface mobile tactile haut de gamme de demain.
            </p>

            {/* Quote design */}
            <div className="relative p-6 sm:p-8 rounded-[24px] bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/40 overflow-hidden">
              <span className="absolute -top-3 -left-3 text-7xl sm:text-8xl font-serif text-neutral-200 dark:text-neutral-800 pointer-events-none select-none">
                “
              </span>
              <blockquote className="relative z-10 font-display font-medium text-sm sm:text-base text-neutral-800 dark:text-neutral-200 italic leading-relaxed">
                L'art du code ne réside pas dans sa complexité, mais dans l'élégance de sa simplicité face à des défis gigantesques. C’est cette clarté qui permet à une technologie d’être robuste et pérenne.
              </blockquote>
              <div className="relative z-10 mt-4 flex items-center gap-2.5">
                <div className="w-6 h-0.5 bg-neutral-400" />
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  Alexandre Gauthier, CTO
                </span>
              </div>
            </div>
          </div>

          {/* Cards column - Mission, Vision, Values */}
          <div className="lg:col-span-5 space-y-6">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl sm:rounded-[24px] text-left hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/30 dark:border-neutral-800/30 shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-neutral-950 dark:text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// Custom simple target icon
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}
