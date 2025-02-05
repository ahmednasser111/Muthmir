import type React from "react";

interface AIFeature {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const aiFeatures: AIFeature[] = [
	{
		title: "Plant Disease Detection",
		description:
			"Using deep learning models, the system analyzes images of plant leaves to detect diseases at an early stage. This enables timely intervention, reducing crop loss and improving overall plant health.",
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
					d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
				/>
			</svg>
		),
	},
	{
		title: "Growth Stage Classification",
		description:
			"AI models classify plants based on their developmental stages, ensuring that environmental conditions such as irrigation, lighting, and nutrient supply are optimized according to their growth needs.",
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
					d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
				/>
			</svg>
		),
	},
	{
		title: "Predictive Analytics",
		description:
			"By analyzing historical and real-time data, AI predicts future trends in temperature, humidity, and water consumption, allowing for proactive resource management and enhanced sustainability.",
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
	{
		title: "Chatbot Assistance",
		description:
			"Muthmir features an AI-powered chatbot that provides real-time information about greenhouse conditions, offers recommendations based on sensor data, and allows users to send commands to control irrigation, lighting, and ventilation remotely.",
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
					d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
				/>
			</svg>
		),
	},
];

const AISection: React.FC = () => {
	return (
		<section
			id='ai'
			className='py-20 bg-white'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col items-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 text-center mb-6'>
						AI-Powered Intelligence
					</h2>
					<p className='text-xl text-gray-600 text-center max-w-3xl'>
						The Muthmir project integrates Artificial Intelligence (AI) to
						enhance the efficiency and automation of smart greenhouse
						management. AI plays a crucial role in four key areas.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
					<div className='space-y-6'>
						{aiFeatures.slice(0, 2).map((feature, index) => (
							<div
								key={index}
								className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300'>
								<div className='flex items-start gap-4'>
									<div className='p-3 bg-green-50 rounded-lg text-green-500'>
										{feature.icon}
									</div>
									<div>
										<h3 className='text-lg font-semibold text-gray-900 mb-2'>
											{feature.title}
										</h3>
										<p className='text-gray-600 text-sm'>
											{feature.description}
										</p>
									</div>
								</div>
							</div>
						))}
						<div className='relative aspect-video rounded-xl overflow-hidden'>
							<img
								src='cam.jpg'
								alt='AI-powered camera monitoring plants in greenhouse'
								className='w-full h-full object-cover'
							/>
						</div>
					</div>

					<div className='space-y-6'>
						<div className='relative aspect-video rounded-xl overflow-hidden mb-6'>
							<img
								src='chat.png'
								alt='Farmer using Muthmir mobile application'
								className='w-full h-full object-cover'
							/>
						</div>
						{aiFeatures.slice(2, 4).map((feature, index) => (
							<div
								key={index}
								className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300'>
								<div className='flex items-start gap-4'>
									<div className='p-3 bg-green-50 rounded-lg text-green-500'>
										{feature.icon}
									</div>
									<div>
										<h3 className='text-lg font-semibold text-gray-900 mb-2'>
											{feature.title}
										</h3>
										<p className='text-gray-600 text-sm'>
											{feature.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AISection;
