import React, { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Smartphone, Eye, Sparkles, Server, ShoppingCart, SmartphoneIcon } from "lucide-react";
import { PORTFOLIO_PROJECTS, SAAS_PRODUCTS, MOBILE_APPS } from "../data";
import { Project, SaaSProduct, MobileApp } from "../types";
import { motion } from "motion/react";

export default function PortfolioSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeApp, setActiveApp] = useState<string>("app_1");

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 340; // individual card size roughly
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    alert(`Simulation de redirection vers : ${url}`);
  };

  return (
    <div id="portfolio-container" className="bg-white dark:bg-neutral-950 transition-colors">
      
      {/* 1. SECTTION PORTFOLIO (Projets Classiques & Labs) */}
      <section id="portfolio" className="py-24 border-b border-neutral-200/40 dark:border-neutral-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Réalisations Client / Lab
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-950 dark:text-white tracking-tight">
                Mes Projets Référents
              </h2>
              <div className="w-16 h-1 bg-neutral-950 dark:bg-white rounded" />
            </div>

            {/* Navigation buttons for horizontal list */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                aria-label="Previous card"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                aria-label="Next card"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Carousel (Reference image style matching) */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth no-scrollbar"
            id="portfolio-carousel"
          >
            {PORTFOLIO_PROJECTS.map((project: Project) => (
              <div
                key={project.id}
                className="min-w-[290px] sm:min-w-[340px] max-w-[350px] snap-start flex-shrink-0 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-[28px] overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-xl hover:shadow-neutral-200/20 dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image panel */}
                <div className="relative aspect-[16/11] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {project.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider border border-white/10 font-bold">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Content info */}
                <div className="p-6 text-left space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-neutral-950 dark:text-white leading-tight group-hover:text-cyan-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Badges / Tech list */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800/50 text-[10px] font-mono font-medium text-neutral-600 dark:text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Buttons container */}
                    <div className="flex items-center gap-2.5 pt-2 border-t border-neutral-200/30 dark:border-neutral-800/30">
                      {project.demoUrl && (
                        <button
                          onClick={(e) => handleLinkClick(e, project.demoUrl || "")}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" /> Démo
                        </button>
                      )}
                      {project.codeUrl && (
                        <button
                          onClick={(e) => handleLinkClick(e, project.codeUrl || "")}
                          className="px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-850 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors flex items-center justify-center"
                          aria-label="GitHub Sources"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. SECTION SAAS (Vitrines Logiciels d'Entreprise) */}
      <section id="saas" className="py-24 border-b border-neutral-200/40 dark:border-neutral-900/40 bg-neutral-50/50 dark:bg-neutral-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-left max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
              <Server className="w-3.5 h-3.5 text-cyan-500" /> Micro-SaaS Accelerator
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-950 dark:text-white tracking-tight">
              Mes Produits SaaS Actifs
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans max-w-xl">
              Des plateformes logicielles réelles construites sur des modèles d'affaires récurrents, validées par des utilisateurs payants.
            </p>
            <div className="w-16 h-1 bg-neutral-950 dark:bg-white rounded" />
          </div>

          {/* SaaS Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SAAS_PRODUCTS.map((saas: SaaSProduct) => (
              <div
                key={saas.id}
                className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-[32px] overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col"
              >
                {/* Visual panel */}
                <div className="relative aspect-[16/10] bg-neutral-100 dark:bg-neutral-800 overflow-hidden border-b border-neutral-100 dark:border-neutral-800">
                  <img
                    src={saas.screenshot}
                    alt={saas.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Status Overlay Float */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-[9px] font-mono tracking-wider font-bold ${
                        saas.status === "En production"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                      } backdrop-blur-md`}
                    >
                      {saas.status}
                    </span>
                    {saas.usersCount && (
                      <span className="px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-white font-mono text-[9px] tracking-wider border border-white/10">
                        {saas.usersCount}
                      </span>
                    )}
                  </div>
                </div>

                {/* SaaS Info */}
                <div className="p-6 sm:p-8 text-left flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-center text-2xl shadow-sm">
                        {saas.logo}
                      </div>
                      <h3 className="font-display font-black text-xl text-neutral-900 dark:text-white tracking-tight">
                        {saas.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-xs.1 text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed pr-2">
                      {saas.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2.5 pt-2">
                      {saas.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                          <span className="text-cyan-500 font-bold mt-0.5">✓</span>
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA button */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <button
                      onClick={(e) => handleLinkClick(e, saas.url)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 font-semibold text-xs tracking-wider uppercase transition-colors"
                    >
                      Visiter le SaaS
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SECTION APPLICATIONS MOBILES (Style Apple Store / Bento focus) */}
      <section id="apps" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-left max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
              <Smartphone className="w-3.5 h-3.5 text-purple-500" /> Mobile Native Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-950 dark:text-white tracking-tight">
              Mes Applications Mobiles
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans max-w-xl">
              Architectures légères et fluides conçues en Flutter sous des logiques asynchrones avec un souci obsessionnel de la lisibilité interface.
            </p>
            <div className="w-16 h-1 bg-neutral-950 dark:bg-white rounded" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - List of Mobile Apps toggles */}
            <div className="lg:col-span-5 space-y-4">
              {MOBILE_APPS.map((app: MobileApp) => (
                <button
                  key={app.id}
                  onClick={() => setActiveApp(app.id)}
                  className={`w-full flex items-start gap-4 p-6 rounded-[24px] border text-left transition-all duration-300 ${
                    activeApp === app.id
                      ? "bg-neutral-50 dark:bg-neutral-900 border-neutral-900/20 dark:border-white/20 shadow-md scale-[1.01]"
                      : "bg-transparent border-transparent hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50"
                  }`}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-2xl sm:text-3xl shadow-md text-white flex-shrink-0">
                    {app.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-base sm:text-lg text-neutral-900 dark:text-white leading-tight">
                      {app.name}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans line-clamp-2 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column - Highlighted app showcase metrics */}
            <div className="lg:col-span-7">
              {MOBILE_APPS.map((app: MobileApp) => {
                if (app.id !== activeApp) return null;
                return (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-[32px] text-left grid grid-cols-1 md:grid-cols-12 gap-8"
                  >
                    {/* Screenshots */}
                    <div className="md:col-span-5 flex justify-center gap-3">
                      {app.screenshots.map((screen, sIdx) => (
                        <div
                          key={sIdx}
                          className={`w-[110px] aspect-[9/19] rounded-[20px] overflow-hidden border-4 border-neutral-900 dark:border-neutral-950 shadow-xl ${
                            sIdx === 1 ? "mt-6" : ""
                          }`}
                        >
                          <img
                            src={screen}
                            alt={`${app.name} screenshot ${sIdx}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Features & download buttons */}
                    <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-500 font-bold">
                            Focus App Métriques
                          </span>
                          <h4 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
                            {app.name}
                          </h4>
                        </div>

                        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
                          {app.description}
                        </p>

                        <ul className="space-y-2">
                          {app.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2 text-[11px] text-neutral-600 dark:text-neutral-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Download link triggers */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-200/50 dark:border-neutral-800/50">
                        {app.androidUrl && (
                          <button
                            onClick={(e) => handleLinkClick(e, "Play Store")}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 dark:bg-neutral-800 text-white hover:bg-neutral-800 dark:hover:bg-neutral-700 text-[10px] font-mono uppercase tracking-wider font-semibold"
                          >
                            <span>Google Play</span>
                          </button>
                        )}
                        {app.iosUrl && (
                          <button
                            onClick={(e) => handleLinkClick(e, "App Store")}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 dark:bg-neutral-800 text-white hover:bg-neutral-800 dark:hover:bg-neutral-700 text-[10px] font-mono uppercase tracking-wider font-semibold"
                          >
                            <span>App Store</span>
                          </button>
                        )}
                        {app.webUrl && (
                          <button
                            onClick={(e) => handleLinkClick(e, "Web App Link")}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-[10px] font-mono uppercase tracking-wider font-semibold"
                          >
                            <span>Lancer la WebApp</span>
                          </button>
                        )}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
