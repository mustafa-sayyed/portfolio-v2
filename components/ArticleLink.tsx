"use client";

import { CalendarDays } from "lucide-react";
import { handleClick } from "@/lib/posthog";

type ArticleLinkProps = {
  href: string;
  title: string;
  description: string;
  pubDate: string;
  thumbnail: string;
};

function formatPublishedDate(date: string) {
  try {
    return new Date(date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Recently";
  }
}

export function ArticleLink({
  href,
  title,
  description,
  pubDate,
  thumbnail,
}: ArticleLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:bg-card transition-colors"
      onClick={() => handleClick("article_open")}
    >
      <article className="p-4 flex flex-col sm:flex-row gap-4">
        <div className="relative overflow-hidden rounded-md bg-linear-to-br from-muted/80 via-muted to-background w-full h-44 sm:w-56 sm:h-36 md:w-64 md:h-40 max-w-full shrink-0">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground font-medium">
              Medium Post
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold leading-tight">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>

          <div className="flex items-center text-xs text-muted-foreground gap-2 mt-3">
            <CalendarDays className="size-4" />
            <span>{formatPublishedDate(pubDate)}</span>
          </div>
        </div>
      </article>
    </a>
  );
}
