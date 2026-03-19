import { BarChart3, GitBranch, Home, Plus, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOTTOM_HUD_NAV } from "@/data/portfolio";

const NAV_ICON = {
  home: Home,
  projects: GitBranch,
  stack: BarChart3,
  about: User,
} as const;

export function BottomHudNav() {
  const leftItems = BOTTOM_HUD_NAV.slice(0, 2);
  const rightItems = BOTTOM_HUD_NAV.slice(2);

  return (
    <nav
      className="fixed right-0 bottom-0 left-0 z-50 mx-auto flex max-w-md items-center justify-between border-t border-primary/20 bg-background/90 px-6 py-3 backdrop-blur-xl"
      aria-label="Navegacao inferior"
    >
      {leftItems.map((item) => {
        const Icon = NAV_ICON[item.icon];

        return (
          <Button
            key={item.label}
            type="button"
            variant="ghost"
            className={`h-auto flex-col gap-1 px-2 py-1 hover:bg-primary/10 ${
              item.isActive ? "text-primary hover:text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="size-4" />
            <span className="text-[8px] font-bold tracking-wide uppercase">
              {item.label}
            </span>
          </Button>
        );
      })}

      <Button
        type="button"
        size="icon"
        className="size-12 -translate-y-4 rounded-full border-4 border-background bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,234,255,0.5)] hover:bg-primary/90"
        aria-label="Nova acao"
      >
        <Plus className="size-5" />
      </Button>

      {rightItems.map((item) => {
        const Icon = NAV_ICON[item.icon];

        return (
          <Button
            key={item.label}
            type="button"
            variant="ghost"
            className={`h-auto flex-col gap-1 px-2 py-1 hover:bg-primary/10 ${
              item.isActive ? "text-primary hover:text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="size-4" />
            <span className="text-[8px] font-bold tracking-wide uppercase">
              {item.label}
            </span>
          </Button>
        );
      })}
    </nav>
  );
}
