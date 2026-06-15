import { Briefcase, Trophy, Smartphone, Rocket, Cpu, Users, Eye, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Stats() {
  const statsList = [
    {
      icon: <Briefcase className="w-5 h-5 text-cyan-500" />,
      value: "8+",
      label: "Années d'expérience",
      desc: "Ingénierie logicielle & CTO"
    },
    {
      icon: <Trophy className="w-5 h-5 text-orange-400" />,
      value: "40+",
      label: "Projets réalisés",
      desc: "Web complets, API & DevOps"
    },
    {
      icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
      value: "4",
      label: "Apps Mobiles publiées",
      desc: "Sur Apple App Store & Google Play"
    },
    {
      icon: <Rocket className="w-5 h-5 text-pink-500" />,
      value: "3",
      label: "Produits SaaS créés",
      desc: "Générateurs actifs de MRR"
    },
    {
      icon: <Cpu className="w-5 h-5 text-teal-400" />,
      value: "15+",
      label: "Technologies maîtrisées",
      desc: "De TypeScript à Docker/Cloud"
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      value: "20+",
      label: "Collaborations",
      desc: "Startups, Scaleups & Grands Comptes"
    },
    {
      icon: <Eye className="w-5 h-5 text-yellow-400" />,
      value: "50k+",
      label: "Utilisateurs atteints",
      desc: "Utilisent mes logiciels chaque jour"
    },
  ];

  return (
    <section
      id="stats"
      className="py-16 bg-neutral-900 text-white relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-radial-gradient from-cyan-500/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-10 w-[350px] h-[350px] rounded-full bg-radial-gradient from-violet-500/20 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple inline title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 text-left">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" /> Données clés
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold leading-tight">
              Des métriques réelles au service du business
            </h2>
          </div>
          <div className="text-left font-mono text-xs text-neutral-400 max-w-xs">
            Des chiffres certifiés mesurés par des plateformes d'analytics, de l'App Store Connect au dashboard Stripe.
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {statsList.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`p-6 rounded-[24px] bg-neutral-950/60 border border-neutral-800/80 text-left hover:border-neutral-700 hover:bg-neutral-950 transition-all duration-300 group ${
                i === statsList.length - 1 ? "col-span-2 md:col-span-2" : "col-span-1"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 dark:bg-neutral-800 group-hover:bg-cyan-500 transition-colors" />
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-3xl sm:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </span>
                <h3 className="text-sm font-display font-bold tracking-tight text-neutral-250">
                  {stat.label}
                </h3>
                <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
