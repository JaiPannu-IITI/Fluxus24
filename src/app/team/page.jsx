"use client";
import React from 'react'
import Image from 'next/image'
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'
import Team from '@/components/ui/Team';

const page = () => {


  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10">
        <Snowfall />
      </div>
      <Team />
    </>
  )
}

export default page