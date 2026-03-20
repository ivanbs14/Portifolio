"use client";

import { useMemo } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioLanguage } from "@/components/portfolio/language-provider";
import { TECH_MATRIX } from "@/data/portfolio";

export function TechMatrix() {
  const { t } = usePortfolioLanguage();
  const categoryLabelByKey = useMemo<Record<string, string>>(
    () => ({
      Languages: t("tech.languages"),
      Frontend: t("tech.frontend"),
      Backend: t("tech.backend"),
      Databases: t("tech.databases"),
      "Cloud / DevOps": t("tech.cloudDevops"),
      "AI / LLM": t("tech.aiLlm"),
    }),
    [t]
  );

  return (
    <section
      id="section-stack"
      className="scroll-mt-28 px-6 pb-12 lg:px-4 lg:pb-8"
      aria-labelledby="tech-matrix-title"
    >
      <Card className="rounded border-primary/30 bg-primary/5 p-0 shadow-none">
        <CardContent className="space-y-4 p-6 lg:space-y-2 lg:p-5">
          <h2
            id="tech-matrix-title"
            className="text-center text-xs font-bold tracking-[0.4em] text-primary uppercase"
          >
            {t("section.techMatrix")}
          </h2>

          <div className="space-y-2 lg:space-y-2">
            {TECH_MATRIX.map((group) => (
              <div key={group.category}>
                <span className="mb-2 block text-[10px] tracking-widest text-muted-foreground uppercase lg:text-xs">
                  {categoryLabelByKey[group.category] ?? group.category}
                </span>

                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <Badge
                      key={`${group.category}-${tag}`}
                      variant="outline"
                      className="rounded-sm border-primary/20 bg-primary/10 text-[10px] text-primary lg:text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
