"use client";

import { Terminal } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactSheet } from "@/components/portfolio/contact-sheet";
import { usePortfolioLanguage } from "@/components/portfolio/language-provider";
import { PROFILE_BIO } from "@/data/portfolio";

export function HeroSection() {
  const { t, resumeHref } = usePortfolioLanguage();
  const translatedPrinciples = [
    t("profile.principle.scalableArchitecture"),
    t("profile.principle.technicalLeadership"),
    t("profile.principle.teamCollaboration"),
    t("profile.principle.fullStack"),
  ];

  return (
    <section
      id="section-home"
      className="scroll-mt-28 p-6 pt-6 pb-8 lg:px-4 lg:pt-4 lg:pb-4"
    >
      <div className="corner-bracket overflow-hidden border border-primary/10 bg-primary/5 lg:grid lg:grid-cols-[minmax(160px,20%)_1fr] lg:p-0">
        <div className="relative hidden lg:block lg:p-7">
          <img
            src={PROFILE_BIO.avatar.src}
            alt={PROFILE_BIO.avatar.alt}
            className="h-full w-full object-contain object-center"
          />
          <div className="pointer-events-none absolute inset-7 bg-gradient-to-tr from-background/35 via-transparent to-transparent" />
        </div>

        <div className="p-6 lg:flex lg:flex-col lg:justify-between lg:p-7">
          <div>
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <Avatar className="size-16 rounded-none border border-primary/40 lg:hidden">
                  <AvatarImage
                    src={PROFILE_BIO.avatar.src}
                    alt={PROFILE_BIO.avatar.alt}
                    className="object-cover object-center"
                  />
                  <AvatarFallback className="rounded-none bg-primary/10 font-bold text-primary">
                    I
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0">
                  <h2 className="text-base font-bold leading-tight text-foreground sm:text-lg">
                    {PROFILE_BIO.name}
                  </h2>
                  <p className="text-[10px] font-mono tracking-tight text-primary uppercase">
                    {PROFILE_BIO.location}
                  </p>
                </div>
              </div>

            </div>

            <p className="mb-4 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
              {t("profile.summary")}
            </p>

            <span className="mt-2 block text-xs font-mono text-primary/80">
              {"React | Next.js | NestJS | TypeScript | PostgreSQL | Azure OpenAI | AWS"}
            </span>

            <div className="mt-4 flex flex-wrap gap-2">
              {translatedPrinciples.map((principle) => (
                <Badge
                  key={principle}
                  variant="outline"
                  className="max-w-full justify-start rounded-sm border-primary/20 bg-transparent px-2 py-1 text-[10px] leading-snug text-primary/70 whitespace-normal break-words"
                >
                  {`● ${principle}`}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-start">
            <ContactSheet>
                <Button
                  type="button"
                  className="h-auto w-full rounded bg-primary py-2 text-sm font-bold tracking-widest uppercase text-primary-foreground hover:bg-primary/90 lg:flex-1"
                >
                  <Terminal className="size-4" />
                  {t("hero.startContact")}
                </Button>
            </ContactSheet>
            <Button
              asChild
              variant="outline"
              className="h-auto w-full rounded border-primary/50 bg-primary/5 py-2 text-sm font-bold tracking-widest uppercase text-primary hover:bg-primary/10 hover:text-primary dark:bg-primary/5 dark:hover:bg-primary/10 lg:flex-1"
            >
              <a
                href={resumeHref}
                target="_blank"
                rel="noreferrer noopener"
              >
                {t("hero.downloadLabel")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
