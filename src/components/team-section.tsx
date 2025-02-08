"use client";

import { useState } from "react";

interface TeamMember {
	name: string;
	role: string;
	image: string;
	categories: string[];
	socialLinks?: {
		linkedin?: string;
		github?: string;
	};
}

const teamMembers: TeamMember[] = [
	{
		name: "Ahmed Samir",
		role: "Team Leader",
		image: "/pictures/samir.jpg",
		categories: ["AI", "Data Analysis"],
		socialLinks: {
			linkedin: "https://www.linkedin.com/in/ahmed-samir-9a5769233",
			github: "https://github.com/ahmedsamir42003",
		},
	},
	{
		name: "Ahmed Nasser",
		role: "Software Engineer",
		image: "/pictures/nasser.jpg",
		categories: ["Mobile", "Frontend", "IoT"],
		socialLinks: {
			github: "https://github.com/ahmednasser111",
			linkedin: "https://www.linkedin.com/in/ahmed-naser-16047a222/",
		},
	},
	{
		name: "Hazem Mohamed",
		role: "Software Engineer",
		image: "/placeholder.jpg",
		categories: ["Mobile", "Backend", "IoT", "Cloud"],
		socialLinks: {
			linkedin: "https://www.linkedin.com/in/hazem-mohamed-b296a6267/",
			github: "https://github.com/hazemxiii",
		},
	},
	{
		name: "Marwan Ashraf",
		role: "Software Engineer",
		image: "/pictures/marwan.jpg",
		categories: ["Mobile", "Backend", "IoT", "Cloud"],
		socialLinks: {
			linkedin: "https://www.linkedin.com/in/marwan-ashraf-09b840270",
			github: "https://github.com/MarwanAshraf03",
		},
	},
	{
		name: "Mostafa Saleh",
		role: "Data Analyst",
		image: "/pictures/mostafa.jpg",
		categories: ["Data Analysis"],
		socialLinks: {
			linkedin: "",
			github: "https://github.com/Mustafa-Saleh1",
		},
	},
	{
		name: "Ahmed Samir",
		role: "Data Analyst",
		image: "/pictures/abdelazim.jpg",
		categories: ["Data Analysis"],
		socialLinks: {
			linkedin: "https://www.linkedin.com/in/ahmed-samir-367680269/",
			github: "https://github.com/ahmedsmra",
		},
	},
	{
		name: "Ali Mahmoud",
		role: "AI Engineer",
		image: "/placeholder.jpg",
		categories: ["AI", "IoT", "Data Analysis"],
		socialLinks: {
			linkedin: "https://www.linkedin.com/in/ali-mahmoud-07b7ba24b",
			github: "https://github.com/limahmoud",
		},
	},
	{
		name: "Nour-Eldeen Anwar",
		role: "AI Engineer",
		image: "/pictures/nour.jpg",
		categories: ["AI"],
		socialLinks: {
			linkedin: "https://www.linkedin.com/in/nour-eldeen-anwar-125743233",
			github: "https://github.com/Nouranwar",
		},
	},
	{
		name: "Khalid Abdelhamid",
		role: "Data Analyst",
		image: "/pictures/khalid.jpg",
		categories: ["Data Analysis", "AI"],
		socialLinks: {
			linkedin: "https://www.linkedin.com/in/khalid-hamdy-27a535268",
			github: "https://github.com/KhalidHamdy",
		},
	},
	{
		name: "Ahmed Salah",
		role: "Software Engineer",
		image: "placeholder.jpg",
		categories: ["Mobile", "IoT", "Cloud"],
		socialLinks: {
			linkedin: "https://www.linkedin.com/in/ahmed-salah-a6541b285",
			github: "https://github.com/Ahmed-1920",
		},
	},
];

const allCategories = Array.from(
	new Set(teamMembers.flatMap((member) => member.categories))
).sort();

export function TeamSection() {
	const [selectedCategory, setSelectedCategory] = useState<string>("All");
	const [shuffledMembers] = useState(() =>
		[...teamMembers].sort(() => Math.random() - 0.5)
	);
	const [expandedMember, setExpandedMember] = useState<number | null>(null);

	const filteredMembers =
		selectedCategory === "All"
			? shuffledMembers
			: shuffledMembers.filter((member) =>
					member.categories.includes(selectedCategory)
			  );

	const toggleMemberExpansion = (index: number) => {
		setExpandedMember(expandedMember === index ? null : index);
	};

	return (
		<section
			id='team'
			className='py-24 bg-gradient-to-b from-gray-50 to-white'>
			<div className='container mx-auto px-4'>
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 mb-6'>
						Meet Our Team
					</h2>
					<p className='text-xl text-gray-600'>
						A diverse group of passionate individuals working together to
						revolutionize smart farming
					</p>
				</div>

				{/* Category Filter */}
				<div className='flex flex-wrap justify-center gap-3 mb-12'>
					<button
						onClick={() => setSelectedCategory("All")}
						className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
              ${
								selectedCategory === "All"
									? "bg-green-500 text-white shadow-lg shadow-green-500/25"
									: "bg-gray-100 text-gray-600 hover:bg-gray-200"
							}`}>
						All
					</button>
					{allCategories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                ${
									selectedCategory === category
										? "bg-green-500 text-white shadow-lg shadow-green-500/25"
										: "bg-gray-100 text-gray-600 hover:bg-gray-200"
								}`}>
							{category}
						</button>
					))}
				</div>

				{/* Team Grid */}
				<div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
					{filteredMembers.map((member, index) => (
						<div
							key={`${member.name}-${index}`}
							className='bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl'>
							{/* Image Container */}
							<div className='aspect-square overflow-hidden'>
								<img
									src={member.image}
									alt={member.name}
									className='w-full h-full object-center transition-transform duration-500 hover:scale-110'
								/>
							</div>

							{/* Content */}
							<div className='p-6'>
								<h3 className='text-xl font-semibold mb-1'>{member.name}</h3>
								<p className='text-gray-600 mb-3'>{member.role}</p>

								{/* Expand/Collapse button for mobile */}
								<button
									onClick={() => toggleMemberExpansion(index)}
									className='text-green-500 hover:text-green-600 transition-colors md:hidden'>
									{expandedMember === index ? "Less info" : "More info"}
								</button>

								{/* Desktop: Always visible, Mobile: Expandable */}
								<div
									className={`mt-4 transition-all duration-300 overflow-hidden md:h-auto ${
										expandedMember === index ? "h-auto" : "h-0 md:h-auto"
									}`}>
									{/* Categories */}
									<div className='flex flex-wrap gap-2 mb-4'>
										{member.categories.map((category) => (
											<span
												key={category}
												className='inline-block px-1 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full'>
												{category}
											</span>
										))}
									</div>

									{/* Social Links */}
									{member.socialLinks && (
										<div className='flex gap-3 ml-1'>
											{member.socialLinks.linkedin && (
												<a
													href={member.socialLinks.linkedin}
													className='text-gray-400 hover:text-green-500 transition-colors'
													target='_blank'
													rel='noopener noreferrer'>
													<svg
														className='w-5 h-5'
														fill='currentColor'
														viewBox='0 0 24 24'>
														<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
													</svg>
												</a>
											)}
											{member.socialLinks.github && (
												<a
													href={member.socialLinks.github}
													className='text-gray-400 hover:text-green-500 transition-colors'
													target='_blank'
													rel='noopener noreferrer'>
													<svg
														className='w-5 h-5'
														fill='currentColor'
														viewBox='0 0 24 24'>
														<path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
													</svg>
												</a>
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
