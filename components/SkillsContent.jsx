'use client'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function SkillsContent() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-16 relative z-10">
          <span className="text-[#9ef01a]">S</span>KILLS
        </h1>

        {/* Programming Skills Section */}
        <ProgrammingSkills />

        {/* Tools & Platforms Section */}
        <ToolsAndPlatforms />

        {/* Languages Section */}
        <LanguagesSection />

        {/* Soft Skills Section */}
        <SoftSkills />
      </div>
    </div>
  )
}

function ProgrammingSkills() {
  const skills = [
    { id: 1, name: 'Python 2.x, 3.x', icon: '➕', percentage: 90 },
    { id: 2, name: 'React', icon: '⚛️', percentage: 75 },
    { id: 3, name: 'Anomaly Detection', icon: '⚠️', percentage: 75 },
    { id: 4, name: 'SQL, MongoDB', icon: '🗄️', percentage: 85 },
  ]

  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <SkillBar key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}

function SkillBar({ skill }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#9ef01a]/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-[#252525] flex items-center justify-center text-2xl border border-[#9ef01a]/20">
            {skill.icon}
          </div>
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
        </div>
        <span className="text-sm text-gray-400 px-3 py-1 bg-[#252525] rounded-full">
          {skill.percentage}%
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-[#252525] rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#9ef01a] transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${skill.percentage}%` }}
        />
      </div>
    </div>
  )
}

function ToolsAndPlatforms() {
  const tools = [
    { id: 1, name: 'TensorFlow', icon: '🔶', percentage: 90, color: '#FF6F00' },
    { id: 2, name: 'NumPy', icon: '🧮', percentage: 75, color: '#4DABCF' },
    { id: 3, name: 'PyTorch', icon: '🔥', percentage: 85, color: '#EE4C2C' },
    { id: 4, name: 'Microsoft Azure', icon: '☁️', percentage: 95, color: '#0078D4' },
    { id: 5, name: 'Keras', icon: 'K', percentage: 70, color: '#9ef01a' },
    { id: 6, name: 'Visual Studio', icon: '💜', percentage: 90, color: '#5C2D91' },
    { id: 7, name: 'GCP', icon: '☁️', percentage: 75, color: '#4285F4' },
    { id: 8, name: 'ChatGPT', icon: '🤖', percentage: 80, color: '#10A37F' },
  ]

  return (
    <div className="mb-20">
      {/* Section Badge */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xs uppercase tracking-wider text-gray-500 px-4 py-2 bg-[#1a1a1a] rounded-full border border-[#2a2a2a]">
          ⚙️ TOOLS & PLATFORMS
        </span>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <CircularSkill key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}

function CircularSkill({ tool }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#9ef01a]/50 transition-all duration-300 flex flex-col items-center">
      {/* Circular Progress */}
      <div className="w-24 h-24 mb-4">
        <CircularProgressbar
          value={tool.percentage}
          text={`${tool.percentage}%`}
          styles={buildStyles({
            textSize: '24px',
            pathColor: '#9ef01a',
            textColor: '#ffffff',
            trailColor: '#2a2a2a',
            pathTransitionDuration: 1,
          })}
        />
      </div>
      
      {/* Tool Name */}
      <h3 className="text-sm font-medium text-white text-center">{tool.name}</h3>
    </div>
  )
}

function LanguagesSection() {
  const languages = [
    { id: 1, name: 'English', flag: '🇬🇧', percentage: 90, dots: 9 },
    { id: 2, name: 'Spanish', flag: '🇪🇸', percentage: 60, dots: 6 },
    { id: 3, name: 'Italian', flag: '🇮🇹', percentage: 30, dots: 3 },
    { id: 4, name: 'French', flag: '🇫🇷', percentage: 70, dots: 7 },
  ]

  return (
    <div className="mb-20">
      {/* Section Badge */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xs uppercase tracking-wider text-gray-500 px-4 py-2 bg-[#1a1a1a] rounded-full border border-[#2a2a2a]">
          💬 LANGUAGES
        </span>
      </div>

      {/* Languages List */}
      <div className="space-y-6">
        {languages.map((language) => (
          <LanguageItem key={language.id} language={language} />
        ))}
      </div>
    </div>
  )
}

function LanguageItem({ language }) {
  return (
    <div className="flex items-center gap-4">
      {/* Flag */}
      <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-2xl">
        {language.flag}
      </div>

      {/* Language Name */}
      <div className="flex-1">
        <h3 className="text-base font-medium text-white mb-2">{language.name}</h3>
        
        {/* Dots Progress */}
        <div className="flex items-center gap-2">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index < language.dots ? 'bg-[#9ef01a]' : 'bg-[#2a2a2a]'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-400">{language.percentage}%</span>
        </div>
      </div>
    </div>
  )
}

function SoftSkills() {
  const softSkills = [
    { id: 1, name: 'Deep Learning, Neural Networks', icon: '✅' },
    { id: 2, name: 'Support Vector Machines', icon: '✅' },
    { id: 3, name: 'Cross-Functional Collaboration', icon: '✅' },
    { id: 4, name: 'Time management', icon: '✅' },
    { id: 5, name: 'Critical thinking', icon: '✅' },
    { id: 6, name: 'Communication', icon: '✅' },
    { id: 7, name: 'Project budgeting', icon: '✅' },
    { id: 8, name: 'Business analysis', icon: '✅' },
  ]

  return (
    <div className="mb-20">
      {/* Section Badge */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xs uppercase tracking-wider text-gray-500 px-4 py-2 bg-[#1a1a1a] rounded-full border border-[#2a2a2a]">
          💡 SOFT SKILLS
        </span>
      </div>

      {/* Soft Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {softSkills.map((skill) => (
          <SoftSkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}

function SoftSkillItem({ skill }) {
  return (
    <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
      <span className="text-[#9ef01a] text-xl">{skill.icon}</span>
      <span className="text-base">{skill.name}</span>
    </div>
  )
}
