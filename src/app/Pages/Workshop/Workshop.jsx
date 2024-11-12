'use client'

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { data } from "./dummydata"

export default function Workshop() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const contentRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="relative bg-[#f4f1ea] text-white">
            <div className="sticky top-0 h-screen overflow-hidden ">
                <div
                    className="absolute left-0 top-[15%] whitespace-nowrap text-[10vw] font-bold leading-none tracking-tighter text-black transform sm:translate-x-0"
                    style={{ transform: `translate3d(${-scrollPosition * 0.5}px, 0, 0)` }}
                >
                    REGISTER NOW / REGISTER NOW / REGISTER NOW
                </div>
                <div
                    className="absolute left-0 top-[45%] -translate-y-1/2 whitespace-nowrap text-[9.5vw] font-bold leading-none tracking-tighter text-neutral-500 transform sm:translate-x-0 sm:-translate-y-1/2 "
                    style={{ transform: `translate3d(${-scrollPosition * 0.2}px, -50%, 0)` }}
                >
                    AI-ML / MARKETING / OUTREACH / WEB DEV /
                </div>
            </div>

            {/* Workshop components */}
            <div ref={contentRef} className="relative z-10 mt-[100vh] space-y-40 bg-black/80 px-8 pb-40 pt-20">
                {data.map((item, index) => (
                    <div key={index} className="mx-auto max-w-6xl">
                        <div key={index} className="mx-auto max-w-6xl">
                        <div className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-8 md:grid-cols-[60%,40%]">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 2 }}
                                className="aspect-video bg-neutral-900"
                            >
                                <img
                                    src={item.image}
                                    alt={`${item.title} thumbnail`}
                                    className="h-full w-full object-cover grayscale"
                                />
                            </motion.div>
                            <motion.div
                                whileInView={{opacity: 1 , x: 0}}
                                initial={{opacity: 0, x:100}}
                                transition={{duration: 1.5}}
                                className="flex flex-col justify-between p-4"
                            >
                                <div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{item.title}</h2>
                                    <div className="flex items-center gap-4 mt-3 sm:mt-5">
                                        <p className="text-sm sm:text-base">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}