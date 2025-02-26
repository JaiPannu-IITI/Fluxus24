// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import GlitchyTitle from "../main/title"
// import Image from 'next/image';
// const GameInterface = () => {
//   const [gameStarted, setGameStarted] = useState(false)
//   const [progress, setProgress] = useState(0)
//   const containerRef = useRef(null)
//   const contentRef = useRef(null)
//   const backgroundRef = useRef(null)

//   useEffect(() => {
//     if (!gameStarted) {
//       const interval = setInterval(() => {
//         setProgress((prev) => (prev < 100 ? prev + 1 : 0))
//       }, 30)
//       return () => clearInterval(interval)
//     }
//   }, [gameStarted])

//   useEffect(() => {
//     if (!gameStarted) return

//     const handleScroll = () => {
//       if (!containerRef.current || !contentRef.current || !backgroundRef.current) return
//       const scrollPosition = window.scrollY
//       const backgroundTranslateX = -(scrollPosition * 0.2) % window.innerWidth
//       backgroundRef.current.style.transform = `translateX(${backgroundTranslateX}px)`
//       const translateX = -scrollPosition * 1.0
//       contentRef.current.style.transform = `translateX(${translateX}px)`
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [gameStarted])

//   const handleStart = () => {
//     setGameStarted(true)
//   }

//   const events = [
//     { title: "PIXEL PARTY", date: "JUNE 15", description: "Join us for a night of retro gaming and pixel art creation!", image: "/placeholder.svg?height=100&width=100" },
//     { title: "BOSS BATTLE", date: "JULY 1", description: "Face off against the toughest 8-bit bosses in this epic tournament!", image: "/placeholder.svg?height=100&width=100" },
//     { title: "CHIPTUNE CONCERT", date: "JULY 20", description: "Experience the best of retro game music live on stage!", image: "/placeholder.svg?height=100&width=100" },
//     { title: "GAME JAM", date: "AUGUST 5-7", description: "Create your own retro-style game in just 48 hours!", image: "/placeholder.svg?height=100&width=100" }
//   ]

//   return (
//     <div className={`${gameStarted ? "h-[800vh]" : "h-screen"} transition-all duration-500`}>
//       <div ref={containerRef} className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-[#1a103d]">
//         {/* Background Layer */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div ref={backgroundRef} className="absolute inset-0 h-full bg-repeat-x bg-cover flex"
//             style={{ backgroundImage: `url('/bg/abc2.jpg')`, backgroundSize: "auto 100%", backgroundPosition: "top left", width: "200%" }}
//           />
//         </div>

//         {/* Game Start Interface */}
//         <AnimatePresence>
//           {!gameStarted && (
//             <motion.div initial={{ opacity: 1, scale: 1, y: 0, x: 0 }} animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
//               exit={{ opacity: 0, scale: 0.5, y: -200, x: 200 }} transition={{ duration: 0.5 }}
//               className="absolute inset-0 flex flex-col items-center justify-center"
//             >
//               <div className="bg-black/20 backdrop-blur-sm  rounded-3xl p-12 border border-white/10 space-y-8">
//               <div className=" flex flex-col items-center justify-center"><GlitchyTitle fontSize="text-[125px]">FLUXUS</GlitchyTitle>
//               <GlitchyTitle fontSize="text-[125px]">2025</GlitchyTitle></div>
                       
//                 <div className="flex justify-center gap-4">
//                   <div className="w-8 h-8 bg-pink-500 rounded-full" />
//                   <div className="w-8 h-8 bg-pink-500 rounded-full" />
//                   <div className="w-8 h-8 bg-pink-500 rounded-full" />
//                 </div>
//                 <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
//                   <motion.div className="h-full bg-purple-500" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
//                 </div>
//                 <div className="flex gap-4 justify-center">
//                   <button onClick={handleStart} className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-full">PLAY</button>
//                   <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-2 rounded-full">MENU</button>
//                   <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-full">EXIT</button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Scrollable Content */}
//         {gameStarted && (
//           <div ref={contentRef} className="relative h-full transition-none" style={{ width: "400vw" }}>
//             <div className="absolute top-1/2 -translate-y-1/2 flex gap-96 px-24">
//               {events.map((event, index) => (
//                 <div key={index} className="w-96 transform transition-none">
//                   <div className="bg-slate-400 p-6 rounded-t-xl border-4 border-black">
//                     <h2 className="text-3xl font-bold mb-2 text-black font-mono">{event.title}</h2>
//                     <p className="text-xl font-semibold text-black font-mono">{event.date}</p>
//                   </div>
//                   <div className="bg-white bg-opacity-85 p-6 rounded-b-xl border-4 border-t-0 border-black">
//                     <div className="flex items-start space-x-4">
//                       <img src={event.image} alt={event.title} className="w-24 h-24 object-cover rounded-lg border-2 border-black" />
//                       <p className="text-black font-mono flex-1">{event.description}</p>
//                     </div>
//                     <button className="mt-4 bg-purple-500 hover:bg-purple-400 text-white font-mono w-full py-2 rounded-full">JOIN EVENT</button>
//                   </div>
//                 </div>
//               ))}
              
//             </div>
            
//           </div>
//         )}
//                 <div className="absolute bottom-8 left-8 flex gap-2">
//           {[...Array(5)].map((_, i) => (
//              <Image key={i} src="/bg/heart1.png" alt="Red Square" className=" -mx-1" width={45} height={45} />
//           ))}
//         </div>
//         <div className="absolute bottom-8 right-8 flex gap-2">
//           {[...Array(5)].map((_, i) => (
//             <div key={i} className="w-6 h-6 bg-blue-400 rotate-45" />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GameInterface
"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const GameInterface = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef(null)
  const backgroundRef = useRef(null)

  useEffect(() => {
    if (!gameStarted) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 0))
      }, 30)
      return () => clearInterval(interval)
    }
  }, [gameStarted])

  const handleStart = () => {
    setGameStarted(true)
  }

  return (
    <div className={`${gameStarted ? "h-[800vh]" : "h-screen"} transition-all duration-500`}>
      <div ref={containerRef} className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-[#1a103d]">
        {/* Background Layer */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={backgroundRef} className="absolute inset-0 h-full bg-repeat-x bg-cover flex"
            style={{ backgroundImage: `url('/bg/abc2.jpg')`, backgroundSize: "auto 100%", backgroundPosition: "top left", width: "200%" }}
          />
        </div>

        {/* Game Start Interface */}
        <AnimatePresence>
          {!gameStarted && (
            <motion.div initial={{ opacity: 1, scale: 1, y: 0, x: 0 }} animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -200, x: 200 }} transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10 space-y-8">
                <h1 className="text-6xl font-bold text-white text-center font-mono">GAME START</h1>
                <div className="flex justify-center gap-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full" />
                  <div className="w-8 h-8 bg-pink-500 rounded-full" />
                  <div className="w-8 h-8 bg-pink-500 rounded-full" />
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-purple-500" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
                </div>
                <div className="flex gap-4 justify-center">
                  <button onClick={handleStart} className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-full">PLAY</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Coming Soon Card */}
        {gameStarted && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px]">
            <div className="bg-yellow-400 p-10 rounded-xl border-4 border-black text-center">
              <h2 className="text-4xl font-bold mb-4 text-black font-mono">COMING SOON</h2>
              <p className="text-2xl font-semibold text-black font-mono">MARCH 14</p>
              <p className="text-black font-mono mt-4">Stay tuned with us for updates!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GameInterface
