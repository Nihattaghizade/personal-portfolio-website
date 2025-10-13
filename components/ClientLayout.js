'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'

export default function ClientLayout({ children }) {
  const pathname = usePathname()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [pathname])

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0a0a0a]">
      {/* Fixed Sidebar - doesn't change */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Fixed Navigation - outside animation */}
        <Navigation />
        
        {/* Animated Content */}
        {children}
      </main>
    </div>
  )
}
