"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface DinoBackgroundProps {
  count?: number
}

export default function DinoBackground({ count = 5 }: DinoBackgroundProps) {
  const [dinos, setDinos] = useState<Array<{ id: number; x: number; y: number; size: number; rotation: number }>>([])

  useEffect(() => {
    const dinoImages = []
    for (let i = 0; i < count; i++) {
      dinoImages.push({
        id: i,
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
        size: Math.random() * 100 + 50,
        rotation: Math.random() * 40 - 20,
      })
    }
    setDinos(dinoImages)
  }, [count])

  return (
    <>
      {dinos.map((dino) => (
        <div
          key={dino.id}
          className="absolute z-0 opacity-10"
          style={{
            left: `${dino.x}%`,
            top: `${dino.y}%`,
            width: dino.size,
            height: dino.size,
            transform: `rotate(${dino.rotation}deg)`,
          }}
        >
          <Image
            src={`/placeholder.svg?height=${dino.size}&width=${dino.size}`}
            alt="Dinosaur silhouette"
            width={dino.size}
            height={dino.size}
            className="object-contain"
          />
        </div>
      ))}
    </>
  )
}

