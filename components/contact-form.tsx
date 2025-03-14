"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<{ email?: string; subject?: string; message?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const validateForm = () => {
    const newErrors: { email?: string; subject?: string; message?: string } = {}

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid"
    }

    if (!subject) {
      newErrors.subject = "Subject is required"
    }

    if (!message) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setIsError(false)

    try {
      // In a real implementation, you would send this data to your backend
      // For now, we'll simulate a successful submission
      console.log("Form submitted:", { email, subject, message })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message
      setIsSuccess(true)

      // Reset form after success
      setEmail("")
      setSubject("")
      setMessage("")

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="w-full max-w-md mx-auto bg-gray-900 border-purple-700">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-white">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-gray-800 border-gray-700 text-white ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-white">
                Subject
              </Label>
              <Input
                id="subject"
                placeholder="What's this about?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`bg-gray-800 border-gray-700 text-white ${errors.subject ? "border-red-500" : ""}`}
              />
              {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`bg-gray-800 border-gray-700 text-white ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-green-900/50 border border-green-600 rounded-md flex items-center text-green-400"
            >
              <CheckCircle2 className="w-5 h-5 mr-2" />
              <span>Message sent successfully!</span>
            </motion.div>
          )}

          {isError && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-red-900/50 border border-red-600 rounded-md flex items-center text-red-400"
            >
              <AlertCircle className="w-5 h-5 mr-2" />
              <span>Failed to send message. Please try again.</span>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

