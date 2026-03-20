"use client";

import { useEffect, useRef, useState } from "react";

import {
  MATRIX_BG_TOGGLE_EVENT,
  type MatrixBackgroundToggleDetail,
} from "@/lib/matrix-background-signal";

const MATRIX_CHARS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";
const MATRIX_FADE_MS = 420;

function resolveHudBlueColor(alpha: number, fallback: string) {
  const hudBlueVar = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--hud-blue-rgb")
    .trim();
  const channels = hudBlueVar
    .split(/\s+/)
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value));

  if (channels.length !== 3) {
    return fallback;
  }

  const [r, g, b] = channels;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function resolveMatrixPalette(isDarkTheme: boolean) {
  if (isDarkTheme) {
    return {
      drawColor: resolveHudBlueColor(0.22, "rgba(0, 140, 255, 0.22)"),
      trailColor: "rgba(2, 12, 28, 0.12)",
      alphaMin: 0.45,
      alphaJitter: 0.35,
    };
  }

  return {
    drawColor: resolveHudBlueColor(0.56, "rgba(2, 78, 132, 0.56)"),
    trailColor: "rgba(246, 251, 255, 0.12)",
    alphaMin: 0.72,
    alphaJitter: 0.24,
  };
}

function MatrixBackgroundLayer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const clearTimeoutRef = useRef<number | null>(null);
  const activeSourcesRef = useRef<Set<string>>(new Set());
  const [canAnimate, setCanAnimate] = useState(false);
  const [isExternallyActive, setIsExternallyActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncReducedMotion = () => {
      setCanAnimate(!mediaQuery.matches);
    };

    syncReducedMotion();
    mediaQuery.addEventListener("change", syncReducedMotion);

    return () => {
      mediaQuery.removeEventListener("change", syncReducedMotion);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const syncTheme = () => {
      setIsDarkTheme(root.classList.contains("dark"));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleToggle = (event: Event) => {
      const detail = (event as CustomEvent<MatrixBackgroundToggleDetail>).detail;

      if (!detail?.source) {
        return;
      }

      if (detail.active) {
        activeSourcesRef.current.add(detail.source);
      } else {
        activeSourcesRef.current.delete(detail.source);
      }

      setIsExternallyActive(activeSourcesRef.current.size > 0);
    };

    window.addEventListener(MATRIX_BG_TOGGLE_EVENT, handleToggle as EventListener);

    return () => {
      window.removeEventListener(
        MATRIX_BG_TOGGLE_EVENT,
        handleToggle as EventListener
      );
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const shouldAnimate = canAnimate && isExternallyActive;

    if (!canvas) {
      return;
    }

    if (!shouldAnimate) {
      if (clearTimeoutRef.current !== null) {
        window.clearTimeout(clearTimeoutRef.current);
      }

      clearTimeoutRef.current = window.setTimeout(() => {
        if (canAnimate && isExternallyActive) {
          return;
        }

        const context = canvas.getContext("2d");
        if (context) {
          context.clearRect(0, 0, canvas.width, canvas.height);
        }
      }, MATRIX_FADE_MS);

      return;
    }

    if (clearTimeoutRef.current !== null) {
      window.clearTimeout(clearTimeoutRef.current);
      clearTimeoutRef.current = null;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const glyphs = Array.from(MATRIX_CHARS);
    const palette = resolveMatrixPalette(isDarkTheme);
    const frameBudget = 46;
    const fontSize = window.innerWidth < 768 ? 22 : 30;
    const columnWidth = fontSize + 4;
    const rowStep = fontSize + 2;

    let width = 0;
    let height = 0;
    let drops: number[] = [];
    let lastFrameTime = 0;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);
      context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`;
      context.textBaseline = "top";

      const columns = Math.max(1, Math.floor(width / columnWidth));
      const maxRows = Math.max(1, Math.ceil(height / rowStep));
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * maxRows));
    };

    const drawFrame = (timestamp: number) => {
      if (document.visibilityState !== "visible") {
        animationRef.current = window.requestAnimationFrame(drawFrame);
        return;
      }

      if (timestamp - lastFrameTime < frameBudget) {
        animationRef.current = window.requestAnimationFrame(drawFrame);
        return;
      }

      lastFrameTime = timestamp;
      context.fillStyle = palette.trailColor;
      context.fillRect(0, 0, width, height);
      context.fillStyle = palette.drawColor;

      for (let column = 0; column < drops.length; column += 1) {
        if (Math.random() < 0.24) {
          continue;
        }

        const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = column * columnWidth;
        const y = drops[column] * rowStep;

        context.globalAlpha = palette.alphaMin + Math.random() * palette.alphaJitter;
        context.fillText(glyph, x, y);

        if (y > height && Math.random() > 0.976) {
          drops[column] = 0;
        } else {
          drops[column] += 1;
        }
      }

      context.globalAlpha = 1;
      animationRef.current = window.requestAnimationFrame(drawFrame);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animationRef.current = window.requestAnimationFrame(drawFrame);

    return () => {
      window.removeEventListener("resize", resizeCanvas);

      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [canAnimate, isExternallyActive, isDarkTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;

    return () => {
      if (clearTimeoutRef.current !== null) {
        window.clearTimeout(clearTimeoutRef.current);
        clearTimeoutRef.current = null;
      }

      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }

      const context = canvas?.getContext("2d");
      if (canvas && context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full transition-opacity duration-[420ms] ease-out ${
        canAnimate && isExternallyActive
          ? isDarkTheme
            ? "opacity-85"
            : "opacity-90"
          : "opacity-0"
      }`}
    />
  );
}

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <MatrixBackgroundLayer />
      <div className="scanline absolute inset-0" />
      <div className="absolute top-[-8%] left-[-8%] h-[42%] w-[42%] rounded-full bg-primary/10 blur-[72px] md:h-[50%] md:w-[50%] md:blur-[120px]" />
      <div className="absolute right-[-8%] bottom-[-8%] h-[42%] w-[42%] rounded-full bg-fuchsia-500/10 blur-[72px] md:h-[50%] md:w-[50%] md:blur-[120px]" />
    </div>
  );
}
