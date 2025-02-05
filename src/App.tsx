import { TeamSection } from "@/components/team-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import AboutSection from "./components/about-section";
import FeaturesSection from "./components/features-section";
import HeroSection from "./components/hero-section";
import MuthmirSection from "./components/muthmir-section";
import PrototypeSection from "./components/prototype-section";
import IoTSection from "./components/iot-section";
import AISection from "./components/ai-section";
import AnalysisSection from "./components/analysis-section";

export default function App() {
	return (
		<div className='flex min-h-screen flex-col'>
			<Header />
			<main>
				<HeroSection />
				<MuthmirSection />
				<PrototypeSection />
				<IoTSection />
				<AISection />
				<AnalysisSection />
				<AboutSection />
				<FeaturesSection />
				<TeamSection />
			</main>
			<Footer />
		</div>
	);
}
