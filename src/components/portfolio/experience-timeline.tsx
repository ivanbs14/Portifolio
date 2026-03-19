import { EXPERIENCE_TIMELINE } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section className="px-6 pb-12" aria-labelledby="experience-timeline-title">
      <h2
        id="experience-timeline-title"
        className="mb-6 text-xs font-bold tracking-[0.3em] text-primary/60 uppercase"
      >
        Logs de experiencia
      </h2>

      <div className="relative space-y-8 before:absolute before:top-2 before:bottom-0 before:left-[11px] before:w-px before:bg-primary/20 before:content-['']">
        {EXPERIENCE_TIMELINE.map((entry) => (
          <article key={`${entry.period}-${entry.title}`} className="relative pl-8">
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
