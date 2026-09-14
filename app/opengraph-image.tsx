import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Mustafa Sayyed — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				width: "100%",
				height: "100%",
				padding: "96px",
				backgroundColor: "#0a0a0a",
				color: "#ededed",
				fontFamily: "system-ui, -apple-system, sans-serif",
			}}
		>
			<div
				style={{
					fontSize: "32px",
					fontFamily: "monospace",
					color: "#8f8f8f",
					marginBottom: "32px",
				}}
			>
				mustafasayyed.dev
			</div>
			<div
				style={{
          display: "flex",
          flexDirection: "column",
					fontSize: "96px",
					fontWeight: 600,
					letterSpacing: "-4px",
					lineHeight: 1.05,
				}}
			>
				Building things
				<br />
				that matter.
			</div>
			<div
				style={{
					fontSize: "32px",
					color: "#8f8f8f",
					marginTop: "36px",
				}}
			>
				Full Stack Developer &middot; Open Source Contributor
			</div>
		</div>,
		{ ...size },
	);
}
