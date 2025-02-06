"use client";

import type React from "react";
import { useState } from "react";

interface AppScreen {
	title: string;
	description: string;
	image: string;
	icon: React.ReactNode;
}

const screens: AppScreen[] = [
	{
		title: "Real-time Monitoring",
		description:
			"Track environmental conditions with detailed sensor readings and visualizations",
		image: "/mobile/home.png",
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-6 h-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
				/>
			</svg>
		),
	},
	{
		title: "Smart Controls",
		description:
			"Control your greenhouse devices with intuitive toggles and automation",
		image: "/mobile/device.png",
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-6 h-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
				/>
			</svg>
		),
	},
	{
		title: "Plant Health AI",
		description: "AI-powered disease detection and plant health monitoring",
		image: "/mobile/health.png",
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-6 h-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
				/>
			</svg>
		),
	},
	{
		title: "Community",
		description:
			"Connect with other farmers, share insights, and grow together",
		image: "/mobile/community.png",
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-6 h-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
				/>
			</svg>
		),
	},
];

const MobileSection: React.FC = () => {
	const [activeScreen, setActiveScreen] = useState(0);

	return (
		<section
			id='mobile'
			className='py-20 bg-gradient-to-b from-white to-gray-50'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 mb-6'>
						Smart Farming in Your Pocket
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						The Muthmir app is your dedicated companion, designed to elevate the
						user experience. Monitor and control your greenhouses while
						connecting with the Muthmir community.
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Phone Display */}
					<div className='relative mx-auto max-w-[300px] transition-all duration-500 ease-in-out'>
						<img
							src={screens[activeScreen].image}
							alt={screens[activeScreen].title}
							className='rounded-[2.5rem] w-full'
						/>

						{/* Screen Navigation Dots */}
						<div className='flex justify-center mt-8 space-x-2'>
							{screens.map((_, index) => (
								<button
									key={index}
									onClick={() => setActiveScreen(index)}
									className={`w-3 h-3 rounded-full transition-all cursor-pointer duration-300 ${
										index === activeScreen
											? "bg-green-500 w-6"
											: "bg-gray-300 hover:bg-gray-400"
									}`}
									aria-label={`View screen ${index + 1}`}
								/>
							))}
						</div>
					</div>

					{/* Features List */}
					<div className='space-y-6'>
						{screens.map((screen, index) => (
							<div
								key={index}
								className={`transform transition-all duration-500 ${
									index === activeScreen
										? "scale-100 opacity-100"
										: "scale-95 opacity-50"
								}`}
								onClick={() => setActiveScreen(index)}>
								<div
									className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
										index === activeScreen
											? "bg-white shadow-lg border-2 border-green-500"
											: "bg-gray-50 hover:bg-white hover:shadow-md"
									}`}>
									<div className='flex items-start gap-4'>
										<div
											className={`p-3 rounded-lg ${
												index === activeScreen
													? "bg-green-500 text-white"
													: "bg-green-100 text-green-500"
											}`}>
											{screen.icon}
										</div>
										<div>
											<h3 className='text-lg font-semibold text-gray-900 mb-2'>
												{screen.title}
											</h3>
											<p className='text-gray-600'>{screen.description}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Download App */}
				{/* 
				<div className='mt-16 text-center'>
					<a
						href='#download'
						className='inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-300'>
						Download the App
						<svg
							className='ml-2 w-5 h-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
							/>
						</svg>
					</a>
				</div> */}
			</div>
		</section>
	);
};

export default MobileSection;
