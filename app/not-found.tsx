import { Button } from "@/components/ui/button";
import React from "react";

function notfound() {
	return (
		<div className="w-full min-h-screen flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-9xl">404</h1>
				<p className="text-2xl">Page Not Found</p>
			</div>
		</div>
	);
}

export default notfound;
