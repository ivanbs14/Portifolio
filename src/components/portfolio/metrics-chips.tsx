import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { METRICS_CHIPS } from "@/data/portfolio";

export function MetricsChips() {
  return (
    <section className="px-6 pb-8" aria-label="Metricas principais">
      <div className="grid grid-cols-3 gap-3">
        {METRICS_CHIPS.map((metric) => (
          <Card
            key={metric.label}
            className="gap-2 rounded border-primary/20 bg-primary/5 p-2 py-2 text-center shadow-none"
          >
            <p className="text-xl font-bold text-primary">{metric.value}</p>
            <Separator className="bg-primary/20" />
            <p className="text-[9px] tracking-widest text-muted-foreground uppercase">
              {metric.label}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
