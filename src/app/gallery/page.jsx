"use client"

import { Press_Start_2P, Pixelify_Sans } from "next/font/google"
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
  const [scrollY, setScrollY] = useState(0)
  const backgroundRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (backgroundRef.current) {
      const scale = 1 + scrollY * 0.0002
      backgroundRef.current.style.transform = `scale(${scale})`
    }
  }, [scrollY])

  // Create chunks of 9 images for mobile layout (3x3 grid)
  const imageChunks = []
  for (let i = 0; i < images.length; i += 8) {
    imageChunks.push(images.slice(i, i + 8))
  }

  return (
    <div className="relative w-full min-h-screen">
      {/* Fixed Background with Parallax Zoom Effect */}
      <div
       // ref={backgroundRef}
        className="fixed top-0 left-0 w-full h-full z-[-2] brightness-80 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(/gallery/d.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Scrollable Content */}
      <div className="relative w-full min-h-screen overflow-y-auto">
        <h1
          className={`${pressStart2P.className} text-4xl md:text-5xl lg:text-6xl text-center 
              bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400
              text-transparent bg-clip-text mt-16 md:mt-24 lg:mt-32 p-5`}
        >
          Gallery
        </h1>
        <div className="text-gray-600 body-font">
          <div className="container px-4 py-8 md:py-12 mx-auto">
            {/* Desktop layout - hidden on small screens */}
            <div className="hidden md:block">
              <div className="grid grid-cols-7 grid-rows-5 gap-4 w-full mb-8">
                <div className="row-span-3 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[0] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                  </div>
                </div>
                <div className="col-span-2 row-span-2 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[1] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                  </div>
                </div>
                <div className="row-span-3 col-start-4 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[2] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="col-span-2 row-span-2 col-start-5 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[3] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="row-span-3 col-start-7 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[4] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="col-span-2 row-span-2 col-start-1 row-start-4 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[5] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="row-span-3 col-start-3 row-start-3 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[6] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="row-span-2 col-start-4 row-start-4 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[7] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="row-span-3 col-start-5 row-start-3 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[8] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="col-span-2 row-span-2 col-start-6 row-start-4 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[9] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>

              {/* Second grid for desktop */}
              <div className="grid grid-cols-7 grid-rows-5 gap-4 w-full">
                <div className="row-span-3 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[9] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="col-span-2 row-span-2 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[1] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="row-span-3 col-start-4 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[4] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="col-span-2 row-span-2 col-start-5 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[5] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="row-span-3 col-start-7 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[6] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="col-span-2 row-span-2 col-start-1 row-start-4 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[7] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="row-span-3 col-start-3 row-start-3 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[8] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="row-span-2 col-start-4 row-start-4 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[9] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="row-span-3 col-start-5 row-start-3 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[10] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="col-span-2 row-span-2 col-start-6 row-start-4 relative" style={{ minHeight: "200px" }}>
                  <div className="w-full h-full bg-bisque p-3">
                    <Image
                      src={images[11] || "/placeholder.svg"}
                      alt="gallery"
                      fill
                      className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile layout - 3x3 grid chunks, visible only on small screens */}
            {/* <div className="md:hidden">
              {imageChunks.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="mb-8">
                  <div className="grid grid-cols-2 gap-3">
                    {chunk.map((img, imgIndex) => (
                      <div key={imgIndex} className="relative aspect-square">
                        <div className="w-full h-full bg-bisque p-2">
                          <div className="relative w-full h-full shadow-[inset_-30px_-30px_0_-25px_tomato,inset_30px_30px_0_-25px_tomato]">
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`Gallery image ${chunkIndex * 9 + imgIndex + 1}`}
                              fill
                              className="object-cover"
                              sizes="33vw"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div> */}


            <div className="md:hidden">
              {imageChunks.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="mb-8">
                  <div className="grid grid-cols-2 grid-rows-2 gap-3">
                    {chunk.map((img, imgIndex) => (
                      <div key={imgIndex} className="relative aspect-square">
                        <div className="w-full h-full bg-bisque p-2">
                          <div className="relative w-full h-full shadow-[inset_-30px_-30px_0_-25px_tomato,inset_30px_30px_0_-25px_tomato]">
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`Gallery image ${chunkIndex * 4 + imgIndex + 1}`}
                              fill
                              className="object-cover bg-black border-t-2 border-l-2 border-pink_frame  rounded-md 
      shadow-[2px_2px_0px_0px_white] transition-transform duration-200 
      hover:scale-105"
                              sizes="50vw"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery

