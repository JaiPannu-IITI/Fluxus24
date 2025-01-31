"use client"
import { ButtonHTMLAttributes } from "react"
import React from "react" // Import React
import { Pixelify_Sans } from 'next/font/google';

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'], // Specify the required subsets
  weight: ['400', '700'], // Specify required font weights
  display: 'swap', // Use 'swap' for better font rendering
});

export default function PixelButton({ children = "PLAY", ...props }) {
  return (
    <button
      className={`${pixelifySans.className} relative px-8 py-2 font-mono text-xl uppercase bg-[#4ADE80] text-black border-none 
                cursor-pointer transition-transform hover:translate-y-[2px] active:translate-y-[4px]
                [image-rendering:pixelated]
                before:absolute before:inset-0 before:border-[3px] before:border-black
                after:absolute after:inset-0 after:border-[3px] after:border-black after:translate-y-[3px]
                [box-shadow:0_0_0_3px_#000000,0_4px_0_3px_#000000,2px_2px_0_3px_#000000,-2px_-2px_0_3px_#000000]
                hover:[box-shadow:0_0_0_3px_#000000,0_2px_0_3px_#000000,2px_2px_0_3px_#000000,-2px_-2px_0_3px_#000000]
                active:[box-shadow:0_0_0_3px_#000000,0_0_0_3px_#000000,2px_2px_0_3px_#000000,-2px_-2px_0_3px_#000000] `}
      {...props}
    >
      {children}
    </button>
  )
}

