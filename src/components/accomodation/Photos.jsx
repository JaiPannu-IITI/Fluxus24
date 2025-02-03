"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation } from "swiper"
import { Press_Start_2P } from "next/font/google"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./parallax.css"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
})

const photos = [
  "/images/Accomodation/1.jpg",
  "/images/Accomodation/2.jpg",
  "/images/Accomodation/3.jpg",
  "/images/Accomodation/4.jpg",
  
]

export default function PhotoGallery() {
  const starsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (starsRef.current) {
        const scrollValue = window.scrollY
        starsRef.current.style.transform = `translateY(${scrollValue * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Parallax Stars Background */}
      <div ref={starsRef} className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className={`${pressStart2P.className} text-4xl md:text-6xl text-cyan-400 mb-12 text-center`}>
          PHOTO GALLERY
        </h1>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="pixelated-box w-full bg-black border border-white rounded-md shadow-[8px_8px_0px_0px_white] 
                           p-4"
          >
            <Swiper
              modules={[Autoplay, EffectFade, Navigation]}
              spaceBetween={30}
              effect={"fade"}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              className="w-full"
            >
              {photos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={photo || "/placeholder.svg"}
                      alt={`Gallery photo ${index + 1}`}
                      fill
                      className="object-cover pixelated"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="swiper-button-prev absolute left-[-60px] top-1/2 transform -translate-y-1/2">
            <ChevronLeft className="w-12 h-12 text-white" />
          </div>
          <div className="swiper-button-next absolute right-[-60px] top-1/2 transform -translate-y-1/2">
            <ChevronRight className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

