import { useState } from "react";
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "../data";
import { BlogPost } from "../types";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section
      id="blog"
      className="py-24 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200/40 dark:border-neutral-900/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-bold flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-cyan-500" /> Veille & Publications
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-950 dark:text-white tracking-tight">
            Mon Blog Technique
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans max-w-xl">
            Partage d'analyses approfondies, de méthodologies de développement et de guides d'architecture logicielle pragmatiques.
          </p>
          <div className="w-16 h-1 bg-neutral-950 dark:bg-white rounded" />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-[28px] overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-xl hover:shadow-neutral-200/5 dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Cover */}
              <div className="relative aspect-[16/10] bg-neutral-100 dark:bg-neutral-800 overflow-hidden border-b border-neutral-100 dark:border-neutral-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-neutral-950/80 backdrop-blur-md text-white border border-white/5 font-mono text-[9px] uppercase tracking-wider font-bold rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Text content */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Metadata line */}
                  <div className="flex items-center gap-4 text-[10px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-neutral-950 dark:text-white leading-snug group-hover:text-cyan-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-xs.1 text-neutral-500 dark:text-neutral-400 font-sans line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read Button */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-end">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 hover:underline group-hover:translate-x-0.5 transition-transform"
                  >
                    Lire l'article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="w-full max-w-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[32px] overflow-hidden shadow-2xl relative text-left my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / close action */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2.5 rounded-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                aria-label="Close modal article"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Banner cover */}
            <div className="relative aspect-[21/9] bg-neutral-100 dark:bg-neutral-850">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-4 left-6 px-3 py-1 bg-neutral-950/80 backdrop-blur-md text-white border border-white/5 font-mono text-[9px] uppercase tracking-wider font-bold rounded-full">
                {selectedPost.category}
              </span>
            </div>

            {/* Inner article text content wrapper */}
            <div className="p-6 sm:p-10 space-y-6">
              <div className="flex items-center gap-4 text-[10px] font-mono text-neutral-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-black text-neutral-950 dark:text-white leading-tight">
                {selectedPost.title}
              </h2>

              <p className="font-sans text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium italic border-l-2 border-cyan-500 pl-4">
                {selectedPost.excerpt}
              </p>

              <div className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line pt-2">
                {selectedPost.content}
              </div>

              <div className="pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop"
                    alt="Alexandre"
                    className="w-10 h-10 rounded-full object-cover object-top border border-neutral-200/50"
                  />
                  <div>
                    <span className="block font-display font-bold text-xs text-neutral-950 dark:text-white leading-none">
                      Alexandre Gauthier
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      SaaS Creator & Tech Consultant
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2.5 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs font-semibold rounded-xl"
                >
                  Fermer l'article
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
