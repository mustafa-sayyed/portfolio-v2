import Title from "./Title";

function About() {
	return (
		<section id="about" className="mt-28 sm:mt-36">
			<Title title="About" index="01" />
			<div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
				<p>
					I&rsquo;m Mustafa Sayyed — a full stack developer who cares about
					shipping products that solve real problems. My work spans
					scalable web applications, backend systems, and AI-powered tools.
				</p>
				<p>
					I don&rsquo;t treat technologies as black boxes. I learn from
					first principles: experiment, break things, fix them, and rebuild
					them better. That curiosity is what drives how I engineer —
					understanding the system under the hood before building on top
					of it.
				</p>
				<p>
					Right now, I&rsquo;m building{" "}
					<a
						href="https://getissues.tech"
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
					>
						getissues
					</a>{" "}
					— an AI-powered platform where agents find open source issues
					matched to your skills and interests.
				</p>
			</div>
		</section>
	);
}

export default About;
