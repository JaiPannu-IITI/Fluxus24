'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function WhyCA() {
  // Create refs and in-view states for each section
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
//   const sectionInView = sectionRefs.map((ref) =>
//     useInView(ref, { once: true, amount: 0.5 })
//   );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const leftVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div id="whyCA" className="relative max-w-full mx-auto py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <motion.h1
        className="text-center text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse"
        initial="hidden"
        animate="visible"
        variants={leftVariants}
      >
        WHY SHOULD YOU APPLY?
      </motion.h1>

      <div className="space-y-16">
        {[
          {
            title: "About Fluxus",
            description:
              "Fluxus, IIT Indore is Central India’s Largest Techno-Cultural Festival, and the CA Program is its backbone.",
            gradient: "from-blue-400 to-green-400",
            imgAlt: "Internship illustration",
          },
          {
            title: "Our Vision",
            description:
              "We at Fluxus aspire to reach out to college students across the country to bring them closer to Technology and Culture, and provide them with a platform to pursue the same.",
            gradient: "from-yellow-400 to-orange-400",
            imgAlt: "Skills illustration",
          },
          {
            title: "CA Program",
            description:
              "The CA Program helps us realize this vision. Here, the CAs build a network of students from 1000+ colleges and learn about social media, marketing, event planning and execution.",
            gradient: "from-pink-400 to-purple-400",
            imgAlt: "Certificate illustration",
          },
          {
            title: "Rewards & Impact",
            description:
              "They are rewarded for fulfilling their responsibilities and motivated to continually strive to improve their personal skills. The role of the CAs is more critical than ever before, and this is an excellent opportunity for us all to work together and make the 11th edition of Fluxus a grand success.",
            gradient: "from-yellow-400 to-orange-400",
            imgAlt: "Rewards illustration",
          },
        ].map((section, index) => (
          <motion.div
            ref={sectionRefs[index]}
            key={index}
            initial="hidden"
            // animate={sectionInView[index] ? "visible" : "hidden"}
            variants={containerVariants}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center justify-between gap-4`}
          >
            <motion.div
              className="w-full md:w-64 h-64 relative rounded-lg overflow-hidden shadow-lg"
              variants={index % 2 === 0 ? leftVariants : rightVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255,255,255,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt={section.imgAlt}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <motion.div
              className="md:w-[calc(100%-17rem)]"
              variants={index % 2 === 0 ? rightVariants : leftVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(255,255,255,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h2
                  className={`text-2xl font-semibold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r ${section.gradient}`}
                >
                  {section.title}
                </h2>
                <p className="text-center text-gray-300">{section.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
