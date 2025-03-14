"use client"

import { motion } from "framer-motion"

interface DinoSilhouetteProps {
  position: "left" | "right"
  type?: "trex" | "stegosaurus" | "triceratops" | "pterodactyl"
  delay?: number
}

export default function DinoSilhouette({ position, type = "trex", delay = 0 }: DinoSilhouetteProps) {
  const isLeft = position === "left"

  // SVG paths for different dinosaurs
  const dinoPaths = {
    trex: "M30,80 Q35,75 40,80 L45,60 Q50,55 55,60 L60,40 Q65,35 70,40 L75,20 Q80,15 85,20 L90,30 Q85,35 90,40 L85,45 Q80,50 85,55 L80,60 Q75,65 80,70 L75,75 Q70,80 75,85 L70,90 Q65,95 60,90 L55,85 Q50,80 45,85 L40,90 Q35,95 30,90 L25,85 Q20,80 25,75 L20,70 Q15,65 20,60 L15,55 Q10,50 15,45 L10,40 Q15,35 10,30 L15,20 Q20,15 25,20 L30,40 Q35,35 30,60 Z",
    stegosaurus:
      "M10,80 Q15,75 20,80 L25,75 Q30,70 35,75 L40,70 Q45,65 50,70 L55,65 Q60,60 65,65 L70,60 Q75,55 80,60 L85,55 Q90,50 95,55 L90,60 Q85,65 90,70 L85,75 Q80,80 85,85 L80,90 Q75,95 70,90 L65,85 Q60,80 55,85 L50,90 Q45,95 40,90 L35,85 Q30,80 25,85 L20,90 Q15,95 10,90 Z M30,60 L35,40 M40,60 L45,40 M50,60 L55,40 M60,60 L65,40 M70,60 L75,40",
    triceratops:
      "M10,80 Q15,75 20,80 L25,75 Q30,70 35,75 L40,70 Q45,65 50,70 L55,65 Q60,60 65,65 L70,60 Q75,55 80,60 L85,55 Q90,50 95,55 L90,60 Q85,65 90,70 L85,75 Q80,80 85,85 L80,90 Q75,95 70,90 L65,85 Q60,80 55,85 L50,90 Q45,95 40,90 L35,85 Q30,80 25,85 L20,90 Q15,95 10,90 Z M70,60 L80,40 L90,30 M70,60 L60,40 L50,30 M70,60 L70,40 L70,20",
    pterodactyl:
      "M30,60 Q35,55 40,60 L45,55 Q50,50 55,55 L60,50 Q65,45 70,50 L75,45 Q80,40 85,45 L90,40 Q95,35 100,40 L95,45 Q90,50 95,55 L90,60 Q85,65 90,70 L85,75 Q80,80 75,75 L70,70 Q65,65 60,70 L55,75 Q50,80 45,75 L40,70 Q35,65 30,70 Z M60,70 L80,90 M60,70 L40,90",
  }

  const dinoColors = {
    trex: "rgba(200,100,50,0.3)",
    stegosaurus: "rgba(100,200,50,0.3)",
    triceratops: "rgba(50,100,200,0.3)",
    pterodactyl: "rgba(200,50,200,0.3)",
  }

  const dinoStrokes = {
    trex: "rgba(200,100,50,0.6)",
    stegosaurus: "rgba(100,200,50,0.6)",
    triceratops: "rgba(50,100,200,0.6)",
    pterodactyl: "rgba(200,50,200,0.6)",
  }

  return (
    <motion.div
      className="absolute bottom-0 z-10"
      style={{
        left: isLeft ? "-100px" : "auto",
        right: !isLeft ? "-100px" : "auto",
      }}
      initial={{
        x: isLeft ? -200 : 200,
        opacity: 0,
      }}
      animate={{
        x: isLeft ? ["calc(-5vw)", "calc(105vw)"] : ["calc(105vw)", "calc(-5vw)"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 20,
        times: [0, 0.1, 0.9, 1],
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 10 + 10,
      }}
      whileHover={{ scale: 1.2, y: -20 }}
    >
      <svg
        width="200"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: isLeft ? "scaleX(1)" : "scaleX(-1)" }}
      >
        <path d={dinoPaths[type]} fill={dinoColors[type]} stroke={dinoStrokes[type]} strokeWidth="1.5" />
      </svg>
    </motion.div>
  )
}

