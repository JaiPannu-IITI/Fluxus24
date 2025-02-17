"use client"

import { Press_Start_2P } from "next/font/google"
import { Pixelify_Sans } from "next/font/google"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import "./parallax.css"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FaBan, FaCarAlt, FaUserShield, FaUndo, FaBed, FaSearch, FaDoorOpen, FaIdCard } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

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


//animation
const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
})

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
})

const Accomodation = () => {
  const starsRef = useRef(null)
  const [isModalVisible, setModalVisible] = useState(false)
  const [isHovered, setHovered] = useState(false)

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


  const contacts = [
    {
      name: "Abhijeet Parihar",
      designation: "Head of Accommodation",
      phone: "+91 72473 15443",
      image: "/images/team/abhijeet.jpg", // Add correct image path
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      name: "Shreyas Kale",
      designation: "Head of Accommodation",
      phone: "+91 81081 06458",
      image: "/images/team/shreyas.jpg", // Add correct image path
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
      },
    },
  ];
  
  const guidelines = [
    {
      title: "Prohibited Items",
      description: "Strict prohibition of alcohol, drugs, sharp objects, explosives, or any other deemed unsafe items inside the campus.",
      icon: <FaBan />,
    },
    {
      title: "No External Vehicles",
      description: "No external vehicles allowed onto the campus during Fluxus 2025.",
      icon: <FaCarAlt />,
    },
    {
      title: "Guest Conduct",
      description: "Guests must uphold etiquette and cleanliness, adhering to campus rules throughout their stay.",
      icon: <FaUserShield />,
    },
    {
      title: "Return Issued Items",
      description: "All issued items must be returned in satisfactory condition during check-out.",
      icon: <FaUndo />,
    },
    {
      title: "Accommodation",
      description: "Triple occupancy rooms provided with mattress, pillow, blankets, bedsheets & hospitality kit each.",
      icon: <FaBed />,
    },
    {
      title: "Random Checks",
      description: "Random checks will be conducted to prevent unauthorized stays.",
      icon: <FaSearch />,
    },
    {
      title: "Entry Restriction",
      description: "Entry exclusively through 'Gate 1A' of IIT Indore; all other gates will remain closed.",
      icon: <FaDoorOpen />,
    },
    {
      title: "ID Requirement",
      description: "Guests must carry valid government photo IDs at all times.",
      icon: <FaIdCard />,
    },
  ];

  return (
    <div className={`min-h-screen bg-black relative overflow-hidden ${isModalVisible ? "brightness-100" : ""}`}>
      <div ref={starsRef} className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row-reverse items-center justify-between relative z-10">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-10  relative flex justify-center items-center ">
          <motion.div
            whileHover={{ x: [0, -5, 5, -5, 5, 0] }}
            transition={{ duration: 0.6, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
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
                <p className="bg-black text-white font-medium border border-white px-6 py-3 rounded-md shadow-[8px_8px_0px_0px_white] cursor-pointer">
                  View Photos
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* <div className="w-full md:w-2/3 text-center md:text-left space-y-8">
          <div className={pressStart2P.className}>
            <h1 className="text-4xl md:text-6xl text-cyan-400  leading-relaxed mt-7 pt-7">ACCOMMODATION</h1>
            <h2 className="text-2xl md:text-3xl text-white my-7 ">General Guidelines:</h2>
            <ul className="text-sm md:text-base text-gray-300 mb-12 leading-relaxed space-y-4">
              <ul>
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start space-x-5 pb-6">
                    <span className="text-xl text-blue-500">{guideline.icon}</span>
                    <div>
                      <h3 className="font-semibold">{guideline.title}</h3>
                      <p className="tracking-tight">{guideline.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

            </ul>
          </div>
          <div className={pixelifySans.className}>
            <button
              className="bg-black text-white font-medium border border-white px-6 py-3 rounded-md shadow-[8px_8px_0px_0px_white] 
               transition-transform duration-200 hover:scale-105 hover:shadow-[10px_10px_0px_0px_white]"
            >
              Register Now
            </button>
          </div>
        </div> */}
        <div className="w-full md:w-2/3 text-center md:text-left space-y-10 md:space-y-12 px-4 md:px-0 ">
          <div className={pressStart2P.className}>
            <h1 className="text-4xl md:text-6xl text-cyan-400 mb-8 leading-snug mt-7 pt-7">ACCOMMODATION</h1>
            <h2 className="text-2xl md:text-3xl text-white  my-7 ">General Guidelines:</h2>

            <motion.ul
              initial="hidden"
              animate="visible"
              className="text-sm md:text-base text-gray-300 space-y-5 md:space-y-6"
            >
              {guidelines.map((guideline, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={listVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start space-x-4 md:space-x-5"
                >
                  <span className="text-xl md:text-2xl text-blue-500">{guideline.icon}</span>
                  <div>
                    <h3 className="font-semibold">{guideline.title}</h3>
                    <p className="leading-relaxed">{guideline.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

         

          <div className={`${pixelifySans.className} flex justify-center  mb-4`}>
            <button
              className="bg-black text-white font-medium border border-white px-6 py-3 rounded-md 
      shadow-[6px_6px_0px_0px_white] transition-transform duration-200 
      hover:scale-105 hover:shadow-[8px_8px_0px_0px_white]"
            > <a href="https://docs.google.com/forms/d/16mnbZAtuuLbQbHO7e4EvsxsggeRkTFW6rxxShT11PKM/edit">
                Register Now </a>
            </button>
          </div>


         

         
        </div>
        

      </div>

       {/*  Contact Card Section */}
       <div className="container mx-auto px-4 py-8 mb-10 ">
      <h2 className={`${pressStart2P.className} text-2xl md:text-3xl text-white mt-12 mb-6` }>Contact:</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {contacts.map((contact, index) => (
          <div key={index} className="bg-gray-900 w-72 h-64 rounded-lg shadow-lg flex flex-col items-center p-4">
            <Image
              src={contact.image}
              alt={contact.name}
              width={100}
              height={100}
              className="w-24 h-24 rounded-full object-cover border-2 border-white"
            />
            <h3 className="text-xl font-semibold mt-3">{contact.name}</h3>
            <p className="text-sm text-gray-400">{contact.designation}</p>
            <p className="text-md font-medium mt-2">{contact.phone}</p>
            <div className="flex space-x-4 mt-3">
              <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-400 text-xl hover:text-blue-600 transition" />
              </a>
              <a href={contact.social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-400 text-xl hover:text-pink-600 transition" />
              </a>
              <a href={contact.social.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-500 text-xl hover:text-blue-700 transition" />
              </a>
            </div>
          </div>
        ))}
      </div>
      </div> 
      {/* Modal Div */}
      {isModalVisible && (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-60  backdrop-blur-sm z-50 pt-10 mt-10 ">
          <div className="container mx-auto px-4  relative ">
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
                className={`${pixelifySans.className} mt-4 bg-cyan-400  text-white px-4 py-2 rounded hover:bg-cyan-600 `}
                onClick={() => setModalVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Accomodation

