export const METRICS_CHIPS = [
  {
    value: "5+",
    label: "Anos Exp",
  },
  {
    value: "99%",
    label: "Perf Score",
  },
  {
    value: "SOLID",
    label: "Clean Arch",
  },
] as const;

export const FEATURED_MISSION = {
  title: "Nexus Dashboard",
  status: "LIVE",
  description:
    "Interface de monitoramento em tempo real para infraestrutura de servidores descentralizados.",
  tags: ["React", "WebSockets", "ThreeJS"],
  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTJiAzxsJDbRE_hVMhyrySSLMZdKsqhalPAzTXK218CSzpgSp3fMIwpX4e1gv5enLjruTfJNZF74vVHkL69a52o-cRja8SNWBdn240tv1hVIgrKVCD8BuhrfXqN7rZRt9mJcUA0SXj77OEbqgkt_nOC7t7ADmAt8dPS3ZmA3-WUyVvH22PvY3JLzcQMjhhizBGEloX2H3x8VQ_OL6EhxdFo-vI4qqThOVg78_CSKp3P1gK5vHUbq131bOgIMpI8aRZxp5jJwSYqdIV",
    alt: "Interface futurista de ciberseguranca exibindo nos e telemetria.",
  },
} as const;

export const PROJECT_GRID = [
  {
    title: "Balance AI - Gestão financeira pessoal",
    description:
      "Plataforma corporativa de gestão financeira pessoal que utiliza inteligência artificial para monitorar movimentações e oferecer insights personalizados. O sistema permite o controle detalhado de orçamento com recursos",
    version: "2025",
    links: ["code", "external"],
    linkUrls: {
      code: "https://balance-neon.vercel.app/login",
      external: "https://youtu.be/SonR1LwSMjM?si=0w6e9cJDQLAwWcvo",
    },
  },
  {
    title: "AI copilador de Video",
    description:
      "Desenvolvido uma aplicação web, que recebe um video e interagindo com a API do chatgpt gera títulos, hashtags, e um resumo, do conteúdo do video.",
    version: "2024",
    links: ["code", "external"],
    linkUrls: {
      code: "https://github.com/ivanbs14/Upload_AI_web",
      external: "https://youtu.be/hX-rhRG8sfQ?si=kkNalRIODDp8TAfK",
    },
  },
  {
    title: "APP Clima",
    description:
      "Descubra o clima com facilidade! Esta aplicação fornece informações precisas e atualizadas sobre o clima em qualquer lugar do mundo...",
    version: "2024",
    links: ["code", "external"],
    linkUrls: {
      code: "https://github.com/ivanbs14/App_Clima",
      external: "https://youtu.be/LFhiYoKkfRk?si=ezxPxo7DohKf8CUT",
    },
  },
] as const;

export const TECH_MATRIX = [
  {
    category: "Frontend Core",
    tags: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND"],
  },
  {
    category: "Backend & Infra",
    tags: ["NEST.JS", "NODE.JS", "POSTGRESQL", "DOCKER", "AWS"],
  },
] as const;

export const EXPERIENCE_TIMELINE = [
  {
    period: "[ 2022 - ATUAL ]",
    title: "Senior Software Engineer",
    company: "TECH-NOVA CORP",
    highlights: [
      "Lideranca tecnica de squads ageis.",
      "Arquitetura de sistemas distribuidos.",
      "Otimizacao de performance (Lighthouse 100).",
    ],
    isActive: true,
  },
  {
    period: "[ 2020 - 2022 ]",
    title: "Fullstack Developer",
    company: "CYBER-FLOW SYSTEMS",
    highlights: [
      "Desenvolvimento de dashboards financeiros.",
      "Integracao de APIs de terceiros.",
    ],
    isActive: false,
  },
] as const;

export const PROFILE_BIO = {
  name: "Bio.init()",
  location: "Loc: Sao Paulo, BR",
  summary:
    "Sou um desenvolvedor apaixonado por interfaces futuristas e codigo limpo. Acredito que a tecnologia deve ser invisivel, porem poderosa.",
  principles: [
    "Desempenho primeiro",
    "UX minimalista",
    "Codigo semantico",
    "Foco em resultados",
  ],
  avatar: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUHyYW1C_23ILM4JKxd-QZp6UsGzyWWiZHn6GLKtawr4nabe15kNoFgxGObn4EKrQyN0-gAk1J-lVUr1nkjwm57Y5WqaELfq_DtAvewWmAlPqTYoPispNnDFgj5Jm1Vnoda5Ue1eRYkwTN3H9ZedX1318yPPhnIuj1vhWs4-45DeMf7-g_Pm_U1yamPRuz9-dt4Tb56hKStVDxvzN7_YJQ_qltDywTQ5mNyJgs_ErNFsuVwr0F3dsoJYDeUFgrzJVBfFFndg3FtZ4q",
    alt: "Retrato de um desenvolvedor de software.",
  },
} as const;

export const BOTTOM_HUD_NAV = [
  {
    label: "Home",
    icon: "home",
    isActive: true,
  },
  {
    label: "Projetos",
    icon: "projects",
    isActive: false,
  },
  {
    label: "Stack",
    icon: "stack",
    isActive: false,
  },
  {
    label: "Sobre",
    icon: "about",
    isActive: false,
  },
] as const;
