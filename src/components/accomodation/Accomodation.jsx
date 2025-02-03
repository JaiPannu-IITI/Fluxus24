"use client"; 

import { Press_Start_2P } from "next/font/google";
import { Pixelify_Sans } from 'next/font/google';
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./parallax.css"
import Link from "next/link"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'], // Specify the required subsets
  weight: ['700', '700'], // Specify required font weights
  display: 'swap', // Use 'swap' for better font rendering
});

const Accomodation = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (starsRef.current) {
        const scrollValue = window.scrollY;
        starsRef.current.style.transform = `translateY(${scrollValue * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div ref={starsRef} className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row-reverse items-center justify-between relative z-10">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-10  relative flex justify-center items-center">
          <Image
            src="/images/Accomodation/ArcadeMachine1.png"
            alt="Retro Arcade Cabinet"
            width={500}
            height={1000}
            className="w-full h-auto max-h-[1000px] object-contain"
          />
          <Link href="/photos" className="absolute  cursor-pointer bg-gray-500 rounded-2xl"
              style={{ top: '170px', left: '125px', width: '255px', height: '200px' }}
          >
            <svg
              viewBox="0 0 500 300"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <defs>
                <radialGradient id="stars" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="rgba(0,255,255,0.3)" />
                  <stop offset="100%" stopColor="rgba(0,255,255,0)" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#stars)" />
              <circle cx="50" cy="50" r="2" fill="white" />
              <circle cx="150" cy="100" r="3" fill="white" />
              <circle cx="400" cy="50" r="2" fill="white" />
              <circle cx="450" cy="150" r="2.5" fill="white" />
              <circle cx="250" cy="200" r="3.5" fill="white" />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="24"
                className={pressStart2P.className}
              >
                Click to Explore
              </text>
            </svg>
          </Link>
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left space-y-8">
          <div className={pressStart2P.className}>
            <h1 className="text-4xl md:text-6xl text-cyan-400 mb-6 leading-relaxed">
              ACCOMMODATION
              <br />
            </h1>
            <p className="text-sm md:text-base text-gray-300 mb-12 leading-relaxed">
              Discover comfortable and modern living spaces at IIT Indore. Our accommodation facilities provide the
              perfect environment for students to thrive in their academic journey.
            </p>
          </div>

          <div className={pixelifySans.className}>
            <button className="bg-black text-white font-medium border border-white px-6 py-3 rounded-md shadow-[8px_8px_0px_0px_white] 
               transition-transform duration-200 hover:scale-105 hover:shadow-[10px_10px_0px_0px_white]">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accomodation;
