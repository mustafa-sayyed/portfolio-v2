"use client";
import { ArrowUpRight } from "lucide-react";
import { handleClick } from "@/lib/posthog";

const connectMenus = [
	{
		name: "Resume",
		link: "https://drive.google.com/drive/folders/1EwbAe5ph9AnxU45x5wA4vL6U5lAxz1WP?usp=sharing",
	},
	{
		name: "LinkedIn",
		link: "https://linkedin.com/in/mustafa-sayyed",
	},
	{
		name: "X",
		link: "https://x.com/_sayyed_mustafa",
	},
	{
		name: "GitHub",
		link: "https://github.com/mustafa-sayyed",
	},
	{
		name: "Email",
		link: "mailto:mustafasayyed2429@gmail.com",
	},
];

function Connect() {
	return (
		<div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
			{connectMenus.map((menu) => (
				<a
					key={menu.name}
					href={menu.link}
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => handleClick(menu.name)}
					className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
				>
					<span className="border-b border-transparent transition-colors group-hover:border-current">
						{menu.name}
					</span>
					<ArrowUpRight className="size-3.5 opacity-0 -translate-x-0.5 translate-y-0.5 transition-all group-hover:opacity-100 group-hover:translate-0" />
				</a>
			))}
		</div>
	);
}

export default Connect;
