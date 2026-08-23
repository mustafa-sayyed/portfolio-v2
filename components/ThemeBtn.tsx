"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex size-8 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
};
