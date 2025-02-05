import React, { useEffect, useRef } from "react";

function App() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !contentRef.current || !backgroundRef.current) return;

      const scrollPosition = window.scrollY;

      // 🎯 Background moves slower (parallax effect) and repeats
      const backgroundTranslateX = -(scrollPosition * 0.2) % window.innerWidth;
      backgroundRef.current.style.transform = `translateX(${backgroundTranslateX}px)`;

      // 🚀 Cards move at **linear speed**
      const translateX = -scrollPosition * 1.0;
      contentRef.current.style.transform = `translateX(${translateX}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[300vh]"> {/* Extra height for scrolling */}
      <div ref={containerRef} className="fixed top-0 left-0 w-full h-screen overflow-hidden">
        
        {/* 🌄 Background Layer (Repeating Horizontally, Full Height) */}
        <div className="absolute inset-0 bg-[#FFE4D6] overflow-hidden">
          <div 
            ref={backgroundRef}
            className="absolute inset-0 h-full bg-repeat-x bg-cover flex"
            style={{
              backgroundImage: `url('/bg/abc.png')`, // 🔹 Replace with your image path
              backgroundSize: "auto 100%", // 🔥 Ensures full height
              backgroundPosition: "top left", // 🔹 Aligns correctly
              width: "200%", // Double width to ensure smooth looping
            }}
          />
        </div>

        {/* 🚀 Content Container (Horizontal Cards) */}
        <div ref={contentRef} className="relative h-full transition-none" style={{ width: "400vw" }}>
          {/* 📜 Horizontal Information Cards */}
          <div className="absolute top-1/2 -translate-y-1/2 flex gap-96 px-24">
            {[
              { title: "Welcome", content: "Scroll to explore our journey." },
              { title: "Chapter One", content: "Discover new features as you scroll." },
              { title: "Explore More", content: "Hidden treasures await!" },
              { title: "The End", content: "Thanks for exploring!" }
            ].map((card, index) => (
              <div
                key={index}
                className="w-96 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border-2 border-black transform transition-none"
              >
                <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                <p className="text-gray-700">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;