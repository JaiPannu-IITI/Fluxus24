"use client"

import { Press_Start_2P } from "next/font/google"
import { Pixelify_Sans } from "next/font/google"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"; 

const images = [
  "/images/carouselImages/img1.jpg",
  "/images/carouselImages/img2.jpg",
  "/images/carouselImages/img3.jpg",
  "/images/carouselImages/img4.jpg",
  "/images/carouselImages/img5.jpg",
  "/images/carouselImages/img6.jpg",
  "/images/carouselImages/img7.jpg",
  "/images/carouselImages/img8.jpg",
  "/images/carouselImages/img9.jpg",
  "/images/carouselImages/img10.jpg",
  "/images/carouselImages/img11.jpg",
  "/images/carouselImages/img12.jpg",
]

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
})

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
})

const Gallery = () => {
  const [flippedIndex, setFlippedIndex] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const backgroundRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedIndex(Math.floor(Math.random() * images.length * 3))
    }, 2000)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (backgroundRef.current) {
      const scale = 1 + scrollY * 0.00015 
      backgroundRef.current.style.transform = `scale(${scale})`
    }
  }, [scrollY])

  return (
    <div className="relative w-full min-h-screen">
      {/* Fixed Background with Parallax Zoom Effect */}
      <div
        ref={backgroundRef}
        className="fixed top-0 left-0 w-full h-full z-[-1] brightness-75 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(/gallery/bggallery.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Scrollable Content */}
      <div className="relative w-full min-h-screen overflow-y-auto">
        
        <h1 className={`${pressStart2P.className} text-5xl md:text-6xl text-center text-zinc-300 mt-20 p-5  bg-black bg-opacity-50 backdrop-blur-lg rounded-md mx-auto w-3/4`}>
          Gallery
        </h1>

        <div className="text-gray-600 body-font">
          <div className="container px-5 py-20 mx-auto flex flex-wrap">
            {[...Array(3)].map((_, sectionIndex) => (
              <div key={sectionIndex} className="flex flex-wrap w-full md:-m-2 -m-1 mt-10 pt-2">
                <div className="flex flex-wrap w-1/2">


                  {/* small images on the left */}
                  {[0, 1, 2].map((i) => ( 
                    <div
                      key={i}
                      className={`md:p-2 p-1 w-1/2 mt-3 pt-2 ${i === 2 ? "mx-auto" : ""}`}
                    >
                      <motion.div
                        className="relative"
                        animate={{ rotateY: flippedIndex === sectionIndex * 6 + i ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-full h-full object-cover object-center block bg-white text-white font-medium border border-black pr-1 pb-1 rounded-md 
             shadow-[6px_6px_0px_0px_black] transition-transform duration-200 
             hover:scale-105 hover:shadow-[8px_8px_0px_0px_black]">
                          <Image
                            height={300}
                            width={520}
                            alt="gallery"
                            className="w-full object-cover h-full object-center block"
                            src={images[i] || "/placeholder.svg"}
                          />
                        </div>
                      </motion.div>
                    </div>
                  ))}


                   {/* big images */}
                  <div className="md:p-2 p-1 w-full mt-2">
                    <motion.div
                      className="relative"
                      animate={{ rotateY: flippedIndex === sectionIndex * 6 + 3 ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-full h-full object-cover object-center block bg-white text-white font-medium border border-black pr-1 pb-1  rounded-md 
                                     shadow-[6px_6px_0px_0px_black] transition-transform duration-200 
                                  hover:scale-105 hover:shadow-[8px_8px_0px_0px_black]">
                        <Image
                          height={600}
                          width={1050}
                          alt="gallery"
                          className="w-full h-full object-cover object-center block"
                          src={images[3] || "/placeholder.svg"}
                        />

                      </div>

                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2 mt-2 ">
                  <div className="md:p-2 p-1 w-full ml-4">
                    <motion.div
                      className="relative"
                      animate={{ rotateY: flippedIndex === sectionIndex * 6 + 4 ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="h-full w-[525px]  object-cover object-center block bg-white text-white font-medium border border-black pr-1 pb-1  rounded-md 
                                     shadow-[6px_6px_0px_0px_black] transition-transform duration-200 
                                     hover:scale-105 hover:shadow-[8px_8px_0px_0px_black] ">
                        <Image
                          height={300}
                          width={520}
                          alt="gallery"
                          className="w-[520px] h-[300px] object-cover object-center block"
                          src={images[4] || "/placeholder.svg"}
                        />

                      </div>

                    </motion.div>
                  </div>

                  {[0, 1, 2].map((i) => ( 
                    <div
                      key={i}
                      className={`md:p-2 p-1 w-1/2 mt-3 pt-2 ${i === 2 ? "mx-auto" : ""}`}
                    >
                      <motion.div
                        className="relative"
                        animate={{ rotateY: flippedIndex === sectionIndex * 6 + i ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-full h-full object-cover object-center block bg-white text-white font-medium border border-black pr-1 pb-1 rounded-md 
             shadow-[6px_6px_0px_0px_black] transition-transform duration-200 
             hover:scale-105 hover:shadow-[8px_8px_0px_0px_black]">
                          <Image
                            height={300}
                            width={520}
                            alt="gallery"
                            className="w-full object-cover h-full object-center block"
                            src={images[i] || "/placeholder.svg"}
                          />
                        </div>
                      </motion.div>
                    </div>
                  ))}


                  {/* {[5].map((i) => ( 
                    <div key={i} className="md:p-2 p-1 w-1/2 mt-2 ml-5">
                      <motion.div
                        className="relative"
                        animate={{ rotateY: flippedIndex === sectionIndex * 6 + i ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-full h-full object-cover object-center block bg-white text-white font-medium border border-black pr-1 pb-1  rounded-md 
                                       shadow-[6px_6px_0px_0px_black] transition-transform duration-200 
                                       hover:scale-105 hover:shadow-[8px_8px_0px_0px_black]">
                          <img
                            alt="gallery"
                            className="w-full object-cover h-full object-center block"
                            src={images[i] || "/placeholder.svg"}
                          />
                        </div>
                      </motion.div>
                    </div>
                  ))} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery

