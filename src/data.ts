import { Project, SaaSProduct, MobileApp, PersonalTool, OpenSourceRepo, TimelineEvent, Review, BlogPost, GalleryItem } from "./types";

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "proj_1",
    title: "NeuroForge - Moteur de Génération Graphique",
    description: "Une plateforme de génération visuelle optimisée connectée à des modèles de diffusion d'images. Supporte le painting en temps réel et le prompt intelligent.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop",
    tags: ["TypeScript", "Next.js", "FastAPI", "Tailwind CSS", "Gemini API"],
    demoUrl: "#",
    codeUrl: "https://github.com",
    featured: true
  },
  {
    id: "proj_2",
    title: "Krypton - Terminal DeFi & Analytics",
    description: "Dashboard Web3 ultra-rapide permettant le tracking de portefeuilles multi-chaînes et des alertes d'anomalies de liquidité via un moteur de règles en temps réel.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
    tags: ["React", "FastAPI", "Tailwind CSS", "Recharts", "Web3"],
    demoUrl: "#",
    codeUrl: "https://github.com",
    featured: true
  },
  {
    id: "proj_3",
    title: "SentryOps - Orchestrateur Edge Computing",
    description: "Outil de monitoring et de déploiement de micro-services sur des nœuds réseau décentralisés (IoT & serveurs locaux). Alerte push intelligente.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    tags: ["Python", "Docker", "Node.js", "WebSockets", "AWS"],
    demoUrl: "#",
    codeUrl: "https://github.com",
    featured: false
  },
  {
    id: "proj_4",
    title: "Aurora - Synthétiseur Audio Web",
    description: "Une web-app interactive émulant un synthétiseur analogique avec effets spatiaux (Delay, Reverb, Filtre Passe-Bas) construits sur l'AudioContext HTML5.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop",
    tags: ["JavaScript", "HTML5 Audio", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    codeUrl: "https://github.com",
    featured: false
  }
];

export const SAAS_PRODUCTS: SaaSProduct[] = [
  {
    id: "saas_1",
    name: "ScribeAI",
    logo: "🎙️",
    screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    description: "Transcription ultra-précise et analyse intelligente de réunions. Génère automatiquement des comptes-rendus, des to-do lists exploitables et des résumés exécutifs par IA.",
    features: [
      "Diantrisation vocale des locuteurs en temps réel",
      "Génération automatique d'emails de suivi personnalisés",
      "Intégrations natives avec Zoom, Google Meet et Microsoft Teams",
      "Haute sécurité avec cryptage de bout en bout"
    ],
    status: "En production",
    url: "https://scribeai.example.com",
    usersCount: "12,400+ actifs"
  },
  {
    id: "saas_2",
    name: "PulseMetrics",
    logo: "📈",
    screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    description: "Tableau de bord financier unifié conçu pour les créateurs de SaaS et d'applications mobiles. Connecte vos comptes Stripe, Lemonsqueezy, App Store et Google Play Store.",
    features: [
      "Calcul automatique du MRR / LTV / CAC / Churn en temps réel",
      "Système d'alertes prédictives en cas d'anomalies de facturation",
      "Rapports de taxes automatisés multinationaux",
      "Simulateur de scenarii de prix de formule d'abonnement"
    ],
    status: "En développement",
    url: "https://pulsemetrics.example.com",
    usersCount: "Bêta privée (150+ entreprises)"
  },
  {
    id: "saas_3",
    name: "DevFlow",
    logo: "⚡",
    screenshot: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop",
    description: "Outil collaboratif de gestion de snippets et de partage de configuration de serveurs pour équipes d'ingénierie soucieuses de leur sécurité.",
    features: [
      "Indexation intelligente par contexte de code",
      "Partage sécurisé par clés asymétriques client-side",
      "Plugin VS Code et CLI natifs pour un accès instantané",
      "Historique des modifications et approbation de snippets"
    ],
    status: "En production",
    url: "https://devflow.example.com",
    usersCount: "2,850+ développeurs"
  }
];

export const MOBILE_APPS: MobileApp[] = [
  {
    id: "app_1",
    name: "ZenSpace",
    icon: "🧘‍♀️",
    description: "Une application mobile moderne de thérapie holistique guidée par IA. Génère des sessions audio d'hypnose et de respiration synchronisées avec votre rythme cardiaque.",
    screenshots: [
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop"
    ],
    features: [
      "Modulateur sonore binaural s'ajustant au stress",
      "Exercices de cohérence cardiaque interactifs avec retour haptique",
      "Journal intime analysé par NLP pour traquer l'humeur hebdomadaire",
      "Dashboard de sommeil compatible Apple Health et Google Fit"
    ],
    androidUrl: "#",
    iosUrl: "#",
    webUrl: "#"
  },
  {
    id: "app_2",
    name: "TrackTask Studio",
    icon: "⏱️",
    description: "Planificateur de vie et gestionnaire de tâches hors-ligne pour la gestion du focus profond. Basé sur la méthode Pomodoro avancée et le time-blocking visuel.",
    screenshots: [
      "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop"
    ],
    features: [
      "Architecture 100% offline-first avec synchronisation automatique locale",
      "Visualisation par blocs calendaires en drag-and-drop tactile",
      "Rapports de focus hebdomadaires détaillés avec score d'optimisation",
      "Mode immersif de blocage de notifications distrayantes"
    ],
    androidUrl: "#",
    iosUrl: "#"
  }
];

