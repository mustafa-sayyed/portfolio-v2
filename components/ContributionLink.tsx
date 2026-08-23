"use client";

import { ArrowUpRight } from "lucide-react";
import { handleClick } from "@/lib/posthog";

type ContributionLinkProps = {
  url: string;
  title: string;
  number: number;
  date: string;
};

function formatDate(date: string) {
  try {
    return new Date(date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export function ContributionLink({
  url,
  title,
  number,
  date,
}: ContributionLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => handleClick("contribution_open")}
      className="group -mx-4 flex items-center justify-between gap-6 border-b border-border px-4 py-4 transition-colors first:border-t hover:bg-foreground/[0.03]"
    >
      <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          #{number}
        </span>
        <span className="truncate text-base font-medium tracking-tight text-foreground">
          {title}
        </span>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <time className="hidden font-mono text-xs text-muted-foreground sm:block">
          {formatDate(date)}
        </time>
        <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
    </a>
  );
}

export type { ContributionLinkProps };
