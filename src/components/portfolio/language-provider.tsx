"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type PortfolioLanguage = "pt" | "en";

const DEFAULT_LANGUAGE: PortfolioLanguage = "en";
const LANGUAGE_STORAGE_KEY = "hud-language";

const EN_TRANSLATIONS = {
  "header.role": "Full-Stack Engineer",
  "header.languageSelectorAria": "Select interface language",
  "header.themeToggleAria": "Toggle theme between light and dark",

  "hero.startContact": "Start Contact",
  "hero.contact": "Contact",
  "hero.contactDescription": "Reach out via email, phone, or LinkedIn.",
  "hero.copied": "Copied",
  "hero.downloadLabel": "Download Resume",
  "profile.summary":
    "Full-Stack Software Engineer with experience in end-to-end web application development using React, Next.js, NestJS, TypeScript, and PostgreSQL, working with REST APIs, AWS cloud integrations, and AI solutions with Azure OpenAI and the OpenAI API.",

  "nav.home": "Home",
  "nav.projects": "Projects",
  "nav.stack": "Stack",
  "nav.about": "About",
  "nav.ariaLabel": "Bottom navigation",
  "nav.newActionAria": "New action",

  "section.coreMetrics": "Core metrics",
  "section.featuredMission": "Featured Mission",
  "section.techMatrix": "Tech Matrix",
  "section.experienceLogs": "Experience Logs",
  "section.projectFiles": "Project Files",

  "project.linkTo": "link to",
  "project.linkLabelCode": "Code",
  "project.linkLabelExternal": "External",

  "metric.yearsExp": "Years Exp",
  "metric.perfScore": "Perf Score",
  "metric.cleanArch": "Clean Arch",

  "tech.languages": "Languages",
  "tech.frontend": "Frontend",
  "tech.backend": "Backend",
  "tech.databases": "Databases",
  "tech.cloudDevops": "Cloud / DevOps",
  "tech.aiLlm": "AI / LLM",
} as const;

type TranslationKey = keyof typeof EN_TRANSLATIONS;

const UI_TRANSLATIONS: Record<PortfolioLanguage, Record<TranslationKey, string>> = {
  en: EN_TRANSLATIONS,
  pt: {
    "header.role": "Engenheiro Full-Stack",
    "header.languageSelectorAria": "Selecionar idioma da interface",
    "header.themeToggleAria": "Alternar tema entre claro e escuro",

    "hero.startContact": "Iniciar Contato",
    "hero.contact": "Contato",
    "hero.contactDescription": "Fale comigo por e-mail, telefone ou LinkedIn.",
    "hero.copied": "Copiado",
    "hero.downloadLabel": "Download CV",
    "profile.summary":
      "Engenheiro de Software Full-Stack com experiencia em desenvolvimento ponta a ponta de aplicacoes web com React, Next.js, NestJS, TypeScript e PostgreSQL, atuando com APIs REST, integracoes em nuvem na AWS e solucoes de IA com Azure OpenAI e OpenAI API.",

    "nav.home": "Home",
    "nav.projects": "Projetos",
    "nav.stack": "Stack",
    "nav.about": "Sobre",
    "nav.ariaLabel": "Navegacao inferior",
    "nav.newActionAria": "Nova acao",

    "section.coreMetrics": "Metricas principais",
    "section.featuredMission": "Missao em destaque",
    "section.techMatrix": "Matriz tecnologica",
    "section.experienceLogs": "Logs de experiencia",
    "section.projectFiles": "Arquivos de projeto",

    "project.linkTo": "link para",
    "project.linkLabelCode": "Codigo",
    "project.linkLabelExternal": "Externo",

    "metric.yearsExp": "Anos Exp",
    "metric.perfScore": "Perf Score",
    "metric.cleanArch": "Clean Arch",

    "tech.languages": "Linguagens",
    "tech.frontend": "Frontend",
    "tech.backend": "Backend",
    "tech.databases": "Banco de Dados",
    "tech.cloudDevops": "Cloud / DevOps",
    "tech.aiLlm": "IA / LLM",
  },
};

const RESUME_LINKS: Record<PortfolioLanguage, string> = {
  pt: "/resume/ivan-barbosa-cv-pt.txt",
  en: "/resume/ivan-barbosa-resume-en.txt",
};

type PortfolioLanguageContextValue = {
  language: PortfolioLanguage;
  setLanguage: (language: PortfolioLanguage) => void;
  t: (key: TranslationKey) => string;
  resumeHref: string;
};

const PortfolioLanguageContext = createContext<PortfolioLanguageContextValue | null>(null);

const isPortfolioLanguage = (value: string | null): value is PortfolioLanguage =>
  value === "pt" || value === "en";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<PortfolioLanguage>(DEFAULT_LANGUAGE);
  const [hasHydratedLanguage, setHasHydratedLanguage] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isPortfolioLanguage(savedLanguage)) {
      setLanguage(savedLanguage);
    }

    setHasHydratedLanguage(true);
  }, []);

  useEffect(() => {
    if (!hasHydratedLanguage) {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [hasHydratedLanguage, language]);

  const value = useMemo<PortfolioLanguageContextValue>(() => {
    const t = (key: TranslationKey) =>
      UI_TRANSLATIONS[language][key] ?? UI_TRANSLATIONS.en[key];

    return {
      language,
      setLanguage,
      t,
      resumeHref: RESUME_LINKS[language] ?? RESUME_LINKS.en,
    };
  }, [language]);

  return (
    <PortfolioLanguageContext.Provider value={value}>
      {children}
    </PortfolioLanguageContext.Provider>
  );
}

export function usePortfolioLanguage() {
  const context = useContext(PortfolioLanguageContext);

  if (!context) {
    throw new Error("usePortfolioLanguage must be used within LanguageProvider");
  }

  return context;
}
