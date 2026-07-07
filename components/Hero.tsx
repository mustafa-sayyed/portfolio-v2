"use client";
import { Button } from "./ui/button";
import profilePic from "../assets/profile.png";
import HorizontalLine from "./HorizontalLine";
import Connect from "./Connect";
import { ThemeTogglerButton } from "./ThemeBtn";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

function Hero() {
	const { resolvedTheme } = useTheme();
	const theme = resolvedTheme === "dark" ? "dark" : "light";
	return (
		<div>
			<div className="flex items-center justify-between w-full h-16">
				<a href="/">
					<Button
						variant="outline"
						className="cursor-pointer font-dancing-script text-lg"
					>
						Mustafa Sayyed
					</Button>
				</a>
				<div className="flex items-center gap-2">
					<ThemeTogglerButton />
				</div>
			</div>
			<HorizontalLine className="my-0" />
			<div className="flex flex-col mt-40">
				<div className="flex flex-col gap-2">
					<img
						src={profilePic.src}
						alt="Mustafa Sayyed"
						className="object-cover w-40 h-40 rounded-full"
					/>
					<h1 className="text-3xl sm:text-5xl z-50">Mustafa Sayyed</h1>
					<p className="font-light mb-2 ml-1 italic text-base">
						20 • Full Stack Developer • Open Source Contributor
					</p>
					<Connect />
				</div>
				<div className="mt-10">
					<h2 className="font-semibold text-xl mb-4">My GitHub Activity</h2>
					<GitHubCalendar
						username="mustafa-sayyed"
						className="[&_>_div]:overflow-x-auto
						[&_>_div::-webkit-scrollbar-button]:hidden
						[&_>_div]:[scrollbar-width:thin]
						[&_>_div::-webkit-scrollbar]:h-2
						[&_>_div::-webkit-scrollbar-track]:transparent
						[&_>_div::-webkit-scrollbar-track]:rounded-full
						[&_>_div]:[scrollbar-color:var(--ring)_transparent]"
						colorScheme={theme}
						blockSize={9.95}
						blockMargin={3}
						tooltips={{
							activity: {
								text(activity) {
									return `${activity.count} contributions on ${activity.date}`;
								},
								transitionStyles: {
									common() {
										return {
											backgroundColor: "gray",
											color: "black",
											zIndex: 999,
											borderRadius: "4px",
											padding: "2px 10px",
										};
									},
								},
							},
							colorLegend: {
								text(level) {
									return `levels ${level}`;
								},
								transitionStyles: {
									common() {
										return {
											backgroundColor: "gray",
											color: "black",
											zIndex: 999,
											borderRadius: "4px",
											padding: "2px 10px",
										};
									},
								},
								withArrow: true,
							},
						}}
					/>
				</div>
			</div>
			<HorizontalLine />
		</div>
	);
}

export default Hero;
