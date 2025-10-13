'use client'
import { motion } from 'framer-motion'

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ 
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5 
      }}
      className="flex-1"
    >
      {children}
    </motion.div>
  )
}
