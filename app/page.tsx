"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Sparkles, Facebook, Twitter, Instagram, Youtube, Github, Mail } from "lucide-react"
import OrgChart from "@/components/org-chart"
import DraggableIcon from "@/components/draggable-icon"
import DinoSilhouette from "@/components/dino-silhouette"
import RocketShip from "@/components/rocket-ship"
import KaijuSilhouette from "@/components/kaiju-silhouette"
import DinoBackground from "@/components/dino-background"
import RotatingText from "@/components/rotating-text"
import ContactForm from "@/components/contact-form"

export default function Home() {
  const [icons, setIcons] = useState<
    Array<{
      id: number
      type: "dna" | "controller" | "dino" | "kaiju"
      color?: string
      dinoType?: "trex" | "stegosaurus" | "triceratops" | "pterodactyl" | "godzilla" | "kong"
      size: number
      position: { x: number; y: number }
    }>
  >([])

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Generate initial icons
  useEffect(() => {
    const newIcons = []
    let id = 1

    // DNA icons
    const dnaColors = ["#4ade80", "#60a5fa", "#f472b6", "#fbbf24", "#a78bfa", "#34d399"]
    for (let i = 0; i < 6; i++) {
      newIcons.push({
        id: id++,
        type: "dna" as const,
        color: dnaColors[i],
        size: Math.random() * 10 + 35,
        position: { x: Math.random() * 100, y: Math.random() * 100 },
      })
    }

    // Controller icons
    for (let i = 0; i < 8; i++) {
      newIcons.push({
        id: id++,
        type: "controller" as const,
        color: dnaColors[Math.floor(Math.random() * dnaColors.length)],
        size: Math.random() * 15 + 30,
        position: { x: Math.random() * 100, y: Math.random() * 100 },
      })
    }

    // Dino icons
    const dinoTypes = ["trex", "stegosaurus", "triceratops", "pterodactyl"] as const
    for (let i = 0; i < 8; i++) {
      newIcons.push({
        id: id++,
        type: "dino" as const,
        dinoType: dinoTypes[Math.floor(Math.random() * dinoTypes.length)],
        size: Math.random() * 20 + 50,
        position: { x: Math.random() * 100, y: Math.random() * 100 },
      })
    }

    // Kaiju icons
    const kaijuTypes = ["godzilla", "kong"] as const
    for (let i = 0; i < 4; i++) {
      newIcons.push({
        id: id++,
        type: "kaiju" as const,
        dinoType: kaijuTypes[Math.floor(Math.random() * kaijuTypes.length)],
        size: Math.random() * 25 + 60,
        position: { x: Math.random() * 100, y: Math.random() * 100 },
      })
    }

    setIcons(newIcons)
  }, [])

  const handlePopIcon = (id: number) => {
    console.log(`Icon ${id} popped!`)
    // Remove the icon from the state
    setIcons((prev) => prev.filter((icon) => icon.id !== id))
  }

  // Updated team members with corrected names
  const teamMembers = [
    {
      name: "Vincent",
      role: "CEO",
      bio: "Visionary founder driving Dimerju's mission to revolutionize entertainment through dinosaur revival, kaiju creation, and interstellar gaming.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Aliath",
      role: "COO",
      bio: "Oversees day-to-day operations of our dinosaur habitats, kaiju containment facilities, and interstellar gaming platforms.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Alaia",
      role: "CFO",
      bio: "Financial strategist securing funding for our ambitious projects while ensuring sustainable growth across all three business verticals.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Adaliind", // Corrected name
      role: "CTO",
      bio: "Technological genius behind our genetic resurrection algorithms, kaiju control systems, and quantum-based gaming engines.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Brayden",
      role: "CISO",
      bio: "Ensures the security of our genetic databases, kaiju containment protocols, and protection of our interstellar gaming networks.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Nolan",
      role: "CMO",
      bio: "Marketing mastermind who showcases our dinosaur attractions, kaiju spectacles, and revolutionary gaming experiences to the world.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Deliilah", // Corrected name
      role: "CRO",
      bio: "Revenue strategist maximizing profits from dinosaur tourism, kaiju entertainment events, and our subscription-based gaming platforms.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Liana",
      role: "CPO",
      bio: "Product visionary developing our dinosaur experiences, kaiju interaction systems, and next-generation gaming interfaces.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Chelsea",
      role: "CHRO",
      bio: "Talent specialist recruiting the best paleogeneticists, kaiju handlers, and interstellar game developers in the industry.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Damien",
      role: "CXO",
      bio: "Experience architect ensuring memorable encounters with our dinosaurs, kaijus, and immersive gaming worlds.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Cassius",
      role: "CCLO",
      bio: "Legal expert navigating the complex regulations of extinct species revival, kaiju rights, and interstellar gaming licenses.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Marcellus",
      role: "CDAO",
      bio: "Data scientist analyzing dinosaur behavioral patterns, kaiju combat metrics, and player engagement across our gaming universe.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Cody",
      role: "CINO",
      bio: "Innovation leader pushing boundaries in genetic resurrection, kaiju development, and revolutionary gaming technologies.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-purple-950 to-blue-950 text-white">
      {/* Background stars */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Dino background images */}
      <DinoBackground count={8} />

      {/* Draggable Icons */}
      <AnimatePresence>
        {icons.map((icon) => (
          <DraggableIcon
            key={icon.id}
            id={icon.id}
            type={icon.type}
            color={icon.color}
            dinoType={icon.dinoType}
            size={icon.size}
            initialPosition={icon.position}
            onPop={handlePopIcon}
          />
        ))}
      </AnimatePresence>

      {/* Dinosaur silhouettes */}
      <DinoSilhouette position="left" type="trex" delay={2} />
      <DinoSilhouette position="right" type="stegosaurus" delay={5} />
      <DinoSilhouette position="left" type="triceratops" delay={12} />
      <DinoSilhouette position="right" type="pterodactyl" delay={18} />

      {/* Kaiju silhouettes */}
      <KaijuSilhouette type="godzilla" position="left" delay={10} />
      <KaijuSilhouette type="kong" position="right" delay={20} />

      {/* Rocket ships */}
      <RocketShip delay={0} />
      <RocketShip delay={7} />
      <RocketShip delay={15} />

      {/* Header */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl font-extrabold tracking-tight sm:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
        >
          DIMERJU
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 perspective-1000 max-w-3xl"
        >
          <motion.div
            animate={{
              rotateX: [0, 10, 0, -10, 0],
              rotateY: [0, 15, 0, -15, 0],
              scale: [1, 1.05, 1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="text-2xl md:text-3xl font-bold leading-relaxed text-center"
          >
            <RotatingText text="Pioneering the Future:" gradient="bg-gradient-to-r from-purple-400 to-purple-600" />
            <div className="mt-2">
              <RotatingText
                text="Reviving Dinosaurs,"
                gradient="bg-gradient-to-r from-green-400 to-green-600"
                delay={0.3}
              />
              <span className="mx-2 text-white"></span>
              <RotatingText
                text="Engineering Kaijus,"
                gradient="bg-gradient-to-r from-yellow-400 to-orange-500"
                delay={0.6}
              />
              <span className="mx-2 text-white"></span>
              <RotatingText
                text="and Expanding Gaming Beyond the Stars."
                gradient="bg-gradient-to-r from-blue-400 to-purple-500"
                delay={0.9}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Team section with org chart */}
      <div ref={teamRef} className="relative z-20 px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={teamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            The brilliant minds behind our mission to revolutionize dinosaur revival, kaiju creation, and interstellar
            gaming.
          </p>
        </motion.div>

        {/* Org Chart */}
        <OrgChart teamMembers={teamMembers} />
      </div>

      {/* Contact Form Section */}
      <div ref={contactRef} className="relative z-20 px-4 py-24 bg-black/30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Have a question or request? Send us a message and we'll get back to you.
          </p>
        </motion.div>

        <ContactForm />
      </div>

      {/* Footer */}
      <footer className="relative z-20 py-12 bg-black/50 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">
            <Facebook className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Youtube className="w-6 h-6" />
            <span className="sr-only">YouTube</span>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <div className="max-w-md mx-auto">
          <p className="mb-4">© {new Date().getFullYear()} Dimerju. All rights reserved.</p>
          <p className="text-sm">
            Pioneering the future of entertainment through dinosaur revival, kaiju engineering, and interstellar gaming
            experiences.
          </p>
        </div>
      </footer>
    </main>
  )
}

