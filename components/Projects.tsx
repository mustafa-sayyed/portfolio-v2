"use client";
import { ArrowUpRight } from "lucide-react";
import Title from "./Title";
import { FaGithub } from "react-icons/fa6";
import { handleClick } from "@/lib/posthog";

const projects = [
	{
		name: "OpenMaintainer",
		links: [
			{ link: "https://openmaintainer.mustafasayyed.dev", name: "Live" },
		],
		githubLink: "https://github.com/mustafa-sayyed/OpenMaintainer",
		description:
			"Team of autonomous AI agents that automates routine repository maintenance, guided by maintainer-defined policies.",
		highlights: [
			"AI agents triage issues: analyze content, search duplicates, apply labels, and post maintainer-style comments",
			"Policy engine validates every action before execution and blocks disallowed ones",
			"Dependabot PR review with auto-merge for eligible minor and patch updates",
			"Secure event-driven workflow with verified GitHub webhooks",
		],
		techStack: [
			"TypeScript",
			"Node.js",
			"Express",
			"Vercel AI SDK",
			"Octokit",
			"Zod",
		],
	},
	{
		name: "getissues",
		links: [{ link: "https://getissues.tech", name: "getissues.tech" }],
		githubLink: "https://github.com/mustafa-sayyed/getissues",
		description:
			"Autonomous AI Agents that search issues on behalf of OSS Contributors.",
		highlights: [
			"AI agents search issues based on user skills and preferences",
			"Automated ingestion and semantic search workflows via Workflows",
			"Session-based auth with Better Auth, database sessions, and GitHub OAuth",
			"CI/CD pipeline with GitHub Actions for automated testing and deployment",
		],
		techStack: [
			"TypeScript",
			"Next.js",
			"Node.js",
			"PostgreSQL",
			"Drizzle ORM",
			"pgvector",
			"Mastra AI",
			"Docker",
			"Turborepo",
		],
	},
	{
		name: "SnapShop",
		links: [
			{ link: "https://snapshop.mustafasayyed.dev", name: "Live" },
			{ link: "https://snapshop-admin.mustafasayyed.dev", name: "Admin" },
		],
		githubLink: "https://github.com/mustafa-sayyed/snapshop",
		description:
			"A production-ready e-commerce platform built with the MERN stack, featuring secure REST APIs, Dockerized deployment on Azure, and a CI/CD pipeline with GitHub Actions.",
		highlights: [
			"Secure REST APIs with Node.js, Express, and MongoDB",
			"Dockerized backend with multi-stage builds deployed on Azure App Service",
			"CI/CD pipeline with GitHub Actions for automated build and deployment",
			"MongoDB aggregation pipelines for analytics and chart data",
			"JWT authentication, Google OAuth, and secure forgot-password flow",
			"Razorpay payment gateway with secure webhook verification"
		],
		techStack: [
			"Node.js",
			"Express.js",
			"MongoDB",
			"React.js",
			"Tailwind CSS",
			"Docker",
			"Azure",
			"GitHub Actions",
		],
	},
];

function Projects() {
	return (
		<section id="projects" className="mt-28 sm:mt-36">
			<Title title="Projects" index="02" />

			<div className="mt-10 flex flex-col gap-16">
				{projects.map((project) => (
					<article key={project.name}>
						<div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
							<h3 className="text-xl font-medium tracking-tight">
								{project.name}
							</h3>
							<div className="flex items-center gap-5">
								<a
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => handleClick(`${project.name}_github_link`)}
									className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
								>
									<FaGithub className="size-4" />
									Code
								</a>
								{project.links.map((link) => (
									<a
										key={link.link}
										href={link.link}
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => handleClick(project.name)}
										className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
									>
										{link.name}
										<ArrowUpRight className="size-3.5 opacity-0 -translate-x-0.5 translate-y-0.5 transition-all group-hover:opacity-100 group-hover:translate-0" />
									</a>
								))}
							</div>
						</div>

						<p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
							{project.description}
						</p>

						<ul className="mt-4 flex flex-col gap-1.5">
							{project.highlights.map((highlight) => (
								<li
									key={highlight}
									className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
								>
									<span aria-hidden className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-muted-foreground/60" />
									{highlight}
								</li>
							))}
						</ul>

						<p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground/80">
							{project.techStack.join("  ·  ")}
						</p>

						<div className="mt-10 border-t border-border last:hidden" />
					</article>
				))}
			</div>
		</section>
	);
}

export default Projects;
