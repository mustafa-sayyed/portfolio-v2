import Parser from "rss-parser";
import Title from "./Title";
import { ArticleLink } from "./ArticleLink";

type CustomItem = {
  title: string;
  link: string;
  isoDate: string;
};

async function getArticles() {
  try {
    const parser = new Parser<Record<string, unknown>, CustomItem>({});
    const feed = await parser.parseURL("https://medium.com/feed/@mustafasayyed086");
    return feed.items.slice(0, 6).map((item) => ({
      guid: item.guid ?? item.link,
      title: item.title ?? "Untitled",
      link: item.link ?? "#",
      pubDate: item.isoDate ?? "",
    }));
  } catch {
    return null;
  }
}

export default async function Articles() {
  const articles = await getArticles();

  return (
    <section id="writing" className="mt-28 sm:mt-36">
      <Title title="Writing" index="03" />
      <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
        Thoughts on engineering, product building, and lessons from shipping.
      </p>

      {!articles && (
        <p className="mt-10 text-sm text-muted-foreground">
          Could not load articles right now. Please try again later.
        </p>
      )}

      {articles && (
        <div className="mt-8 flex flex-col">
          {articles.map((article) => (
            <ArticleLink
              key={article.guid}
              href={article.link}
              title={article.title}
              pubDate={article.pubDate}
            />
          ))}
        </div>
      )}
    </section>
  );
}
