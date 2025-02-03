import { motion } from "framer-motion";

const teamMembers = [
	{
		name: "Ahmed Samir Abdelfattah",
		role: "AI Engineer",
		image: "/placeholder.svg?height=400&width=400",
		category: "AI",
	},
	{
		name: "Ahmed Nasser",
		role: "Software Engineer",
		image: "/pictures/nasser.jpg?height=400&width=400",
		category: "Mobile",
	},
	{
		name: "Hazem Mohamed",
		role: "Software Engineer",
		image: "/placeholder.svg?height=400&width=400",
		category: "Mobile",
	},
	{
		name: "Marwan Ashraf",
		role: "Software Engineer",
		image: "/placeholder.svg?height=400&width=400",
		category: "Mobile",
	},
	{
		name: "Mostafa Saleh",
		role: "Data Analyst",
		image: "/pictures/mostafa.jpg?height=400&width=400",
		category: "Data Analysis",
	},
	{
		name: "Ahmed Samir Abdelazim",
		role: "Data Analyst",
		image: "/pictures/abdelazim.jpg?height=400&width=400",
		category: "Data Analysis",
	},
	{
		name: "Ali Mahmoud",
		role: "AI Engineer",
		image: "/placeholder.svg?height=400&width=400",
		category: "AI",
	},
	{
		name: "Nour Anwar",
		role: "AI Engineer",
		image: "/pictures/nour.jpg?height=400&width=400",
		category: "AI",
	},
	{
		name: "Khalid Abdelhamid",
		role: "Data Analyst",
		image: "/placeholder.svg?height=400&width=400",
		category: "Data Analysis",
	},
];

export function TeamSection() {
	return (
		<section
			id='team'
			className='py-20 bg-gray-50'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='text-center'>
					<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900'>
						Our Team
					</h2>
					<p className='mx-auto mt-4 max-w-[700px] text-gray-600'>
						Meet the talented individuals behind the Muthmir project
					</p>
				</motion.div>
				<div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}>
							<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
								<div className='p-0'>
									<img
										src={member.image || "/placeholder.svg"}
										alt={member.name}
										width={400}
										height={400}
										className='w-full aspect-square object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900'>
										{member.name}
									</h3>
									<p className='mt-2 text-gray-600'>{member.role}</p>
									<div className='mt-4'>
										<span className='inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800'>
											{member.category}
										</span>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
