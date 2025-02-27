"use client"
import React from 'react'
import { motion } from 'framer-motion'

const anim = {
    inital: {
        opacity:0
    },
    open:(i)=>({
        opacity:1,
        transition:{duration:0, delay:0.1*i}
    }),
    closed:(i)=>({
        opacity:0,
        transition:{duration:0, delay:0.1*i}
    })
}

const shuffle = (a)=>{
    var j, x, i;
    for(i=a.length-1; i>0;i--){
        j= Math.floor(Math.random()*(i+1))
        x=a[i]
        a[i]=a[j]
        a[j]=x
    }
    return a
}
const PixelBg = () => {
    const getBlocks = ()=>{
        const {innerWidth, innerHeight} = window
        const blockSize = innerWidth * 0.05
        console.log(blockSize)
        console.log(innerHeight)
        const amountOfBlocks = Math.ceil(innerHeight/blockSize)
        console.log(amountOfBlocks)
        const delays = shuffle([...Array(amountOfBlocks)].map((_,i)=>i))
        return delays.map((randomDelay,i)=>{
            return (
            <motion.div key={i} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0, delay: 0.5*randomDelay}} className='h-[5vw] w-full bg-orange-400' custom={randomDelay}>
            </motion.div>)
        })

    }
  return (
    <div className='flex h-[85vh] overflow-hidden'>
            {
                [...Array(20)].map((_,i)=>{
                    return <div key={i} className='w-[5vw] h-[80vh] m-0'>
                        {
                            getBlocks()
                        }
                    </div>
                })
            }
        </div>
  )
}

export default PixelBg
