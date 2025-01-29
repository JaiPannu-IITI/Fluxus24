"use client"

import { useEffect, useState } from "react"
import { CharacterCard } from "@/components/events/character-card"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-[#1C050F] text-white relative overflow-hidden">
      {/* Parallax Backgrounds */}
      <div className="fixed inset-0 w-full h-2/3">
        <div
          className="absolute inset-0 w-full h-full bg-repeat-x"
          style={{
            backgroundImage:  'url(/events/level-1.jpg)',
            transform: `translateY(${scrollY * -0.1}px)`,
            backgroundPosition: "bottom",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full bg-repeat-x"
          style={{
            backgroundImage: 'url(/events/level-2.jpg)',
            transform: `translateY(${scrollY * -0.2}px)`,
            backgroundPosition: "bottom",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full bg-repeat-x"
          style={{
            backgroundImage:  'url(/events/level-3.jpg)',
            transform: `translateY(${scrollY * -0.3}px)`,
            backgroundPosition: "bottom",
            backgroundSize: "contain",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20 pb-40"
       style={{
        transform: `translateY(${scrollY * -0.3}px)`,
        zIndex: 10,
      }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className=" font-extrabold text-6xl  silkscreen-bold">Events Page </h2>
            <button className="bg-yellow-400 text-black mt-12 px-8 py-3 uppercase pixel-font hover:bg-yellow-300 transition-colors">
              View the Collection
            </button>
            {/* <p className="mt-8 max-w-2xl mx-auto pixel-font">
              WIZARDSHOCK IS A CASTLE FULL OF MAGIC, ADVENTURES, WITCHES AND WIZARDS.
            </p>
            <p className="mt-4 max-w-2xl mx-auto pixel-font">
              AN EVIL WIZARD IS ATTACKING WIZARDS, WITCHES, AND NON MAGIC PEOPLE! THE WORLD IS FALLING APART AND PEOPLE
              ARE DYING! SOMEONE NEEDS TO BE A HERO! BUT WHO?
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CharacterCard
              name="Leopold the Old"
              description="A SENIOR WIZARD AND MENTOR TO THE YOUNGER WIZARD GENERATION IN TIME OF SUCH INSTABILITY. UNFORTUNATELY HE CANNOT REMEMBER HOW TO MAKE HIMSELF A SANDWICH."
              image="/placeholder.svg?height=200&width=200"
              backgroundColor="#e11d48"
            />
            <CharacterCard
              name="Dark Lord Merciless"
              description="WANTS TO BE RECOGNIZED AS THE UNDISPUTED LORD AND MASTER OF DARK MAGIC, BUT THERE IS NO SUCH THING AS DARK MAGIC. ONLY MAGIC HE MADE UP HIMSELF. PASTA, AND HIS NON STILL REFERS TO HIM BY HIS REAL NAME: 'TIM'."
              image="/placeholder.svg?height=200&width=200"
              backgroundColor="#0d9488"
            />
            <CharacterCard
              name="Mecresha and her Wolf"
              description="MECRESHA IS VERY SMART AND IS ALWAYS HELPED BY HER VERY LOYAL WOLF."
              image="/placeholder.svg?height=200&width=200"
              backgroundColor="#2563eb"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

