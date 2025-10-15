'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function ResumeContent() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Section */}
        {/* <TestimonialsSection /> */}

        {/* Resume Section */}
        <ResumeSection />
      </div>
    </div>
  )
}

function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'John Summers',
      role: 'CEO, Company',
      rating: 5,
      text: 'I highly recommend this business. The product quality is outstanding, exceeding my expectations every time. I was completely impressed with their professionalism and customer service. Pricing is fair and transparent definitely value for money.',
      avatar: '/avatars/avatar1.jpg'
    },
    {
      id: 2,
      name: 'Bryn Hooper',
      role: 'CEO, Abc.Inc',
      rating: 5,
      text: 'I highly recommend this business. The product quality is outstanding, exceeding my expectations every time. I was completely impressed with their professionalism and customer service. Pricing is fair and transparent definitely value for money.',
      avatar: '/avatars/avatar2.jpg'
    },
    {
      id: 3,
      name: 'Caspar',
      role: 'CEO, Abc.Inc',
      rating: 5,
      text: 'I highly recommend this business. The product quality is outstanding, exceeding my expectations every time. I was completely impressed with their professionalism and customer service. Pricing is fair and transparent definitely value for money.',
      avatar: '/avatars/avatar3.jpg'
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative mb-20">
      {/* Background decorative lines */}
      <div className="absolute inset-0 flex items-center justify-end opacity-10 overflow-hidden">
        <div className="flex gap-1">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-px bg-[#9ef01a]" style={{ height: `${Math.random() * 200 + 50}px` }}></div>
          ))}
        </div>
      </div>

      {/* Badge */}
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <span className="text-gray-400 text-sm">💬</span>
        <span className="text-xs uppercase tracking-wider text-gray-500">TESTIMONIALS</span>
      </div>

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white relative z-10">
        Here's what my clients say
      </h2>

      {/* Testimonial Slider */}
      <div className="relative max-w-5xl">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-[#9ef01a] w-6' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-[#9ef01a]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-300 text-base leading-relaxed mb-8">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden flex-shrink-0">
          {/* Placeholder for avatar */}
          <div className="w-full h-full flex items-center justify-center text-2xl text-gray-400">
            {testimonial.name[0]}
          </div>
        </div>
        <div>
          <h4 className="text-[#9ef01a] font-semibold text-lg">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

function ResumeSection() {
  const experiences = [
    {
      id: 1,
      year: '2025 - Present',
      title: 'Data Engineer',
      location: 'Baku, Novum',
      description: 'Data engineering professional focused on creating efficient data pipelines, optimizing database performance, and building infrastructure that enables seamless data flow across organizations.'
    },
    {
      id: 2,
      year: '2023 - 2024',
      title: 'Software Engineer',
      location: 'Baku',
      description: 'Software developer focused on building intelligent document processing systems and interactive web applications that merge artificial intelligence with exceptional user experiences.'
    },
  ]

  const certifications = [
    {
      id: 1,
      year: '2025',
      title: 'Microsoft Certified: Data Fundamentals',
      subtitle: 'Data Engineering',
      description: 'Microsoft Azure Data Fundamentals (DP-900) certification demonstrating verified knowledge of cloud data services, database concepts, and Azure data solutions, serving as a stepping stone toward advanced certifications in data engineering and database administration.',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/NihatTaghizade-2496/D608D4F7C7EEDF65?sharingId=7E50B582010CEB56'
    },
    {
      id: 2,
      year: '2023',
      title: 'Software Development',
      subtitle: 'Code Academy',
      description: 'Honours Diploma in Software Development providing comprehensive training in full-stack development, software engineering principles, and modern programming languages, with hands-on experience in designing, implementing, and testing scalable software solutions.',
      link: ''
    },
  ]

  const education = [
    {
      id: 1,
      year: '2025 - 2027',
      title: 'Azerbaijan Technical University',
      location: 'Baku, Azerbaijan',
      description: 'Master Degree in Artificial Intelligence.',
      link: '',
      logo: '/aztulogo.png'
    },
    {
      id: 2,
      year: '2021 - 2025',
      title: 'Baku State University',
      location: 'Baku, Azerbaijan',
      description: 'Bachelor degree in Computer Science.',
      link: '',
      logo: '/bsulogo.png'
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

      {/* Title */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-16 relative z-10">
        <span className="text-[#9ef01a]">R</span>ESUME
      </h1>

      {/* Experience Section */}
      <TimelineSection title="💼EXPERIENCE" items={experiences} type="experience" />

      {/* Certifications and Education Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <TimelineSection title="🏆CERTIFICATIONS" items={certifications} type="certification" />
        <TimelineSection title="🎓EDUCATION" items={education} type="education" />
      </div>
    </div>
  )
}

function TimelineSection({ title, items, type }) {
  return (
    <div className="relative z-10 mb-16">
      {/* Section Badge */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xs uppercase tracking-wider text-gray-500 px-4 py-2 bg-[#1a1a1a] rounded-full border border-[#2a2a2a]">
          {title}
        </span>
      </div>

      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <TimelineItem key={item.id} item={item} type={type} isLast={index === items.length - 1} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ item, type, isLast }) {
  return (
    <div className="relative pl-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-0 top-8 bottom-0 w-px bg-[#2a2a2a]"></div>
      )}

      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#9ef01a] -translate-x-[3.5px]"></div>

      {/* Content Card */}
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#9ef01a]/50 transition-all duration-300">
        {/* Year Badge */}
        <div className="inline-block px-3 py-1 bg-[#252525] text-gray-400 text-xs rounded-md mb-4">
          {item.year}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2 flex items-start justify-between">
          <span>{item.title}</span>
          {type === 'education' && item.logo && (
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
              {/* Logo placeholder */}
              <div className="text-xs text-gray-800 font-bold">
                <Image src={item.logo} alt={item.title}  width={50} height={50} />
                </div>
            </div>
          )}
        </h3>

        {/* Subtitle/Location */}
        {item.subtitle && (
          <p className="text-gray-500 text-sm mb-4">{item.subtitle}</p>
        )}
        {item.location && (
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">{item.location}</p>
        )}

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Link */}
        {item.link && (
          <a 
            href={item.link}
            className="inline-flex items-center gap-2 text-white text-sm font-medium uppercase tracking-wide hover:text-[#9ef01a] transition-colors duration-300 border-b border-white hover:border-[#9ef01a] pb-1"
          >
            Certificate
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}
