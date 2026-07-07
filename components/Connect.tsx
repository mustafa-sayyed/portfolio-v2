"use client";
import { MdEmail } from "react-icons/md";
import { Button } from "./ui/button";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./animate-ui/components/animate/tooltip";
import { handleClick } from "@/lib/posthog";

const connectMenus = [
	{
		name: "Resume",
		link: "https://drive.google.com/drive/folders/1EwbAe5ph9AnxU45x5wA4vL6U5lAxz1WP?usp=sharing",
		icon: IoDocumentTextOutline,
	},
	{
		name: "LinkedIn",
		link: "https://linkedin.com/in/mustafa-sayyed",
		icon: GrLinkedin,
	},
	{
		name: "X / Twitter",
		link: "https://x.com/_sayyed_mustafa",
		icon: BsTwitterX,
	},
	{
		name: "GitHub",
		link: "https://github.com/mustafa-sayyed",
		icon: GrGithub,
	},
	{
		name: "Email",
		link: "mailto:mustafasayyed2429@gmail.com",
		icon: MdEmail,
	},
];

function Connect() {
	return (
		<div>
			<div className="flex gap-2 items-center">
				<TooltipProvider>
					{connectMenus.map((menu) => (
						<Tooltip side="bottom" key={menu.name}>
							<TooltipTrigger>
								<Button
									asChild
									variant="outline"
									className="cursor-pointer"
									onClick={() => handleClick(menu.name)}
									key={menu.link}
								>
									<a
										href={menu.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center gap-2 leading-none border"
									>
										<menu.icon />{" "}
										<span className="hidden sm:block">{menu.name}</span>
									</a>
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>{menu.name}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</TooltipProvider>
			</div>
		</div>
	);
}

export default Connect;
