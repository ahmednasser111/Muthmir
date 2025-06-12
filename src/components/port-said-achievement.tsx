"use client";

import type React from "react";

const PortSaidAchievementSection: React.FC = () => {
	return (
		<section
			className='relative py-24 overflow-hidden bg-gray-50'
			id='port-said-achievement'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-20'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage:
							"radial-gradient(circle at 2px 2px, rgba(20, 184, 166, 0.3) 2px, transparent 0)",
						backgroundSize: "24px 24px",
					}}
				/>
			</div>

			<div className='container relative mx-auto px-4'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Image Column */}
					<div className='relative group'>
						<div className='absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000'></div>
						<div className='relative'>
							<div className='aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md border border-teal-100 p-1'>
								<img
									src='port-said.jpg'
									alt='Port Said Engineering Day Project Display'
									className='w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700'
								/>
							</div>
						</div>
					</div>

					{/* Content Column */}
					<div className='text-center lg:text-left'>
						<h2 className='inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 text-4xl md:text-5xl font-bold mb-6'>
							Port Said Engineering Day
						</h2>

						<div className='relative inline-flex flex-col items-center lg:items-start'>
							<div className='flex items-baseline gap-2 mb-6'>
								<span className='text-7xl font-bold text-teal-600'>3</span>
								<span className='text-2xl font-semibold text-teal-500'>rd</span>
								<span className='text-3xl font-bold text-gray-700 ml-2'>
									Place
								</span>
							</div>

							<p className='text-gray-600 text-lg max-w-xl'>
								We are proud to have secured third place in the 15th edition of
								the Port Said Engineering Day competition—an esteemed event
								hosted by Port Said University that highlights innovative
								technological solutions.
							</p>
						</div>

						{/* Achievement Stats */}
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-12'>
							<div className='text-center p-6 rounded-lg bg-white shadow-md border border-teal-100'>
								<div className='text-4xl font-bold text-teal-600 mb-2'>
									400+
								</div>
								<div className='text-gray-600'>Competing Teams</div>
							</div>
							<div className='text-center p-6 rounded-lg bg-white shadow-md border border-teal-100'>
								<div className='text-4xl font-bold text-emerald-600 mb-2'>
									2025
								</div>
								<div className='text-gray-600'>Competition Year</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortSaidAchievementSection;
