import { HeroSection } from "@/components/hero-section";
import { TeamSection } from "@/components/team-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import AboutSection from "./components/about-section";
import FeaturesSection from "./components/features-section";

export default function App() {
	return (
		<div className='flex min-h-screen flex-col'>
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<FeaturesSection />
				<TeamSection />
			</main>
			<Footer />
		</div>
	);
}
