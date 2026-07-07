"use client";
import { useCallback, useRef } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"

interface ThemeToggler extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const ThemeTogglerButton = ({
  className,
  duration = 500,
  ...props
}: ThemeToggler) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { theme, setTheme } = useTheme()

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme === "dark" ? "light" : "dark");
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [theme, duration])

  return (
    <Button
      ref={buttonRef}
      onClick={toggleTheme}
      variant="outline"
      className="cursor-pointer"
      {...props}
    >
      {theme === "light" ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
