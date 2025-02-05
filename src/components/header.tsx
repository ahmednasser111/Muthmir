import type React from "react";
import { useState } from "react";

const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#muthmir", label: "Muthmir" },
	{ href: "#prototype", label: "Prototype" },
	{ href: "#iot", label: "IoT" },
	{ href: "#ai", label: "AI" },
	{ href: "#analysis", label: "Analysis" },
	{ href: "#about", label: "About" },
	{ href: "#features", label: "Features" },
	{ href: "#team", label: "Team" },
];

export const Header: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-white bg-opacity-95 backdrop-blur'>
			<div className='container mx-auto px-4'>
				<div className='flex h-16 items-center justify-between'>
					{/* Logo */}
					<div className='flex items-center space-x-2'>
						<img
							src='/logo.png'
							alt='Muthmir Logo'
							className='w-8 h-8 sm:w-10 sm:h-10'
						/>
						<span className='text-lg sm:text-xl font-bold text-green-500'>
							Muthmir
						</span>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex space-x-4'>
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className='text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'>
								{item.label}
							</a>
						))}
					</nav>

					{/* CTA Button and Mobile Menu Toggle */}
					<div className='flex items-center'>
						<button className='hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
							Get Started
						</button>
						<button
							className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
							<span className='sr-only'>Open main menu</span>
							{isMobileMenuOpen ? (
								<svg
									className='block h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							) : (
								<svg
									className='block h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
									onClick={() => setIsMobileMenuOpen(false)}>
									{item.label}
								</a>
							))}
							<button
								className='w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
								onClick={() => setIsMobileMenuOpen(false)}>
								Get Started
							</button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
