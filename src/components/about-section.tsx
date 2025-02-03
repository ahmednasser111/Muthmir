import type React from "react";

const AboutSection: React.FC = () => {
	return (
		<section
			id='about'
			className='py-20 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<div className='text-center'>
					<h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
						About Muthmir
					</h2>
					<p className='mx-auto mt-4 max-w-[700px] text-gray-600'>
						Muthmir is a graduation project that combines IoT, AI, and mobile
						technology to revolutionize farming practices. Our solution provides
						real-time monitoring and smart insights for modern agriculture.
					</p>
				</div>
				<div className='mt-12'>
					<div className='bg-white shadow-md rounded-lg overflow-hidden'>
						<div className='px-6 py-4'>
							<h3 className='text-xl font-semibold text-gray-800'>
								Our Vision
							</h3>
							<p className='text-sm text-gray-600 mt-1'>
								Creating sustainable farming solutions for the future
							</p>
						</div>
						<div className='px-6 py-4 border-t border-gray-200'>
							<p className='text-gray-600'>
								We envision a future where farming is more efficient,
								sustainable, and data-driven. Through the integration of
								cutting-edge technology and agricultural expertise, Muthmir aims
								to empower farmers with the tools they need to optimize their
								operations and increase productivity.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
