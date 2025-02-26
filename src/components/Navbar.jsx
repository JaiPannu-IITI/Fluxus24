"use client";
import React, { useState } from "react";
import Link from "next/link"
import {motion} from "framer-motion"
import Image from "next/image"
import { Pixelify_Sans } from 'next/font/google';
import PixelButton from "./button";
import { Modal, ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { Carousel, Card } from "@/components/ui/map-carousel";

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'], // Specify the required subsets
  weight: ['400', '700'], // Specify required font weights
  display: 'swap', // Use 'swap' for better font rendering
});

export default function Navbar() {

  const [view, setView] = useState("OPTIONS");

  function changeView(){
    // if(view === "MAP"){
    //   setView("OPTIONS")
    // }else{
    //   setView("MAP")
    // }

  }
   
  const data = [
    {
      category: "Welcome to Fluxus",
      title: "HOME",
      src: "/island/sunny.jpg",
      href: "/",

      
    },
    {
      category: "Collecting Warriors",
      title: "COMPETITION",
      src: "/island/night.jpg",
      href: "/competition",
      
    },
    {
      category: "Explore our campus",
      title: "ACCOMODATION",
      src: "/island/space.png",
      href: "/accomodation",
      
    },
   
    {
      category: "Making your experience memorable",
      title: "TEAM",
      src: "/island/ice.jpg",
      href: "/",
      
    },
    {
      category: "you know them right?",
      title: "SPONSORS",
      src: "/island/money.jpg",
      href: "/",
      
    },
    {
      category: "Be a part of fluxus 2025",
      title: "GALLERY",
      src: "/island/fire.jpg",
      href: "/gallery",
      
    },
    {
      category: "Happy to help",
      title: "CONTACT US",
      src: "/island/desert.jpg",
      href: "/",
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));



  return (

    <motion.div 
    initial={{top:-100}}
    animate={{top:0}}
    transition={{duration:2, delay: 0}}
    className=" fixed top-0 flex items-center z-50 w-full h-[5rem] "
    >
  
    <div className={`${pixelifySans.className} flex flex-row justify-end px-10 w-full`}>
      
    {/* <PixelButton>FLUXUS</PixelButton>
      <PixelButton>HOME</PixelButton> */}

<Modal>
          <ModalTrigger>
          <PixelButton>MENU</PixelButton>
          </ModalTrigger>
          <ModalBody className={`${view === "MAP" ? "bg-cyan-600/80 min-w-[60vw]" : " min-w-[100vw]"}`}>
          {view === "MAP" ?
         <ModalContent>    
         <div className="flex justify-center items-center">
           <Image src={"/map/map.jpg"} width={1000} height={500} alt="logo" className="w-[100%]" />
         </div>
       </ModalContent>

       :
       <ModalContent>
                   <div className="flex justify-center items-center">
                   <Carousel items={cards} />
                   </div>
         </ModalContent>
         
       }
        {/* <ModalFooter className={`gap-4 ${view === "MAP" ? "bg-cyan-600" : "bg-zinc-900"}`}>
        <div onClick={changeView}>Change View</div>
       </ModalFooter> */}
      </ModalBody>
      
     
     
   </Modal>
      
       
          
                  

      
    </div>

    

    </motion.div>
  )
}
