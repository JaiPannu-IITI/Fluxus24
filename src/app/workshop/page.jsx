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
                        REGISTER NOW / REGISTER NOW / REGISTER NOW / REGISTER NOW / REGISTER NOW
                    </div>
                    <div
                        className="whitespace-nowrap text-[9.5vw] font-bold leading-none tracking-tighter text-neutral-500 text-center sm:text-left w-full mt-4 sm:mt-8"
                        style={{
                            animation: 'moveText 22s linear infinite reverse ',
                        }}
                    >
                        AI-ML / MARKETING / OUTREACH / WEB DEV
                    </div>
                </div>
            </div>

            {/* Workshop components */}
            <div ref={contentRef} className="relative z-10 space-y-40 bg-black/85 px-8 pb-40 pt-20">
                {data.map((item, index) => (
                    <div key={index} className="mx-auto max-w-6xl">
                        <div className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-8 md:grid-cols-[60%,40%]">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="aspect-video rounded-xl bg-neutral-900 mb-4 sm:mb-0 relative group overflow-hidden"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={`${item.title} thumbnail`}
                                        width={600}
                                        height={400}
                                        className="h-full w-full object-cover rounded-xl shadow-[10px_10px_20px_rgba(255,255,255,0.3),-10px_-10px_20px_rgba(0,0,0,0.2)]"
                                    />
                                </motion.div>
                                <motion.div
                                    className="absolute inset-0 bg-black/70 flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfssOQnFi8M9evBn4SjMey9IGOHOPbuiP8gH4UDKT42a17YeQ/viewform?usp=sf_link"
                                        target="_blank"
                                        rel="noopener noreferrer" 
                                        className="text-white text-2xl font-medium transition-all duration-300 font-sans hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent border p-2 rounded-full backdrop-blur-md"
                                    >
                                        Click Here For Registration
                                    </a>

                                </motion.div>
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className="flex flex-col justify-between p-4"
                            >
                                <div>
                                    <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold">{item.title}</h2>
                                    <div className="flex items-center gap-4 mt-3 sm:mt-5">
                                        <p className="text-sm sm:text-base">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
                {/* QR Code Section */}
                <motion.div
                    className="mx-auto max-w-6xl mt-20 sm:mt-40 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 font-sans">Scan To Register</h2>
                    <div className="flex justify-center">
                        <div className="bg-white p-4 rounded-lg">
                            <QRCodeSVG
                                value="https://docs.google.com/forms/d/e/1FAIpQLSfssOQnFi8M9evBn4SjMey9IGOHOPbuiP8gH4UDKT42a17YeQ/viewform?usp=sf_link"
                                size={200}
                            />
                        </div>
                    </div>
                    <p className="mt-6 text-lg font-sans">Scan The QR Code Above To Access The Registration Form</p>
                </motion.div>
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
