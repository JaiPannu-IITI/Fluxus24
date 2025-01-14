'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from 'next/image'


export default function WhyCA() {
    const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
    const sectionInView = sectionRefs.map(ref => useInView(ref, { once: true, amount: 0.5 }))

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const leftVariants = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    }

    const rightVariants = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    }

    return (
        <div className=" relative max-w-full mx-auto py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
            <motion.h1
                className="text-center text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse"
                initial="hidden"
                animate="visible"
                variants={leftVariants}
            >
                WHY SHOULD YOU APPLY?
            </motion.h1>

            <div className="space-y-16">

                {/* 1st sec */}
                <motion.div
                    ref={sectionRefs[0]}
                    initial="hidden"
                    animate={sectionInView[0] ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <motion.div
                        className="w-full md:w-64 h-64 relative rounded-lg overflow-hidden shadow-lg"
                        variants={leftVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="/placeholder.svg?height=256&width=256"
                            alt="Internship illustration"
                            layout="fill"
                            objectFit="cover"
                        />
                    </motion.div>
                    <motion.div
                        className="md:w-[calc(100%-17rem)]"
                        variants={rightVariants}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                                About Fluxus
                            </h2>
                            <p className="text-center text-gray-300">
                                Fluxus, IIT Indore is Central India’s Largest Techno-Cultural Festival, and the CA
                                Program is its backbone.              </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 2nd sec */}
                <motion.div
                    ref={sectionRefs[1]}
                    initial="hidden"
                    animate={sectionInView[1] ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="flex flex-col md:flex-row-reverse items-center justify-between gap-4"
                >
                    <motion.div
                        className="w-full md:w-64 h-64 relative rounded-lg overflow-hidden shadow-lg"
                        variants={rightVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="/placeholder.svg?height=256&width=256"
                            alt="Skills illustration"
                            layout="fill"
                            objectFit="cover" />
                    </motion.div>
                    <motion.div
                        className="md:w-[calc(100%-17rem)]"
                        variants={leftVariants}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
                                Our Vision              </h2>
                            <p className="text-center text-gray-300">
                                We at Fluxus aspire to reach out to college students across the country to bring them
                                closer to Technology and Culture, and provide them with a platform to pursue the same.              </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 3rd sec */}
                <motion.div
                    ref={sectionRefs[2]}
                    initial="hidden"
                    animate={sectionInView[2] ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <motion.div
                        className="w-full md:w-64 h-64 relative rounded-lg overflow-hidden shadow-lg"
                        variants={leftVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="/placeholder.svg?height=256&width=256"
                            alt="Certificate illustration"
                            layout="fill"
                            objectFit="cover" />
                    </motion.div>
                    <motion.div
                        className="md:w-[calc(100%-17rem)]"
                        variants={rightVariants}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                                CA Program              </h2>
                            <p className="text-center text-gray-300">
                                The CA Program helps us realize this vision. Here, the CAs build a network of students
                                from 1000+ colleges and learn about social media, marketing, event planning and
                                execution              </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/*4rth sec */}
                <motion.div
                    ref={sectionRefs[3]}
                    initial="hidden"
                    animate={sectionInView[3] ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="flex flex-col md:flex-row-reverse items-center justify-between gap-4"
                >
                    <motion.div
                        className="w-full md:w-64 h-64 relative rounded-lg overflow-hidden shadow-lg"
                        variants={rightVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="/placeholder.svg?height=256&width=256"
                            alt="Skills illustration"
                            layout="fill"
                            objectFit="cover" />
                    </motion.div>
                    <motion.div
                        className="md:w-[calc(100%-17rem)]"
                        variants={leftVariants}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
                                Rewards & Impact              </h2>
                            <p className="text-center text-gray-300">
                                They are rewarded for fulfilling their responsibilities and motivated to continually strive to
                                improve their personal skills. The role of the CAs is more critical than ever before, and
                                this is an excellent opportunity for us all to work together and make the 11th edition of
                                Fluxus a grand success              </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

