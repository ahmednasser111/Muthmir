import React, { useState } from "react";

interface MetricCard {
  title: string;
  value: string;
  unit: string;
  trend: "up" | "down" | "stable";
  color: string;
}

interface AnalysisFeature {
  title: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
}

const metricCards: MetricCard[] = [
  {
    title: "Summer Crops",
    value: "76.73",
    unit: "%",
    trend: "up",
    color: "bg-emerald-500"
  },
  {
    title: "Winter Crops", 
    value: "35.38",
    unit: "%",
    trend: "stable",
    color: "bg-blue-500"
  },
  {
    title: "Humidity Level",
    value: "64.0",
    unit: "%",
    trend: "up", 
    color: "bg-green-500"
  },
  {
    title: "Energy Usage",
    value: "5.52",
    unit: "kWh",
    trend: "down",
    color: "bg-amber-500"
  }
];

const analysisFeatures: AnalysisFeature[] = [
  {
    title: "Real-Time Environmental Monitoring",
    description: "Advanced sensor networks provide continuous monitoring of critical growing conditions",
    points: [
      "Live temperature, humidity, and soil moisture tracking",
      "Instant alerts for optimal growing conditions",
      "24/7 automated environmental control systems",
      "Smart irrigation based on real-time data"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Data Analytics",
    description: "Transform raw sensor data into actionable insights for optimal crop management",
    points: [
      "Historical trend analysis across seasons",
      "Predictive modeling for crop yield optimization",
      "Energy consumption optimization reports",
      "Integrated mobile dashboard for remote monitoring"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Annual Report",
    description: "A yearly summary that visualizes key greenhouse metrics, crop yields, and resource usage, helping stakeholders make informed decisions.",
    points: [
      "Comprehensive overview of yearly performance",
      "Visual analytics for crop yield and resource trends",
      "Highlights achievements and areas for improvement",
      "Supports strategic planning and sustainability goals"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3v4M8 3v4m-5 4h18" />
      </svg>
    ),
  },
];

const visualImages = [
  {
    src: "/annual-report.jpg",
    alt: "Muthmir Annual Report Dashboard",
    label: "Annual Report",
    dotColor: "bg-blue-500",
  },
  {
    src: "/analysis.png",
    alt: "Muthmir Mobile Analytics Dashboard",
    label: "Live Data",
    dotColor: "bg-green-500",
  },
];

const AnalysisSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="analysis" className="relative py-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#22c55e_1px,_transparent_0)] [background-size:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Intelligent
            <span className="block text-green-600">Analytics Dashboard</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of agriculture with our comprehensive monitoring system that combines real-time sensor data, 
            advanced analytics, and mobile accessibility to optimize crop yields and resource efficiency.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metricCards.map((metric, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6">
                <div className={`absolute top-0 left-0 w-full h-1 ${metric.color}`}></div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-gray-600">{metric.title}</h4>
                  <div className={`w-2 h-2 rounded-full ${metric.color} opacity-60`}></div>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                  <span className="text-sm text-gray-500 mb-1">{metric.unit}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div className={`w-3 h-3 rounded-full ${
                    metric.trend === 'up' ? 'bg-green-500' : 
                    metric.trend === 'down' ? 'bg-red-500' : 'bg-gray-400'
                  }`}></div>
                  <span className="text-xs text-gray-500">
                    {metric.trend === 'up' ? 'Increasing' : 
                     metric.trend === 'down' ? 'Decreasing' : 'Stable'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {analysisFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-3">
                        {feature.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Side as Slider */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative group w-full flex flex-col items-center">
                <img
                  src={visualImages[activeImage].src}
                  alt={visualImages[activeImage].alt}
                  className="rounded-2xl w-full max-w-[350px] object-cover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2">
                  <div className={`w-3 h-3 ${visualImages[activeImage].dotColor} rounded-full`}></div>
                  <span className="text-sm font-medium text-gray-700">{visualImages[activeImage].label}</span>
              </div>
              {/* Slider Controls */}
              <div className="flex justify-center mt-8 space-x-2">
                {visualImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer duration-300 ${
                      idx === activeImage
                        ? "bg-green-500 w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Show image ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex justify-between w-full mt-10 max-w-[350px] mt-4">
                <button
                  onClick={() => setActiveImage((prev) => (prev === 0 ? visualImages.length - 1 : prev - 1))}
                  className="p-2 rounded-full bg-gray-100 hover:bg-green-100 transition"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5  text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveImage((prev) => (prev === visualImages.length - 1 ? 0 : prev + 1))}
                  className="p-2 rounded-full bg-gray-100 hover:bg-green-100 transition"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnalysisSection;