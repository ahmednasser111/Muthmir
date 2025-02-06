import type React from "react";

const HeroSection: React.FC = () => {
	return (
		<section
			id='home'
			className='relative'
			style={{ height: "calc(100vh - 64px)" }}>
			{/* Background Image with Overlay */}
			<div className='absolute inset-0'>
				<img
					src='/intro.jpg'
					alt='Modern greenhouse with rows of green vegetables'
					className='h-full w-full object-cover'
				/>
				<div className='absolute inset-0 bg-gradient-to-r from-black/90 to-black/70' />
			</div>

			{/* Content */}
			<div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
				<div className='flex min-h-screen items-center '>
					<div className='w-full py-20 md:py-32 lg:w-3/5'>
						<h1 className='text-4xl font-extrabold tracking-tight text-[#73C991] sm:text-5xl md:text-6xl lg:text-7xl'>
							Make Your Farm <span className='text-white'>Smarter</span>
						</h1>
						<p className='mt-6 max-w-2xl text-xl text-gray-300 sm:text-2xl'>
							Empowering Smart Farms with Real-Time Insights for Enhanced
							Efficiency and Sustainability
						</p>
						<div className='mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
							<a
								href='#muthmir'
								className='group inline-flex items-center justify-center rounded-full bg-[#28A745] px-6 py-3 text-lg font-semibold text-white transition-all duration-200 hover:bg-[#73C991] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#28A745] focus:ring-offset-2 focus:ring-offset-gray-900'
								aria-label='Get Started with Muthmir'>
								Get Started
								<svg
									className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative Pattern Overlay */}
			<div className='absolute inset-0 z-0 opacity-20 mix-blend-overlay'>
				<div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjNzNDOTkxIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-50" />
			</div>
		</section>
	);
};

export default HeroSection;
