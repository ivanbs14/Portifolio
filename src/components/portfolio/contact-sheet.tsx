"use client";

import { useEffect, useRef, useState } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";

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

type ContactSheetProps = {
  children: React.ReactNode;
};

export function ContactSheet({ children }: ContactSheetProps) {
  const { t } = usePortfolioLanguage();
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

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="bottom"
        className="inset-x-auto left-1/2 bottom-6 w-[calc(100%-3rem)] -translate-x-1/2 rounded-lg border border-primary/30 bg-background/95 p-5 sm:max-w-md sm:p-6"
      >
        <SheetHeader className="p-0 pr-8">
          <SheetTitle className="text-sm tracking-widest text-primary uppercase">
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
  );
}
