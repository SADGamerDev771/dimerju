"use client"

import { motion } from "framer-motion"

interface BubbleProps {
  x: number
  y: number
  size: number
  onPop: () => void
}

export default function Bubble({ x, y, size, onPop }: BubbleProps) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-auto cursor-pointer"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(125, 125, 255, 0.4))`,
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.5) inset",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        y: [0, -20, 0, -10, 0],
        x: [0, 10, -10, 5, 0],
      }}
      exit={{
        scale: 1.5,
        opacity: 0,
      }}
      transition={{
        scale: { duration: 0.3 },
        y: { duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
        x: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
        exit: { duration: 0.2 },
      }}
      onClick={onPop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.5, opacity: 0 }}
    />
  )
}

