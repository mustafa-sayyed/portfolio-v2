"use client";

import { ArrowUpRight } from "lucide-react";
import { handleClick } from "@/lib/posthog";

type ArticleLinkProps = {
  href: string;
  title: string;
  pubDate: string;
};

function formatPublishedDate(date: string) {
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

export function ArticleLink({ href, title, pubDate }: ArticleLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => handleClick("article_open")}
      className="group -mx-4 flex items-center justify-between gap-6 border-b border-border px-4 py-4 transition-colors first:border-t hover:bg-foreground/[0.03] sm:py-5"
    >
      <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
        <time className="shrink-0 font-mono text-xs text-muted-foreground">
          {formatPublishedDate(pubDate)}
        </time>
        <h3 className="truncate text-base font-medium tracking-tight text-foreground">
          {title}
        </h3>
      </div>
      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}
