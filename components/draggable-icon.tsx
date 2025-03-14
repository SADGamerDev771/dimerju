"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dna, Gamepad2 } from "lucide-react"

interface DraggableIconProps {
  type: "dna" | "controller" | "dino" | "kaiju"
  color?: string
  dinoType?: "trex" | "stegosaurus" | "triceratops" | "pterodactyl" | "godzilla" | "kong"
  size?: number
  initialPosition?: { x: number; y: number }
  id: number
  onPop: (id: number) => void
}

export default function DraggableIcon({
  type,
  color = "#4ade80",
  dinoType = "trex",
  size = 40,
  initialPosition = { x: 50, y: 50 },
  id,
  onPop,
}: DraggableIconProps) {
  const [position, setPosition] = useState(initialPosition)
  const [isVisible, setIsVisible] = useState(true)

  // SVG paths for different creatures
  const creaturePaths = {
    trex: "M30,80 Q35,75 40,80 L45,60 Q50,55 55,60 L60,40 Q65,35 70,40 L75,20 Q80,15 85,20 L90,30 Q85,35 90,40 L85,45 Q80,50 85,55 L80,60 Q75,65 80,70 L75,75 Q70,80 75,85 L70,90 Q65,95 60,90 L55,85 Q50,80 45,85 L40,90 Q35,95 30,90 L25,85 Q20,80 25,75 L20,70 Q15,65 20,60 L15,55 Q10,50 15,45 L10,40 Q15,35 10,30 L15,20 Q20,15 25,20 L30,40 Q35,35 30,60 Z",
    stegosaurus:
      "M10,80 Q15,75 20,80 L25,75 Q30,70 35,75 L40,70 Q45,65 50,70 L55,65 Q60,60 65,65 L70,60 Q75,55 80,60 L85,55 Q90,50 95,55 L90,60 Q85,65 90,70 L85,75 Q80,80 85,85 L80,90 Q75,95 70,90 L65,85 Q60,80 55,85 L50,90 Q45,95 40,90 L35,85 Q30,80 25,85 L20,90 Q15,95 10,90 Z M30,60 L35,40 M40,60 L45,40 M50,60 L55,40 M60,60 L65,40 M70,60 L75,40",
    triceratops:
      "M10,80 Q15,75 20,80 L25,75 Q30,70 35,75 L40,70 Q45,65 50,70 L55,65 Q60,60 65,65 L70,60 Q75,55 80,60 L85,55 Q90,50 95,55 L90,60 Q85,65 90,70 L85,75 Q80,80 85,85 L80,90 Q75,95 70,90 L65,85 Q60,80 55,85 L50,90 Q45,95 40,90 L35,85 Q30,80 25,85 L20,90 Q15,95 10,90 Z M70,60 L80,40 L90,30 M70,60 L60,40 L50,30 M70,60 L70,40 L70,20",
    pterodactyl:
      "M30,60 Q35,55 40,60 L45,55 Q50,50 55,55 L60,50 Q65,45 70,50 L75,45 Q80,40 85,45 L90,40 Q95,35 100,40 L95,45 Q90,50 95,55 L90,60 Q85,65 90,70 L85,75 Q80,80 75,75 L70,70 Q65,65 60,70 L55,75 Q50,80 45,75 L40,70 Q35,65 30,70 Z M60,70 L80,90 M60,70 L40,90",
    godzilla:
      "M50,10 Q55,5 60,10 L60,15 Q65,10 70,15 L70,10 Q75,5 80,10 L80,20 Q85,15 90,20 L90,30 Q85,35 90,40 L85,45 Q80,50 85,55 L80,60 Q75,65 80,70 L75,75 Q70,80 75,85 L70,90 Q65,95 60,90 L55,85 Q50,80 45,85 L40,90 Q35,95 30,90 L25,85 Q20,80 25,75 L20,70 Q15,65 20,60 L15,55 Q10,50 15,45 L10,40 Q15,35 10,30 L10,20 Q15,15 20,20 L20,10 Q25,5 30,10 L30,15 Q35,10 40,15 L40,10 Q45,5 50,10 Z M50,60 L50,90 M60,60 L60,90 M40,60 L40,90 M30,40 L20,50 M70,40 L80,50 M50,30 L50,10 M60,30 L60,10 M40,30 L40,10",
    kong: "M30,10 Q40,5 50,10 L50,20 Q60,15 70,20 L70,10 Q80,5 90,10 L90,30 Q80,25 90,40 L80,50 Q70,45 80,60 L70,70 Q60,65 70,80 L60,90 Q50,85 40,90 L30,80 Q20,75 30,70 L20,60 Q10,55 20,50 L10,40 Q20,35 10,30 L10,10 Q20,5 30,10 Z M30,30 L20,40 M70,30 L80,40 M50,40 L50,60 M40,70 L30,90 M60,70 L70,90",
  }

  const creatureColors = {
    trex: "rgba(200,100,50,0.3)",
    stegosaurus: "rgba(100,200,50,0.3)",
    triceratops: "rgba(50,100,200,0.3)",
    pterodactyl: "rgba(200,50,200,0.3)",
    godzilla: "rgba(0,200,255,0.3)",
    kong: "rgba(150,100,50,0.3)",
  }

  const creatureStrokes = {
    trex: "rgba(200,100,50,0.6)",
    stegosaurus: "rgba(100,200,50,0.6)",
    triceratops: "rgba(50,100,200,0.6)",
    pterodactyl: "rgba(200,50,200,0.6)",
    godzilla: "rgba(0,200,255,0.6)",
    kong: "rgba(150,100,50,0.6)",
  }

  // Float animation
  const floatAnimation = {
    y: [0, -10, 0, 10, 0],
    x: [0, 5, 0, -5, 0],
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop" as const,
      opacity: { duration: Math.random() * 3 + 2 },
    },
  }

  const handleDragEnd = (event: any, info: any) => {
    // Calculate new position as percentage of window
    const newX = (info.point.x / window.innerWidth) * 100
    const newY = (info.point.y / window.innerHeight) * 100

    setPosition({ x: newX, y: newY })
  }

  const handleDoubleClick = () => {
    // Pop animation and hide
    setIsVisible(false)
    onPop(id)
  }

  if (!isVisible) return null

  return (
    <motion.div
      className="absolute z-10 cursor-grab active:cursor-grabbing"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        color: color,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        ...floatAnimation,
      }}
      exit={{
        scale: 1.5,
        opacity: 0,
        rotate: 360,
        transition: { duration: 0.5 },
      }}
      drag
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      onDoubleClick={handleDoubleClick}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {type === "dna" && <Dna size={size} />}

      {type === "controller" && <Gamepad2 size={size} />}

      {(type === "dino" || type === "kaiju") && (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d={creaturePaths[dinoType]}
            fill={creatureColors[dinoType]}
            stroke={creatureStrokes[dinoType]}
            strokeWidth="1.5"
          />

          {/* Add eyes for creatures */}
          {(dinoType === "godzilla" || dinoType === "kong") && (
            <>
              <circle
                cx={dinoType === "godzilla" ? "30" : "30"}
                cy="25"
                r="2"
                fill={dinoType === "godzilla" ? "rgba(0,255,255,0.8)" : "rgba(255,200,0,0.8)"}
              />
              <circle
                cx={dinoType === "godzilla" ? "70" : "70"}
                cy="25"
                r="2"
                fill={dinoType === "godzilla" ? "rgba(0,255,255,0.8)" : "rgba(255,200,0,0.8)"}
              />
            </>
          )}

          {(dinoType === "trex" ||
            dinoType === "stegosaurus" ||
            dinoType === "triceratops" ||
            dinoType === "pterodactyl") && (
            <>
              <circle cx="70" cy="30" r="2" fill="rgba(255,255,255,0.8)" />
            </>
          )}
        </svg>
      )}
    </motion.div>
  )
}

