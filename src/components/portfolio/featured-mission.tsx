import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FEATURED_MISSION } from "@/data/portfolio";

export function FeaturedMission() {
  return (
    <section className="px-6 pb-12" aria-labelledby="featured-mission-title">
      <div className="mb-4 flex items-center gap-4">
        <h2
          id="featured-mission-title"
          className="text-xs font-bold tracking-[0.3em] whitespace-nowrap text-primary/60 uppercase"
        >
          Missao em destaque
        </h2>
        <Separator className="w-auto flex-1 bg-primary/20" />
      </div>

      <div className="group relative">
        <div className="absolute -inset-0.5 rounded-lg bg-primary/20 opacity-30 blur" />

        <Card className="relative gap-0 overflow-hidden rounded-lg border-primary/30 bg-card/90 p-0 shadow-none">
          {/* Using img here because the source is an external mock URL from stitch/code.html. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FEATURED_MISSION.image.src}
            alt={FEATURED_MISSION.image.alt}
            className="h-48 w-full object-cover opacity-60 grayscale transition-all duration-300 group-hover:grayscale-0"
          />

          <CardContent className="space-y-4 border-t border-primary/20 bg-background/80 p-4">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-bold tracking-wide text-primary uppercase">
                {FEATURED_MISSION.title}
              </h3>
              <Badge
                variant="outline"
                className="rounded-sm border-primary/40 bg-primary/10 text-[10px] font-semibold tracking-widest text-primary"
              >
                {FEATURED_MISSION.status}
              </Badge>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              {FEATURED_MISSION.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {FEATURED_MISSION.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="ghost"
                  className="rounded-sm border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[9px] tracking-wider text-primary/80"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
