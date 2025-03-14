"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
  isFounder?: boolean
}

export default function TeamMember({ name, role, bio, image, isFounder = false }: TeamMemberProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="perspective-1000 w-full h-[350px]">
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <Card
          className={`absolute w-full h-full backface-hidden ${
            isFounder
              ? "bg-gradient-to-b from-purple-900 to-blue-900 border-gold"
              : "bg-gradient-to-b from-gray-900 to-purple-900 border-purple-700"
          }`}
        >
          <CardContent className="p-0 h-full flex flex-col items-center justify-center">
            <div
              className={`relative w-32 h-32 rounded-full overflow-hidden mx-auto mt-8 border-2 ${
                isFounder ? "border-yellow-500" : "border-purple-500"
              }`}
            >
              <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className={`${isFounder ? "text-yellow-400" : "text-purple-400"} font-medium`}>{role}</p>
            </div>
            <p className="mt-auto mb-4 text-sm text-center text-gray-400">Click to see bio</p>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card
          className={`absolute w-full h-full backface-hidden rotateY-180 ${
            isFounder
              ? "bg-gradient-to-b from-blue-900 to-purple-900 border-yellow-500"
              : "bg-gradient-to-b from-gray-900 to-blue-900 border-blue-700"
          } flex items-center justify-center`}
        >
          <CardContent className="p-6 flex flex-col items-center justify-center h-full">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className={`${isFounder ? "text-yellow-400" : "text-blue-400"} font-medium mb-4`}>{role}</p>
            <p className="text-center">{bio}</p>
            <p className="mt-auto text-sm text-center text-gray-400">Click to flip back</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

