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
    category: "Linguagens",
    tags: ["TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    tags: ["React", "Next.js", "Tailwind CSS", "Styled Components"],
  },
  {
    category: "Backend",
    tags: [
      "NestJS",
      "Node.js",
      "Express",
      "REST API",
      "DTO Validation",
      "Dependency Injection",
      "JWT",
      "Swagger/OpenAPI",
    ],
  },
  {
    category: "Banco de Dados",
    tags: ["PostgreSQL", "Prisma", "TypeORM"],
  },
  {
    category: "Cloud / DevOps",
    tags: ["AWS", "Docker", "CI/CD", "Git", "GitLab CI"],
  },
  {
    category: "IA / LLM",
    tags: [
      "Azure OpenAI",
      "OpenAI API",
      "AI Agents",
      "Prompt Engineering",
      "LLM API Integration",
      "Workflow Orchestration",
      "Structured Data Extraction",
      "Data Classification",
    ],
  },
] as const;

export const EXPERIENCE_TIMELINE = [
  {
    period: "[ Jun/2025 - Atual ]",
    title: "Full-Stack Developer",
    company: "LongView Tecnologia",
    highlights: [
      "Desenvolver funcionalidades ponta a ponta em Next.js, NestJS, TypeScript e PostgreSQL nas camadas de frontend, backend e banco de dados.",
      "Projetar e evoluir APIs REST com padroes de resposta e tratamento de erros para melhorar consistencia e manutencao.",
      "Implementar integracoes AWS com Amazon S3 e AWS Lambda para suportar automacoes de upload e processamento.",
      "Construir fluxos com Azure OpenAI e OpenAI para suporte ao cliente, automacao interna e extracao de dados estruturados.",
    ],
    isActive: true,
  },
  {
    period: "[ Out/2024 - Mai/2025 ]",
    title: "Tech Lead | Full Stack Developer",
    company: "Hausey",
    highlights: [
      "Conduzir lideranca tecnica da equipe, apoiando organizacao de entregas e decisoes arquitetonicas alinhadas aos padroes de engenharia.",
      "Entregar funcionalidades com Next.js, NestJS e banco relacional com foco em manutencao, previsibilidade e escalabilidade.",
      "Apoiar melhorias de CI/CD, revisoes de codigo e boas praticas durante o ciclo de entrega de software.",
      "Contribuir com integracoes AWS para armazenamento de arquivos e rotinas automatizadas no backend.",
    ],
    isActive: false,
  },
  {
    period: "[ Dez/2023 - Out/2024 ]",
    title: "Front-end Developer",
    company: "Bugaboo Studio",
    highlights: [
      "Desenvolver interfaces responsivas com React, TypeScript, Tailwind CSS e Styled Components para entregas de frontend.",
      "Aprimorar usabilidade e consistencia visual com foco em acessibilidade e experiencia do usuario.",
      "Integrar aplicacoes frontend com APIs REST, colaborando no alinhamento de contratos e entrega incremental de funcionalidades.",
    ],
    isActive: false,
  },
  {
    period: "[ Jan/2023 - Dez/2023 ]",
    title: "Full Stack Developer",
    company: "CodeDraw Technology",
    highlights: [
      "Desenvolver e manter funcionalidades de aplicacoes com React.js e Styled Components no frontend.",
      "Implementar servicos de backend com Node.js e integracoes de API para suportar funcionalidades de produto.",
      "Utilizar Docker, GitLab CI e fluxo baseado em Git no pipeline de desenvolvimento e entrega.",
    ],
    isActive: false,
  },
] as const;

export const PROFILE_BIO = {
  name: "Ivan Barbosa da Silva",
  location: "Fortaleza/CE",
  summary:
    "Engenheiro de Software Full-Stack com experiencia em desenvolvimento ponta a ponta de aplicacoes web com React, Next.js, NestJS, TypeScript e PostgreSQL, atuando com APIs REST, integracoes em nuvem na AWS e solucoes de IA com Azure OpenAI e OpenAI API.",
  principles: [
    "Engenharia escalavel em arquitetura modular",
    "Qualidade de entrega com revisao de codigo e CI/CD",
    "Colaboracao tecnica e lideranca de equipe",
    "Desenvolvimento full-stack ponta a ponta",
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
