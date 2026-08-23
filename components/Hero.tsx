"use client";
import Connect from "./Connect";
import { SiteNav } from "./SiteNav";

function Hero() {
	return (
		<header className="pt-10 sm:pt-16">
			<SiteNav />

			<div className="mt-24 sm:mt-32">
				<h1 className="text-4xl font-medium leading-[1.05] tracking-tighter sm:text-6xl">
					Building things
					<br />
					that matter.
				</h1>
				<p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
					20 &middot; Full Stack Developer &middot; Open Source Contributor.
				</p>
				<p>I build scalable applications, backend systems, and AI-powered tools.</p>
				<Connect />
			</div>
		</header>
	);
}

export default Hero;
