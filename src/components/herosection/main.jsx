"use client";

import React, { Suspense, lazy } from "react";
import Image from "next/image";
import Loader from "@/components/herosection/loader"

const LazySpline = lazy(() => import("@splinetool/react-spline/next"));


function MainContent() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center relative">
      {/* Background 3D Scene 1 */}
      <div className="absolute w-[100vw] h-[100vh] top-0 left-0">
        <LazySpline scene="https://prod.spline.design/DYQgKyYu3rcg9m-c/scene.splinecode" />
      </div>

      {/* Background 3D Scene 2 */}
      <div className="w-[50vw] h-[100vh] absolute top-0 right-[-10%]">
        <LazySpline scene="https://prod.spline.design/opiHI8ED2FCuwVXQ/scene.splinecode" />
      </div>


      <Image
        src="/logo/main.png"
        width={4000}
        height={2000}
        className="w-[1100px] drop-shadow-2xl brightness-200"
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
