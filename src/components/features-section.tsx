import type React from "react";

const features = [
	{
		title: "IoT Integration",
		description:
			"Connect and control hardware devices for real-time monitoring and automation",
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				className='w-10 h-10'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
				/>
			</svg>
		),
	},
	{
		title: "AI-Powered Insights",
		description:
			"Smart recommendations and decision-making powered by artificial intelligence",
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				className='w-10 h-10'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
				/>
			</svg>
		),
	},
	{
		title: "Mobile Development",
		description:
			"Access your farm data anywhere with our Flutter-powered mobile application",
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				className='w-10 h-10'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
				/>
			</svg>
		),
	},
	{
		title: "Data Analysis",
		description:
			"Comprehensive data visualization and insights for informed decision making",
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				className='w-10 h-10'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
				/>
			</svg>
		),
	},
];

const FeaturesSection: React.FC = () => {
	return (
		<section
			id='features'
			className='bg-gray-100 py-20'>
			<div className='container mx-auto px-4'>
				<div className='text-center'>
					<h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
						Key Features
					</h2>
					<p className='mx-auto mt-4 max-w-[700px] text-gray-600'>
						Discover how Muthmir combines multiple technologies to create a
						comprehensive farming solution
					</p>
				</div>
				<div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className='bg-white rounded-lg shadow-md overflow-hidden'>
							<div className='p-6'>
								<div className='text-indigo-600'>{feature.icon}</div>
								<h3 className='mt-4 text-xl font-semibold text-gray-800'>
									{feature.title}
								</h3>
								<p className='mt-2 text-gray-600'>{feature.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
