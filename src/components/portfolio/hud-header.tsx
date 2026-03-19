"use client";

import { useEffect, useState } from "react";
import { Languages, Moon, Sun } from "lucide-react";

import { Switch } from "@/components/ui/switch";

const THEME_STORAGE_KEY = "hud-theme";

export function HudHeader() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === "dark") {
      return true;
    }

    if (savedTheme === "light") {
      return false;
    }

    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    window.localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  }, [isDark]);

  const handleThemeChange = (checked: boolean) => {
    setIsDark(checked);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-primary/20 bg-background/80 p-4 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center border border-primary bg-primary/10 text-lg font-bold text-primary">
          I
        </div>
        <span className="text-xs font-bold tracking-widest text-primary/80 uppercase">
          Full-Stack Engineer
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-2 py-1">
          <Languages className="h-3.5 w-3.5 text-primary/80" aria-hidden="true" />
          <span className="text-[10px] font-bold tracking-widest text-white uppercase">
            PT
          </span>
          <span className="text-[10px] text-primary/40">|</span>
          <span className="text-[10px] font-bold tracking-widest text-primary/60 uppercase">
            EN
          </span>
        </div>
        <div className="flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-2 py-1">
          <Sun className="h-3.5 w-3.5 text-primary/70" aria-hidden="true" />
          <Switch
            checked={isDark}
            onCheckedChange={handleThemeChange}
            aria-label="Alternar estilo entre white e black"
          />
          <Moon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
