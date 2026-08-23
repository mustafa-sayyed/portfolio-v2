import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function Footer() {
	return (
		<footer className="mt-28 sm:mt-36 border-t border-border py-10">
			<div className="flex items-center justify-between">
				<p className="text-xs text-muted-foreground">
					© {new Date().getFullYear()} Mustafa Sayyed. Made with curiosity.
				</p>
				<a
					href={"https://github.com/mustafa-sayyed"}
					target="_blank"
					rel="noopener noreferrer"
					className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
				>
					<FaGithub />
					<ArrowUpRight className="size-3.5 opacity-0 -translate-x-0.5 translate-y-0.5 transition-all group-hover:opacity-100 group-hover:translate-0" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
