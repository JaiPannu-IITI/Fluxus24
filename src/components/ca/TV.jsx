"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import bglight from "/public/images/bg/bglight.png";

export default function InteractiveTV() {
  const [isOn, setIsOn] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {/* Background Image */}
      <Image
        src={bglight}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />


      {/* Overlay Divisions */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-around text-center lg:text-left px-4 lg:px-8 py-8">
        {/* Left Section */}
        <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-md">
          <h1 className="text-2xl font-bold text-gray-800">
            {"Glimpse from previous year's CA program"}
          </h1>
          <p className="text-gray-700 mt-4">
           {" Explore highlights, achievements, and unforgettable moments that made the program a grand success!"}
          </p>
        </div>

      {/* Main Container */}
      <div className="relative z-10 flex w-full max-w-7xl items-center justify-between px-4 lg:px-8 py-8">
        {/* Left Section - FLUXUS 2025 */}
        <h1 className="text-center text-6xl font-bold mb-16 bg-clip-text text-transparent bg-neutral-600" style={{fontFamily:"var(--font-monument-extended)"}} >
          FLUXUS 2025
        </h1>


        {/* Right Section - TV Container */}
        <div className="w-1/2 flex justify-center">
          <div className="relative">
            {/* TV Antennas */}
            <div className="absolute -top-16 left-1/4 w-1 h-20 bg-gray-700 transform -rotate-15"></div>
            <div className="absolute -top-16 right-1/4 w-1 h-20 bg-gray-700 transform rotate-15"></div>

            {/* TV Body */}
            <div className="w-[500px] h-[350px] bg-gray-900 rounded-lg shadow-xl overflow-hidden relative border-8 border-gray-800">
              {/* Power Button (Top Right) */}
              <button
                onClick={() => setIsOn(!isOn)}
                className={`absolute z-10 top-2 right-2 w-8 h-8 rounded-full focus:outline-none transition-colors duration-200 ${
                  isOn ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                }`}
                aria-label={isOn ? "Turn Off" : "Turn On"}
              >
                <span className="text-white text-xs font-bold">⏻</span>
              </button>

              {/* Mute Button (Top Left) */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                disabled={!isOn}
                className={`absolute z-10 top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center focus:outline-none transition-colors duration-200 ${
                  isOn
                    ? isMuted
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-400"
                }`}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
              </button>

              {/* TV Screen */}
              <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                {isOn ? (
                  <video
                    ref={videoRef}
                    src="/video.mp4"
                    className="w-full h-full object-cover transition-opacity duration-500"
                    autoPlay
                    loop
                    muted={isMuted}
                    controls={false}
                  />
                ) : (
                  // Off screen noise effect
                  <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <div className="loading-text">BUFFERING...</div>
                    <div className="scanlines absolute inset-0 pointer-events-none"></div>
                    <div className="screen-glow absolute inset-0 pointer-events-none"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Noise Buffering Styles */}
      <style jsx>{`
        .loading-text {
          color: #fff;
          font-family: monospace;
          font-size: 2rem;
          position: relative;
          animation: glitch 1s infinite;
        }

        .loading-text::before,
        .loading-text::after {
          content: 'BUFFERING...';
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: #000;
        }

        .loading-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff0000;
          animation: glitch-1 2s infinite linear;
        }

        .loading-text::after {
          left: -2px;
          text-shadow: 2px 0 #00ff00;
          animation: glitch-2 3s infinite linear;
        }

        .scanlines {
          background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 51%);
          background-size: 100% 4px;
          animation: scanline 10s linear infinite;
        }

        .screen-glow {
          box-shadow: 0 0 50px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05);
          background: repeating-radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 0.5%);
          opacity: 0.3;
          mix-blend-mode: overlay;
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-1 {
          0% { clip-path: inset(20% 0 30% 0); }
          20% { clip-path: inset(40% 0 10% 0); }
          40% { clip-path: inset(10% 0 60% 0); }
          60% { clip-path: inset(50% 0 20% 0); }
          80% { clip-path: inset(30% 0 40% 0); }
          100% { clip-path: inset(20% 0 30% 0); }
        }

        @keyframes glitch-2 {
          0% { clip-path: inset(30% 0 20% 0); }
          20% { clip-path: inset(10% 0 40% 0); }
          40% { clip-path: inset(60% 0 10% 0); }
          60% { clip-path: inset(20% 0 50% 0); }
          80% { clip-path: inset(40% 0 30% 0); }
          100% { clip-path: inset(30% 0 20% 0); }
        }

        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
      `}</style>
    </div>
  );
}
