"use client"

import { motion } from "framer-motion"
import { Gamepad2 } from "lucide-react"

interface GameControllerProps {
  x: number
  y: number
  size: number
  onPop: () => void
}

export default function GameController({ x, y, size, onPop }: GameControllerProps) {
  // Random color for each controller
  const colors = [
    "text-purple-400",
    "text-blue-400",
    "text-green-400",
    "text-red-400",
    "text-yellow-400",
    "text-pink-400",
  ]

  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-auto cursor-pointer ${randomColor}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
      }}
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: 1,
        y: [0, -20, 0, -10, 0],
        x: [0, 10, -10, 5, 0],
        rotate: [0, 10, -10, 5, 0],
      }}
      exit={{
        scale: 1.5,
        opacity: 0,
        rotate: 360,
      }}
      transition={{
        scale: { duration: 0.3 },
        y: { duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
        x: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
        rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
        exit: { duration: 0.3 },
      }}
      onClick={onPop}
      whileHover={{ scale: 1.2, rotate: 15 }}
      whileTap={{ scale: 1.5, opacity: 0, rotate: 45 }}
    >
      <Gamepad2 size={size} />
      <motion.div
        className="absolute inset-0 rounded-full bg-current opacity-20"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  )
}

