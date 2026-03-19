"use client";

import { usePortfolioLanguage } from "@/components/portfolio/language-provider";
import { EXPERIENCE_TIMELINE } from "@/data/portfolio";

const EXPERIENCE_TIMELINE_PT = [
  {
    period: "[ Jun/2025 - Atual ]",
    title: "Desenvolvedor Full-Stack",
    highlights: [
      "Desenvolver funcionalidades ponta a ponta em Next.js, NestJS, TypeScript e PostgreSQL nas camadas de frontend, backend e banco de dados.",
      "Projetar e evoluir APIs REST com padroes de resposta e tratamento de erros para melhorar consistencia e manutencao.",
      "Implementar integracoes AWS com Amazon S3 e AWS Lambda para suportar automacoes de upload e processamento.",
      "Construir fluxos com Azure OpenAI e OpenAI para suporte ao cliente, automacao interna e extracao de dados estruturados.",
    ],
  },
  {
    period: "[ Out/2024 - Mai/2025 ]",
    title: "Tech Lead | Desenvolvedor Full Stack",
    highlights: [
      "Conduzir lideranca tecnica da equipe, apoiando organizacao de entregas e decisoes arquitetonicas alinhadas aos padroes de engenharia.",
      "Entregar funcionalidades com Next.js, NestJS e banco relacional com foco em manutencao, previsibilidade e escalabilidade.",
      "Apoiar melhorias de CI/CD, revisoes de codigo e boas praticas durante o ciclo de entrega de software.",
      "Contribuir com integracoes AWS para armazenamento de arquivos e rotinas automatizadas no backend.",
    ],
  },
  {
    period: "[ Dez/2023 - Out/2024 ]",
    title: "Desenvolvedor Front-end",
    highlights: [
      "Desenvolver interfaces responsivas com React, TypeScript, Tailwind CSS e Styled Components para entregas de frontend.",
      "Aprimorar usabilidade e consistencia visual com foco em acessibilidade e experiencia do usuario.",
      "Integrar aplicacoes frontend com APIs REST, colaborando no alinhamento de contratos e entrega incremental de funcionalidades.",
    ],
  },
  {
    period: "[ Jan/2023 - Dez/2023 ]",
    title: "Desenvolvedor Full Stack",
    highlights: [
      "Desenvolver e manter funcionalidades de aplicacoes com React.js e Styled Components no frontend.",
      "Implementar servicos de backend com Node.js e integracoes de API para suportar funcionalidades de produto.",
      "Utilizar Docker, GitLab CI e fluxo baseado em Git no pipeline de desenvolvimento e entrega.",
    ],
  },
] as const;

export function ExperienceTimeline() {
  const { t, language } = usePortfolioLanguage();
  const localizedTimeline = EXPERIENCE_TIMELINE.map((entry, index) => {
    if (language !== "pt") {
      return entry;
    }

    const translatedEntry = EXPERIENCE_TIMELINE_PT[index];

    if (!translatedEntry) {
      return entry;
    }

    return {
      ...entry,
      period: translatedEntry.period,
      title: translatedEntry.title,
      highlights: translatedEntry.highlights,
    };
  });

  return (
    <section className="px-6 pb-12 lg:px-4 lg:pb-8" aria-labelledby="experience-timeline-title">
      <h2
        id="experience-timeline-title"
        className="mb-6 text-xs font-bold tracking-[0.3em] text-primary/60 uppercase lg:mb-5"
      >
        {t("section.experienceLogs")}
      </h2>

      <div className="relative space-y-8 before:absolute before:top-2 before:bottom-0 before:left-[11px] before:w-px before:bg-primary/20 before:content-[''] lg:space-y-7">
        {localizedTimeline.map((entry) => (
          <article key={`${entry.period}-${entry.title}`} className="relative pl-8 lg:pl-7">
            <div
              className={`absolute top-1 left-0 flex h-6 w-6 items-center justify-center rounded-full border ${
                entry.isActive
                  ? "border-primary bg-background"
                  : "border-primary/40 bg-background"
              }`}
              aria-hidden
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  entry.isActive ? "bg-primary" : "bg-primary/40"
                }`}
              />
            </div>

            <p
              className={`mb-1 font-mono text-[10px] ${
                entry.isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {entry.period}
            </p>
            <h3
              className={`tracking-tight uppercase ${
                entry.isActive ? "font-bold text-foreground" : "font-bold text-foreground/80"
              }`}
            >
              {entry.title}
            </h3>
            <p
              className={`mb-2 text-xs font-medium tracking-wide ${
                entry.isActive ? "text-muted-foreground" : "text-muted-foreground/80"
              }`}
            >
              {entry.company}
            </p>

            <ul
              className={`list-inside list-disc space-y-1 text-[11px] ${
                entry.isActive ? "text-muted-foreground" : "text-muted-foreground/80"
              }`}
            >
              {entry.highlights.map((highlight) => (
                <li key={`${entry.title}-${highlight}`}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
