'use client'

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { data } from "./data"
import { QRCodeSVG } from 'qrcode.react'
import Image from 'next/image'

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
        <div className="relative bg-neutral-200 text-white overflow-hidden">
            <div className="sticky top-0 h-screen overflow-hidden max-h-[30vh] sm:max-h-[50vh]">
                <div className="flex flex-col h-full justify-center items-center sm:items-start overflow-hidden">
                    <div
                        className="whitespace-nowrap text-[10vw] font-bold leading-none tracking-tighter text-black text-center sm:text-left w-full"
                        style={{
                            animation: 'moveText 18s linear infinite',
                        }}
                    >
                        WHY CA / WHY CA / WHY CA / WHY CA / WHY CA / WHY CA
                    </div>
                </div>
            </div>

            {/* Workshop components */}
            <div ref={contentRef} className="relative z-10 space-y-20 sm:space-y-40 bg-black/85 px-4 sm:px-8 pb-20 sm:pb-40 pt-10 sm:pt-20">
                {data.map((item, index) => (
                    <div key={index} className="mx-auto max-w-6xl -mt-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8">
                            {/* Image container */}
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -50 }}
                                transition={{ duration: 1 }}
                                className="w-full sm:w-1/3 aspect-video rounded-xl bg-neutral-900 mb-2 sm:mb-0 relative group overflow-hidden"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={item.image}
                                        alt="Workshop thumbnail"
                                        width={400}
                                        height={300}
                                        className="h-full w-full object-cover rounded-xl shadow-[10px_10px_20px_rgba(255,255,255,0.3),-10px_-10px_20px_rgba(0,0,0,0.2)]"
                                    />
                                </motion.div>
                               
                            </motion.div>

                            {/* Text container */}
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 50 }}
                                transition={{ duration: 1 }}
                                className="flex-1 flex flex-col justify-center"
                            >
                                <div className="mt-2 sm:mt-0">
                                    <p className="text-sm sm:text-base md:text-lg">{item.description}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}

                
            </div>

            <style jsx>{`
                @keyframes moveText {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </div>
    )
}

