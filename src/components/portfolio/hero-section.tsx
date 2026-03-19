"use client";

import { useRef, useState } from "react";
import { Linkedin, Mail, Phone, Terminal } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePortfolioLanguage } from "@/components/portfolio/language-provider";
import { PROFILE_BIO } from "@/data/portfolio";

export function HeroSection() {
  const { t, resumeHref } = usePortfolioLanguage();
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);
  const copyTimeoutRef = useRef<number | null>(null);

  const handleCopy = async (value: string, field: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }

    setCopiedField(field);

    if (copyTimeoutRef.current) {
      window.clearTimeout(copyTimeoutRef.current);
    }

    copyTimeoutRef.current = window.setTimeout(() => {
      setCopiedField(null);
    }, 1800);
  };

  return (
    <section className="p-6 pt-12 pb-8 lg:px-4 lg:pt-8 lg:pb-6">
      <div className="corner-bracket border border-primary/10 bg-primary/5 p-6 lg:p-5">
          <div className="mb-4 flex items-start gap-4">
            <Avatar className="size-16 rounded-none border border-primary/40">
              <AvatarImage
                src={PROFILE_BIO.avatar.src}
                alt={PROFILE_BIO.avatar.alt}
                className="grayscale"
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

          <p className="mb-4 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
            {t("profile.summary")}
          </p>

          <span className="mt-2 block text-xs text-primary/80 font-mono">
            {"// Next.js, React, Node.js & TypeScript"}
          </span>

          <div className="flex flex-wrap gap-2 mt-4">
            {PROFILE_BIO.principles.map((principle) => (
              <Badge
                key={principle}
                variant="outline"
                className="max-w-full justify-start rounded-sm border-primary/20 bg-transparent px-2 py-1 text-[10px] leading-snug text-primary/70 whitespace-normal break-words"
              >
                {`● ${principle}`}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-start">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  className="h-auto w-full rounded bg-primary py-2 text-sm font-bold tracking-widest uppercase text-primary-foreground hover:bg-primary/90 lg:flex-1"
                >
                  <Terminal className="size-4" />
                  {t("hero.startContact")}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="inset-x-auto left-1/2 bottom-6 w-[calc(100%-3rem)] -translate-x-1/2 rounded-lg border border-primary/30 bg-background/95 p-5 sm:max-w-md sm:p-6"
              >
                <SheetHeader className="p-0 pr-8">
                  <SheetTitle className="text-primary uppercase tracking-widest text-sm">
                    {t("hero.contact")}
                  </SheetTitle>
                  <SheetDescription>{t("hero.contactDescription")}</SheetDescription>
                </SheetHeader>

                <div className="grid gap-3">
                  <button
                    type="button"
                    onClick={() => handleCopy(PROFILE_BIO.contact.email, "email")}
                    className="flex cursor-pointer items-center justify-between gap-3 rounded border border-primary/20 bg-primary/5 p-3 text-sm text-foreground transition-colors hover:bg-primary/10"
                  >
                    <span className="flex items-center gap-3">
                      <Mail className="size-4 text-primary" />
                      {PROFILE_BIO.contact.email}
                    </span>
                    {copiedField === "email" ? (
                      <span className="text-xs font-mono text-primary">{t("hero.copied")}</span>
                    ) : null}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopy(PROFILE_BIO.contact.phone, "phone")}
                    className="flex cursor-pointer items-center justify-between gap-3 rounded border border-primary/20 bg-primary/5 p-3 text-sm text-foreground transition-colors hover:bg-primary/10"
                  >
                    <span className="flex items-center gap-3">
                      <Phone className="size-4 text-primary" />
                      {PROFILE_BIO.contact.phone}
                    </span>
                    {copiedField === "phone" ? (
                      <span className="text-xs font-mono text-primary">{t("hero.copied")}</span>
                    ) : null}
                  </button>

                  <a
                    href={PROFILE_BIO.contact.linkedinHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded border border-primary/20 bg-primary/5 p-3 text-sm text-foreground transition-colors hover:bg-primary/10"
                  >
                    <Linkedin className="size-4 text-primary" />
                    {PROFILE_BIO.contact.linkedin}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
            <Button
              asChild
              variant="outline"
              className="h-auto w-full rounded border-primary/50 bg-primary/5 py-2 text-sm font-bold tracking-widest uppercase text-primary hover:bg-primary/10 hover:text-primary dark:bg-primary/5 dark:hover:bg-primary/10 lg:flex-1"
            >
              <a
                href={resumeHref}
                target="_blank"
                rel="noreferrer"
                download
              >
                {t("hero.downloadLabel")}
              </a>
            </Button>
          </div>
      </div>
    </section>
  );
}
