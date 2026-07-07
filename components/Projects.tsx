"use client";
import { Dot, ExternalLink } from "lucide-react";
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
} from "./animate-ui/components/headless/accordion";
import HorizontalLine from "./HorizontalLine";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa6";
import Title from "./Title";
import { handleClick } from "@/lib/posthog";

const projects = [
	{
		name: "getissues",
		links: [{ link: "https://getissues.tech", name: "getissues.tech" }],
		githubLink: "https://github.com/mustafa-sayyed/getissues",
		image: "",
		description:
			"Autonomous AI Agents that search issues on behalf of OSS Contributor",
		techStack: [
			"Typescript",
			"Render Workflows",
			"Node.js",
			"PostgreSQL",
			"Drizzle ORM",
			"Docker",
			"Next.js",
			"React.js",
			"Tailwind CSS",
			"Shadcn UI",
			"Mastra AI",
			"pgvector",
			"Turborepo",
			"pnpm workspaces",
		],
		features: [
			"Built an AI-powered Platform for Open Source Contributors, where AI Agents search issues based on user skills and preferences",
			"Designed Automated workflows using Render Workflows for ingesting issues, and to search issues semantically using AI agents",
			"Implemented secure session-based authentication using Better Auth with database-backed sessions and GitHub OAuth integration",
			"Built a CI/CD pipeline using GitHub Actions for automated testing, continuous integration, and deployment to Render",
		],
	},
	{
		name: "SnapShop",
		links: [
			{ link: "https://snapshop.mustafasayyed.dev", name: "Live" },
			{ link: "https://snapshop-admin.mustafasayyed.dev", name: "Admin" },
		],
		githubLink: "https://github.com/mustafa-sayyed/snapshop",
		image: "",
		description:
			"A production-ready e-commerce platform built with the MERN stack, featuring secure REST APIs, Dockerized deployment on Azure, and a CI/CD pipeline with GitHub Actions.",
		techStack: [
			"MongoDB",
			"Express.js",
			"React.js",
			"Node.js",
			"Docker",
			"Azure App Service",
			"GitHub Actions",
			"JWT",
			"Cloudinary",
			"Razorpay",
			"Tailwind CSS",
		],
		features: [
			"Secure REST APIs with Node.js, Express, and MongoDB",
			"Dockerized backend with multi-stage builds deployed on Azure App Service",
			"CI/CD pipeline with GitHub Actions for automated build and deployment",
			"Responsive admin dashboard with React, Shadcn UI, and TanStack Table",
			"MongoDB aggregation pipelines for analytics and chart data",
			"JWT authentication, Google OAuth, and secure forgot-password flow",
			"Email workflows using Resend and Quill.js (RTE) for admin campaigns",
			"Image uploads with Multer and Cloudinary",
			"Razorpay payment gateway with secure webhook verification",
		],
	},
	{
		name: "WYL - WriteYourLogs",
		links: [{ link: "https://wyl.mustafasayyed.dev", name: "Live" }],
		githubLink: "https://github.com/mustafa-sayyed/write-your-logs",
		image: "",
		description:
			"An Blogging platform built with React.js and Appwrite for backend services, enabling users to create, edit, and share their blogs.",
		techStack: [
			"React.js",
			"Typescript",
			"Appwrite",
			"Redux",
			"React Router",
			"Tailwind CSS",
		],
		features: [
			"Secure user authentication and authorization with Appwrite",
			"Rich-text editor for creating and formatting blog posts",
			"Image uploads and media management",
			"Database and file storage with Appwrite backend services",
			"Responsive design for seamless access across devices",
			"State Management with React Redux",
		],
	},
];

function Projects() {
	return (
		<div>
			<div>
				<Title title="Proof of Work" />
				<p className="mt-2 text-lg font-light">
					Here are some of the projects I've worked on.
				</p>
			</div>

			<div className="my-10">
				<Accordion>
					{projects.map((project) => (
						<AccordionItem
							key={project.name}
							className="rounded-lg border dark:border-white/20 border-black/40 p-4 my-2 border-b-4 last:border-b-4"
						>
							<AccordionButton
								className="cursor-pointer"
								onClick={() => handleClick(project.name)}
							>
								<div className="flex flex-col gap-2">
									<p className="text-3xl font-semibold">{project.name}</p>
									<p className="font-light">{project.description}</p>
								</div>
							</AccordionButton>
							<AccordionPanel>
								<div className="flex flex-col gap-3">
									<div className="flex items-center gap-4">
										{project.links.map((link) => (
											<Button
												variant="outline"
												key={link.link}
												className="cursor-pointer"
											>
												<a
													href={link.link}
													target="_blank"
													rel="noopener noreferrer"
													className="hover:underline flex gap-1 items-center"
												>
													{link.name} <ExternalLink />
												</a>
											</Button>
										))}
										<Button
											variant="outline"
											className="cursor-pointer"
											onClick={() => handleClick(`${project.name}_github_link`)}
										>
											<a
												href={project.githubLink}
												target="_blank"
												rel="noopener noreferrer"
												className="hover:underline flex gap-1 items-center"
											>
												GitHub <FaGithub />
											</a>
										</Button>
									</div>
									<div>
										<h1 className="text-lg font-semibold mb-2">Tech Stack:</h1>
										<div className="flex flex-wrap gap-2">
											{project.techStack.map((tech, index) => (
												<Button
													key={index}
													variant="outline"
													size="sm"
													className="rounded-md"
												>
													{tech}
												</Button>
											))}
										</div>
									</div>
									<div className="flex flex-col gap-1">
										<h1 className="text-lg font-semibold">Features:</h1>
										{project.features.map((feature, index) => (
											<p key={index} className="text-sm flex">
												<Dot /> {feature}
											</p>
										))}
									</div>
								</div>
							</AccordionPanel>
						</AccordionItem>
					))}
				</Accordion>
			</div>

			<HorizontalLine />
		</div>
	);
}

export default Projects;
