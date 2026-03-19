import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TECH_MATRIX } from "@/data/portfolio";

export function TechMatrix() {
  return (
    <section className="px-6 pb-12" aria-labelledby="tech-matrix-title">
      <Card className="rounded border-primary/30 bg-primary/5 p-0 shadow-none">
        <CardContent className="space-y-6 p-6">
          <h2
            id="tech-matrix-title"
            className="text-center text-xs font-bold tracking-[0.4em] text-primary uppercase"
          >
            Matriz tecnologica
          </h2>

          <div className="space-y-6">
            {TECH_MATRIX.map((group) => (
              <div key={group.category}>
                <span className="mb-2 block text-[10px] tracking-widest text-muted-foreground uppercase">
                  {group.category}
                </span>

                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <Badge
                      key={`${group.category}-${tag}`}
                      variant="outline"
                      className="rounded-sm border-primary/20 bg-primary/10 text-[10px] text-primary"
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