export const PERSONAL_TOOLS: PersonalTool[] = [
  {
    id: "tool_1",
    name: "Formateur & Minificateur de JSON",
    description: "Valide, formate ou compresse instantanément des chaînes de données JSON complexes avec détection d'erreurs d'accolades.",
    icon: "🔧",
    type: "formatter"
  },
  {
    id: "tool_2",
    name: "Générateur & Testeur Regex Interactif",
    description: "Écrivez et testez vos expressions régulières en direct avec coloration syntaxique des correspondances textuelles.",
    icon: "🧪",
    type: "regex"
  },
  {
    id: "tool_3",
    name: "Encodeur / Décodeur Base64 Ultra-Rapide",
    description: "Convertissez du texte brut, des caractères spéciaux ou de petits fichiers médias en chaînes Base64 sécurisées.",
    icon: "📑",
    type: "base64"
  },
  {
    id: "tool_4",
    name: "Éditeur & Aperçu Markdown Instantané",
    description: "Saisissez du langage de balisage markdown léger et visualisez le rendu HTML formatté de manière instantanée.",
    icon: "👁️",
    type: "markdown"
  }
];

export const OPEN_SOURCE_REPOS: OpenSourceRepo[] = [
  {
    id: "repo_1",
    name: "py-gemini-agent",
    description: "Un framework Python léger pour orchestrer des agents autonomes multi-tâches alimentés par Gemini-2.5 et Gemini-3.5 avec outils auto-découvrables.",
    stars: 845,
    forks: 112,
    url: "https://github.com",
    languages: ["Python", "TypeScript", "Markdown"]
  },
  {
    id: "repo_2",
    name: "tailwind-premium-bento",
    description: "Une bibliothèque de composants React pré-configurés pour concevoir des mises en pages bento-grid de style Apple inspirées et hautement responsives.",
    stars: 423,
    forks: 38,
    url: "https://github.com",
    languages: ["TypeScript", "CSS", "HTML"]
  },
  {
    id: "repo_3",
    name: "fastapi-secure-boilerplate",
    description: "Template de démarrage d'API de niveau entreprise hautement sécurisé avec authentification JWT, limitation de débit, CORS dynamiques et configurations Docker.",
    stars: 219,
    forks: 24,
    url: "https://github.com",
    languages: ["Python", "Dockerfile", "Shell"]
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "time_1",
    year: "2023 - Présent",
    category: "saas",
    title: "Créateur & CTO",
    company: "GauthierTech Services",
    description: "Lancement de micro-SaaS d'IA et de productivité. Accompagnement technique stratégique auprès de 10+ startups partenaires pour le prototypage, le scaling d'API et l'intégration d'architectures d'IA.",
    details: [
      "Création, édition et monétisation de ScribeAI et DevFlow.",
      "Déploiement d'une architecture multi-cloud sécurisée à faible latence.",
      "Optimisation des temps de réponse d'API de 120ms à 18ms."
    ]
  },
  {
    id: "time_2",
    year: "2021 - 2023",
    category: "experience",
    title: "Lead Full Stack Developer",
    company: "FinTech ScaleUp",
    description: "Gestion d'une équipe de 5 ingénieurs pour le refactoring complet de l'infrastructure de paiement de la plateforme principale.",
    details: [
      "Migration d'une base monolithique vers une architecture de microservices en Node.js et Python (FastAPI).",
      "Établissement de tests automatisés portant la couverture de code de 40% à 91% (Jest & Pytest).",
      "Intégration d'outils analytiques d'ingénierie réduisant les bugs signalés de 30%."
    ]
  },
  {
    id: "time_3",
    year: "2018 - 2021",
    category: "experience",
    title: "Développeur Full Stack Senior & Freelance",
    company: "Indépendant (Consultant)",
    description: "Accompagnement de clients grand compte (Aéronautique, Retail) et startups d'e-commerce dans leur refonte fonctionnelle de bout en bout.",
    details: [
      "Développement de Progressive Web Apps (React, TypeScript, Redux).",
      "Améliorations SEO majeures sur Next.js faisant grimper le trafic organique de +150%."
    ]
  },
  {
    id: "time_4",
    year: "2015 - 2018",
    category: "education",
    title: "Double Diplôme d'Ingénieur en Informatique",
    company: "Université de Technologie de Compiègne (UTC)",
    description: "Spécialisation en Génie Logiciel, Cloud, et Intelligence Artificielle.",
    details: [
      "Projet de fin d'étude : Réseau neuronal récurrent appliqué à la prédiction de séries temporelles financières.",
      "Président de l'association d'entrepreneuriat étudiant."
    ]
  }
];

