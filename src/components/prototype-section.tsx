const specifications = [
	{
		title: "Structure",
		description:
			"We use wood to build the structure. It's the most suitable choice for our limited time and cost. However, in the real world, it's often the worst choice.",
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
					d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
				/>
			</svg>
		),
	},
	{
		title: "Covering",
		description:
			"We use polycarbonate 0.3 mm, which is a great choice for insulating the greenhouse to maintain temperature and for protecting it from UV.",
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
					d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
				/>
			</svg>
		),
	},
	{
		title: "Plant Selection",
		description:
			"We selected tomatoes for our greenhouse prototype due to their high demand, versatile usage, and significance in Egyptian agriculture. This focus aims to optimize growth conditions, ensure year-round production, and support food security through sustainable practices.",
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
					d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
				/>
			</svg>
		),
	},
];

const PrototypeSection: React.FC = () => {
	return (
		<section
			id='prototype'
			className='py-20 bg-white'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col items-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 text-center mb-6'>
						Our Prototype
					</h2>
					<p className='text-xl text-gray-600 text-center max-w-3xl'>
						Explore our innovative greenhouse prototype, designed with careful
						consideration of materials, structure, and plant selection.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
					<div className='relative aspect-square'>
						<img
							src='prototype.png'
							alt='3D model of the greenhouse prototype'
							className='w-full h-full object-contain'
						/>
					</div>
					<div className='space-y-8'>
						{specifications.map((spec, index) => (
							<div
								key={index}
								className='flex flex-col md:flex-row md:items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300'>
								<div className='flex-shrink-0'>
									<div className='p-3 bg-white rounded-full shadow-sm'>
										{spec.icon}
									</div>
								</div>
								<div>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										{spec.title}
									</h3>
									<p className='text-gray-600'>{spec.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PrototypeSection;
