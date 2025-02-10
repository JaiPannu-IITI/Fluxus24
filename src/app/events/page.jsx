"use client"

import { useEffect, useState } from "react"
import { CharacterCard } from "@/components/events/character-card"
import Image from "next/image";

const tech_competitions = [
  {
    name: "FACE RECOGNITION SYSTEM",
    desc: "Develop an advanced facial recognition system for seamless and secure employee access.",
    poster: "/images/technical/7.png",
    color: "#e11d48",
    link: "https://unstop.com/hackathons/face-recognition-system-fluxus-2025-iit-indore-1391735",
  },
  {
    name: "TINKERHUB",
    desc: "Showcase your innovative hardware projects! Submit, get shortlisted, and present at IIT Indore.",
    poster: "/images/technical/14.png",
    color: "#0d9488",
    link: "https://unstop.com/competitions/tinkerhub-tech-expo-fluxus-2025-iit-indore-1376794",
  },
  {
    name: "FLOOD FREE CITY DESIGN",
    desc: "Design sustainable drainage solutions to create a flood-free, eco-friendly city.",
    poster: "/images/technical/13.png",
    color: "#2563eb",
    link: "https://unstop.com/competitions/flood-free-city-design-competition-fluxus-2025-iit-indore-1385599",
  },
  {
    name: "ROBOWARS",
    desc: "Build, strategize, and battle with your combat robot in an electrifying showdown!",
    poster: "/images/technical/12.png",
    color: "#7e30c8",
    link: "https://unstop.com/competitions/robowars-fluxus-2025-iit-indore-1389313",
  },
  {
    name: "ROBOSOCCER",
    desc: "Design and control your soccer bot—push, score, and outmaneuver opponents to victory!",
    poster: "/images/technical/11.png",
    color: "#e11d48",
    link: "https://unstop.com/competitions/robosoccer-robotics-challenge-fluxus-2025-iit-indore-1376594",
  },
  {
    name: "HEALTH CARE SYSTEM",
    desc: "Create a platform to manage student health records, bookings, and medical history.",
    poster: "/images/technical/8.png",
    color: "#0d9488",
    link: "https://unstop.com/hackathons/healthcare-management-system-hackathon-fluxus-2025-iit-indore-1384137",
  },
  {
    name: "ANALYTICAX",
    desc: "Apply machine learning to real-world problems and impress industry experts with your insights.",
    poster: "/images/technical/4.png",
    color: "#2563eb",
    link: "https://unstop.com/competitions/analyticax-fluxus-2025-iit-indore-1391923",
  },
  {
    name: "CONSULTX",
    desc: "Solve business challenges with strategic thinking—analyze, innovate, and compete!",
    poster: "/images/technical/3.png",
    color: "#7e30c8",
    link: "https://unstop.com/competitions/consultx-case-study-challenge-fluxus-2025-iit-indore-1385561",
  },
  {
    name: "AERO ARTISTRY",
    desc: "Design, build, and perfect a remote-controlled aircraft for the longest, smoothest glide.",
    poster: "/images/technical/2.png",
    color: "#e11d48",
    link: "https://unstop.com/competitions/aero-artistry-fluxus-2025-iit-indore-1376783",
  },
  {
    name: "GESTURE CONTROLLED DRONE",
    desc: "Fly a drone with hand gestures! Innovate, compete, and take control of the skies.",
    poster: "/images/technical/1.png",
    color: "#0d9488",
    link: "https://unstop.com/competitions/gesture-controlled-drone-fluxus-2025-iit-indore-1385701",
  },
];


