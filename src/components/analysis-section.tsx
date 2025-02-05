import type React from "react";

interface AnalysisFeature {
	title: string;
	points: string[];
	icon: React.ReactNode;
}

const analysisFeatures: AnalysisFeature[] = [
	{
		title: "Real-time Analysis",
		points: [
			"Dynamic line charts for 24-hour data visualization",
			"Enables immediate response to environmental changes",
			"Enhances resource efficiency and sustainability",
		],
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-8 h-8'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M13 10V3L4 14h7v7l9-11h-7z'
				/>
			</svg>
		),
	},
	{
		title: "Historical Analysis",
		points: [
			"Data filtered by timeframes: daily, weekly, or monthly",
			"Insights into seasonal variations and growth cycles",
			"Helps in future planning and resource optimization",
		],
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-8 h-8'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
				/>
			</svg>
		),
	},
];

const AnalysisSection: React.FC = () => {
	return (
		<section
			id='analysis'
			className='py-20 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col items-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 text-center mb-6'>
						Data Analysis & Insights
					</h2>
					<p className='text-xl text-gray-600 text-center max-w-3xl'>
						The integration between the Flutter mobile app and Power BI enhances
						the user experience by enabling seamless access to critical data
						anytime, anywhere.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<div className='order-2 lg:order-1'>
						<div className='space-y-8'>
							{analysisFeatures.map((feature, index) => (
								<div
									key={index}
									className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300'>
									<div className='flex items-start gap-4'>
										<div className='p-3 bg-green-50 rounded-lg text-green-500'>
											{feature.icon}
										</div>
										<div>
											<h3 className='text-lg font-semibold text-gray-900 mb-3'>
												{feature.title}
											</h3>
											<ul className='space-y-2'>
												{feature.points.map((point, idx) => (
													<li
														key={idx}
														className='text-gray-600 text-sm flex items-start'>
														<svg
															className='w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0'
															fill='none'
															viewBox='0 0 24 24'
															stroke='currentColor'>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																strokeWidth={2}
																d='M5 13l4 4L19 7'
															/>
														</svg>
														{point}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='order-1 lg:order-2'>
						<div className='relative mx-auto max-w-[300px]'>
							{/* Phone Frame */}
							<div className='relative rounded-[3rem] overflow-hidden bg-gray-900 p-3 shadow-2xl'>
								<div className='absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-t-[3rem] flex items-center justify-center'>
									<div className='w-20 h-4 bg-black rounded-full'></div>
								</div>
								<img
									src='analysis.png'
									alt='Muthmir mobile app analysis dashboard'
									className='rounded-[2.5rem] w-full'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AnalysisSection;
