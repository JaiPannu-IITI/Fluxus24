"use client";

import { useEffect, useState } from "react";
import { Pixelify_Sans } from 'next/font/google';

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'], // Specify the required subsets
  weight: ['400', '700'], // Specify required font weights
  display: 'swap', // Use 'swap' for better font rendering
});

export default function GlitchyTitle({ children, fontSize = "text-4xl md:text-6xl lg:text-8xl" }) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <h1
      className={`${fontSize} ${pixelifySans.className} opacity-85 font-bold tracking-tighter ${glitch ? "glitch" : ""} -mt-[8%] p-0 leading-none`}
      data-text={children}
    >
      {children}
      <style jsx>{`
        .glitch {
          position: relative;
          animation: glitch 0.2s linear infinite;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }
        @keyframes glitch {
          2%, 64% { transform: translate(2px,0) skew(0deg); }
          4%, 60% { transform: translate(-2px,0) skew(0deg); }
          62% { transform: translate(0,0) skew(5deg); }
        }
        @keyframes glitch-anim {
          0% { clip: rect(31px, 9999px, 94px, 0); }
          5% { clip: rect(70px, 9999px, 71px, 0); }
          10% { clip: rect(29px, 9999px, 83px, 0); }
          15% { clip: rect(38px, 9999px, 54px, 0); }
          20% { clip: rect(96px, 9999px, 48px, 0); }
          25% { clip: rect(67px, 9999px, 4px, 0); }
          30% { clip: rect(87px, 9999px, 44px, 0); }
          35% { clip: rect(32px, 9999px, 2px, 0); }
          40% { clip: rect(53px, 9999px, 26px, 0); }
          45% { clip: rect(44px, 9999px, 34px, 0); }
          50% { clip: rect(46px, 9999px, 65px, 0); }
          55% { clip: rect(3px, 9999px, 83px, 0); }
          60% { clip: rect(57px, 9999px, 64px, 0); }
          65% { clip: rect(86px, 9999px, 81px, 0); }
          70% { clip: rect(71px, 9999px, 53px, 0); }
          75% { clip: rect(5px, 9999px, 46px, 0); }
          80% { clip: rect(94px, 9999px, 90px, 0); }
          85% { clip: rect(22px, 9999px, 31px, 0); }
          90% { clip: rect(100px, 9999px, 75px, 0); }
          95% { clip: rect(23px, 9999px, 55px, 0); }
          100% { clip: rect(76px, 9999px, 92px, 0); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(21px, 9999px, 46px, 0); }
          5% { clip: rect(96px, 9999px, 93px, 0); }
          10% { clip: rect(100px, 9999px, 33px, 0); }
          15% { clip: rect(33px, 9999px, 8px, 0); }
          20% { clip: rect(70px, 9999px, 75px, 0); }
          25% { clip: rect(45px, 9999px, 52px, 0); }
          30% { clip: rect(51px, 9999px, 77px, 0); }
          35% { clip: rect(69px, 9999px, 86px, 0); }
          40% { clip: rect(42px, 9999px, 48px, 0); }
          45% { clip: rect(11px, 9999px, 35px, 0); }
          50% { clip: rect(40px, 9999px, 27px, 0); }
          55% { clip: rect(99px, 9999px, 16px, 0); }
          60% { clip: rect(85px, 9999px, 57px, 0); }
          65% { clip: rect(62px, 9999px, 54px, 0); }
          70% { clip: rect(41px, 9999px, 60px, 0); }
          75% { clip: rect(65px, 9999px, 79px, 0); }
          80% { clip: rect(45px, 9999px, 81px, 0); }
          85% { clip: rect(30px, 9999px, 7px, 0); }
          90% { clip: rect(98px, 9999px, 69px, 0); }
          95% { clip: rect(24px, 9999px, 84px, 0); }
          100% { clip: rect(67px, 9999px, 35px, 0); }
        }
      `}</style>
    </h1>
  );
}