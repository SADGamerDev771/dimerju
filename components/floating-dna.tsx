"use client"

import { motion } from "framer-motion"
import { Dna } from "lucide-react"

interface FloatingDnaProps {
  color: string
  size?: number
  position?: { x: number; y: number }
  delay?: number
}

export default function FloatingDna({ color, size = 40, position = { x: 50, y: 50 }, delay = 0 }: FloatingDnaProps) {
  return (
    <motion.div
      className="absolute z-5 cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        color: color,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 0.7,
        scale: 1,
        rotate: [0, 10, -10, 0],
        y: [0, -15, 0, 15, 0],
        x: [0, 15, 0, -15, 0],
      }}
      transition={{
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay },
        rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
        y: { duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: delay * 0.5 },
        x: { duration: 11, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: delay * 0.7 },
      }}
      whileHover={{
        scale: 1.3,
        opacity: 1,
        rotate: [0, 20, -20, 0],
        transition: { duration: 0.5 },
      }}
      whileTap={{
        scale: 1.5,
        opacity: 0,
        rotate: 360,
        transition: { duration: 0.5 },
      }}
    >
      <Dna size={size} />
    </motion.div>
  )
}

