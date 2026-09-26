"use client";
import { createElement, useState, type ElementType } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Title from "./Title";
import { FaGithub } from "react-icons/fa6";
import {
	SiChatbot,
	SiDocker,
	SiDrizzle,
	SiExpress,
	SiGithub,
	SiGithubactions,
	SiMongodb,
	SiMongoose,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiTailwindcss,
	SiTurborepo,
	SiTypescript,
	SiVercel,
	SiZod,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { handleClick } from "@/lib/posthog";
import { cn } from "@/lib/utils";

type TechIconComponent = ElementType;

const TECH_ICONS: Record<string, TechIconComponent> = {
	typescript: SiTypescript,
	nodejs: SiNodedotjs,
	express: SiExpress,
	expressjs: SiExpress,
	nextjs: SiNextdotjs,
	react: SiReact,
	reactjs: SiReact,
	tailwindcss: SiTailwindcss,
	tailwind: SiTailwindcss,
	postgresql: SiPostgresql,
	postgres: SiPostgresql,
	pgvector: SiPostgresql,
	vector: SiPostgresql,
	drizzleorm: SiDrizzle,
	drizzle: SiDrizzle,
	mongodb: SiMongodb,
	mongo: SiMongodb,
	mongoose: SiMongoose,
	docker: SiDocker,
	githubactions: SiGithubactions,
	github: SiGithub,
	octokit: SiGithub,
	vercelaisdk: SiVercel,
	vercel: SiVercel,
	aisdk: SiVercel,
	zod: SiZod,
	turborepo: SiTurborepo,
	turbo: SiTurborepo,
	mastraai: SiChatbot,
	mastra: SiChatbot,
	azure: VscAzureDevops,
};

function normalizeTech(name: string) {
	return name.toLowerCase().replace(/[.\s_-]+/g, "");
}

function getTechIcon(name: string): TechIconComponent | null {
	return TECH_ICONS[normalizeTech(name)] ?? null;
}

function TechBadge({ name }: { name: string }) {
	const Icon = getTechIcon(name);
	return (
		<span className="inline-flex items-center gap-1.5 rounded-md border bg-muted px-2 py-1 text-xs text-foreground/90">
			{Icon && (
				<span className="flex size-3.5 items-center justify-center text-muted-foreground">
					{createElement(Icon, { size: 14, className: "size-3.5" })}
				</span>
			)}
			{name}
		</span>
	);
}

const projects = [
	{
		name: "OpenMaintainer",
		image: "/projects/openmaintainer.png",
		imageAlt: "OpenMaintainer dashboard preview",
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
		image: "/projects/getissues.png",
		imageAlt: "getissues app preview",
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
		image: undefined as string | undefined,
		imageAlt: "SnapShop app preview",
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
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggle = (index: number) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section id="projects" className="mt-28 sm:mt-36">
			<Title title="Proof of Work" index="02" />

			<div className="mt-10 flex flex-col gap-4">
				{projects.map((project, index) => {
					const isOpen = openIndex === index;
					return (
						<article
							key={project.name}
							className={cn(
								"overflow-hidden rounded-xl border border-border border-b-2 transition-colors",
								isOpen ? "bg-background" : "hover:bg-muted/40"
							)}
						>
							{/* Collapsed header: always shows name + description */}
							<button
								type="button"
								onClick={() => {
									toggle(index);
									handleClick(`${project.name}_dropdown_${isOpen ? "close" : "open"}`);
								}}
								aria-expanded={isOpen}
								aria-controls={`project-panel-${index}`}
								className="flex w-full cursor-pointer items-start justify-between gap-4 p-5 text-left"
							>
								<span className="min-w-0 flex-1">
									<span className="flex items-center gap-2">
										<h3 className="text-base font-medium tracking-tight sm:text-lg">
											{project.name}
										</h3>
										<span
											className={cn(
												"mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-transform duration-300",
												isOpen && "rotate-180"
											)}
										>
											<ChevronDown className="size-3.5" />
										</span>
									</span>
									<p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
										{project.description}
									</p>
								</span>
								<span className="hidden shrink-0 font-mono text-xs text-muted-foreground/70 sm:block">
									{String(index + 1).padStart(2, "0")}
								</span>
							</button>

							{/* Expanded content: image + all details */}
							<div
								id={`project-panel-${index}`}
								className={cn(
									"grid transition-[grid-template-rows] duration-300 ease-in-out",
									isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
								)}
							>
								<div className="overflow-hidden">
									<div className="border-t border-border px-5 pt-5 pb-5">
										{project.image && (
											<div className="relative overflow-hidden rounded-lg border border-border">
												<Image
													src={project.image}
													alt={project.imageAlt ?? `${project.name} preview`}
													width={1200}
													height={675}
													className="aspect-video w-full object-cover object-top"
													sizes="(max-width: 640px) 100vw, 640px"
												/>
											</div>
										)}

										<div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
											<a
												href={project.githubLink}
												target="_blank"
												rel="noopener noreferrer"
												onClick={() => handleClick(`${project.name}_github_link`)}
												className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
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

										<div className="mt-5 flex flex-wrap gap-2">
											{project.techStack.map((tech) => (
												<TechBadge key={tech} name={tech} />
											))}
										</div>
									</div>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default Projects;
