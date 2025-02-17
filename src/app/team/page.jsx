"use client";
import React from 'react'
import Image from 'next/image'
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'

const page = () => {
  return (
    <div className='w-screen h-screen absolute' style={{
        backgroundImage: 'url(/bg/snow.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom'
      }}>
        <Snowfall/>
        <div className="text-center mb-10">
            <h2 className="comp-title pt-4 font-extrabold text-4xl md:text-5xl lg:text-6xl silkscreen-bold">{"Team"} </h2>
          </div>
    </div>
  )
}

export default page