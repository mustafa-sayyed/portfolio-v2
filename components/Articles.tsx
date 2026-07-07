import Parser from "rss-parser";
import HorizontalLine from "./HorizontalLine";
import Title from "./Title";
import { ArticleLink } from "./ArticleLink";

type CustomItem = {
  title: string;
  link: string;
  isoDate: string;
  "content:encoded": string;
  guid: string;
};

function getMainImageFromHtml(html: string): string {
  const match = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']main image["']/i)
    || html.match(/alt=["']main image["'][^>]*src=["']([^"']+)["']/i);
  if (match) return match[1];
  // fallback: first img
  const firstImg = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return firstImg ? firstImg[1] : "";
}

function sanitizeDescription(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function getArticles() {
  try {
    const parser = new Parser<Record<string, unknown>, CustomItem>({
      customFields: {
        item: [["content:encoded", "content:encoded"]],
      },
    });
    const feed = await parser.parseURL("https://medium.com/feed/@mustafasayyed086");
    return feed.items.slice(0, 6).map((item) => {
      const content = item["content:encoded"] ?? "";
      const summary = sanitizeDescription(content);
      return {
        guid: item.guid ?? item.link,
        title: item.title ?? "Untitled",
        link: item.link ?? "#",
        pubDate: item.isoDate ?? "",
        thumbnail: getMainImageFromHtml(content),
        description: summary.length > 120 ? `${summary.slice(0, 120)}...` : summary,
      };
    });
  } catch {
    return null;
  }
}

export default async function Articles() {
  const articles = await getArticles();

  return (
    <section>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <Title title="Articles" />
          <p className="mt-2 text-lg font-light">
            Thoughts on engineering, product building, and lessons from shipping.
          </p>
        </div>
      </div>

      {!articles && (
        <div className="mt-8 rounded-2xl border border-destructive/35 bg-destructive/10 p-5">
          <p className="text-sm">Could not load articles right now. Please try again later.</p>
        </div>
      )}

      {articles && (
        <div className="mt-8 flex flex-col gap-4">
          {articles.map((article) => (
            <ArticleLink
              key={article.guid}
              href={article.link}
              title={article.title}
              description={article.description}
              pubDate={article.pubDate}
              thumbnail={article.thumbnail}
            />
          ))}
        </div>
      )}

      <HorizontalLine />
    </section>
  );
}


