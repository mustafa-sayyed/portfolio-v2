"use client";
import Link from "next/link";
import { ThemeTogglerButton } from "./ThemeBtn";

const navLinks = [
	{ name: "About", href: "/#about", hideOnMobile: true },
	{ name: "Projects", href: "/#projects", hideOnMobile: true },
	{ name: "Writing", href: "/#writing", hideOnMobile: false },
	{ name: "OSS", href: "/contributions", hideOnMobile: false },
];

export function SiteNav() {
	return (
		<nav className="flex items-center justify-between">
			<Link href="/" className="font-medium">
				Mustafa Sayyed
			</Link>
			<div className="flex items-center gap-3 sm:gap-5">
				{navLinks.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						className={`text-sm text-muted-foreground transition-colors hover:text-foreground ${
							link.hideOnMobile ? "hidden sm:inline" : ""
						}`}
					>
						{link.name}
					</Link>
				))}
				<ThemeTogglerButton />
			</div>
		</nav>
	);
}
