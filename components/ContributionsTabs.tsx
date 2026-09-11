"use client";

import { useState } from "react";
import type { Contribution } from "@/lib/github";
import { ContributionLink } from "./ContributionLink";
import Title from "./Title";

type ContributionsTabsProps = {
	merged: Contribution[];
	open: Contribution[];
	issues: Contribution[];
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

export function ContributionsTabs({
	merged,
	open,
	issues,
}: ContributionsTabsProps) {
	const tabs = [
		{ id: "merged", label: "Merged PRs", items: merged },
		{ id: "open", label: "Open PRs", items: open },
		{ id: "issues", label: "Issues Created", items: issues },
	];

	const defaultTab = tabs.find((tab) => tab.items.length > 0)?.id ?? "merged";
	const [activeTab, setActiveTab] = useState(defaultTab);
	const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

	return (
		<section className="mt-16 sm:mt-20">
			<Title title="Contributions" index="02" />

			<div
				role="tablist"
				aria-label="Contributions by type"
				className="mt-8 flex gap-1 overflow-x-auto border-b border-border"
			>
				{tabs.map((tab) => {
					const isActive = tab.id === activeTab;
					return (
						<button
							key={tab.id}
							role="tab"
							id={`tab-${tab.id}`}
							aria-selected={isActive}
							aria-controls={`panel-${tab.id}`}
							onClick={() => setActiveTab(tab.id)}
							className={`flex shrink-0 items-center gap-2 whitespace-nowrap px-4 py-2.5 text-sm cursor-pointer transition-colors ${
								isActive ?
									"border-b-2 border-foreground font-medium text-foreground"
								:	"border-b-2 border-transparent text-muted-foreground hover:text-foreground"
							}`}
						>
							{tab.label}
							<span
								className={`rounded-full px-2 py-0.5 font-mono text-xs ${
									isActive ?
										"bg-foreground text-background"
									:	"bg-foreground/[0.06] text-muted-foreground"
								}`}
							>
								{tab.items.length}
							</span>
						</button>
					);
				})}
			</div>

			<div
				key={active.id}
				role="tabpanel"
				id={`panel-${active.id}`}
				aria-labelledby={`tab-${active.id}`}
			>
				{active.items.length === 0 ?
					<p className="py-12 text-sm text-muted-foreground">
						No {active.label.toLowerCase()} yet.
					</p>
				:	groupByRepo(active.items).map(([repo, items]) => (
						<div key={repo} className="mt-12">
							<h3 className="font-mono text-xs text-muted-foreground">{repo}</h3>
							<div className="mt-3 flex flex-col">
								{items.map((item) => (
									<ContributionLink key={item.id} {...item} />
								))}
							</div>
						</div>
					))
				}
			</div>
		</section>
	);
}
