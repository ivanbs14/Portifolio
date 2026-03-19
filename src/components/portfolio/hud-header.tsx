"use client";

import { useEffect, useState } from "react";
import { Languages, Moon, Sun } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { usePortfolioLanguage } from "@/components/portfolio/language-provider";

const THEME_STORAGE_KEY = "hud-theme";

export function HudHeader() {
  const { language, setLanguage, t } = usePortfolioLanguage();

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

  const headerContainerClass = isDark
    ? "border-primary/20 bg-background/80 shadow-[0_10px_26px_-20px_rgba(0,234,255,0.55)]"
    : "border-primary/30 bg-background/95 shadow-[0_10px_22px_-18px_rgba(14,165,233,0.45)]";

  const controlContainerClass = isDark
    ? "border-primary/30 bg-primary/10"
    : "border-primary/40 bg-primary/15 shadow-[0_0_14px_rgba(14,165,233,0.2)]";

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between border-b p-4 backdrop-blur-md transition-all duration-300 ${headerContainerClass}`}
    >
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center border border-primary bg-primary/10 text-lg font-bold text-primary">
          I
        </div>
        <span className="text-xs font-bold tracking-widest text-primary/80 uppercase">
          {t("header.role")}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div
          aria-label={t("header.languageSelectorAria")}
          className={`flex items-center gap-2 rounded px-2 py-1 transition-all duration-300 ${controlContainerClass}`}
        >
          <Languages className="h-3.5 w-3.5 text-primary/80" aria-hidden="true" />
          <button
            type="button"
            onClick={() => setLanguage("pt")}
            className={`cursor-pointer text-[10px] font-bold tracking-widest uppercase transition-colors ${
              language === "pt"
                ? "text-white"
                : "text-primary/60 hover:text-primary/80"
            }`}
            aria-pressed={language === "pt"}
          >
            PT
          </button>
          <span className="text-[10px] text-primary/40">|</span>
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`cursor-pointer text-[10px] font-bold tracking-widest uppercase transition-colors ${
              language === "en"
                ? "text-white"
                : "text-primary/60 hover:text-primary/80"
            }`}
            aria-pressed={language === "en"}
          >
            EN
          </button>
        </div>
        <div
          className={`flex items-center gap-2 rounded px-2 py-1 transition-all duration-300 ${controlContainerClass}`}
        >
          <Sun className="h-3.5 w-3.5 text-primary/70" aria-hidden="true" />
          <Switch
            checked={isDark}
            onCheckedChange={handleThemeChange}
            aria-label={t("header.themeToggleAria")}
            className="cursor-pointer"
          />
          <Moon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
