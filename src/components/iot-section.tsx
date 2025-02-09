import { motion } from "framer-motion"
import { Cpu, Wifi, Cloud, Gauge } from "lucide-react"

interface IoTComponent {
  title: string
  description: string
  icon: React.ReactNode
}

const components: IoTComponent[] = [
  {
    title: "Environmental Monitoring",
    description:
      "Advanced sensors measure temperature, humidity, soil moisture, and light intensity in real-time for optimal growing conditions.",
    icon: <Gauge className="w-6 h-6" />,
  },
  {
    title: "Wireless Communication",
    description:
      "ESP32 microcontrollers enable seamless Wi-Fi and Bluetooth connectivity for reliable data transmission.",
    icon: <Wifi className="w-6 h-6" />,
  },
  {
    title: "Cloud Integration",
    description: "Firebase backend ensures secure, real-time data storage and synchronization across all devices.",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: "Processing Power",
    description: "Powerful microcontrollers handle complex calculations and automated decision-making processes.",
    icon: <Cpu className="w-6 h-6" />,
  },
]

export default function IoTSection() {
  return (
    <section id="iot" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">IoT Integration</h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Advanced Internet of Things technology powering smart agriculture through real-time monitoring and automated
            control systems.
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 sm:mb-24"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="iot.png" alt="Muthmir IoT Device in Field" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">Smart Monitoring System</h3>
              <p className="text-xs sm:text-base md:text-lg opacity-90 max-w-2xl">
                Our advanced IoT sensors provide real-time environmental data collection and analysis for optimal crop
                management
              </p>
            </div>
          </div>
        </motion.div>

        {/* Components Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {components.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {component.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{component.title}</h3>
              <p className="text-gray-600 text-sm">{component.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 sm:mb-8">Powered By</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="group flex flex-col items-center justify-center">
              <img
                src="firebase.png"
                alt="Firebase"
                className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <p className="mt-2 text-sm text-gray-600">Real-time Database</p>
            </div>
            <div className="group flex flex-col items-center justify-center">
              <img
                src="flutter.png"
                alt="Flutter"
                className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <p className="mt-2 text-sm text-gray-600">Mobile Development</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

