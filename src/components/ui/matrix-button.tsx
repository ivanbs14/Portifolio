"use client"

import * as React from "react"

import { type VariantProps } from "class-variance-authority"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const DEFAULT_MATRIX_CHARS =
  "01アイウエオカキクケコサシスセソタチツテトナニヌネノ"

type MatrixButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    matrixChars?: string
    matrixColor?: string
    matrixFontSize?: number
    matrixFrameMs?: number
  }

function resolveHudColor() {
  if (typeof window === "undefined") {
    return "rgba(0, 153, 255, 0.85)"
  }

  const hudBlueVar = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--hud-blue-rgb")
    .trim()
  const channels = hudBlueVar
    .split(/\s+/)
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value))

  if (channels.length !== 3) {
    return "rgba(0, 153, 255, 0.85)"
  }

  const [r, g, b] = channels
  return `rgba(${r}, ${g}, ${b}, 0.85)`
}

function MatrixButton({
  className,
  variant = "default",
  size = "default",
  matrixChars,
  matrixColor,
  matrixFontSize = 11,
  matrixFrameMs = 32,
  disabled,
  onPointerEnter,
  onPointerLeave,
  onPointerCancel,
  onFocus,
  onBlur,
  children,
  ...props
}: MatrixButtonProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const animationRef = React.useRef<number | null>(null)
  const reducedMotionRef = React.useRef(false)
  const [isEffectActive, setIsEffectActive] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const syncPreference = () => {
      reducedMotionRef.current = mediaQuery.matches
      if (mediaQuery.matches) {
        setIsEffectActive(false)
      }
    }

    syncPreference()
    mediaQuery.addEventListener("change", syncPreference)

    return () => mediaQuery.removeEventListener("change", syncPreference)
  }, [])

  React.useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    if (!isEffectActive || disabled || reducedMotionRef.current) {
      const context = canvas.getContext("2d")
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height)
      }
      return
    }

    const context = canvas.getContext("2d")

    if (!context) {
      return
    }

    const fallbackChars = DEFAULT_MATRIX_CHARS
    const sourceChars = (matrixChars ?? fallbackChars).replace(/\s+/g, "")
    const glyphs = Array.from(sourceChars.length > 0 ? sourceChars : fallbackChars)
    const drawColor = matrixColor ?? resolveHudColor()
    const frameBudget = Math.max(16, matrixFrameMs)
    const fontSize = Math.max(8, matrixFontSize)

    let width = 0
    let height = 0
    let drops: number[] = []
    let lastFrameTime = 0

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))

      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`
      context.textBaseline = "top"
      context.clearRect(0, 0, width, height)

      const columns = Math.max(1, Math.ceil(width / fontSize))
      const maxRows = Math.max(1, Math.floor(height / fontSize))
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * maxRows))
    }

    const drawFrame = (timestamp: number) => {
      if (timestamp - lastFrameTime < frameBudget) {
        animationRef.current = window.requestAnimationFrame(drawFrame)
        return
      }

      lastFrameTime = timestamp
      context.fillStyle = "rgba(2, 12, 28, 0.2)"
      context.fillRect(0, 0, width, height)

      for (let index = 0; index < drops.length; index += 1) {
        const glyph = glyphs[Math.floor(Math.random() * glyphs.length)]
        const x = index * fontSize
        const y = drops[index] * fontSize

        context.globalAlpha = 0.65 + Math.random() * 0.35
        context.fillStyle = drawColor
        context.fillText(glyph, x, y)

        if (y > height && Math.random() > 0.975) {
          drops[index] = 0
        } else {
          drops[index] += 1
        }
      }

      context.globalAlpha = 1
      animationRef.current = window.requestAnimationFrame(drawFrame)
    }

    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(canvas)
    resizeCanvas()
    animationRef.current = window.requestAnimationFrame(drawFrame)

    return () => {
      resizeObserver.disconnect()

      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }

      context.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [
    disabled,
    isEffectActive,
    matrixChars,
    matrixColor,
    matrixFontSize,
    matrixFrameMs,
  ])

  const activateEffect = () => {
    if (!disabled && !reducedMotionRef.current) {
      setIsEffectActive(true)
    }
  }

  const deactivateEffect = () => {
    setIsEffectActive(false)
  }

  return (
    <button
      data-slot="matrix-button"
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({ variant, size }),
        "relative isolate overflow-hidden",
        className
      )}
      disabled={disabled}
      onPointerEnter={(event) => {
        onPointerEnter?.(event)
        if (event.pointerType !== "touch") {
          activateEffect()
        }
      }}
      onPointerLeave={(event) => {
        onPointerLeave?.(event)
        deactivateEffect()
      }}
      onPointerCancel={(event) => {
        onPointerCancel?.(event)
        deactivateEffect()
      }}
      onFocus={(event) => {
        onFocus?.(event)
        activateEffect()
      }}
      onBlur={(event) => {
        onBlur?.(event)
        deactivateEffect()
      }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-0 h-full w-full transition-opacity duration-150",
          isEffectActive ? "opacity-100" : "opacity-0"
        )}
      />

      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}

export { MatrixButton }
