export type Contribution = {
  id: string;
  title: string;
  url: string;
  repo: string;
  number: number;
  date: string;
};

export type Contributions = {
  merged: Contribution[];
  open: Contribution[];
  issues: Contribution[];
};

type SearchIssueItem = {
  id: number;
  title: string;
  html_url: string;
  number: number;
  closed_at: string | null;
  created_at: string;
  repository_url: string;
};

function extractRepo(repositoryUrl: string): string {
  return repositoryUrl.split("/repos/")[1] ?? "";
}

function mapItems(items: SearchIssueItem[], useCreatedDate = false): Contribution[] {
  return items.map((item) => ({
    id: String(item.id),
    title: item.title,
    url: item.html_url,
    repo: extractRepo(item.repository_url),
    number: item.number,
    date: (useCreatedDate ? item.created_at : item.closed_at) ?? item.created_at,
  }));
}

async function searchGitHub(query: string): Promise<SearchIssueItem[]> {
  const res = await fetch(
    `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&per_page=50&sort=updated&order=desc`,
    {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    },
  );
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const data = (await res.json()) as { items?: SearchIssueItem[] };
  return data.items ?? [];
}

export async function getContributions(): Promise<Contributions | null> {
  try {
    const [merged, open, issues] = await Promise.all([
      searchGitHub("author:mustafa-sayyed type:pr is:merged"),
      searchGitHub("author:mustafa-sayyed type:pr is:open"),
      searchGitHub("author:mustafa-sayyed type:issue"),
    ]);
    return {
      merged: mapItems(merged),
      open: mapItems(open),
      issues: mapItems(issues, true),
    };
  } catch {
    return null;
  }
}
