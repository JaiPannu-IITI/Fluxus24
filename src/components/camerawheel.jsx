import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-[50vh] flex items-center justify-center z-50 left-0 translate-y-[-50%] h-[10rem] bg-transparent">
      {/* Outer Dial Circle */}
      <div className="relative w-[10rem] h-[10rem] bg-[rgb(20,20,20)] rounded-full flex items-center justify-center border-[0.5rem] border-[rgb(60,60,60)]">
        {/* Center Logo */}
        <div className="w-[4rem] h-[4rem] bg-[rgb(40,40,40)] rounded-full flex items-center justify-center">
          <img src="/logo/fluxus.png" alt="Fluxus 24" className="h-[2rem] brightness-0 invert" />
        </div>

        {/* Mode Labels arranged in a circular pattern */}
        <div className="absolute w-full h-full flex items-center justify-center text-white font-semibold">
          <span className="mode-label absolute top-[10%] text-xs">AUTO</span>
          <span className="mode-label absolute left-[10%] text-xs">M</span>
          <span className="mode-label absolute bottom-[10%] text-xs">S</span>
          <span className="mode-label absolute right-[10%] text-xs">A</span>
          <span className="mode-label absolute top-[25%] left-[25%] transform -rotate-45 text-xs">P</span>
          <span className="mode-label absolute top-[25%] right-[25%] transform rotate-45 text-xs">C</span>
          <span className="mode-label absolute bottom-[25%] left-[25%] transform rotate-45 text-xs">U</span>
          <span className="mode-label absolute bottom-[25%] right-[25%] transform -rotate-45 text-xs">N</span>
        </div>
      </div>
    </nav>
  );
}
