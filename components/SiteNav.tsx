"use client";
import Link from "next/link";
import { ThemeTogglerButton } from "./ThemeBtn";

const navLinks = [
	{ name: "About", href: "/#about" },
	{ name: "Projects", href: "/#projects" },
	{ name: "Writing", href: "/#writing" },
	{ name: "OSS", href: "/contributions" },
];

export function SiteNav() {
	return (
		<nav className="flex items-center justify-between">
			<Link href="/" className="font-medium">
				Mustafa Sayyed
			</Link>
			<div className="flex items-center gap-5">
				{navLinks.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						className="text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						{link.name}
					</Link>
				))}
				<ThemeTogglerButton />
			</div>
		</nav>
	);
}
