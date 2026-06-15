import { Star, MessageSquare } from "lucide-react";
import { CLIENT_REVIEWS } from "../data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-white dark:bg-neutral-950 border-b border-neutral-200/40 dark:border-neutral-900/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-bold flex items-center gap-1.55">
            <MessageSquare className="w-4 h-4 text-cyan-500" /> Validation & Recommandations
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-950 dark:text-white tracking-tight">
            Ce que disent mes collaborateurs
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans max-w-xl">
            Retours d'expérience authentiques d'associés, clients et responsables produit sur l'ingénierie et l'intelligence d'affaires d'Alexandre.
          </p>
          <div className="w-16 h-1 bg-neutral-950 dark:bg-white rounded" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CLIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/50 dark:border-neutral-800/50 rounded-[28px] text-left flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg hover:shadow-neutral-100/5 dark:hover:shadow-none transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Micro Stars */}
                <div className="flex gap-1 animate-pulse">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  “ {review.text} ”
                </p>
              </div>

              {/* Author details */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-neutral-200/40 dark:border-neutral-800/40 mt-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/20 dark:border-neutral-800/20 flex-shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-neutral-950 dark:text-white leading-tight">
                    {review.author}
                  </h4>
                  <p className="text-[10px] font-mono text-neutral-500 mt-1 uppercase tracking-wider font-semibold">
                    {review.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
