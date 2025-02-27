"use client"

import { Press_Start_2P } from "next/font/google"
import { Pixelify_Sans } from "next/font/google"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

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

const chunkedImages = [
  images.slice(0, 3),
  images.slice(3, 6),
  images.slice(6, 9),
  images.slice(9, 12)
];

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
  const bgref = useRef(null)
  const [cloudPosition, setCloudPosition] = useState(0)
  const cloudRef = useRef(null)

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

  useEffect(() => {
    if (bgref.current) {
      const scale = 1 + scrollY * 0.003
      bgref.current.style.transform = `scale(${scale})`
    }
  }, [scrollY])

  useEffect(() => {
    const animateCloud = () => {
      setCloudPosition((prevPosition) => (prevPosition + 0.5) % window.innerWidth)
      requestAnimationFrame(animateCloud)
    }
    animateCloud()
  }, [])

  return (
    <div className="relative w-full min-h-screen">
      {/* Fixed Background with Parallax Zoom Effect */}
      <div
        //ref={backgroundRef}
        className="fixed top-0 left-0 w-full h-full z-[-2] brightness-75 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(/gallery/d.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>
      {/* <div
        ref={bgref}
        className="fixed top-0 left-0 w-full h-full z-[-1] brightness-75 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(/gallery/bgp.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div> */}

      {/* Scrollable Content */}
      <div className="relative w-full min-h-screen overflow-y-auto">
        <h1
          className={`${pressStart2P.className} text-5xl md:text-6xl text-center text-zinc-300 mt-32 p-5 mb `}
        >
          Gallery
        </h1>

        <div className="text-gray-600 body-font">
          <div className="container px-2 sm:px-5 pt-18 md:pt-20  pb-24 mx-auto">
            {/* {[...Array(3)].map((_, sectionIndex) => (
              <div key={sectionIndex} className="flex flex-wrap w-full md:-m-2 -m-1 mt-10 pt-2">
                <div className="flex flex-wrap w-full md:w-1/2">
               
                  {[0, 1, 2].map((i) => (
                    <div key={i} className={`md:p-2 p-1 w-1/2 mt-3 pt-2 ${i === 2 ? "mx-auto" : ""}`}>
                      <motion.div
                        className="relative"
                        animate={{ rotateY: flippedIndex === sectionIndex * 6 + i ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div
                          className="w-full h-full object-cover object-center block bg-white text-white font-medium border border-black pr-1 pb-1 rounded-md 
             shadow-[6px_6px_0px_0px_black] transition-transform duration-200 
             hover:scale-105 hover:shadow-[8px_8px_0px_0px_black]"
                        >
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

                  
                  <div className="md:p-2 p-1 w-full mt-2">
                    <motion.div
                      className="relative"
                      animate={{ rotateY: flippedIndex === sectionIndex * 6 + 3 ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className="w-full aspect-[16/9] object-cover object-center block bg-white text-white font-medium border border-black pr-1 pb-1 rounded-md 
             shadow-[6px_6px_0px_0px_white] transition-transform duration-200 
             hover:scale-105 hover:shadow-[8px_8px_0px_0px_white]"
                      >
                        <Image
                          fill
                          alt="gallery"
                          className="object-cover object-center"
                          src={images[3] || "/placeholder.svg"}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-wrap w-full md:w-1/2 mt-2">
                  <div className="md:p-2 p-1 w-full">
                    <motion.div
                      className="relative"
                      animate={{ rotateY: flippedIndex === sectionIndex * 6 + 4 ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className="w-full aspect-[16/9] object-cover object-center block bg-white text-white font-medium border border-black pr-1 pb-1 rounded-md 
                                     shadow-[6px_6px_0px_0px_black] transition-transform duration-200 
                                     hover:scale-105 hover:shadow-[8px_8px_0px_0px_black]"
                      >
                        <Image
                          fill
                          alt="gallery"
                          className="object-cover object-center"
                          src={images[4] || "/placeholder.svg"}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {[0, 1, 2].map((i) => (
                    <div key={i} className={`md:p-2 p-1 w-1/2 mt-3 pt-2 ${i === 2 ? "mx-auto" : ""}`}>
                      <motion.div
                        className="relative"
                        animate={{ rotateY: flippedIndex === sectionIndex * 6 + i + 5 ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div
                          className="w-full h-full object-cover object-center block bg-white text-white font-medium border border-black pr-1 pb-1 rounded-md 
             shadow-[6px_6px_0px_0px_black] transition-transform duration-200 
             hover:scale-105 hover:shadow-[8px_8px_0px_0px_black]"
                        >
                          <Image
                            height={300}
                            width={520}
                            alt="gallery"
                            className="w-full object-cover h-full object-center block"
                            src={images[i + 5] || "/placeholder.svg"}
                          />
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            ))} */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {chunkedImages.map((column, index) => (
                <div key={index} className="grid gap-4">
                  {column.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        className="h-auto max-w-full rounded-lg"
                        src={img}
                        alt="Gallery Image"
                        width={500}
                        height={500}
                        layout="responsive"
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </div> */}
            <div className="grid grid-cols-7 grid-rows-5 gap-4 w-full h-full">
              <div className="row-span-3 relative" style={{ minHeight: "200px" }}>
             
                <Image
                  src="/images/carouselImages/img1.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
             
              </div>
              <div className="col-span-2 row-span-2 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img2.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="row-span-3 col-start-4 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img3.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="col-span-2 row-span-2 col-start-5 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img4.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="row-span-3 col-start-7 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img5.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="col-span-2 row-span-2 col-start-1 row-start-4 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img6.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="row-span-3 col-start-3 row-start-3 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img7.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="row-span-2 col-start-4 row-start-4 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img8.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="row-span-3 col-start-5 row-start-3 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img9.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="col-span-2 row-span-2 col-start-6 row-start-4 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img10.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="grid grid-cols-7 grid-rows-5 gap-4 w-full h-full mt-5">
              <div className="row-span-3 relative" style={{ minHeight: "200px" }}>
             
                <Image
                  src="/images/carouselImages/img1.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
             
              </div>
              <div className="col-span-2 row-span-2 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img2.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="row-span-3 col-start-4 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img3.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="col-span-2 row-span-2 col-start-5 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img4.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="row-span-3 col-start-7 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img5.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="col-span-2 row-span-2 col-start-1 row-start-4 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img6.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="row-span-3 col-start-3 row-start-3 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img7.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="row-span-2 col-start-4 row-start-4 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img8.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="row-span-3 col-start-5 row-start-3 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img11.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="col-span-2 row-span-2 col-start-6 row-start-4 relative" style={{ minHeight: "200px" }}>
                <Image
                  src="/images/carouselImages/img12.jpg"
                  alt="gallery"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div
        ref={cloudRef}
        className=" relative top-0 left-0 w-full h-full z-10 pointer-events-none"
        style={{
          backgroundImage: `url(/gallery/i3.png), url(/gallery/i.png)`,
          backgroundSize: "auto 20%, auto 30%",
          backgroundPosition: `${cloudPosition}px 1%, ${cloudPosition * 0.8}px 20%, ${cloudPosition * 0.6}px 5%`,
          backgroundRepeat: "repeat-x",
        }}
      ></div> */}
      </div>

    </div>
  )
}

export default Gallery

