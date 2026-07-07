import About from "@/components/About";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
	return (
		<div className="min-h-screen w-full flex items-center justify-center">
			<div className="w-full px-4 sm:px-8 md:max-w-[800px] z-50">
				<Hero />
				<About />
				<Projects />
				<Articles />
				<Technologies />
				<Footer />
			</div>
		</div>
	);
}
