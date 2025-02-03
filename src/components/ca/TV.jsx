"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Volume2, VolumeX, ChevronUp, ChevronDown } from "lucide-react"
import bglight from "/public/images/bg/bglight.png"
import Image from "next/image"

export default function InteractiveTV() {
  const [isOn, setIsOn] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(50)
  const [showVolumeBar, setShowVolumeBar] = useState(false)

  useEffect(() => {
    if (showVolumeBar) {
      const timer = setTimeout(() => setShowVolumeBar(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showVolumeBar, volume])

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume)
    setShowVolumeBar(true)
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Background Image */}
      <Image
        src={bglight}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay Divisions */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-around text-center lg:text-left px-4 lg:px-8 py-8">
        {/* Left Section */}
        <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-md">
          <h1 className="text-2xl font-bold text-gray-800">
            {"Glimpse from previous year's CA program"}
          </h1>
          <p className="text-gray-700 mt-4">
           {" Explore highlights, achievements, and unforgettable moments that made the program a grand success!"}
          </p>
        </div>

        {/* Right Section (Interactive TV) */}
        <div className="relative">
          {/* Antennas */}
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
            <div className="relative w-48 h-32">
              <div className="absolute left-0 bottom-0 w-1 h-28 bg-gradient-to-b from-gray-400 to-gray-600 transform -rotate-15 origin-bottom"></div>
              <div className="absolute right-0 bottom-0 w-1 h-32 bg-gradient-to-b from-gray-400 to-gray-600 transform rotate-15 origin-bottom"></div>
            </div>
          </div>

          {/* TV Body */}
          <div
            className={cn(
              "w-96 h-72 bg-gradient-to-b from-amber-700 to-amber-900 rounded-lg shadow-xl overflow-hidden transition-all duration-500",
              "border-t-8 border-x-8 border-b-16 border-amber-950",
              "relative"
            )}
          >
            {/* TV Screen */}
            <div
              className={cn(
                "w-full h-full bg-black transition-all duration-500",
                "rounded-lg",
                "flex items-center justify-center",
                isOn ? "opacity-100" : "opacity-0"
              )}
            >
              {isOn && (
                <div className="w-full h-full bg-white opacity-20 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 border-t-[20px] border-l-[20px] border-r-[20px] border-b-[40px] border-gray-300 rounded-full"></div>
                </div>
              )}
            </div>

            {/* Power Button */}
            <button
              onClick={() => setIsOn(!isOn)}
              className={cn(
                "absolute top-2 right-2 w-8 h-8 rounded-full focus:outline-none transition-colors duration-200",
                isOn ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
              )}
              aria-label={isOn ? "Turn Off" : "Turn On"}
            >
              <span className="text-white text-xs font-bold">⏻</span>
            </button>

            {/* Bottom Bezel with Buttons and Sound Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-amber-800 via-amber-900 to-amber-800 flex items-center justify-between px-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                disabled={!isOn}
                className={cn(
                  "w-10 h-10 rounded-full focus:outline-none transition-colors duration-200 flex items-center justify-center",
                  isOn
                    ? isMuted
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-400"
                )}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
              </button>

              {/* Sound Bar */}
              <div className="flex-1 mx-4 h-2 bg-amber-950 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full bg-blue-500 transition-all duration-300",
                    showVolumeBar ? "opacity-100" : "opacity-0"
                  )}
                  style={{ width: `${volume}%` }}
                ></div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => handleVolumeChange(Math.min(volume + 10, 100))}
                  disabled={!isOn || isMuted}
                  className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center focus:outline-none hover:bg-amber-600"
                  aria-label="Increase Volume"
                >
                  <ChevronUp className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={() => handleVolumeChange(Math.max(volume - 10, 0))}
                  disabled={!isOn || isMuted}
                  className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center focus:outline-none hover:bg-amber-600"
                  aria-label="Decrease Volume"
                >
                  <ChevronDown className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* TV Stand */}
          <div className="w-64 h-12 bg-gradient-to-b from-amber-900 to-amber-950 mx-auto -mt-2 rounded-b-3xl shadow-lg"></div>
        </div>
      </div>
    </div>
  )
}
