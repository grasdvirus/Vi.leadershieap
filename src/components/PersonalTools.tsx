import React, { useState } from "react";
import { Sparkles, Cpu, ChevronRight, Check } from "lucide-react";
import { PERSONAL_TOOLS } from "../data";

export default function PersonalTools() {
  const [activeTool, setActiveTool] = useState<"formatter" | "regex" | "base64" | "markdown">("formatter");
  const [rawText, setRawText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [regexPattern, setRegexPattern] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  // 1. JSON FORMATTER
  const handleJSONFormat = (minify: boolean) => {
    setErrorText("");
    if (!rawText.trim()) {
      setOutputText("");
      return;
    }
    try {
      const parsed = JSON.parse(rawText);
      const res = minify ? JSON.stringify(parsed) : JSON.stringify(parsed, null, 2);
      setOutputText(res);
    } catch (err: any) {
      setErrorText(`Erreur de syntaxe JSON : ${err.message}`);
      setOutputText("");
    }
  };

  // 2. BASE 64 ENCODER/DECODER
  const handleBase64 = (type: "encode" | "decode") => {
    setErrorText("");
    if (!rawText.trim()) {
      setOutputText("");
      return;
    }
    try {
      if (type === "encode") {
        setOutputText(btoa(unescape(encodeURIComponent(rawText))));
      } else {
        setOutputText(decodeURIComponent(escape(atob(rawText))));
      }
    } catch (err: any) {
      setErrorText(`Erreur de décodage Base64 : ${err.message}`);
      setOutputText("");
    }
  };

  // 3. REGEX TESTER
  const handleRegexTest = () => {
    setErrorText("");
    if (!rawText.trim() || !regexPattern.trim()) {
      setOutputText("");
      return;
    }
    try {
      const regex = new RegExp(regexPattern, "g");
      const matches = Array.from(rawText.matchAll(regex)) as any[];
      if (matches.length > 0) {
        setOutputText(
          `Correspondances trouvées (${matches.length}) :\n` +
            matches.map((m, idx) => `[${idx + 1}] '${m[0]}' à l'index ${m.index}`).join("\n")
        );
      } else {
        setOutputText("Aucun résultat ne correspond à cette expression régulière.");
      }
    } catch (err: any) {
      setErrorText(`Erreur dans l'expression régulière : ${err.message}`);
      setOutputText("");
    }
  };

  // 4. MARKDOWN PREVIEW (Simplified client-side HTML convert)
  const handleMarkdownTranslate = () => {
    if (!rawText.trim()) {
      setOutputText("");
      return;
    }
    let html = rawText
      .replace(/### (.*?)\n/g, "### $1\n")
      .replace(/## (.*?)\n/g, "## $1\n")
      .replace(/# (.*?)\n/g, "# $1\n")
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1");
    setOutputText(html);
  };

  return (
    <section
      id="tools"
      className="py-24 bg-neutral-900 text-white border-b border-neutral-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Dev Labs & Utilitaires
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Outils & Utilitaires Interactifs
          </h2>
          <p className="text-sm text-neutral-400 font-sans max-w-xl">
            Des micro-outils pratiques de programmation développés entièrement côté client. Testez-les directement en direct sur cette page !
          </p>
          <div className="w-16 h-1 bg-cyan-400 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabs Menu Column */}
          <div className="lg:col-span-4 space-y-3">
            {PERSONAL_TOOLS.map((tool) => (
              <button
                key={tool.id}
                onClick={() => {
                  setActiveTool(tool.type);
                  setRawText("");
                  setOutputText("");
                  setRegexPattern("");
                  setErrorText("");
                }}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 group ${
                  activeTool === tool.type
                    ? "bg-neutral-950 border-cyan-400 shadow-lg shadow-cyan-950/20"
                    : "bg-neutral-950/40 border-neutral-800 hover:border-neutral-700"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xs sm:text-sm text-white">
                      {tool.name}
                    </h3>
                    <p className="text-[10px] text-neutral-400 font-sans line-clamp-1 mt-0.5">
                      {tool.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>

          {/* Utility Stage Column */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 bg-neutral-950 border border-neutral-800 rounded-[28px] text-left space-y-6">
              
              {/* Stage header */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                  <Sparkles className="w-3 text-cyan-400 animate-pulse" /> Console Lab Live
                </span>
                <span className="text-[11px] font-mono text-neutral-400">
                  Status: Operationnel (100% Client-side)
                </span>
              </div>

              {/* Dynamic Inputs panels depending on active_tool */}
              <div className="space-y-4">
                {activeTool === "regex" && (
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-neutral-400 lowercase">
                      /entrez-le-pattern-regex/
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      value={regexPattern}
                      onChange={(e) => setRegexPattern(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-cyan-400 font-mono focus:border-cyan-400 outline-none"
                    />
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-neutral-400 lowercase">
                    {activeTool === "formatter"
                      ? "Saisissez votre JSON brut :"
                      : activeTool === "regex"
                      ? "Texte source d'analyse :"
                      : activeTool === "base64"
                      ? "Texte brut (ou chaine base64) :"
                      : "Saisie Markdown :"}
                  </label>
                  <textarea
                    rows={5}
                    placeholder={
                      activeTool === "formatter"
                        ? '{"nom":"Gauthier","titre":"SaaS Developer","competences":["Node.js","React"]}'
                        : activeTool === "regex"
                        ? "Contactez moi sur mon adresse mail pro : alexandre@gauthiertech.example !"
                        : activeTool === "base64"
                        ? "Port d'intégration d'API secret"
                        : "### Titre principal \n**Alexandre** est ingénieur full stack."
                    }
                    value={rawText}
                    onChange={(e) => setRawText(e.target.value)}
                    className="w-full p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white font-mono focus:border-cyan-400 outline-none resize-y"
                  />
                </div>

                {/* Operations bar */}
                <div className="flex flex-wrap gap-2.5">
                  {activeTool === "formatter" && (
                    <>
                      <button
                        onClick={() => handleJSONFormat(false)}
                        className="px-4 py-2 bg-cyan-500 text-neutral-950 hover:bg-cyan-400 rounded-xl text-xs font-semibold font-mono"
                      >
                        Formater JSON
                      </button>
                      <button
                        onClick={() => handleJSONFormat(true)}
                        className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white rounded-xl text-xs font-semibold font-mono"
                      >
                        Minifier JSON
                      </button>
                    </>
                  )}

                  {activeTool === "base64" && (
                    <>
                      <button
                        onClick={() => handleBase64("encode")}
                        className="px-4 py-2 bg-cyan-500 text-neutral-950 hover:bg-cyan-400 rounded-xl text-xs font-semibold font-mono"
                      >
                        Encoder Base64
                      </button>
                      <button
                        onClick={() => handleBase64("decode")}
                        className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white rounded-xl text-xs font-semibold font-mono"
                      >
                        Décoder Base64
                      </button>
                    </>
                  )}

                  {activeTool === "regex" && (
                    <button
                      onClick={handleRegexTest}
                      className="px-4 py-2 bg-cyan-500 text-neutral-950 hover:bg-cyan-400 rounded-xl text-xs font-semibold font-mono"
                    >
                      Matcher Regex
                    </button>
                  )}

                  {activeTool === "markdown" && (
                    <button
                      onClick={handleMarkdownTranslate}
                      className="px-4 py-2 bg-cyan-500 text-neutral-950 hover:bg-cyan-400 rounded-xl text-xs font-semibold font-mono"
                    >
                      Générer Aperçu
                    </button>
                  )}
                </div>

                {/* Error messages feedback */}
                {errorText && (
                  <div className="p-3.5 bg-rose-950/40 text-rose-400 text-xs font-mono rounded-xl border border-rose-950 leading-relaxed text-left">
                    ⚠️ {errorText}
                  </div>
                )}

                {/* Output Panel visual */}
                <div className="space-y-1.5 pt-4">
                  <div className="flex items-center justify-between">
                    <label className="font-mono text-xs text-neutral-400 lowercase">
                      Résultat de sortie :
                    </label>
                    {outputText && (
                      <button
                        onClick={handleCopy}
                        className="text-[10px] font-mono text-cyan-400 hover:underline flex items-center gap-1 bg-none border-none cursor-pointer"
                        id="btn-copy-tool"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3" /> Copié !
                          </>
                        ) : (
                          "Copier les données"
                        )}
                      </button>
                    )}
                  </div>
                  <div className="w-full p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-mono min-h-[140px] whitespace-pre-wrap text-left select-text">
                    {outputText || (
                      <span className="text-neutral-600 italic">Console vide. Activez une commande pour générer la sortie.</span>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
