"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

export function GithubActivity() {
  const { resolvedTheme } = useTheme();

  return (
    <GitHubCalendar
      username="mustafa-sayyed"
      colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
      blockSize={10}
      blockMargin={4}
      className="[&_>_div]:overflow-x-auto [&_>_div]:[scrollbar-width:none]"
      style={{
        color: resolvedTheme === "dark" ? "#8f8f8f" : "#737373",
        fontSize: "0.75rem",
      }}
    />
  );
}
