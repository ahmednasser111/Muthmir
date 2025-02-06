import type React from "react";

interface IoTComponent {
	title: string;
	items: string[];
	icon: React.ReactNode;
}

const iotComponents: IoTComponent[] = [
	{
		title: "Environmental Monitoring",
		items: [
			"DHT22 Sensor: Measures temperature and humidity",
			"Capacitive Soil Moisture Sensor: Ensures optimal irrigation",
			"LDR Sensor: Monitors light intensity for automated lighting adjustments",
			"ESP CAM: Captures images for AI-powered plant health analysis",
		],
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-8 h-8'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z'
				/>
			</svg>
		),
	},
	{
		title: "Microcontrollers and Wireless Communication",
		items: [
			"ESP32 Microcontroller: Facilitates data processing and communication via Wi-Fi and Bluetooth",
			"MQTT Protocol: Enables low-latency messaging for efficient device communication",
			"HTTP Protocol: Ensures secure data transmission to the cloud (Firebase)",
		],
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-8 h-8'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'
				/>
			</svg>
		),
	},
	{
		title: "Automated Control Systems",
		items: [
			"Water Pumps: Activate irrigation based on soil moisture levels",
			"Ventilation & Cooling Systems: Regulate greenhouse temperature and humidity",
			"Grow Lights: Adjust brightness according to detected light intensity",
		],
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-8 h-8'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
				/>
			</svg>
		),
	},
	{
		title: "Cloud and Mobile Application Integration",
		items: [
			"Firebase Cloud Storage: Stores real-time sensor data for remote access",
			"Flutter-Based Mobile App: Allows farmers to monitor and control greenhouse operations remotely",
		],
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='w-8 h-8'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
				/>
			</svg>
		),
	},
];

const IoTSection: React.FC = () => {
	return (
		<section
			id='iot'
			className='py-20 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col items-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 text-center mb-6'>
						IoT Integration
					</h2>
					<p className='text-xl text-gray-600 text-center max-w-3xl'>
						The Muthmir project integrates a sophisticated Internet of Things
						(IoT) system to enhance greenhouse management through real-time
						monitoring, automation, and data-driven decision-making.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
					<div className='relative aspect-video rounded-2xl overflow-hidden margin-auto'>
						<img
							src='iot.png'
							alt='Muthmir IoT sensor in the field'
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='grid grid-cols-2 gap-6'>
						{iotComponents.map((component, index) => (
							<div
								key={index}
								className='col-span-2 bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300'>
								<div className='flex items-start gap-4'>
									<div className='p-3 bg-green-50 rounded-lg'>
										{component.icon}
									</div>
									<div>
										<h3 className='text-lg font-semibold text-gray-900 mb-3'>
											{component.title}
										</h3>
										<ul className='space-y-2'>
											{component.items.map((item, idx) => (
												<li
													key={idx}
													className='text-gray-600 text-sm'>
													{item}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-white rounded-2xl shadow-sm'>
					<p className='text-lg font-semibold text-gray-900'>Powered by:</p>
					<div className='flex items-center gap-8'>
						<img
							src='firebase.png'
							alt='Firebase Logo'
							className='h-12 w-auto'
						/>
						<img
							src='flutter.png'
							alt='Flutter Logo'
							className='h-8 w-auto'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IoTSection;
