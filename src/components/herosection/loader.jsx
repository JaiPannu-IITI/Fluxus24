import React from 'react'
import { Pixelify_Sans } from 'next/font/google';
const pixelifySans = Pixelify_Sans({
  subsets: ['latin'], // Specify the required subsets
  weight: ['400', '700'], // Specify required font weights
  display: 'swap', // Use 'swap' for better font rendering
});

export default function loader() {
  return (
    <div className={`${pixelifySans.className}  w-[100vw] h-[100vh] flex justify-center items-center`}>
      TELEPORTING TO PIXEL WORLD ...
      </div>
  )
}
