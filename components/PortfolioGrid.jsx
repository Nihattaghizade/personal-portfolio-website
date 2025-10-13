'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filters = ['ALL', 'WEBSITE', 'SOFTWARE', 'GENERATOR', 'APP']

  const projects = [
    {
      id: 1,
      title: 'E-commerce site using ML algorithms',
      category: ['APP', 'WEBSITE'],
      image: '/projects/project1.jpg',
      tags: 'APP, WEBSITE',
      link: '#'
    },
    {
      id: 2,
      title: 'Poster generator with DALL-E prompts',
      category: ['GENERATOR'],
      image: '/projects/project2.jpg',
      tags: 'GENERATOR',
      link: '#'
    },
    {
      id: 3,
      title: 'AI-powered chatbot platform',
      category: ['SOFTWARE', 'APP'],
      image: '/projects/project3.jpg',
      tags: 'SOFTWARE, APP',
      link: '#'
    },
    {
      id: 4,
      title: 'Real-time fraud detection system',
      category: ['SOFTWARE'],
      image: '/projects/project4.jpg',
      tags: 'SOFTWARE',
      link: '#'
    },
    {
      id: 5,
      title: 'Mobile fitness tracking application',
      category: ['APP'],
      image: '/projects/project5.jpg',
      tags: 'APP',
      link: '#'
    },
    {
      id: 6,
      title: 'Portfolio website builder',
      category: ['WEBSITE', 'GENERATOR'],
      image: '/projects/project6.jpg',
      tags: 'WEBSITE, GENERATOR',
      link: '#'
    },
  ]

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter))

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header with decorative lines */}
        <div className="relative mb-12">
          {/* Background decorative lines */}
          <div className="absolute inset-0 flex items-center justify-end opacity-10 overflow-hidden">
            <div className="flex gap-1">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-px h-48 bg-[#9ef01a]" style={{ height: `${Math.random() * 200 + 50}px` }}></div>
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 relative z-10">
            <span className="text-[#9ef01a]">P</span>ORTFOLIO
          </h1>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 relative z-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wide
                  transition-all duration-300
                  ${activeFilter === filter
                    ? 'bg-[#9ef01a] text-black'
                    : 'bg-[#1a1a1a] text-gray-400 hover:text-white hover:bg-[#252525]'
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <a 
      href={project.link}
      className="group relative block overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#9ef01a]/50 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="transform scale-75 group-hover:scale-100 transition-transform duration-500">
            <svg className="w-16 h-16 text-[#9ef01a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
          {project.tags}
        </p>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white group-hover:text-[#9ef01a] transition-colors duration-300 flex items-center justify-between">
          <span>{project.title}</span>
          <svg className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </h3>
      </div>
    </a>
  )
}
