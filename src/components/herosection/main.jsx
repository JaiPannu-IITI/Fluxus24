import React from 'react'
import Image from 'next/image'

import Spline from '@splinetool/react-spline/next';





export default function main() {
  return (
   <div 
  //  style={{
  //   backgroundImage: "url('/bg/background.gif')",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center"
  // }}
   className=' w-[100vw] h-[100vh] flex justify-center items-center'>

   
    <div className=' absolute w-[100vw] h-[100vh] top-0 left-0'>
    <Spline
        scene="https://prod.spline.design/DYQgKyYu3rcg9m-c/scene.splinecode" 
      />
    </div>

    <div className=' w-[50vw] h-[100vh] absolute top-0 right-[-10%]'>
    <Spline
        scene="https://prod.spline.design/opiHI8ED2FCuwVXQ/scene.splinecode" 
      />
    </div>
    
    
        <Image src={"/logo/main.png"} width={4000} height={2000} className="w-[1100px] drop-shadow-2xl brightness-200 "></Image>

   </div>
  )
}
