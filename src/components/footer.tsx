import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
	return (
		<footer className='border-t bg-gray-100'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					<div>
						<h3 className='mb-4 text-lg font-semibold text-gray-800'>
							About Muthmir
						</h3>
						<p className='text-sm text-gray-600'>
							A graduation project combining IoT, AI, and mobile technology to
							revolutionize farming practices.
						</p>
					</div>
					<div>
						<h3 className='mb-4 text-lg font-semibold text-gray-800'>
							Quick Links
						</h3>
						<ul className='space-y-2 text-sm text-gray-600'>
							{["Home", "About", "Features", "Team"].map((link) => (
								<li key={link}>
									<a
										href={`#${link.toLowerCase()}`}
										className='hover:text-green-600 transition-colors'>
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
							<li>Email: contact@muthmir.com</li>
							<li>Phone: +1 234 567 890</li>
							<li>Address: Your Address Here</li>
						</ul>
					</div>
					<div>
						<h3 className='mb-4 text-lg font-semibold text-gray-800'>
							Follow Us
						</h3>
						<div className='flex space-x-4'>
							{[
								{ icon: Github, link: "#github" },
								{ icon: Twitter, link: "#twitter" },
								{ icon: Linkedin, link: "#linkedin" },
							].map(({ icon: Icon, link }) => (
								<a
									key={link}
									href={link}
									className='text-gray-600 hover:text-green-600 transition-colors p-2 rounded-full hover:bg-gray-200'>
									<Icon className='h-5 w-5' />
								</a>
							))}
						</div>
					</div>
				</div>
				<div className='mt-8 border-t pt-8 text-center'>
					<p className='text-sm text-gray-600'>
						© {new Date().getFullYear()} Muthmir. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
