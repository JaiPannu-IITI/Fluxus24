"use client";

import { Press_Start_2P } from "next/font/google";
import { Pixelify_Sans } from 'next/font/google';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./parallax.css"
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"


// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"

//swiper 
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation } from "swiper"

//images
const photos = [
  "/images/Accomodation/1.jpg",
  "/images/Accomodation/2.jpg",
  "/images/Accomodation/3.jpg",
  "/images/Accomodation/4.jpg",
]

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
});

const Accomodation = () => {
  const starsRef = useRef(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isHovered , setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (starsRef.current) {
        const scrollValue = window.scrollY;
        starsRef.current.style.transform = `translateY(${scrollValue * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-black relative overflow-hidden ${isModalVisible ? "brightness-100" : ""}`}>
      <div ref={starsRef} className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row-reverse items-center justify-between relative z-10">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-10  relative flex justify-center items-center">
          <motion.div
            whileHover={{ x: [0, -5, 5, -5, 5, 0] }}
            transition={{ duration: 0.6, ease: "easeInOut", repeat: Infinity }}
            onClick={() => setModalVisible(true)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative"
          >
            <Image
              src="/images/Accomodation/ArcadeMachine1.png"
              alt="Retro Arcade Cabinet"
              width={500}
              height={1000}
              className="w-full h-auto max-h-[1000px] object-contain cursor-pointer"
            />
            {isHovered && (
               <div className="absolute inset-0 bg-black bg-opacity-40  backdrop-blur-sm flex items-center justify-center">
                  <p className="bg-black text-white font-medium border border-white px-6 py-3 rounded-md shadow-[8px_8px_0px_0px_white] cursor-pointer">View Photos</p>
                </div>
              )  
            }
          </motion.div>
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left space-y-8">
          <div className={pressStart2P.className}>
            <h1 className="text-4xl md:text-6xl text-cyan-400 mb-6 leading-relaxed">ACCOMMODATION</h1>
            <p className="text-sm md:text-base text-gray-300 mb-12 leading-relaxed">
              Discover comfortable and modern living spaces at IIT Indore. Our accommodation facilities provide the
              perfect environment for students to thrive in their academic journey.
            </p>
          </div>
          <div className={pixelifySans.className}>
            <button className="bg-black text-white font-medium border border-white px-6 py-3 rounded-md shadow-[8px_8px_0px_0px_white] 
               transition-transform duration-200 hover:scale-105 hover:shadow-[10px_10px_0px_0px_white]">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal Div */}
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60  backdrop-blur-sm z-50">
          <div className="container mx-auto px-4 py-5 relative ">
            <h1 className={`${pressStart2P.className} text-4xl md:text-6xl z-100 text-cyan-400 mb-12 text-center`}>
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
            <div className="flex items-center justify-center mt-2">
            <button
              className={`${pixelifySans.className} mt-4 bg-cyan-400  text-white px-4 py-2 rounded hover:bg-cyan-600 ` }
              onClick={() => setModalVisible(false)}
            >
              Close
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accomodation;


