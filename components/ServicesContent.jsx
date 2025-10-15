'use client'

export default function ServicesContent() {
  const services = [
  {
    id: 1,
    icon: '📊',
    developers: '3 Developers',
    title: 'Data Engineering and Pipeline Automation',
    description:
      'Build and maintain complex ETL pipelines for large-scale data processing. Develop data-driven architectures that enable AI and analytics workflows using modern cloud and distributed systems.',
    link: '#'
  },
  {
    id: 2,
    icon: '🧠',
    developers: '2 Developers',
    title: 'AI Model Development and Integration',
    description:
      'Design and implement AI models for predictive analytics, anomaly detection, and process optimization. Integrate AI systems into existing software to enhance automation and intelligence.',
    link: '#'
  },
  {
    id: 3,
    icon: '⚙️',
    developers: '4 Developers',
    title: 'Intelligent Software Solutions',
    description:
      'Develop scalable software applications integrated with AI and data pipelines. Focus on performance, modularity, and intelligent data processing across platforms.',
    link: '#'
  },
  {
    id: 4,
    icon: '🤖',
    developers: '2 Developers',
    title: 'AI-Powered Software Engineering',
    description:
      'Develop modern software applications enhanced by AI capabilities, combining automation, intelligent recommendation, and adaptive user experience with efficient system design.',
    link: '#'
  }
];


  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Services Section */}
        <div className="relative mb-20">
          {/* Background decorative lines */}
          <div className="absolute inset-0 flex items-center justify-end opacity-10 overflow-hidden">
            <div className="flex gap-1">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-px bg-[#9ef01a]" style={{ height: `${Math.random() * 200 + 50}px` }}></div>
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-16 relative z-10">
            <span className="text-[#9ef01a]">S</span>ERVICES
          </h1>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Pricing Section
        <PricingSection /> */}
      </div>
    </div>
  )
}

function ServiceCard({ service }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#9ef01a]/50 transition-all duration-500 p-8">
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 rounded-xl bg-[#252525] flex items-center justify-center text-3xl group-hover:bg-[#9ef01a]/10 transition-colors duration-300 border border-[#9ef01a]/20">
          {service.icon}
        </div>
      </div>

      {/* Developer count */}
      {/* <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
        {service.developers}
      </p> */}

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#9ef01a] transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* CTA Link */}
      {/* <a 
        href={service.link}
        className="inline-block text-white text-sm font-medium uppercase tracking-wide hover:text-[#9ef01a] transition-colors duration-300 border-b border-white hover:border-[#9ef01a] pb-1"
      >
        GET STARTED
      </a> */}
    </div>
  )
}

function PricingSection() {
  const pricingPlans = [
    {
      id: 1,
      badge: 'PER HOUR / 2 DEV',
      price: '$49',
      features: [
        { name: 'Learning Engineer for Social Media.', available: true },
        { name: 'Generative AI Software Development.', available: true },
        { name: 'Artificial Intelligence for IT Operations.', available: false },
        { name: 'Customer Support Chatbot.', available: false },
      ]
    },
    {
      id: 2,
      badge: 'PER DAY / 4 DEV',
      price: '$159',
      features: [
        { name: 'Learning Engineer for Social Media.', available: true },
        { name: 'Generative AI Software Development.', available: true },
        { name: 'Artificial Intelligence for IT Operations.', available: true },
        { name: 'Customer Support Chatbot.', available: true },
      ]
    },
  ]

  return (
    <div className="relative">
      {/* Background decorative lines */}
      <div className="absolute inset-0 flex items-center justify-end opacity-10 overflow-hidden">
        <div className="flex gap-1">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-px bg-[#9ef01a]" style={{ height: `${Math.random() * 200 + 50}px` }}></div>
          ))}
        </div>
      </div>

      {/* Pricing Badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-gray-400 text-sm">💰</span>
        <span className="text-xs uppercase tracking-wider text-gray-500">PRICING</span>
      </div>

      {/* Pricing Title */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white">
        Amazing Pricing For Your Projects
      </h2>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  )
}

function PricingCard({ plan }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] p-8 hover:border-[#9ef01a]/50 transition-all duration-500">
      {/* Badge */}
      <div className="inline-block px-4 py-2 bg-[#9ef01a] text-black text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
        {plan.badge}
      </div>

      {/* Price */}
      <div className="mb-8">
        <span className="text-6xl font-bold text-[#9ef01a]">{plan.price}</span>
      </div>

      {/* Order Button */}
      <button className="w-full sm:w-auto px-8 py-3 mb-8 bg-transparent border-2 border-white text-white rounded-full font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300">
        ORDER NOW
      </button>

      {/* Features List */}
      <ul className="space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg 
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${feature.available ? 'text-[#9ef01a]' : 'text-gray-600'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-sm ${feature.available ? 'text-gray-300' : 'text-gray-600'}`}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
