import { useState } from "react";
import { Sparkles, Terminal, Flame, Database, ShieldAlert, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: "languages" | "frameworks" | "devops_cloud" | "ai_apis";
  desc: string;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "languages" | "frameworks" | "devops_cloud" | "ai_apis">("all");

  const skills: SkillItem[] = [
    { name: "TypeScript", level: 95, category: "languages", desc: "Mon standard par défaut pour des architectures robustes et typées.", },
    { name: "Python", level: 90, category: "languages", desc: "Idéal pour l'IA, le scripting complexe et le scraping asynchrone.", },
    { name: "JavaScript", level: 95, category: "languages", desc: "La base solide de mes projets web interactifs.", },
    { name: "HTML", level: 98, category: "languages", desc: "Sémantique parfaite pour l'accessibilité globale et le SEO.", },
    { name: "CSS", level: 95, category: "languages", desc: "Intégration d'effets visuels avancés, animations et responsive design.", },
    
    { name: "Next.js", level: 92, category: "frameworks", desc: "Rendu hybride SSR/SSG pour des temps de chargement records.", },
    { name: "React", level: 95, category: "frameworks", desc: "Conception de composants modulaires réutilisables.", },
    { name: "Node.js", level: 90, category: "frameworks", desc: "Back-ends scalables sous Express, Fastify ou Nest.js.", },
    { name: "Flutter", level: 88, category: "frameworks", desc: "Développement mobile multi-plateforme natif performant.", },
    { name: "Kivy", level: 80, category: "frameworks", desc: "Création d'interfaces tactiles innovantes en Python pur.", },

    { name: "Docker", level: 85, category: "devops_cloud", desc: "Conteneurisation uniforme du dev local jusqu'à la production.", },
    { name: "Cloud", level: 85, category: "devops_cloud", desc: "Déploiement managé de serveurs sur AWS, Google Cloud & Vercel.", },
    { name: "Git", level: 92, category: "devops_cloud", desc: "Gestion de versions avancée et workflows collaboratifs de type GitFlow.", },
    { name: "SQL & NoSQL", level: 88, category: "devops_cloud", desc: "PostgreSQL, MongoDB & Firestore configurés de manière optimale.", },

    { name: "Intelligence Artificielle", level: 92, category: "ai_apis", desc: "Intégration poussée de modèles (Gemini API, RAG, NLP).", },
    { name: "APIs & Webhooks", level: 95, category: "ai_apis", desc: "Passerelles REST/GraphQL sécurisées, Stripe & Salesforce.", }
  ];

  const categories = [
    { id: "all", label: "Toutes", icon: <Flame className="w-4 h-4" /> },
    { id: "languages", label: "Langages", icon: <Terminal className="w-4 h-4" /> },
    { id: "frameworks", label: "Frameworks", icon: <Database className="w-4 h-4" /> },
    { id: "devops_cloud", label: "DevOps & Bases", icon: <ShieldAlert className="w-4 h-4" /> },
    { id: "ai_apis", label: "IA & Connecteurs", icon: <Cpu className="w-4 h-4" /> }
  ];

  const filteredSkills = activeTab === "all" ? skills : skills.filter(s => s.category === activeTab);

  return (
    <section
      id="skills"
      className="py-24 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200/40 dark:border-neutral-900/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" /> Stack Technique
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-950 dark:text-white tracking-tight">
            Compétences informatiques & technologiques.
          </h2>
          <div className="w-16 h-1 bg-neutral-950 dark:bg-white rounded" />
        </div>

        {/* Filters Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-neutral-200/40 dark:border-neutral-800/40 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 border-neutral-950 dark:border-white shadow-md shadow-neutral-100/10"
                  : "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-neutral-200/60 dark:border-neutral-800/60 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg hover:shadow-neutral-100/5 dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top: Name & Val */}
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-display font-bold text-base text-neutral-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-500">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Desc */}
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed text-left mb-6">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                    />
                  </div>
                  
                  {/* Small tag categorization indicator */}
                  <div className="flex justify-end">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400">
                      {skill.category.replace("_", " & ")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
