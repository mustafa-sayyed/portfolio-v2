"use client";
import HorizontalLine from "./HorizontalLine";
import Title from "./Title";

function About() {
	return (
		<div>
			<div className="flex w-full flex-col">
				<div className="flex flex-col gap-4 font-light">
					<Title title="About me" />
					<p>
						Hey there 👋, I am Mustafa Sayyed, I build products that solve real-world problems.
						I enjoy building scalable web applications, backend systems, and AI-powered tools.
						I love understanding how things work under the hood and continuously
						learning new technologies..
					</p>
					<p>
						What sets me apart is how I learn and build. I don’t like treating
						technologies as black boxes. I understanding things from first
						principles. I do experimenting, breaking things, fixing them, and
						then rebuilding them better.
					</p>
					<p>
						Currently, I am building getissues, an AI powered platform where where AI agents search issues on behalf of the user based on skills and preferences.
						<br />
						Check it out here: <a href="https://getissues.tech" target="_blank" className="text-blue-400 hover:underline font-sans font-semibold">https://getissues.tech</a>
					</p>
				</div>
			</div>
			<HorizontalLine />
		</div>
	);
}

export default About;
