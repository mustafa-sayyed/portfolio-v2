import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex min-h-screen w-full items-center justify-center">
			<div className="text-center">
				<h1 className="font-mono text-sm text-muted-foreground">404</h1>
				<p className="mt-3 text-2xl font-medium tracking-tight">
					Page not found
				</p>
				<Link
					href="/"
					className="mt-6 inline-block text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
				>
					Back home
				</Link>
			</div>
		</div>
	);
}
