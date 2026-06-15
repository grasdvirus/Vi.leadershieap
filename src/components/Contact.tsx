import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Calendar, Clock, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  // Form Status
  const [formSent, setFormSent] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMsg, setFormMsg] = useState("");

  // Booking Status
  const [bookedDay, setBookedDay] = useState<string | null>(null);
  const [bookedSlot, setBookedSlot] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const daysList = [
    { name: "Lundi", date: "15 Juin" },
    { name: "Mardi", date: "16 Juin" },
    { name: "Mercredi", date: "17 Juin" },
    { name: "Jeudi", date: "18 Juin" },
    { name: "Vendredi", date: "19 Juin" }
  ];

  const slotTimes = ["09:30", "11:00", "14:00", "15:30", "17:00"];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMsg) return;
    // Simulate send save
    const submission = { name: formName, email: formEmail, message: formMsg, date: new Date().toISOString() };
    const history = JSON.parse(localStorage.getItem("contact_submissions") || "[]");
    history.push(submission);
    localStorage.setItem("contact_submissions", JSON.stringify(history));

    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormName("");
      setFormEmail("");
      setFormMsg("");
    }, 4500);
  };

  const handleBooking = () => {
    if (!bookedDay || !bookedSlot) return;
    setBookingSuccess(true);
    // save to local storage
    const bookings = JSON.parse(localStorage.getItem("meeting_bookings") || "[]");
    bookings.push({ day: bookedDay, slot: bookedSlot, timestamp: new Date().toISOString() });
    localStorage.setItem("meeting_bookings", JSON.stringify(bookings));

    setTimeout(() => {
      setBookingSuccess(false);
      setBookedDay(null);
      setBookedSlot(null);
    }, 5500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-neutral-950 border-b border-neutral-200/40 dark:border-neutral-900/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-bold flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-cyan-500" /> Co-fondateurs & Partenaires
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-950 dark:text-white tracking-tight">
            Travaillons Ensemble
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans max-w-xl">
            Disponible pour du consulting technique haut de gamme, du développement SaaS clé en main ou des interventions stratégiques. Réservez un créneau ou écrivez-moi !
          </p>
          <div className="w-16 h-1 bg-neutral-950 dark:bg-white rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Contact points & form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/45 text-left space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">Email</span>
                  <a href="mailto:alexandre@gauthiertech.example" className="font-sans text-xs sm:text-xs.1 font-bold text-neutral-900 dark:text-white hover:underline block truncate mt-1">
                    alexandre@gauthier.dev
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/45 text-left space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">Localisation</span>
                  <span className="font-sans text-xs sm:text-xs.1 font-bold text-neutral-900 dark:text-white block mt-1">
                    Paris, France & Remote
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/45 text-left space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">Téléphone</span>
                  <span className="font-sans text-xs sm:text-xs.1 font-bold text-neutral-900 dark:text-white block mt-1">
                    +33 (0)6 12 34 56 78
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-[28px] text-left">
              <h3 className="font-display font-bold text-lg text-neutral-950 dark:text-white mb-6">
                Envoyez un message direct
              </h3>

              {formSent ? (
                <div className="p-6 bg-emerald-550/10 border border-emerald-500/25 rounded-2xl flex items-center gap-4 text-emerald-600 dark:text-emerald-400 animate-pulse">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500 flex-shrink-0" />
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm">Message transmis avec succès !</h4>
                    <p className="text-xs text-neutral-500 leading-normal">
                      Merci pour votre intérêt, {formName}. Alexandre s'efforce de vous recontacter d'ici les prochaines 24h ouvrées.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">Nom Complet</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Ex: Clara Dupont"
                        className="w-full p-3.5 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 text-xs text-neutral-900 dark:text-white focus:border-cyan-500 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">Adresse Email</label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="Ex: clara@entreprise.com"
                        className="w-full p-3.5 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 text-xs text-neutral-900 dark:text-white focus:border-cyan-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">Détails de votre projet</label>
                    <textarea
                      required
                      rows={5}
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      placeholder="Décrivez brièvement vos besoins techniques ou la nature de la collaboration..."
                      className="w-full p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 text-xs text-neutral-900 dark:text-white focus:border-cyan-500 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-900 font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                  >
                    Transmettre le message <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Panel: Calendar Scheduling simulator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-[28px] text-left space-y-6">
              
              <div className="space-y-1.5 border-b border-neutral-200/50 dark:border-neutral-800/50 pb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5 animate-pulse">
                  <Calendar className="w-4 h-4 text-cyan-500" /> Book un discovery call
                </span>
                <h3 className="font-display font-black text-xl text-neutral-950 dark:text-white leading-tight">
                  Calendrier de Prise de RDV
                </h3>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  Sélectionnez un jour et un créneau libre pour planifier une discussion technique de 30 minutes.
                </p>
              </div>

              {bookingSuccess ? (
                <div className="p-6 bg-cyan-950/10 border border-cyan-500/20 rounded-2xl flex items-center gap-4 text-cyan-600 dark:text-cyan-400">
                  <CheckCircle2 className="w-7 h-7 text-cyan-400 flex-shrink-0 animate-bounce" />
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm">Rendez-vous planifié !</h4>
                    <p className="text-xs text-neutral-500 leading-normal">
                      Votre appel de découverte est réservé pour le <span className="font-semibold text-neutral-900 dark:text-white">{bookedDay}</span> à <span className="font-semibold text-neutral-900 dark:text-white">{bookedSlot}</span>. Un lien Google Meet a été configuré !
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  
                  {/* Select day */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">1. Choisir un jour</span>
                    <div className="grid grid-cols-5 gap-1.5">
                      {daysList.map((day) => (
                        <button
                          key={day.name}
                          onClick={() => setBookedDay(day.name)}
                          className={`p-2.5 rounded-xl border text-center flex flex-col items-center justify-center transition-all duration-200 ${
                            bookedDay === day.name
                              ? "bg-cyan-500 border-cyan-500 text-neutral-950 font-bold shadow-md shadow-cyan-500/10"
                              : "bg-white dark:bg-neutral-950 border-neutral-200/50 dark:border-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-850"
                          }`}
                        >
                          <span className="text-[9px] font-mono leading-none">{day.name}</span>
                          <span className="text-[10px] font-bold mt-1 leading-none">{day.date.split(" ")[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select slot */}
                  {bookedDay && (
                    <div className="space-y-2 animate-fadeIn">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">2. Choisir une heure</span>
                      <div className="flex flex-wrap gap-2">
                        {slotTimes.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setBookedSlot(slot)}
                            className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-medium transition-all duration-200 ${
                              bookedSlot === slot
                                ? "bg-cyan-500 border-cyan-500 text-neutral-950 font-bold"
                                : "bg-white dark:bg-neutral-950 border-neutral-200/50 dark:border-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-850"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Submit book */}
                  {bookedDay && bookedSlot && (
                    <button
                      onClick={handleBooking}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md mt-2"
                    >
                      Valider la réservation <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                </div>
              )}

              {/* Social Channels direct */}
              <div className="pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50 flex justify-between items-center">
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">Reseaux Pro</span>
                <div className="flex items-center gap-3">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-neutral-200/40 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-350 hover:bg-neutral-200 hover:text-neutral-950 dark:hover:bg-neutral-700 dark:hover:text-white flex items-center justify-center transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-neutral-200/40 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-350 hover:bg-neutral-200 hover:text-neutral-950 dark:hover:bg-neutral-700 dark:hover:text-white flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-neutral-200/40 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-350 hover:bg-neutral-200 hover:text-neutral-950 dark:hover:bg-neutral-700 dark:hover:text-white flex items-center justify-center transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
