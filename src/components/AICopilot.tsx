import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Brain, ArrowDown, User, Bot, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  time: string;
}

export default function AICopilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Bonjour ! Je suis l'assistant IA d'Alexandre. Posez-moi des questions sur son parcours, ses stacks de prédilection ou ses produits SaaS !",
      time: "12:35"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  const suggestionPrompts = [
    "Quelles sont tes technos favorites ?",
    "Présente-moi tes produits SaaS !",
    "Comment peut-on collaborer ?",
    "Prendre RDV direct"
  ];

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: "user",
      content: textToSend,
      time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error("API Route unreachable.");
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: data.text || "Désolé, je n'ai pas pu compiler une réponse.",
        time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      // Fallback
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Je rencontre actuellement un problème de communication avec le serveur intelligent, mais vous pouvez écrire directement à Alexandre via le formulaire ci-dessous ou réserver un créneau sur son calendrier !",
          time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Dialogue réinitialisé. Comment puis-je vous aider aujourd'hui ?",
        time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  };

  return (
    <>
      {/* Floating launcher Button with pulse indicator */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 p-4 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border border-neutral-800/10 dark:border-neutral-200/5 glow-cyan"
          id="ai-copilot-launcher"
        >
          <div className="relative">
            <Brain className="w-5 h-5 text-cyan-400 dark:text-cyan-600" />
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>
          <span className="text-xs sm:text-xs font-mono font-bold tracking-wider uppercase pr-1">
            Co-pilote IA
          </span>
        </button>
      </div>

      {/* Floating Chat Workspace Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-[400px] h-[550px] bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-[32px] shadow-2xl overflow-hidden flex flex-col justify-between"
            id="ai-copilot-drawer"
          >
            {/* Header */}
            <div className="p-4 bg-neutral-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-display font-bold leading-none">
                    Alex-AI Co-pilot
                  </span>
                  <span className="text-[9px] font-mono text-cyan-400 flex items-center gap-1 uppercase tracking-wider mt-1 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active (Gemini-3.5)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={clearChat}
                  className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 text-neutral-400 transition-colors"
                  title="Réinitialiser"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 text-white transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Conversation Window area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {messages.map((msg, idx) => {
                const isUser = msg.role === "user";
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 max-w-[85%] ${
                      isUser ? "ml-auto flex-row-reverse" : "mr-auto"
                    }`}
                  >
                    {/* Avatar sphere */}
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs border ${
                      isUser
                        ? "bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
                        : "bg-cyan-500/10 border-cyan-500/20 text-cyan-500"
                    }`}>
                      {isUser ? <User className="w-3.25 h-3.25" /> : <Bot className="w-3.25 h-3.25" />}
                    </div>

                    {/* Bobble chat code */}
                    <div className="space-y-1 text-left">
                      <div className={`p-3.5 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                        isUser
                          ? "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-tr-none"
                          : "bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-tl-none border border-neutral-200/30 dark:border-neutral-800/20"
                      }`}>
                        {msg.content}
                      </div>
                      <span className="block text-[8px] font-mono text-neutral-400 px-1">
                        {msg.time}
                      </span>
                    </div>

                  </div>
                );
              })}

              {/* Indicator Typing loaders */}
              {isLoading && (
                <div className="flex items-center gap-2 text-neutral-400 text-[10px] font-mono pl-1 text-left">
                  <div className="flex gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span>Alex-AI recherche sa base de données...</span>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions Prompts scroll view */}
            <div className="px-4 py-2 flex gap-1.5 overflow-x-auto border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/10 no-scrollbar select-none">
              {suggestionPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    if (p === "Prendre RDV direct") {
                      setIsOpen(false);
                      // Custom smooth scroll click trigger on link
                      const contactTarget = document.querySelector("#contact");
                      if (contactTarget) {
                        contactTarget.scrollIntoView({ behavior: "smooth" });
                      }
                    } else {
                      handleSendMessage(p);
                    }
                  }}
                  className="px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 hover:border-cyan-500 hover:text-cyan-500 text-[9px] font-semibold tracking-wider transition-all flex-shrink-0"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Send Interface Form bar */}
            <div className="p-3.5 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 flex gap-2 items-center">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage(inputText);
                }}
                placeholder="Discutez avec l'IA d'Alexandre..."
                className="flex-1 bg-white dark:bg-neutral-950 p-3 rounded-xl text-xs text-neutral-800 dark:text-white border border-neutral-200/50 dark:border-neutral-800/50 outline-none focus:border-cyan-500"
              />
              <button
                onClick={() => handleSendMessage(inputText)}
                className="p-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-xl hover:scale-[1.03] active:scale-95 transition-transform shadow-md"
                aria-label="Send message to AI assistant"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
