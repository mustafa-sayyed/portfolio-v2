import About from "@/components/About";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
	return (
		<div className="mx-auto w-full max-w-2xl px-6 pb-4 sm:px-8">
			<Hero />
			<About />
			<Projects />
			<Articles />
			<Technologies />
			<Footer />
		</div>
	);
}
