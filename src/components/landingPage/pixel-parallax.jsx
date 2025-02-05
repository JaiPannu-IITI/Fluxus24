"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const scheduleData = [
  { title: "Morning Session", description: "Team standup and priority planning for the day", time: "9:00 AM - 10:00 AM" },
  { title: "Development Time", description: "Focus period for core development tasks", time: "10:00 AM - 12:00 PM" },
  { title: "Lunch Break", description: "Team lunch and casual discussions", time: "12:00 PM - 1:00 PM" },
  { title: "Afternoon Session", description: "Code reviews and pair programming", time: "1:00 PM - 4:00 PM" },
];

export default function PixelParallax() {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleWheel = useCallback((e) => {
    e.preventDefault(); // Prevent default vertical scroll behavior
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY * 3; // Adjust multiplier for speed
      setScrollPosition(containerRef.current.scrollLeft);
    }
  }, []);
  

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [handleWheel]);

  return (
    <div className="h-screen w-full overflow-hidden bg-[#FFE4D6]">
      <div ref={containerRef} className="h-full w-full overflow-x-auto overflow-y-hidden whitespace-nowrap" style={{ scrollBehavior: "smooth" }}>
        <div className="relative inline-flex h-full min-w-[400%] items-end pb-16">
          
          {/* Parallax Background */}
          <div className="absolute inset-0 bg-repeat-x"
               style={{ backgroundImage: `url('/clouds.png')`, transform: `translateX(${-scrollPosition * 0.1}px)` }} 
          />
          <div className="absolute bottom-0 h-32 w-full bg-[#4A8B4C] bg-repeat-x"
               style={{ transform: `translateX(${-scrollPosition * 0.4}px)` }} 
          />
          <div className="absolute bottom-0 h-16 w-full bg-[#3A3A3A] bg-repeat" />

          {/* Schedule Cards */}
          <div className="relative flex h-full items-center gap-24 px-24">
            {scheduleData.map((item, index) => (
              <Card key={index} className="relative min-w-[400px] transform-gpu bg-white/90 p-6 backdrop-blur-sm">
                <Sparkles className="absolute -top-6 left-1/2 h-8 w-8 -translate-x-1/2 text-yellow-400" />
                <h2 className="mb-2 text-xl font-bold">{item.title}</h2>
                <p className="mb-4 text-gray-600">{item.description}</p>
                <p className="text-sm font-medium text-primary">{item.time}</p>
              </Card>
            ))}
          </div>

          {/* Pixel Character */}
          <div className="absolute bottom-16 left-12 h-16 w-16 bg-contain bg-center bg-no-repeat"
               style={{ backgroundImage: "url('/placeholder.svg?height=64&width=64')", transform: `translateX(${scrollPosition * 0.2}px)` }} 
          />
        </div>
      </div>
    </div>
  );
}
