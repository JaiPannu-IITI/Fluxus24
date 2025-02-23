"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlitchyTitle from "./title";

export default function Landing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const tilt = useTransform(scrollYProgress, [0, 1], ["-10deg", "10deg"]);

  return (
    <div className="relative flex items-center justify-between min-h-screen bg-black text-white overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-[url('/stars.png')] bg-cover opacity-50"></div>

      {/* Glitchy Title */}
      <div className="ml-8 flex flex-col gap-0">
        <GlitchyTitle fontSize="text-[300px]">2025</GlitchyTitle>
        <GlitchyTitle fontSize="text-[350px]">FLUXUS</GlitchyTitle>
      </div>

      {/* Books Section */}
      <div ref={ref} className="relative flex flex-col items-end gap-4 mr-16">
        {["Book 1", "Book 2", "Book 3"].map((title, i) => (
          <motion.div
            key={i}
            className="w-24 h-64 border border-white flex items-center justify-center bg-black text-white text-sm font-bold"
            style={{ rotateY: tilt }}
          >
            {title}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
