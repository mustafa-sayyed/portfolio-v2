import { getContributions, type Contribution } from "@/lib/github";
import { SiteNav } from "@/components/SiteNav";
import { GithubActivity } from "@/components/GithubActivity";
import { ContributionLink } from "@/components/ContributionLink";
import Title from "@/components/Title";

export const metadata = {
  title: "Open Source Contributions — Mustafa Sayyed",
  description:
    "Merged and open pull requests, issues, and open source contributions by Mustafa Sayyed.",
};

function groupByRepo(items: Contribution[]) {
  const groups = new Map<string, Contribution[]>();
  for (const item of items) {
    const list = groups.get(item.repo) ?? [];
    list.push(item);
    groups.set(item.repo, list);
  }
  return [...groups.entries()];
}

export default async function ContributionsPage() {
  const contributions = await getContributions();

  const sections = [
    { title: "Merged Pull Requests", items: contributions?.merged ?? [] },
    { title: "Open Pull Requests", items: contributions?.open ?? [] },
    { title: "Issues Created", items: contributions?.issues ?? [] },
  ].filter((section) => section.items.length > 0);

  return (
    <div className="mx-auto w-full max-w-2xl px-6 pb-4 sm:px-8">
      <header className="pt-10 sm:pt-16">
        <SiteNav />

        <div className="mt-24 sm:mt-32">
          <h1 className="text-4xl font-medium tracking-tighter sm:text-6xl">
            Open Source.
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            My Open Source Contribution journey: PRs I&rsquo;ve opened, merged, and issues I&rsquo;ve reported
            across open source projects.
          </p>
        </div>
      </header>

      <section className="mt-16 sm:mt-20">
        <Title title="Activity" index="01" />
        <div className="mt-8 overflow-x-auto text-sm">
          <GithubActivity />
        </div>
      </section>

      {!contributions && (
        <p className="mt-20 text-sm text-muted-foreground">
          Could not load contributions right now. Please try again later.
        </p>
      )}

      {contributions && sections.length === 0 && (
        <p className="mt-20 text-sm text-muted-foreground">
          No public contributions found yet.
        </p>
      )}

      {sections.map((section, sectionIndex) => (
        <section key={section.title} className="mt-28 sm:mt-36">
          <Title
            title={section.title}
            index={String(sectionIndex + 2).padStart(2, "0")}
          />
          {groupByRepo(section.items).map(([repo, prs]) => (
            <div key={repo} className="mt-12">
              <h3 className="font-mono text-xs text-muted-foreground">{repo}</h3>
              <div className="mt-3 flex flex-col">
                {prs.map((pr) => (
                  <ContributionLink key={pr.id} {...pr} />
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}

      <footer className="mt-28 border-t border-border py-10">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mustafa Sayyed. Made with curiosity.
        </p>
      </footer>
    </div>
  );
}
