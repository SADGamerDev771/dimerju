"use client"

import { motion } from "framer-motion"

interface RotatingTextProps {
  text: string
  gradient: string
  delay?: number
}

export default function RotatingText({ text, gradient, delay = 0 }: RotatingTextProps) {
  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent ${gradient}`}
      animate={{
        scale: [1, 1.05, 1],
        textShadow: ["0 0 5px rgba(255,255,255,0)", "0 0 15px rgba(255,255,255,0.5)", "0 0 5px rgba(255,255,255,0)"],
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      {text}
    </motion.span>
  )
}

