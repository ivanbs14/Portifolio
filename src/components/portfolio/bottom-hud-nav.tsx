"use client";

import { useEffect, useMemo, useState } from "react";
import { BarChart3, GitBranch, Home, Terminal, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactSheet } from "@/components/portfolio/contact-sheet";
import { usePortfolioLanguage } from "@/components/portfolio/language-provider";
import { BOTTOM_HUD_NAV } from "@/data/portfolio";

const NAV_ICON = {
  home: Home,
  projects: GitBranch,
  stack: BarChart3,
  about: User,
} as const;

const NAV_SECTION_ID = {
  home: "section-home",
  projects: "section-projects",
  stack: "section-stack",
  about: "section-experience",
} as const;

type NavIcon = keyof typeof NAV_ICON;

const NAV_GRID_COLUMNS = ["col-start-1", "col-start-2", "col-start-4", "col-start-5"] as const;

export function BottomHudNav() {
  const { t } = usePortfolioLanguage();
  const [activeIcon, setActiveIcon] = useState<NavIcon>("home");

  const navLabelByIcon = useMemo(
    () =>
      ({
        home: t("nav.home"),
        projects: t("nav.projects"),
        stack: t("nav.stack"),
        about: t("nav.about"),
      }) as const,
    [t]
  );

  useEffect(() => {
    const sections = (Object.entries(NAV_SECTION_ID) as [NavIcon, string][])
      .map(([icon, id]) => {
        const element = document.getElementById(id);

        if (!element) {
          return null;
        }

        return { icon, element };
      })
      .filter((section): section is { icon: NavIcon; element: HTMLElement } => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) {
          return;
        }

        const mostVisibleEntry = visibleEntries.reduce((bestEntry, currentEntry) =>
          currentEntry.intersectionRatio > bestEntry.intersectionRatio ? currentEntry : bestEntry
        );
        const activeSection = sections.find(
          (section) => section.element === mostVisibleEntry.target
        );

        if (activeSection) {
          setActiveIcon(activeSection.icon);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-15% 0px -45% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section.element);
    });

    return () => observer.disconnect();
  }, []);

  const navigateToSection = (icon: NavIcon) => {
    const targetSectionId = NAV_SECTION_ID[icon];
    const targetSection = document.getElementById(targetSectionId);

    if (!targetSection) {
      return;
    }

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveIcon(icon);
  };

  return (
    <nav
      className="fixed bottom-0 left-1/2 z-50 w-full max-w-md -translate-x-1/2 border-t border-primary/20 bg-background/90 px-4 py-3 backdrop-blur-md lg:hidden"
      aria-label={t("nav.ariaLabel")}
    >
      <div className="relative grid w-full grid-cols-5 items-end">
        {BOTTOM_HUD_NAV.map((item, index) => {
          const Icon = NAV_ICON[item.icon];
          const label = navLabelByIcon[item.icon] ?? item.label;
          const columnClass = NAV_GRID_COLUMNS[index] ?? "col-start-5";

          return (
            <div key={item.icon} className={`${columnClass} row-start-1 flex justify-center`}>
              <Button
                type="button"
                variant="ghost"
                onClick={() => navigateToSection(item.icon)}
                className={`h-auto flex-col gap-1 px-2 py-1 hover:bg-primary/10 ${
                  activeIcon === item.icon
                    ? "text-primary hover:text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="size-4" />
                <span className="text-[8px] font-bold tracking-wide uppercase">
                  {label}
                </span>
              </Button>
            </div>
          );
        })}

        <ContactSheet>
          <Button
            type="button"
            size="icon"
            className="absolute top-0 left-1/2 size-12 -translate-x-1/2 -translate-y-8 rounded-full border-4 border-background bg-primary text-primary-foreground shadow-[0_0_15px_rgba(2,78,132,0.5)] dark:shadow-[0_0_15px_rgba(0,102,204,0.5)] hover:bg-primary/90"
            aria-label={t("hero.startContact")}
          >
            <Terminal className="size-5" />
          </Button>
        </ContactSheet>
      </div>
    </nav>
  );
}
