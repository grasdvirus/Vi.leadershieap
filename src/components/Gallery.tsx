import { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { Image, Maximize2, Sparkles, X } from "lucide-react";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-24 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200/40 dark:border-neutral-900/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-bold flex items-center gap-1.5">
            <Image className="w-4 h-4 text-cyan-500" /> Galerie Prototypage & Labs
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-950 dark:text-white tracking-tight">
            Captures d'Interfaces & Événements
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans max-w-xl">
            Aperçu de différents moments clés : conférences, design d'interfaces, schémas de bases de données et hackathons.
          </p>
          <div className="w-16 h-1 bg-neutral-950 dark:bg-white rounded" />
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item.image)}
              className="group relative aspect-square rounded-[24px] overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-800/50 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-neutral-950/40 dark:bg-neutral-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                <div className="flex justify-between items-end">
                  <div className="space-y-1 text-white">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 font-bold">
                      {item.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-sm tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full screen modal previewer */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-4 right-4 p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors"
            onClick={() => setSelectedImg(null)}
            aria-label="Close image layout"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-4xl max-h-[80vh] overflow-hidden rounded-[24px]">
            <img
              src={selectedImg}
              alt="Preview"
              className="w-full h-auto max-h-[80vh] object-contain"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()} // stop auto close
            />
          </div>
        </div>
      )}
    </section>
  );
}
