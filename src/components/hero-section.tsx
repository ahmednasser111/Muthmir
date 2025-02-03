import { motion } from "framer-motion";
import { CircuitBoard, ArrowRight } from "lucide-react";

export function HeroSection() {
	return (
		<section
			id='home'
			className='relative overflow-hidden bg-gradient-to-br from-black to-gray-900 py-20 md:py-32'>
			<div className='container relative z-10 mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div className='grid items-center gap-12 lg:grid-cols-2'>
					<div className='flex flex-col justify-center text-center lg:text-left'>
						<motion.h1 className='text-4xl font-extrabold tracking-tight text-[#73C991] sm:text-5xl md:text-6xl lg:text-7xl'>
							Make Your Farm <span className='text-white'>Smarter</span>
						</motion.h1>
						<motion.p className='mt-6 max-w-2xl text-xl text-gray-300 sm:text-2xl'>
							Empowering Smart Farms with Real-Time Insights for Enhanced
							Efficiency and Sustainability
						</motion.p>
						<motion.div className='mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
							<a
								href='/get-started'
								className='group inline-flex items-center justify-center rounded-full bg-[#28A745] px-6 py-3 text-lg font-semibold text-white transition-all duration-200 hover:bg-[#73C991] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#28A745] focus:ring-offset-2 focus:ring-offset-gray-900 active:bg-[#73C991] active:shadow-none'
								aria-label='Get Started with Muthmir'>
								Get Started
								<ArrowRight
									className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1'
									aria-hidden='true'
								/>
							</a>
							<a
								href='/learn-more'
								className='inline-flex items-center justify-center rounded-full border-2 border-[#73C991] bg-transparent px-6 py-3 text-lg font-semibold text-[#73C991] transition-all duration-200 hover:bg-[#73C991]/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#73C991] focus:ring-offset-2 focus:ring-offset-gray-900 active:bg-[#73C991]/20 active:shadow-none'
								aria-label='Learn More about Muthmir'>
								Learn More
							</a>
						</motion.div>
					</div>
					<motion.div className='relative hidden lg:block'>
						<div className='absolute inset-0 flex items-center justify-center'>
							<CircuitBoard
								className='h-full w-full text-[#73C991] opacity-20'
								aria-hidden='true'
							/>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
