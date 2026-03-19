"use client";

import { useMemo } from "react";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { usePortfolioLanguage } from "@/components/portfolio/language-provider";
import { METRICS_CHIPS } from "@/data/portfolio";

export function MetricsChips() {
  const { t } = usePortfolioLanguage();
  const metricLabelByValue = useMemo<Record<string, string>>(
    () => ({
      "5+": t("metric.yearsExp"),
      "99%": t("metric.perfScore"),
      SOLID: t("metric.cleanArch"),
    }),
    [t]
  );

  return (
    <section className="px-6 pb-8" aria-label={t("section.coreMetrics")}>
      <div className="grid grid-cols-3 gap-3">
        {METRICS_CHIPS.map((metric) => (
          <Card
            key={metric.label}
            className="gap-2 rounded border-primary/20 bg-primary/5 p-2 py-2 text-center shadow-none"
          >
            <p className="text-xl font-bold text-primary">{metric.value}</p>
            <Separator className="bg-primary/20" />
            <p className="text-[9px] tracking-widest text-muted-foreground uppercase">
              {metricLabelByValue[metric.value] ?? metric.label}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
