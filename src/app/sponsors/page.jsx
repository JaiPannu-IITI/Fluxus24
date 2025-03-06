"use client";
// import { useState, useEffect } from "react";
import { Press_Start_2P, Pixelify_Sans } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Suspense, useEffect, useState } from "react";
import { Loader2, Coins } from "lucide-react";

// Initialize fonts
const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const pixelify = Pixelify_Sans({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pixelify",
});

const LoadingSpinner = () => (
  <div className="flex h-64 w-full items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
  </div>
);

const ComingSoon = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-opacity-50">
      <p className="text-6xl text-yellow-400 font-bold">Coming Soon{dots}</p>
    </div>
  );
};

// Floating coin animation component
const FloatingCoins = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            top: "100%",
            left: `${Math.random() * 90 + 5}%`,
            rotate: 0,
            scale: Math.random() * 0.5 + 1, // Random sizes between 1x and 1.5x
          }}
          animate={{
            top: "-20%",
            rotate: 360,
            transition: {
              duration: 6 + Math.random() * 6, // Varied speeds
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 1.5,
            },
          }}
        >
          <Image
            src="/sponsors/8bitnewcoin.png"
            alt="8-bit coin"
            width={32}
            height={32}
            className="drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]"
            style={{
              filter: "brightness(1.2)",
              imageRendering: "pixelated",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

const SponsorSection = ({ title, children }) => {
  const childArray = Array.isArray(children) ? children : [children];
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:pr-6 lg:pl-16 lg:pr-8" // Increased left padding
    >
      <div className="inline-block mb-12">
        <h2
          className={`
            relative px-6 py-3 text-3xl text-gray-900
            ${pressStart.className} tracking-wider
            before:absolute before:inset-0 before:bg-amber-400
            before:skew-x-[-6deg] before:z-[-1]
            before:rounded-lg before:shadow-lg
          `}
        >
          {title}
        </h2>
      </div>
      <div
        className={`grid gap-8 ${
          childArray.length <= 2
            ? "grid-cols-1 sm:grid-cols-2 max-w-3xl"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
};

const SponsorCard = ({ name, logo, width = 200 }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className={`
      relative flex flex-col items-center justify-center 
      rounded-xl bg-white/10 shadow-lg p-6 
      backdrop-blur-md transition-all
      before:absolute before:inset-0 before:-z-10 
      before:rounded-xl before:bg-gradient-to-r 
      before:from-amber-400/20 before:via-white/20 
      before:to-amber-400/20 before:animate-shimmer
      border border-white/10
      ${pixelify.className}
    `}
  >
    <div className="relative h-32 w-full">
      <Image
        src={logo || "/placeholder.svg"}
        alt={`${name} logo`}
        fill
        className="object-contain"
        priority
      />
    </div>
    <p className="mt-4 text-lg font-semibold text-amber-100">{name}</p>
  </motion.div>
);

export default function Sponsors() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const coins = document.querySelectorAll(".floating-coin");
      coins.forEach((coin) => {
        const speed = Number.parseFloat(coin.dataset.speed || "1");
        coin.style.transform = `translateY(${scrollY * speed * -0.2}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`min-h-screen relative overflow-hidden ${pixelify.className}`}
      style={{
        backgroundImage: "url('/sponsors/bridgebg.jpg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-transparent to-transparent" />

      {/* Floating Coins */}
      <FloatingCoins />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={`static-coin-${i}`}
            className="floating-coin absolute"
            data-speed={Math.random() * 0.5 + 0.5}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Coins
              className="w-16 h-16 text-amber-400/40 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]"
              style={{
                filter: "brightness(1.2)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-24 max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:pr-6 lg:pl-16 lg:pr-8"
        >
          <div className="inline-block">
            <h1
              className={`
                relative px-8 py-4 text-4xl sm:text-5xl md:text-6xl text-gray-900
                ${pressStart.className} tracking-wider leading-relaxed
                before:absolute before:inset-0 before:bg-amber-400
                before:skew-x-[-6deg] before:z-[-1]
                before:rounded-lg before:shadow-lg
              `}
            >
              Sponsors
            </h1>
          </div>
          <div className="mt-6 text-left pl-2">
            <p className="text-lg sm:text-xl text-black">
              Join us in celebrating our amazing sponsors
              <ComingSoon></ComingSoon>
            </p>
          </div>
        </motion.div>

        <div className="mx-auto">
          <Suspense fallback={<LoadingSpinner />}>
            {/* <SponsorSection title="Title Sponsors">
              {Array.from({ length: 2 }).map((_, i) => (
                <SponsorCard key={i} name={`Title Sponsor ${i + 1}`} logo="/sponsors/cocacola.png" />
              ))}
            </SponsorSection>

            <SponsorSection title="Gold Sponsors">
              {Array.from({ length: 5 }).map((_, i) => (
                <SponsorCard key={i} name={`Gold Sponsor ${i + 1}`} logo="/sponsors/cocacola.png" />
              ))}
            </SponsorSection>

            <SponsorSection title="Silver Sponsors">
              {Array.from({ length: 5 }).map((_, i) => (
                <SponsorCard key={i} name={`Silver Sponsor ${i + 1}`} logo="/sponsors/cocacola.png" />
              ))}
            </SponsorSection> */}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
