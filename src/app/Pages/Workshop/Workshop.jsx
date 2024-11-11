"use client"

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
            <div className="sticky top-0 h-screen overflow-hidden">
                <div
                    className="absolute left-0 top-[15%] whitespace-nowrap text-[10vw] font-bold leading-none tracking-tighter text-amber-900"
                    style={{ transform: `translate3d(${-scrollPosition * 0.5}px, 0, 0)` }}
                >
                    REGISTER NOW / REGISTER NOW / REGISTER NOW
                </div>
                <div
                    className="absolute left-0 top-[38%] -translate-y-1/2 whitespace-nowrap text-[9.5vw] font-bold leading-none tracking-tighter text-neutral-600"
                    style={{ transform: `translate3d(${-scrollPosition * 0.2}px, -50%, 0)` }}
                >
                    AI-Ml / MARKETING / OUTREACH / WEB DEV /
                </div>
            </div>



            {/* Workshop components */}
            <div ref={contentRef} className="relative z-10 mt-[100vh] space-y-40 bg-black/50 px-8 pb-40 pt-20">
                {data.map((data, index) => (
                    <div key={index} className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-3 gap-8 md:grid-cols-[60%,40%]">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 2 }}
                                className="aspect-video bg-neutral-900">
                                <img
                                    src={data.image}
                                    alt="Project thumbnail"
                                    className="h-full w-full object-cover grayscale"
                                />
                            </motion.div>
                            <motion.div
                              whileInView={{opacity: 1 , x: 0}}
                              initial={{opacity: 0, x:100}}
                              transition={{duration: 1.5}}
                            className="flex flex-col justify-between p-4">
                                <div>
                                    <h2 className="text-5xl font-bold">{data.title}</h2>
                                    <div className="flex items-center gap-4 mt-5">
                                        <p>
                                         {data.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}