export const CLIENT_REVIEWS: Review[] = [
  {
    id: "rev_1",
    author: "Marc-Antoine Laurent",
    role: "Co-fondateur & CEO de Finanzt",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop",
    text: "Alexandre a développé la v1 de notre produit d'investissement en trois fois moins de temps que les estimations de notre agence précédente. Son code est d'une propreté exemplaire et sa vision d'entrepreneur a complètement bonifié notre roadmap produit.",
    rating: 5
  },
  {
    id: "rev_2",
    author: "Sophie Dumont",
    role: "VP Product chez HealthCloud",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop",
    text: "Une rigueur absolue du premier appel au déploiement de l'application ZenSpace sur l'App Store. Alexandre est le profil rare par excellence : techniquement brillant, centré sur l'expérience utilisateur, et possédant un sens aigu du business.",
    rating: 5
  },
  {
    id: "rev_3",
    author: "Karim Benali",
    role: "Directeur de l'Innovation à l'AéroLab",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop",
    text: "Alexandre nous a aidé à basculer nos capteurs IoT industriels vers un modèle de bordure (Edge) sous Docker. Il a résolu nos goulots d'étranglement de messagerie WebSockets en quelques jours. Un consultant d'excellence !",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post_1",
    title: "Comment j'ai automatisé la transcription de réunions avec Gemini-3.5-flash",
    excerpt: "Retour d'expérience complet sur le plan technique de mon SaaS ScribeAI : de la gestion des payloads audio à faible latence à l'extraction de résumé structuré sous format JSON.",
    content: "Dans cet article, je partage en profondeur l'ensemble de l'architecture logicielle développée pour ScribeAI. L'utilisation combinée de FastAPI comme file d'attente asynchrone et de Gemini-3.5-flash m'a permis d'offrir des capacités d'analyse supérieures à mes utilisateurs tout en divisant mes coûts d'infrastructure par 5 par rapport à mes précédentes intégrations d'IA fermées. Nous aborderons également le typage strict des schémas d'extraction JSON dans le SDK `@google/genai`.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
    category: "Intelligence Artificielle",
    readTime: "6 min de lecture",
    date: "12 Juin 2026"
  },
  {
    id: "post_2",
    title: "Le guide ultime de l'architecture Offline-First pour vos apps mobiles Flutter",
    excerpt: "Vos utilisateurs ne disposent pas toujours d'une excellente connexion réseau. Apprenez à concevoir une base de données locale synchronisée et réactive.",
    content: "Une superbe application se doit d'être opérationnelle en avion, dans le métro ou au milieu de la campagne. Je vous explique comment j'ai construit le noyau applicatif autonome de mon application TrackTask. Intégration de Hive pour la réactivité locale, synchronisation optimisée s'activant automatiquement en arrière-plan lorsque la connectivité est restaurée grace à des requêtes de fusion intelligentes et de détection de conflits.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",
    category: "Développement Mobile",
    readTime: "8 min de lecture",
    date: "28 Mai 2026"
  },
  {
    id: "post_3",
    title: "Le format Bento-Grid : Pourquoi Apple et les startups modernes l'adorent",
    excerpt: "Analyse sémiotique et tutoriel de composition CSS Grid pour créer des fiches produit haut de gamme, compactes et mémorables pour vos visiteurs.",
    content: "Le format Bento est bien plus qu'une mode : c'est le triomphe de la densité d'information harmonisée. En fragmentant votre portefeuille de services ou votre vitrine technique en blocs thématiques asymétriques mais alignés, vous captivez l'œil et structurez idéalement la mémorisation visuelle. Nous verrons comment bâtir ces architectures avec Tailwind CSS et des animations subtiles de Framer Motion.",
    image: "https://images.unsplash.com/photo-1541462608141-2f58c48e4041?w=800&auto=format&fit=crop",
    category: "UX/UI Design",
    readTime: "5 min de lecture",
    date: "10 Mai 2026"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal_1",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    title: "Analyse Statistique ScribeAI",
    subtitle: "Interface utilisateur épurée et dense d'analyse sémantique."
  },
  {
    id: "gal_2",
    image: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?w=800&auto=format&fit=crop",
    title: "Session Pitch Investor",
    subtitle: "Présentation de la v1 de PulseMetrics en live au Club Tech."
  },
  {
    id: "gal_3",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop",
    title: "Workflow ZenSpace",
    subtitle: "Prototype visuel de la synchronisation vibratoire mobile."
  },
  {
    id: "gal_4",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    title: "Infrastructure Edge Cloud",
    subtitle: "Schéma d'intégration d'un réseau multi-régions sur AWS & Docker."
  }
];
