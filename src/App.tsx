import { useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { SITE } from "./data/content";

export default function App() {
	useEffect(() => {
		document.title = SITE.title;
	}, []);

	return (
		<div className="relative min-h-dvh overflow-x-hidden bg-background">
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
