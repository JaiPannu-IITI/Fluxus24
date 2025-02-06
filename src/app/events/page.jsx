"use client"

import { useEffect, useState } from "react"
import { CharacterCard } from "@/components/events/character-card"

const competitions = [
  {
    name: "SHOW IT DOWN",
    desc: "Get ready to set the stage on fire with your moves! Gather your squad, bring your A-game, and showcase electrifying choreography across any dance style. Whether it's hip-hop, classical, or fusion—own the spotlight and leave the crowd in awe!",
    poster: "/images/cultural/1.png",
    color: "#e11d48",
  },
  {
    name: "3D RENDER",
    desc: "From concept to creation—showcase your skills in 3D design and visualization! Whether it's architecture, characters, or abstract art, let your renders speak for themselves in this ultimate 3D modeling showdown. Are you ready to shape the digital world?",
    poster: "/images/cultural/2.png",
    color: "#0d9488",
  },
  {
    name: "THROUGH THE LENS",
    desc: "A picture is worth a thousand words—what will yours say? Showcase your photography skills by capturing stunning shots based on a given theme. Let your creativity, perspective, and storytelling shine through the lens!",
    poster: "/images/cultural/3.png",
    color: "#2563eb",
  },
  {
    name: "TURNCOAT",
    desc: "Ready to think on your feet? In this unique debate competition, you’ll argue both sides of a topic in a single speech—proving your skills in logic, persuasion, and quick thinking. It’s time to turn the tables and show off your debating prowess!",
    poster: "/images/cultural/4.png",
    color: "#e11d48",
  },
  {
    name: "BATTLE OF BANDS",
    desc: "Get ready for a head-banging, toe-tapping, soul-stirring battle! Bands, bring your A-game and show off your talent with original compositions and killer covers. Let the music speak louder than words as you compete for the title of the ultimate rockstars!",
    poster: "/images/cultural/5.png",
    color: "#0d9488",
  },
  {
    name: "BEAT BOXING",
    desc: "Got the beats? Drop them like never before! Show off your beatboxing skills and create mind-blowing rhythms using nothing but your voice. It’s time to prove that you can make the crowd groove with just your lips!",
    poster: "/images/cultural/6.png",
    color: "#2563eb",
  },
  {
    name: "VOICE OF FLUXUS",
    desc: "One mic. One stage. One chance to mesmerize the audience! Step up and showcase your vocal talent across any genre—be it classical, pop, rock, or indie. Sing your heart out and claim your spotlight!",
    poster: "/images/cultural/7.png",
    color: "#e11d48",
  },
  {
    name: "VORTEX ZONE",
    desc: "Step into the arena where rhythm meets rivalry! Bring your best street dance moves, battle it out, and claim the crown in this electrifying showdown. From popping to breaking, let your style speak louder than words!",
    poster: "/images/cultural/8.png",
    color: "#0d9488",
  },
  {
    name: "KAVYA KUMBH",
    desc: "Speak your truth, share your soul! In this non-theme-based poetry slam, let your words take center stage. Perform your original poetry and captivate the audience with the power of your voice and verses.",
    poster: "/images/cultural/9.png",
    color: "#2563eb",
  },
  {
    name: "PARLIAMENTARY DEBATE",
    desc: "Structured arguments. Critical analysis. Fiery rebuttals. Assemble your team of three and engage in an intense intellectual showdown, where strategy and delivery are just as important as content. Do you have what it takes to win the war of words?",
    poster: "/images/cultural/10.png",
    color: "#e11d48",
  },
  {
    name: "HUNKAAR",
    desc: "Raise your voice and make an impact! Gather your team and take the streets by storm, tackling social issues with powerful performances. Let your creativity, energy, and message resonate in this outdoor theatre competition!",
    poster: "/images/cultural/11.png",
    color: "#0d9488",
  },
  {
    name: "LIVE PAINTING",
    desc: "Get ready to unleash your creativity! Whether you’re working solo or in a team, let your brush strokes bring the theme to life in this live painting competition. Show us how you turn ideas into masterpieces right before our eyes!",
    poster: "/images/cultural/12.png",
    color: "#2563eb",
  },
  {
    name: "ON THE BEAT",
    desc: "One stage. One dancer. Infinite possibilities. Step up, own the spotlight, and let your moves do the talking! Show off your talent, rhythm, and passion in this electrifying solo dance competition. Are you ready to steal the show?",
    poster: "/images/cultural/13.png",
    color: "#e11d48",
  },
  // {
  //   name: "HUNKAAR",
  //   desc: "Raise your voice and make an impact! Gather your team and take the streets by storm, tackling social issues with powerful performances. Let your creativity, energy, and message resonate in this outdoor theatre competition!",
  //   poster: "/images/cultural/14.png",
  //   color: "#0d9488",
  // },
  // {
  //   name: "LIVE PAINTING",
  //   desc: "Get ready to unleash your creativity! Whether you’re working solo or in a team, let your brush strokes bring the theme to life in this live painting competition. Show us how you turn ideas into masterpieces right before our eyes!",
  //   poster: "/images/cultural/16.png",
  //   color: "#2563eb",
  // },
];

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
            backgroundImage: 'url(/events/level-0.png)',
            // transform: `translateY(${scrollY * -0.1}px)`,
            backgroundPosition: "bottom",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full bg-repeat-x"
          style={{
            backgroundImage: 'url(/events/level-1.gif)',
            transform: `translateY(${scrollY * -0.1}px)`,
            backgroundPosition: "bottom",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full bg-repeat-x"
          style={{
            backgroundImage: 'url(/events/level-2.gif)',
            transform: `translateY(${scrollY * -0.2}px)`,
            backgroundPosition: "bottom",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full bg-repeat-x"
          style={{
            backgroundImage: 'url(/events/level-3.gif)',
            // transform: `translateY(${scrollY * -0.3}px)`,
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
            {competitions.map((comp,index)=>(
              <CharacterCard
                name= {comp.name}
                description= {comp.desc}
                image= {comp.poster}
                backgroundColor= {comp.color}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

