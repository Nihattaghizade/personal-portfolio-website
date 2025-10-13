'use client'
import { useState } from 'react'

export default function ContactContent() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Background decorative lines */}
        <div className="absolute inset-0 flex items-center justify-end opacity-10 overflow-hidden pointer-events-none">
          <div className="flex gap-1">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-px bg-[#9ef01a]" style={{ height: `${Math.random() * 200 + 50}px` }}></div>
            ))}
          </div>
        </div>

        {/* Page Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-16 relative z-10">
          <span className="text-[#9ef01a]">C</span>ONTACT
        </h1>

        {/* Contact Info Cards */}
        <ContactInfoCards />

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  )
}

function ContactInfoCards() {
  const contactInfo = [
    {
      id: 1,
      icon: '📞',
      label: 'Phone',
      value: '+1 840 841 25 69',
      cols: 1
    },
    {
      id: 2,
      icon: '✉️',
      label: 'Email',
      value: 'RYAN@WEBSITE.COM',
      cols: 2
    },
    {
      id: 3,
      icon: '🗺️',
      label: 'Address',
      value: 'NEW YORK, NY, USA',
      cols: 3
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 relative z-10">
      {contactInfo.map((info) => (
        <ContactInfoCard key={info.id} info={info} />
      ))}
    </div>
  )
}

function ContactInfoCard({ info }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#9ef01a]/50 transition-all duration-300">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-[#252525] flex items-center justify-center text-2xl border border-[#9ef01a]/20 flex-shrink-0">
          {info.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            {info.label}
          </p>
          <p className="text-base font-medium text-white truncate">
            {info.value}
          </p>
        </div>
      </div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setIsSubmitting(false)
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        message: ''
      })

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="relative z-10">
      {/* Form Header */}
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Let's make your project brilliant!
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Two Column Grid for Name and Email */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Full Name Input */}
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-6 py-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#9ef01a] transition-colors duration-300"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-6 py-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#9ef01a] transition-colors duration-300"
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="6"
            className="w-full px-6 py-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#9ef01a] transition-colors duration-300 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <span className="text-[#9ef01a] text-sm font-medium">
              ✓ Message sent successfully!
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
