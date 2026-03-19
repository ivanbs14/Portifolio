import { Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="p-6 pt-12 pb-8">
      <div className="corner-bracket border border-primary/10 bg-primary/5 p-6">
        <h1 className="mb-4 text-3xl leading-tight font-extrabold tracking-tight text-foreground">
          Construindo <span className="text-primary italic">sistemas escaláveis</span>{" "}
          e interfaces HUD
        </h1>

        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          Fullstack Developer focado em arquiteturas reativas de alta
          performance.
          <span className="mt-2 block text-xs text-primary/80 font-mono">
            {"// Next.js, React, Node.js & TypeScript"}
          </span>
        </p>

        <div className="flex flex-col gap-3">
          <Button
            type="button"
            className="h-auto w-full rounded bg-primary py-3 text-sm font-bold tracking-widest uppercase text-primary-foreground shadow-[0_0_20px_rgba(0,234,255,0.4)] hover:bg-primary/90"
          >
            <Terminal className="size-4" />
            Iniciar Contato
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-auto w-full rounded border-primary/50 bg-primary/5 py-3 text-sm font-bold tracking-widest uppercase text-primary hover:bg-primary/10 hover:text-primary dark:bg-primary/5 dark:hover:bg-primary/10"
          >
            Ver Projetos
          </Button>
        </div>
      </div>
    </section>
  );
}
