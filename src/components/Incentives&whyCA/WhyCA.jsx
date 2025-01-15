'use client'

import { motion } from "framer-motion";
import { useRef } from "react";
import { Camera, Film, Clapperboard, Award } from 'lucide-react';
import bgdark from "../../../public/images/bg/bg.jpg";
import Image from "next/image";

export default function WhyCA() {
  // Create refs for each section
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

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
    <>
        <div id="whyCA" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={bgdark || "/placeholder.svg"}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-6xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-300" style={{fontFamily:"var(--font-monument-extended)"}} >
          WHY SHOULD YOU APPLY?
        </h1>

        <div className="space-y-16 mx-8">
          {[
            {
              title: "About Fluxus",
              description:
                "Fluxus, IIT Indore is Central India's Largest Techno-Cultural Festival, and the CA Program is its backbone.",
              gradient: "from-blue-400 to-green-400",
              icon: Camera,
            },
            {
              title: "Our Vision",
              description:
                "We at Fluxus aspire to reach out to college students across the country to bring them closer to Technology and Culture, and provide them with a platform to pursue the same.",
              gradient: "from-yellow-400 to-orange-400",
              icon: Film,
            },
            {
              title: "CA Program",
              description:
                "The CA Program helps us realize this vision. Here, the CAs build a network of students from 1000+ colleges and learn about social media, marketing, event planning and execution.",
              gradient: "from-pink-400 to-purple-400",
              icon: Clapperboard,
            },
            {
              title: "Rewards & Impact",
              description:
                "They are rewarded for fulfilling their responsibilities and motivated to continually strive to improve their personal skills. The role of the CAs is more critical than ever before, and this is an excellent opportunity for us all to work together and make the 11th edition of Fluxus a grand success.",
              gradient: "from-yellow-400 to-orange-400",
              icon: Award,
            },
          ].map((section, index) => (
            <motion.div
              ref={sectionRefs[index]}
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center -gap-5`}
            >
              <motion.div
                className="w-32 h-32 flex-shrink-0 relative rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-neutral-800 hover:scale-110 transition-transform duration-300 group"
                variants={index % 2 === 0 ? leftVariants : rightVariants}
              >
                <section.icon className="w-24 h-24 text-white group-hover:text-neutral-500 transition-colors duration-300" />
              </motion.div>
              <motion.div
                className="md:w-[calc(100%-17rem)]"
                variants={index % 2 === 0 ? rightVariants : leftVariants}
              >
                <div className="bg-zinc-800 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <h2
                    className={`text-2xl font-semibold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r ${section.gradient}`} style={{fontFamily:"var(--font-aileron-bold)"}}
                  >
                    {section.title}
                  </h2>
                  <p className="text-center text-gray-300" style={{fontFamily:"var(--font-aileron-bold)"}} >{section.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
