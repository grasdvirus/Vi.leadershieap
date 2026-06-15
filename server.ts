import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsing middleware
  app.use(express.json());

  // Initialize Gemini if key exists
  let ai: GoogleGenAI | null = null;
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    try {
      ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
      console.log("Gemini API initialized successfully!");
    } catch (e) {
      console.error("Failed to initialize Gemini API:", e);
    }
  } else {
    console.warn("GEMINI_API_KEY is not defined in environment variables.");
  }

  // System prompt describing Alexandre Gauthier's background & custom responses
  const systemInstruction = `
Vous êtes "Alex-AI", le co-pilote et assistant virtuel d'Alexandre Gauthier, développeur Full Stack d'exception, créateur de produits SaaS et entrepreneur. 
Votre mission est de répondre aux questions des visiteurs (recruteurs, fondateurs, investisseurs, clients potentiels) de façon ultra-professionnelle, engagée, moderne et précise.

Voici les informations clés concernant Alexandre Gauthier :
- À PROPOS : Développeur informatique & entrepreneur passionné. Il conçoit des SaaS innovants, des apps mobiles robustes et conseille des startups sur leur architecture technique.
- STATISTIQUES : 8+ ans d'expérience, 40+ projets réussis, 3 SaaS actifs (générant du revenu récurrent), 4 applications mobiles sur les stores, 15+ technologies maîtrisées, 50k+ utilisateurs atteints cumulés.
- COMPÉTENCES : 
  * Front-end : React, Next.js, TypeScript, Tailwind CSS, HTML/CSS.
  * Back-end : Node.js, Python (Django, FastAPI), SQL, APIs Rest/GraphQL.
  * Mobile : Flutter, Kivy.
  * DevOps & Cloud : Docker, AWS, Firebase, CI/CD, Git.
  * IA & Data : Modèles d'IA (Gemini API, OpenAI), scraping, pipelines de données.
- PRODUITS SaaS :
  1. "ScribeAI" : Transcription et analyse intelligente de réunions par IA (12k utilisateurs actifs, SaaS mûr en production, Next.js + FastAPI + LLM).
  2. "PulseMetrics" : Analytics d'affaires en temps réel de Stripe, Lemonsqueezy & Play Store (En développement actif, React + Flask).
  3. "DevFlow" : Outil de collaboration et partage de snippets de code sécurisé pour équipes techniques (2k+ utilisateurs, Production, Node.js + Firebase).
- APPLICATIONS MOBILES :
  1. "ZenSpace" : App de méditation et bien-être (flutter, UX soignée, 15k+ téléchargements).
  2. "TrackTask" : Gestionnaire de tâches offline-first pour productivité intensive (Production, Android et iOS).
- PARCOURS :
  - 2023 - Présent : Fondateur & CTO de GauthierTech Services. Développement SaaS et consulting technique de haut vol.
  - 2021 - 2023 : Ingénieur Full Stack Senior chez une licorne de la FinTech.
  - 2018 - 2021 : Développeur Full Stack & Consultant Freelance.
  - 2015 - 2018 : Diplôme d'Ingénieur en Informatique et Génie Logiciel.
- CITATION : "L'art du code ne réside pas dans sa complexité, mais dans l'élégance de sa simplicité face à des défis gigantesques."
- DISPONIBILITÉ : Disponible pour des missions de consulting haut de gamme, projets SaaS clés en main, conférences et collaborations stratégiques.

Directives de réponse :
1. Répondez de manière concise, élégante et chaleureuse.
2. Utilisez le français comme langue par défaut, mais si l'utilisateur s'adresse en anglais ou autre langue, répondez dans sa langue.
3. Ne l'inventez pas : si vous ne connaissez pas une information, invitez poliment le visiteur à contacter directement Alexandre via le formulaire de contact ou à prendre rendez-vous via son calendrier interactif sur le portfolio.
4. Adoptez un ton de "représentant intelligent" qui valorise l'expertise d'Alexandre.
5. Utilisez des puces et du gras pour structurer les réponses longues.
`;

  // API Chat route
  app.post("/api/chat", async (req, res) => {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    if (!ai) {
      // Fallback answers simulation if API Key is not configured yet
      const lastMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
      let reply = "Bonjour ! L'assistant intelligent d'Alexandre est disponible. ";
      if (lastMsg.includes("tarif") || lastMsg.includes("prix") || lastMsg.includes("coûte")) {
        reply += "Pour les tarifs de consulting ou de développement sur-mesure, Alexandre propose des devis personnalisés. N'hésitez pas à remplir le formulaire de contact en bas de page pour détailler votre projet !";
      } else if (lastMsg.includes("dispo") || lastMsg.includes("collaborer") || lastMsg.includes("embaucher") || lastMsg.includes("travail")) {
        reply += "Alexandre est actuellement disponible pour du consulting sénior Part-Time, de la création de SaaS de A à Z, ou des conseils d'architecture logicielle. Vous pouvez réserver un créneau de 30 minutes directement via le calendrier interactif de ce site !";
      } else if (lastMsg.includes("stack") || lastMsg.includes("techno") || lastMsg.includes("compétence") || lastMsg.includes("langage")) {
        reply += "Alexandre maîtrise principalement TypeScript, React/Next.js, Tailwind CSS pour le front-end, Node.js et Python (FastAPI/Django) pour le back-end, ainsi que Flutter pour le mobile, et Docker/AWS pour le déploiement.";
      } else if (lastMsg.includes("saas") || lastMsg.includes("produit")) {
        reply += "Alexandre a créé plusieurs SaaS : ScribeAI (transcription de réunions par IA - 12k utilisateurs), PulseMetrics (analytics financiers pour créateurs) et DevFlow (partage collaboratif de code).";
      } else {
        reply += "Alexandre est un ingénieur Full Stack senior et entrepreneur avec 8+ ans d'expérience. Posez-moi vos questions sur ses projets, sa pile technologique ou ses disponibilités !";
      }
      return res.json({ text: reply, simulated: true });
    }

    try {
      // Format messages history for @google/genai SDK
      // The API expects a prompt or contents. We can pass the latest message and context.
      const formattedHistory = messages.map((m) => {
        return {
          role: m.role === "assistant" ? "model" as const : "user" as const,
          parts: [{ text: m.content }],
        };
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedHistory,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "Désolé, je n'ai pas pu générer de réponse.";
      return res.json({ text: replyText });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      return res.status(500).json({ error: err.message || "An error occurred with Gemini." });
    }
  });

  // Serve static assets and handle routing
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated.");
  } else {
    // Serve dist as static assets
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static production files from dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express application running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
