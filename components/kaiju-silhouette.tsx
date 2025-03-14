"use client"

import { motion } from "framer-motion"

interface KaijuSilhouetteProps {
  type: "godzilla" | "kong"
  position: "left" | "right"
  delay?: number
}

export default function KaijuSilhouette({ type, position, delay = 0 }: KaijuSilhouetteProps) {
  const isLeft = position === "left"

  // More detailed SVG paths for kaiju
  const kaijuPaths = {
    godzilla:
      "M50,10 Q55,5 60,10 L60,15 Q65,10 70,15 L70,10 Q75,5 80,10 L80,20 Q85,15 90,20 L90,30 Q85,35 90,40 L85,45 Q80,50 85,55 L80,60 Q75,65 80,70 L75,75 Q70,80 75,85 L70,90 Q65,95 60,90 L55,85 Q50,80 45,85 L40,90 Q35,95 30,90 L25,85 Q20,80 25,75 L20,70 Q15,65 20,60 L15,55 Q10,50 15,45 L10,40 Q15,35 10,30 L10,20 Q15,15 20,20 L20,10 Q25,5 30,10 L30,15 Q35,10 40,15 L40,10 Q45,5 50,10 Z M50,60 L50,90 M60,60 L60,90 M40,60 L40,90 M30,40 L20,50 M70,40 L80,50 M50,30 L50,10 M60,30 L60,10 M40,30 L40,10",
    kong: "M30,10 Q40,5 50,10 L50,20 Q60,15 70,20 L70,10 Q80,5 90,10 L90,30 Q80,25 90,40 L80,50 Q70,45 80,60 L70,70 Q60,65 70,80 L60,90 Q50,85 40,90 L30,80 Q20,75 30,70 L20,60 Q10,55 20,50 L10,40 Q20,35 10,30 L10,10 Q20,5 30,10 Z M30,30 L20,40 M70,30 L80,40 M50,40 L50,60 M40,70 L30,90 M60,70 L70,90",
  }

  const kaijuColors = {
    godzilla: "rgba(0,200,255,0.3)",
    kong: "rgba(150,100,50,0.3)",
  }

  const kaijuStrokes = {
    godzilla: "rgba(0,200,255,0.6)",
    kong: "rgba(150,100,50,0.6)",
  }

  return (
    <motion.div
      className="absolute bottom-0 z-10"
      style={{
        left: isLeft ? "-150px" : "auto",
        right: !isLeft ? "-150px" : "auto",
      }}
      initial={{
        x: isLeft ? -300 : 300,
        opacity: 0,
      }}
      animate={{
        x: isLeft ? ["calc(-10vw)", "calc(110vw)"] : ["calc(110vw)", "calc(-10vw)"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 25,
        times: [0, 0.1, 0.9, 1],
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 15 + 20,
      }}
      whileHover={{
        scale: 1.2,
        y: -30,
        transition: { duration: 0.3 },
      }}
    >
      <svg
        width="300"
        height="200"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: isLeft ? "scaleX(1)" : "scaleX(-1)" }}
      >
        <path d={kaijuPaths[type]} fill={kaijuColors[type]} stroke={kaijuStrokes[type]} strokeWidth="1.5" />

        {/* Add glowing eyes for kaiju */}
        {type === "godzilla" && (
          <>
            <circle cx="30" cy="25" r="2" fill="rgba(0,255,255,0.8)" />
            <circle cx="70" cy="25" r="2" fill="rgba(0,255,255,0.8)" />
          </>
        )}

        {type === "kong" && (
          <>
            <circle cx="30" cy="25" r="2" fill="rgba(255,200,0,0.8)" />
            <circle cx="70" cy="25" r="2" fill="rgba(255,200,0,0.8)" />
          </>
        )}
      </svg>
    </motion.div>
  )
}

