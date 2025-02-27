"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react"
import { Press_Start_2P, Pixelify_Sans } from "next/font/google"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Herosection from "@/components/herosection/main"

// Initialize fonts
const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
})

const pixelify = Pixelify_Sans({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pixelify",
})

const teamMembers = [
  {
    name: "Madhav Mishra",
    role: "Overall Coordinator",
    phone: "+91 79871 99289",
  },
  {
    name: "Rohan Maji",
    role: "Public Relations And Outreach Head",
    phone: "+91 94748 67609",
  },
  {
    name: "Garima Sharma",
    role: "Marketing Head",
    phone: "+91 60269 87258",
  },
]

const socialLinks = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/fluxusiiti/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/fluxus_iit_indore/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    url: "https://in.linkedin.com/company/fluxus---iit-indore",
    label: "LinkedIn",
  },
]

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${pixelify.variable} ${pressStart.variable} font-pixelify`}
      style={{
        backgroundImage: "url('/contactus/desertbg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: `center ${scrollY * 0.05}px`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay - Darker to improve visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-[#0a192f]/60 to-[#0a192f]/30" />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <div className="inline-block">
            <h1
              className={`
                relative px-8 py-4 text-4xl sm:text-5xl text-white
                font-press-start tracking-wider
                before:absolute before:inset-0 before:bg-purple-700
                before:skew-x-[-6deg] before:z-[-1]
                before:rounded-lg before:shadow-lg
              `}
            >
              Contact Us
            </h1>
          </div>
        </motion.div>

        {/* Logo Section */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 0.7 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div
            className="brightness-125 -mt-[300px] md:-mt-[220px] lg:-mt-[150px]"
            style={{ filter: "invert(1) brightness(0.2)" }}
          >
            <Herosection />
          </div>
        </motion.div>

        {/* Team Contact Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16 -mt-[60px] -mt-[240px] md:-mt-[200px] lg:-mt-[150px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.04 }}
            >
              <Card className="bg-[#1a1a2e]/80 backdrop-blur border border-cyan-400/30 overflow-hidden shadow-lg shadow-cyan-400/20">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-4">
                    <h3 className="text-xl font-bold text-cyan-400 mb-1 font-press-start text-center">{member.name}</h3>
                    <p className="text-white mb-4 text-center">{member.role}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors">
                      <Phone className="h-5 w-5 text-cyan-400" />
                      <Link href={`tel:${member.phone}`} className="hover:underline">
                        {member.phone}
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.label}
              whileHover={{ y: -5, scale: 1.5 }}
              whileTap={{ scale: 1.5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Link
                href={social.url}
                className="bg-[#1a1a2e]/80 p-4 rounded-full hover:bg-purple-700/80 transition-colors border border-cyan-400/30 flex items-center justify-center w-[60px] h-[60px] shadow-lg shadow-cyan-400/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-8 w-8 text-cyan-400" />
                <span className="sr-only">{social.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Us Section */}
        <motion.section
          className="bg-[#1a1a2e]/80 backdrop-blur rounded-lg p-6 border border-cyan-400/30 mb-16 shadow-lg shadow-cyan-400/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-8">
            <h2
              className={`
                relative px-6 py-3 text-2xl text-white
                font-press-start tracking-wider
                before:absolute before:inset-0 before:bg-purple-700
                before:skew-x-[-6deg] before:z-[-1]
                before:rounded-lg before:shadow-lg
              `}
            >
              Find Us
            </h2>
          </div>

          <div className="aspect-[16/9] md:aspect-[21/9] relative rounded-lg overflow-hidden border-2 border-cyan-400/50">
            <Link
              href="https://maps.app.goo.gl/xcQv85ZQH1WGUvha6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full h-full"
            >
              <Image
                src="/contactus/img.jpg"
                alt="Map location of IIT Indore"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.div
                  className="text-white flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-700/80 backdrop-blur-sm border border-cyan-400/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MapPin className="h-6 w-6 text-cyan-400" />
                  <span className="font-medium font-press-start text-sm">Visit IIT Indore</span>
                </motion.div>
              </div>
            </Link>
          </div>

          <div className="mt-6 text-white text-center">
            <p>Indian Institute of Technology Indore</p>
            <p>Khandwa Road, Simrol, Indore, Madhya Pradesh 452020</p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

