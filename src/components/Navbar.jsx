"use client";
import Link from "next/link"
import {motion} from "framer-motion"

export default function Navbar() {


  return (

    <motion.div 
    initial={{top:-100}}
    animate={{top:0}}
    transition={{duration:2, delay: 3}}
    className=" absolute flex items-center z-50 w-full h-[5rem] bg-[rgb(20,20,20)]"
    >
  

    <div className=" absolute left-0 h-full w-[200px] bg-gradient-to-r from-[rgb(0,0,0)] to-[rgb(20,20,20)]">

    </div>
    


    <div className=" w-full flex items-center justify-center gap-5">
    <Link href="/">
      <img src="/logo/fluxus.png" alt="Fluxus 24" className=" h-[3rem] brightness-0 invert"/>
      </Link>
    </div>







    <div className=" absolute right-0 h-full w-[200px] bg-gradient-to-l from-[rgb(0,0,0)] to-[rgb(20,20,20)]">

    </div>


    </motion.div>
  )
}
