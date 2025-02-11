"use client";

import React, { Suspense, lazy } from "react";
import Image from "next/image";
import Loader from "@/components/herosection/loader"

const LazySpline = lazy(() => import("@splinetool/react-spline/next"));


function MainContent() {
  return (
    <div className="w-[100vw] h-[100vh] z-40 flex justify-center items-center relative">
   

   <Image
  src="/logo/main.png"
  width={4000}
  height={2000}
  className="w-[1100px] drop-shadow-2xl filter brightness-0 invert-[30%] sepia-[90%] saturate-[500%] hue-rotate-[100deg] mix-blend-multiply"
  alt="Main Logo"
/>

    </div>
  );
}

// Export with Suspense
export default function Main() {
  return (
    <Suspense fallback={<div className="w-full h-full flex justify-center items-center text-white text-xl">
      
      <Loader></Loader>
      
      </div>}>
      <MainContent />
    </Suspense>
  );
}
