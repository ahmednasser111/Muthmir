import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#muthmir", label: "Muthmir" },
	{ href: "#prototype", label: "Prototype" },
	{ href: "#iot", label: "IoT" },
	{ href: "#ai", label: "AI" },
	{ href: "#analysis", label: "Analysis" },
	{ href: "#mobile", label: "Mobile" },
	{ href: "#achievement", label: "Achievement" },
	{ href: "#team", label: "Team" },
];

export const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
			className={`sticky top-0 z-50 w-full bg-gradient-to-r from-green-50 to-teal-50 transition-all duration-300 ${
				scrolled ? "shadow-lg" : ""
			}`}>
			<div className='container mx-auto px-4'>
				<div className='flex h-20 items-center justify-between'>
					{/* Logo */}
					<div className='flex items-center space-x-2'>
						<img
							src='/logo.png'
							alt='Muthmir Logo'
							className='w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md'
						/>
						<span className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent'>
							Muthmir
						</span>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden lg:flex space-x-1'>
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className='text-gray-700 hover:text-green-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative group hover:bg-white hover:shadow-md'>
								{item.label}
								<span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-200' />
							</a>
						))}
					</nav>

					{/* Mobile Menu Toggle */}
					<div className='flex items-center lg:hidden'>
						<button
							className='inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-green-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200'
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
							<span className='sr-only'>Open main menu</span>
							{isMobileMenuOpen ? (
								<X
									className='block h-6 w-6'
									aria-hidden='true'
								/>
							) : (
								<Menu
									className='block h-6 w-6'
									aria-hidden='true'
								/>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className='md:hidden overflow-hidden bg-white rounded-b-2xl shadow-lg'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className='block px-4 py-2 rounded-full text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200'
									onClick={() => setIsMobileMenuOpen(false)}>
									{item.label}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</motion.header>
	);
};

export default Header;
