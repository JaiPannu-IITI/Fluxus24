"use client";

import React from "react";

const PixelBorder = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-17 gap-0.5 absolute inset-0 pointer-events-none">
        {Array.from({ length: 289 }).map((_, i) => {
          const isEdge = i < 17 || i >= 272 || i % 17 === 0 || i % 17 === 16;
          return <div key={i} className={`aspect-square ${isEdge ? "bg-zinc-800" : "bg-transparent"}`} />;
        })}
      </div>
      <div className="relative z-10 p-8">{children}</div>
    </div>
  );
};

export default PixelBorder;
