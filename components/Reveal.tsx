"use client"

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  delay?: number
}

export default function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
} 