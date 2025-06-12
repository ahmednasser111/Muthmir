import { TeamSection } from "@/components/team-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import HeroSection from "./components/hero-section";
import MuthmirSection from "./components/muthmir-section";
import PrototypeSection from "./components/prototype-section";
import IoTSection from "./components/iot-section";
import AISection from "./components/ai-section";
import AnalysisSection from "./components/analysis-section";
import MobileSection from "./components/mobile-section";
import AchievementSection from "./components/achievement-section";
import PortSaidAchievementSection from "./components/port-said-achievement";

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
				<MobileSection />
				<AchievementSection />
				<PortSaidAchievementSection />
				<TeamSection />
			</main>
			<Footer />
		</div>
	);
}
