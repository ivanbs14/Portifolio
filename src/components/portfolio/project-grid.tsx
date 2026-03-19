"use client";

import { Code2, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioLanguage } from "@/components/portfolio/language-provider";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PROJECT_GRID } from "@/data/portfolio";

const LINK_ICON = {
  code: Code2,
  external: ExternalLink,
} as const;

type ProjectLink = keyof typeof LINK_ICON;
type ProjectLinkUrls = Partial<Record<ProjectLink, string>>;

const PROJECT_GRID_PT = [
  {
    title: "Balance AI - Gestao financeira pessoal",
    description:
      "Plataforma corporativa de gestao financeira pessoal que utiliza inteligencia artificial para monitorar movimentacoes e oferecer insights personalizados. O sistema permite o controle detalhado de orcamento com recursos avancados.",
  },
  {
    title: "AI copilador de Video",
    description:
      "Aplicacao web que recebe um video e, por meio da API do ChatGPT, gera titulos, hashtags e um resumo do conteudo.",
  },
  {
    title: "App Clima",
    description:
      "Descubra o clima com facilidade. Esta aplicacao fornece informacoes precisas e atualizadas sobre o clima em qualquer lugar do mundo.",
  },
] as const;

export function ProjectGrid() {
  const { language, t } = usePortfolioLanguage();
  const linkLabelByType: Record<ProjectLink, string> = {
    code: t("project.linkLabelCode"),
    external: t("project.linkLabelExternal"),
  };
  const localizedProjects = PROJECT_GRID.map((project, index) => {
    if (language !== "pt") {
      return project;
    }

    const translatedProject = PROJECT_GRID_PT[index];

    if (!translatedProject) {
      return project;
    }

    return {
      ...project,
      title: translatedProject.title,
      description: translatedProject.description,
    };
  });

  return (
    <section className="px-6 pb-12" aria-labelledby="project-grid-title">
      <div className="mb-4 flex items-center gap-4">
        <h2
          id="project-grid-title"
          className="text-xs font-bold tracking-[0.3em] whitespace-nowrap text-primary/60 uppercase"
        >
          {t("section.projectFiles")}
        </h2>
        <Separator className="w-auto flex-1 bg-primary/20" />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {localizedProjects.map((project, index) => (
          <Card
            key={`${project.version}-${index}`}
            className="corner-bracket rounded border-primary/10 bg-primary/5 p-0 shadow-none transition-colors hover:border-primary/40"
          >
            <CardContent className="space-y-3 p-4">
              <h3 className="text-sm font-bold tracking-wider text-foreground uppercase">
                {project.title}
              </h3>

              <p className="text-[11px] leading-snug text-muted-foreground">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <TooltipProvider>
                  <div className="flex items-center gap-2">
                    {project.links.map((link) => {
                      const Icon = LINK_ICON[link];
                      const href = (project.linkUrls as ProjectLinkUrls)[link];
                      const label = linkLabelByType[link];

                      if (href) {
                        return (
                          <Tooltip key={`${project.title}-${link}`}>
                            <TooltipTrigger asChild>
                              <a
                                href={href}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${label} ${t("project.linkTo")} ${project.title}`}
                                className="inline-flex"
                              >
                                <Badge
                                  variant="outline"
                                  className="rounded-sm border-primary/20 bg-primary/10 px-1.5 py-1 text-primary/70"
                                >
                                  <Icon className="size-3" />
                                </Badge>
                              </a>
                            </TooltipTrigger>
                            <TooltipContent sideOffset={6}>
                              {label}
                            </TooltipContent>
                          </Tooltip>
                        );
                      }

                      return (
                        <Tooltip key={`${project.title}-${link}`}>
                          <TooltipTrigger asChild>
                            <Badge
                              variant="outline"
                              className="rounded-sm border-primary/20 bg-primary/10 px-1.5 py-1 text-primary/70"
                            >
                              <Icon className="size-3" />
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent sideOffset={6}>{label}</TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </TooltipProvider>

                <Badge
                  variant="ghost"
                  className="rounded-sm px-0 font-mono text-[10px] text-muted-foreground"
                >
                  {project.version}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