const cult_competitions = [
  {
    name: "SHOW IT DOWN",
    desc: "Dominate the stage with electrifying choreography—hip-hop, classical, fusion—bring your best moves!",
    poster: "/images/cultural/1.png",
    color: "#e11d48",
    link: "https://unstop.com/p/show-it-down-fluxus-2025-iit-indore-1376629",
  },
  {
    name: "3D RENDER",
    desc: "Create stunning 3D designs—architecture, characters, or abstract—bring your digital vision to life!",
    poster: "/images/cultural/2.png",
    color: "#0d9488",
    link: "https://unstop.com/p/3d-render-challenge-fluxus-2025-iit-indore-1376641",
  },
  {
    name: "THROUGH THE LENS",
    desc: "One theme, one shot! Capture the perfect moment and showcase your photography skills.",
    poster: "/images/cultural/3.png",
    color: "#2563eb",
    link: "https://unstop.com/p/echoes-through-the-lens-fluxus-2025-iit-indore-1376704",
  },
  {
    name: "TURNCOAT",
    desc: "Argue both sides of a topic in one speech—quick thinking and sharp logic will decide the winner!",
    poster: "/images/cultural/4.png",
    color: "#7e30c8",
    link: "https://unstop.com/p/turncoat-fluxus-2025-iit-indore-1380557",
  },
  {
    name: "BATTLE OF BANDS",
    desc: "Rock the stage with your band! Originals or covers—bring your best sound and own the spotlight.",
    poster: "/images/cultural/5.png",
    color: "#e11d48",
    link: "https://unstop.com/events/battle-of-bands-fluxus-2025-iit-indore-1376711",
  },
  {
    name: "BEAT BOXING",
    desc: "Drop beats, create rhythms, and impress with just your voice! Show off your best beatboxing skills.",
    poster: "/images/cultural/6.png",
    color: "#0d9488",
    link: "https://unstop.com/events/beat-boxing-iit-indore-1380610",
  },
  {
    name: "VOICE OF FLUXUS",
    desc: "One mic, one stage—sing your heart out across any genre and let your voice shine!",
    poster: "/images/cultural/7.png",
    color: "#2563eb",
    link: "https://unstop.com/events/voice-of-fluxus-iit-indore-1380595",
  },
  {
    name: "VORTEX ZONE",
    desc: "Street dance battle! From popping to breaking—step up and prove your dominance on the dance floor.",
    poster: "/images/cultural/8.png",
    color: "#7e30c8",
    link: "https://unstop.com/p/vortex-zone-fluxus-2025-iit-indore-1376609",
  },
  {
    name: "KAVYA KUMBH",
    desc: "Unleash your words! Perform your original poetry and captivate the audience with your verses.",
    poster: "/images/cultural/9.png",
    color: "#e11d48",
    link: "https://unstop.com/p/kavya-kumbh-fluxus-2025-iit-indore-1376701",
  },
  {
    name: "PARLIAMENTARY DEBATE",
    desc: "Three-person teams, structured arguments—strategy, analysis, and delivery will win this war of words.",
    poster: "/images/cultural/10.png",
    color: "#0d9488",
    link: "https://unstop.com/p/asian-parliamentary-debate-fluxus-2025-iit-indore-1376648",
  },
  {
    name: "HUNKAAR",
    desc: "Raise your voice through street theatre! Tackle social issues and make an impact with powerful performances.",
    poster: "/images/cultural/11.png",
    color: "#2563eb",
    link: "https://unstop.com/p/hunkaar-fluxus-2025-iit-indore-1376678",
  },
  {
    name: "LIVE PAINTING",
    desc: "Bring the theme to life with brushstrokes! Work solo or in a team to create a masterpiece in real time.",
    poster: "/images/cultural/12.png",
    color: "#7e30c8",
    link: "https://unstop.com/p/live-sketching-fluxus-2025-iit-indore-1376655",
  },
  {
    name: "ON THE BEAT",
    desc: "One dancer, one stage—own the moment with your moves in this high-energy solo dance competition!",
    poster: "/images/cultural/13.png",
    color: "#e11d48",
    link: "https://unstop.com/p/on-the-beat-fluxus-2025-iit-indore-1376538",
  },
];



export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeDiv, setActiveDiv] = useState('buttons');
  const [hoveredButton, setHoveredButton] = useState(null);

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
      <div className="relative z-10 pt-5 pb-40"
        style={{
          transform: `translateY(${scrollY * -0.3}px)`,
          zIndex: 10,
        }}>
        <div className="container mx-auto px-0">
          <div className="text-center mb-10">
            <h2 className=" font-extrabold text-6xl  silkscreen-bold">{"Competitions"} </h2>
          </div>



          <div className="flex flex-col items-center justify-between h-min w-full">
            {activeDiv === 'buttons' && (
              <div className="flex justify-around w-full space-x-4 p-6 shadow-lg rounded-lg">
                <Image
                  src="/images/comps/arcade.png"
                  alt="Button 1"
                  width={370}
                  height={350}
                  className={`cursor-pointer transition-all duration-300 ${hoveredButton === 'button1' ? 'scale-[1.03]' : ''} ${hoveredButton === 'button2' ? 'scale-95' : ''}`}
                  onMouseEnter={() => setHoveredButton('button1')}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => setActiveDiv('div1')}
                />
                <Image
                  src="/images/comps/dance.png"
                  alt="Button 2"
                  width={370}
                  height={350}
                  className={`cursor-pointer transition-all duration-300 ${hoveredButton === 'button2' ? 'scale-[1.03]' : ''} ${hoveredButton === 'button1' ? 'scale-95' : ''}`}
                  onMouseEnter={() => setHoveredButton('button2')}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => setActiveDiv('div2')}
                />
              </div>
            )}

            {activeDiv === 'div1' && (
              <div className="p-6 flex flex-col items-center shadow-lg rounded-lg">
                <button className="mb-4 bg-yellow-400 text-black text-xl px-6 py-2 uppercase pixel-font hover:bg-white  hover:-translate-y-1 transition-colors" onClick={() => setActiveDiv('buttons')}>
                  Go Back
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tech_competitions.map((comp, index) => (
                    <CharacterCard
                      name={comp.name}
                      description={comp.desc}
                      image={comp.poster}
                      backgroundColor={comp.color}
                      link={comp.link}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeDiv === 'div2' && (
              <div className="p-6 flex flex-col items-center shadow-lg rounded-lg">
                <button className="mb-4 bg-yellow-400 text-black text-xl px-6 py-2 uppercase pixel-font hover:bg-white  hover:-translate-y-1 transition-colors" onClick={() => setActiveDiv('buttons')}>
                  Go Back
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {cult_competitions.map((comp, index) => (
                    <CharacterCard
                      name={comp.name}
                      description={comp.desc}
                      image={comp.poster}
                      backgroundColor={comp.color}
                      link={comp.link}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>


        </div>
      </div>
    </main>
  )
}

