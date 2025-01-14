'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
export default function KineticTypographyMarquee() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-mono relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <KineticText text="COMING" />
        <KineticText text="SOON" delay={0.5} />

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-xl sm:text-2xl mb-4">Campus Ambassador Loading</p>
          <div className="w-64 sm:w-96 h-4 bg-white rounded-sm overflow-hidden mb-8">
          <motion.div
            className="h-full w-full bg-[linear-gradient(to_right,#000,#000_2px,transparent_2px,transparent_4px)] bg-[length:4px_100%]"
            animate={{
              x: [0, -4],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 0.1,
              ease: 'linear',
            }}
          />
        </div>

          <ul className="text-lg sm:text-xl space-y-2">
           <Link href="/ca"><li className=' uppercase border-[2px]'>View CA</li></Link>
          </ul>
        </motion.div>
      </div>

      {/* Moving lines */}
      <MovingLines />

      {/* Scrolling text at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-16 bg-white bg-opacity-10">
        <motion.div
          className="whitespace-nowrap text-2xl"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          STAY TUNED FOR FLUXUS CAMPUS AMBASSADOR • COMING TO A SCREEN NEAR YOU •&nbsp;
        </motion.div>
      </div>
    </div>
  )
}

function KineticText({ text, delay = 0 }) {
  return (
    <div className="flex overflow-hidden">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="text-6xl sm:text-8xl font-bold inline-block"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            delay: delay + index * 0.1,
            duration: 0.8,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}

function MovingLines() {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 w-full h-px bg-white opacity-20"
          style={{ top: `${(i + 1) * 15}%` }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10 + i * 2,
            ease: 'linear',
          }}
        />
      ))}
    </>
  )
}

