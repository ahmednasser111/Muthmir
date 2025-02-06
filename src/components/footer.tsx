import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = ["Home", "Muthmir", "Prototype", "Team"];
const socialLinks = [
	{ icon: Github, link: "#github", label: "GitHub" },
	{ icon: Linkedin, link: "#linkedin", label: "LinkedIn" },
];

export function Footer() {
	return (
		<footer className='bg-gradient-to-b from-gray-50 to-gray-100 border-t'>
			<div className='container mx-auto px-4 py-2'>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					<div>
						<h3 className='mb-4 text-lg font-semibold text-gray-800'>
							About Muthmir
						</h3>
						<p className='text-sm text-gray-600 leading-relaxed'>
							A graduation project combining IoT, AI, and mobile technology to
							revolutionize farming practices. Our mission is to empower farmers
							with smart, sustainable solutions.
						</p>
					</div>
					<div>
						<h3 className='mb-4 text-lg font-semibold text-gray-800'>
							Quick Links
						</h3>
						<ul className='space-y-2 text-sm text-gray-600'>
							{quickLinks.map((link) => (
								<li key={link}>
									<a
										href={`#${link.toLowerCase()}`}
										className='hover:text-green-600 transition-colors duration-300 flex items-center'>
										<span className='mr-2'>›</span>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className='mb-4 text-lg font-semibold text-gray-800'>
							Contact Us
						</h3>
						<ul className='space-y-2 text-sm text-gray-600'>
							<li className='flex items-center'>
								<Mail className='h-4 w-4 mr-2' />
								<a
									href='mailto:contact@muthmir.com'
									className='hover:text-green-600 transition-colors duration-300'>
									contact@muthmir.com
								</a>
							</li>
							<li className='flex items-center'>
								<Phone className='h-4 w-4 mr-2' />
								<a
									href='tel:+1234567890'
									className='hover:text-green-600 transition-colors duration-300'>
									+1 234 567 890
								</a>
							</li>
							<li className='flex items-start'>
								<MapPin className='h-4 w-4 mr-2 mt-1' />
								<span>Your Address Here, City, Country</span>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='mb-4 text-lg font-semibold text-gray-800'>
							Follow Us
						</h3>
						<div className='flex space-x-4'>
							{socialLinks.map(({ icon: Icon, link, label }) => (
								<a
									key={link}
									href={link}
									aria-label={label}
									className='text-gray-600 hover:text-green-600 transition-colors duration-300 p-2 rounded-full hover:bg-gray-200'>
									<Icon className='h-5 w-5' />
								</a>
							))}
						</div>
					</div>
				</div>
				<div className='mt-8 border-t pt-2 text-center'>
					<p className='text-sm text-gray-600'>
						© {new Date().getFullYear()} Muthmir. All rights reserved.
					</p>
					<p className='text-sm text-gray-500 mt-2'>
						Website designed and developed by{" "}
						<a
							href='https://github.com/ahmednasser111'
							target='_blank'
							rel='noopener noreferrer'
							className='text-green-600 hover:text-green-700 transition-colors duration-300'>
							Ahmed Nasser
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
