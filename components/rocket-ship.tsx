"use client"

import { motion } from "framer-motion"
import { Rocket } from "lucide-react"

interface RocketShipProps {
  delay?: number
}

export default function RocketShip({ delay = 0 }: RocketShipProps) {
  return (
    <motion.div
      className="absolute z-10"
      style={{
        top: `${Math.random() * 70 + 10}%`,
      }}
      initial={{
        x: -100,
        opacity: 0,
      }}
      animate={{
        x: ["calc(-10vw)", "calc(110vw)"],
        y: [`${Math.random() * 20}%`, `${Math.random() * 50 + 30}%`, `${Math.random() * 20}%`],
        opacity: [0, 1, 1, 0],
        rotate: [0, 15, -15, 0],
      }}
      transition={{
        duration: 15,
        times: [0, 0.1, 0.9, 1],
        y: { duration: 15, times: [0, 0.5, 1] },
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 5 + 5,
      }}
    >
      <div className="relative">
        <Rocket className="w-12 h-12 text-blue-400 rotate-90" />
        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-10 rounded-full bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent opacity-80"
          animate={{
            height: [10, 20, 10],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
    </motion.div>
  )
}

