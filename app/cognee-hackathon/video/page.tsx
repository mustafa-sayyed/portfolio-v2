import type { Metadata } from "next";
import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";

export const metadata: Metadata = {
	title: "Cognee Hackathon - Mustafa Sayyed",
	description: "Watch my submissions for the Cognee Hackathon ",
};

const videos = [
	{
		id: process.env.FIRST_VIDEO,
		title: "Submission Video for Cognee Hackathon",
		description:
			"This video contains info about project, tech stack, architecture, and demo of the project which was submitted for the Cognee Hackathon.",
	},
	{
		id: process.env.SECOND_VIDEO,
		title: "How we utilized Cognee to improve our issue recommendation system",
		description:
			"This video contains info about how we utilized Cognee to improve our issue recommendation system, and how it helped us to improve the accuracy of our recommendations.",
	},
];

export default function CogneeHackathonVideoPage() {
	return (
		<main className="min-h-screen w-full flex flex-col items-center py-16 px-4 sm:px-8">
			<div className="w-full max-w-[800px]">
				{/* Header */}
				<div className="mb-12">
					<Link
						href="/"
						className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
					>
						<BiLeftArrow />
						Back to portfolio
					</Link>

					<div className="flex items-center gap-3 mb-3">
						<span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
							Hackathon
						</span>
						<span className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-500">
							Cognee
						</span>
					</div>

					<h1 className="text-3xl sm:text-4xl font-semibold mb-3 leading-tight">
						WeMakeDevs - Cognee Hackathon Submissions
					</h1>
					<p className="text-muted-foreground font-light text-base leading-relaxed">
						Below is the video which was mentioned in submission, and the other
						video is about how we utilized Cognee to improve our issue
						recommendation system
					</p>
				</div>

				{/* Video Cards */}
				<div className="flex flex-col gap-10">
					{videos.map((video, index) => (
						<div
							key={video.id}
							className="group rounded-2xl border border-border/80 bg-card/40 overflow-hidden hover:border-border transition-colors"
						>
							{/* Video Embed */}
							<div className="relative w-full aspect-video bg-black">
								<iframe
									src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
									title={video.title}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
									className="absolute inset-0 w-full h-full"
								/>
							</div>

							{/* Card Body */}
							<div className="p-5">
								<div className="flex items-center gap-2 mb-2">
									<Link
										href={`https://youtu.be/${video.id}`}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
									>
										Watch on YouTube
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="12"
											height="12"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
											<polyline points="15 3 21 3 21 9" />
											<line x1="10" x2="21" y1="14" y2="3" />
										</svg>
									</Link>
								</div>
								<h2 className="text-lg font-semibold mb-1">{video.title}</h2>
								<p className="text-sm text-muted-foreground font-light">
									{video.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
