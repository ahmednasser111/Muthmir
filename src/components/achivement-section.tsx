"use client";

import type React from "react";

const AchievementSection: React.FC = () => {
	return (
		<section
			className='relative py-24 overflow-hidden bg-gray-900'
			id='achievement'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-10'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage:
							"radial-gradient(circle at 2px 2px, rgba(115, 201, 145, 0.15) 2px, transparent 0)",
						backgroundSize: "24px 24px",
					}}
				/>
			</div>

			<div className='container relative mx-auto px-4'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Image Column */}
					<div className='relative group'>
						<div className='absolute -inset-4 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000'></div>
						<div className='relative'>
							<div className='aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-1'>
								<img
									src='ieee.png'
									alt='IEEE VICTORIS Award'
									className='w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700'
								/>
							</div>
						</div>
					</div>

					{/* Content Column */}
					<div className='text-center lg:text-left'>
						<h2 className='inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 text-4xl md:text-5xl font-bold mb-6'>
							IEEE VICTORIS 3.0
						</h2>

						<div className='relative inline-flex flex-col items-center lg:items-start'>
							<div className='flex items-baseline gap-2 mb-6'>
								<span className='text-7xl font-bold text-teal-500'>3</span>
								<span className='text-2xl font-semibold text-teal-400'>rd</span>
								<span className='text-3xl font-bold text-gray-300 ml-2'>
									Place
								</span>
							</div>

							<p className='text-gray-400 text-lg max-w-xl'>
								We proudly secured the third position in the IEEE Victoris 3.0
								competition, a prestigious event held at Mansoura University
								showcasing innovative technological solutions.
							</p>
						</div>

						{/* Achievement Stats */}
						<div className='grid grid-cols-2 gap-8 mt-12'>
							<div className='text-center p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm'>
								<div className='text-4xl font-bold text-teal-400 mb-2'>40+</div>
								<div className='text-gray-400'>Competing Teams</div>
							</div>
							<div className='text-center p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm'>
								<div className='text-4xl font-bold text-emerald-400 mb-2'>
									2024
								</div>
								<div className='text-gray-400'>Competition Year</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AchievementSection;
