"use client";
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

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'], // Specify the required subsets
  weight: ['400', '700'], // Specify required font weights
  display: 'swap', // Use 'swap' for better font rendering
});

export default function Navbar() {


  return (

    <motion.div 
    initial={{top:-100}}
    animate={{top:0}}
    transition={{duration:2, delay: 0}}
    className=" fixed top-0 flex items-center z-50 w-full h-[5rem] "
    >
  
    <div className={`${pixelifySans.className} flex flex-row justify-center px-10 w-full`}>
      
    {/* <PixelButton>FLUXUS</PixelButton>
      <PixelButton>HOME</PixelButton> */}
      <Modal>
        <ModalTrigger>
        <PixelButton>MENU</PixelButton>
        </ModalTrigger>
        <ModalBody>
                  <ModalContent>
                    <h4
                      className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                      PIXEL VERSE
                    </h4>
                    <div className="flex justify-center items-center">
                      
                    </div>
                   
                  </ModalContent>
                  <ModalFooter className="gap-4">
                    Switch between worlds
                  </ModalFooter>
                </ModalBody>
              </Modal>

      
    </div>

    

    </motion.div>
  )
}
