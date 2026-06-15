import { Calendar, Award, GraduationCap, Briefcase, Rocket } from "lucide-react";
import { TIMELINE_EVENTS } from "../data";
import { TimelineEvent } from "../types";

export default function Timeline() {
  const getIcon = (category: string) => {
    switch (category) {
      case "education":
        return <GraduationCap className="w-4 h-4 text-orange-500" />;
      case "experience":
        return <Briefcase className="w-4 h-4 text-cyan-500" />;
      case "saas":
        return <Rocket className="w-4 h-4 text-pink-500" />;
      default:
        return <Award className="w-4 h-4 text-emerald-500" />;
    }
  };

  return (
    <section
      id="timeline"
      className="py-24 bg-white dark:bg-neutral-950 border-b border-neutral-200/40 dark:border-neutral-900/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-bold flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-cyan-500" /> Historique de Carrière
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-950 dark:text-white tracking-tight">
            Mon Parcours & Réalisations
          </h2>
          <div className="w-16 h-1 bg-neutral-950 dark:bg-white rounded" />
        </div>

        {/* Timeline Line Grid */}
        <div className="relative max-w-4xl mx-auto text-left">
          {/* Vertical axis line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 transform -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 sm:hidden" />

          {/* Timeline Nodes */}
          <div className="space-y-12 relative">
            {TIMELINE_EVENTS.map((event: TimelineEvent, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`flex flex-col sm:flex-row items-stretch sm:justify-between relative ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Circle Marker */}
                  <div className="absolute left-6 sm:left-1/2 top-2 w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-sm">
                    {getIcon(event.category)}
                  </div>

                  {/* Empty balance block to keep symmetric layouts on web */}
                  <div className="w-full sm:w-[45%] hidden sm:block" />

                  {/* Actual Card content panel */}
                  <div className="w-full sm:w-[45%] pl-12 sm:pl-0">
                    <div className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-[24px] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
                      
                      {/* Top bar: label and category badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">
                          {event.year}
                        </span>
                        <span className={`px-2.5 py-1 rounded-lg text-[9px] font-mono uppercase tracking-wider font-semibold border ${
                          event.category === "education"
                            ? "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/10"
                            : event.category === "experience"
                            ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20"
                            : "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20"
                        }`}>
                          {event.category}
                        </span>
                      </div>

                      {/* Header info */}
                      <div className="space-y-1 mb-4">
                        <h3 className="font-display font-bold text-base sm:text-lg text-neutral-950 dark:text-white leading-tight">
                          {event.title}
                        </h3>
                        <p className="text-xs font-mono font-medium text-neutral-500">
                          {event.company}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed mb-4">
                        {event.description}
                      </p>

                      {/* Details lines */}
                      <ul className="space-y-2 border-t border-neutral-200/40 dark:border-neutral-800/40 pt-4">
                        {event.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                            <span className="text-neutral-400 dark:text-neutral-600 font-bold">•</span>
                            <span className="leading-tight">{detail}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
