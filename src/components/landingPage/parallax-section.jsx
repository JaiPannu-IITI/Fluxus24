"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import PixelBorder from "./pixel-border";

const scheduleData = [
  { title: "Morning Schedule", description: "Team standup and planning session", time: "9:00 AM - 10:30 AM" },
  { title: "Development Block", description: "Focused coding time with minimal interruptions", time: "10:30 AM - 12:30 PM" },
  { title: "Lunch Break", description: "Team lunch and casual discussions", time: "12:30 PM - 1:30 PM" },
  { title: "Afternoon Session", description: "Project work and collaboration time", time: "1:30 PM - 5:00 PM" },
];

export default function ParallaxSection() {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback((e) => {
    e.preventDefault(); // Prevent default vertical scroll behavior
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY * 3; // Adjust multiplier for speed
      setScrollPosition(containerRef.current.scrollLeft);
    }
  }, []);
  

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
      return () => container.removeEventListener("wheel", handleScroll);
    }
  }, [handleScroll]);

  return (
    <div className="h-screen w-full overflow-hidden bg-[#FFE4D6]">
      <div ref={containerRef} className="h-full w-full overflow-x-auto overflow-y-hidden whitespace-nowrap" style={{ scrollBehavior: "smooth" }}>
        <div className="relative inline-flex h-full min-w-[400%] items-center">
          
          {/* Parallax Background */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=400')] bg-repeat-x opacity-20" 
               style={{ transform: `translateX(${-scrollPosition * 0.1}px)` }} 
          />

          {/* Content Cards */}
          <div className="relative flex w-full justify-around px-24">
            {scheduleData.map((item, index) => (
              <PixelBorder key={index} className="min-w-[300px] max-w-[400px]">
                <Card className="bg-white/90 p-6 backdrop-blur">
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="mb-4 text-gray-600">{item.description}</p>
                  <p className="text-sm font-medium text-primary">{item.time}</p>
                </Card>
              </PixelBorder>
            ))}
          </div>

          {/* Pixel Character */}
          <div className="absolute bottom-24 left-12 h-16 w-16 bg-[url('/placeholder.svg?height=64&width=64')] bg-contain bg-center bg-no-repeat"
               style={{ transform: `translateX(${scrollPosition * 0.2}px)` }} 
          />
        </div>
      </div>
    </div>
  );
}
