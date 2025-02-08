interface Objective {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const objectives: Objective[] = [
	{
		title: "Cost Reduction",
		description: "Work on strategies to reduce production costs effectively",
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-12 h-12 text-green-500'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
				/>
			</svg>
		),
	},
	{
		title: "User-Friendly Design",
		description:
			"Design a greenhouse system that is simple to manage, even for non-professionals",
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-12 h-12 text-green-500'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
				/>
			</svg>
		),
	},
	{
		title: "Disease Detection",
		description:
			"Implement measures to monitor and detect diseases effectively",
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-12 h-12 text-green-500'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
				/>
			</svg>
		),
	},
];

const MuthmirSection: React.FC = () => {
	return (
		<section
			id='muthmir'
			className='py-20 bg-gray-50 min-h-screen'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col items-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 text-center mb-6'>
						Smart Greenhouse Management
					</h2>
					<p className='text-xl text-gray-600 text-center max-w-3xl'>
						Muthmir is a smart greenhouse management system that integrates IoT,
						AI, and real-time data analytics to optimize agricultural
						operations. The system allows farmers to monitor and control key
						environmental factors such as temperature, humidity, soil moisture,
						and lighting conditions through a mobile application.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{objectives.map((objective, index) => (
						<div
							key={index}
							className='bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6'>
							<div className='flex flex-col items-center text-center'>
								<div className='mb-4 p-3 bg-green-50 rounded-full'>
									{objective.icon}
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									{objective.title}
								</h3>
								<p className='text-gray-600'>{objective.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MuthmirSection;
