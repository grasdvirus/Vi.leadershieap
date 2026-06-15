import React, { useState } from "react";
import { Sparkles, MessageSquare, Mail, CornerDownRight, ThumbsUp, X } from "lucide-react";

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [legalModal, setLegalModal] = useState<"mentions" | "privacy" | null>(null);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim()) return;
    
    // Simulate save
    const emails = JSON.parse(localStorage.getItem("newsletter_signups") || "[]");
    emails.push({ email: newsEmail, timestamp: new Date().toISOString() });
    localStorage.setItem("newsletter_signups", JSON.stringify(emails));

    setSignupSuccess(true);
    setNewsEmail("");
    setTimeout(() => setSignupSuccess(false), 4000);
  };

  const navSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="footer" className="bg-neutral-950 text-white pt-20 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-neutral-800 pb-16">
          
          {/* Column Logo & Description */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-white text-neutral-950 flex items-center justify-center font-display font-medium text-base">
                AG
              </div>
              <span className="font-display font-bold text-base tracking-tight">
                Alexandre Gauthier
              </span>
            </div>
            
            <p className="font-sans text-xs text-neutral-400 leading-relaxed pr-6">
              Ingénieur Logiciel & Entrepreneur Tech d'exception basé à Paris. Création de systèmes robustes, intégration d'intelligences artificielles, et développement de produits SaaS scalables.
            </p>

            <span className="inline-block text-[9px] font-mono uppercase tracking-widest text-orange-500 font-bold">
              ★ Craftsmanship is Priority
            </span>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-neutral-400">
              Explorer
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" onClick={(e) => navSection(e, "#about")} className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <CornerDownRight className="w-3.5 h-3.5 text-neutral-600" /> À Propos
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => navSection(e, "#skills")} className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <CornerDownRight className="w-3.5 h-3.5 text-neutral-600" /> Stack Technique
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => navSection(e, "#portfolio")} className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <CornerDownRight className="w-3.5 h-3.5 text-neutral-600" /> Portfolio & SaaS
                </a>
              </li>
              <li>
                <a href="#tools" onClick={(e) => navSection(e, "#tools")} className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <CornerDownRight className="w-3.5 h-3.5 text-neutral-600" /> Dev Labs
                </a>
              </li>
              <li>
                <a href="#timeline" onClick={(e) => navSection(e, "#timeline")} className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <CornerDownRight className="w-3.5 h-3.5 text-neutral-600" /> Parcours Chrono
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => navSection(e, "#contact")} className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <CornerDownRight className="w-3.5 h-3.5 text-neutral-600" /> Co-founding / Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter section */}
          <div className="md:col-span-5 text-left space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-neutral-400">
              Newsletter Édition Tech
            </h4>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed">
              Inscrivez-vous pour recevoir mes analyses trimestrielles sur le développement d’architectures d'IA génératives, le Bootstrapping de SaaS, et les nouveautés de l’écosystème Flutter.
            </p>

            {/* Newsletter input form */}
            {signupSuccess ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs font-mono flex items-center gap-2 animate-pulse">
                <ThumbsUp className="w-4 h-4 text-emerald-400" /> Inscription validée avec succès !
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="Ex: mail@createur.com"
                  className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-xs flex-1 outline-none focus:border-cyan-500 text-white placeholder-neutral-600"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors"
                >
                  S'abonner
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Sub-footer Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© 2026 Alexandre Gauthier. Tous droits réservés.</p>
          
          <div className="flex gap-4">
            <button
              onClick={() => setLegalModal("mentions")}
              className="hover:text-white transition-colors bg-none border-none cursor-pointer"
            >
              Mentions Légales
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal("privacy")}
              className="hover:text-white transition-colors bg-none border-none cursor-pointer"
            >
              Données Personnelles
            </button>
          </div>
        </div>

      </div>

      {/* Modal mentions/privacy dialog */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4 text-left"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="w-full max-w-lg p-6 sm:p-8 bg-neutral-900 border border-neutral-800 rounded-2xl relative text-left text-neutral-300 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition"
              aria-label="Close legal modalities modal"
            >
              <X className="w-4 h-4" />
            </button>

            {legalModal === "mentions" ? (
              <>
                <h3 className="font-display font-bold text-lg text-white mb-2">Mentions Légales</h3>
                <div className="space-y-3 text-xs leading-relaxed text-neutral-450">
                  <p><strong>Éditeur du site :</strong> GauthierTech Services, SASU au capital de 5 000 €, domiciliée à Paris.</p>
                  <p><strong>Directeur de la publication :</strong> Alexandre Gauthier, contact@gauthiertech.example.</p>
                  <p><strong>Hébergeur :</strong> Clouder Services, sous serveur d'intégration containerisé sécurisé.</p>
                  <p>Ce site est une simulation d'application de portfolio technologique d'excellence conçue en React et Tailwind CSS.</p>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-display font-bold text-lg text-white mb-2">Politique de Confidentialité</h3>
                <div className="space-y-3 text-xs leading-relaxed text-neutral-450">
                  <p><strong>Données collectées :</strong> Les formulaires de contact, d'inscription à la newsletter ou de prise de rendez-vous enregistrent vos saisies de manière sécurisée et locale (localStorage du navigateur).</p>
                  <p><strong>Sécurité :</strong> Aucune revente de données. Les clés d'intégration de nos assistants intelligents s'exécutent entièrement côté serveur de façon sécurisée (proxification API).</p>
                  <p>Vous disposez d'un droit d'accès, d'édition et d'effacement de vos logs de données locales en vidant simplement le cache de votre navigateur.</p>
                </div>
              </>
            )}

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-lg bg-white text-neutral-950 text-xs font-bold"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
