import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full bg-[#f4f1ea] fixed top-0 z-50 ">
      <div className="relative w-full p-4 text-2xl">
        {/* Decorative top banner */}
        <div className="w-full h-12 bg-[#f4f1ea] relative overflow-hidden border border-dotted border-amber-800 py-1">
          {/* Navigation items container */}
          <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-center">
            {/* Navigation items */}
            <div className="flex items-center space-x-4 text-gray-700">
              <a href="/" className="hover:text-gray-900">HOME</a>
              <span className="text-orange-500">•</span>
              <a href="/" className="hover:text-gray-900">HOME</a>
              <span className="text-orange-500">•</span>
              <a href="/" className="hover:text-gray-900">HOME</a>
              
              {/* Logo/Brand */}
              <div className="relative mx-4">
                <div className="bg-white rounded-full p-7 shadow-md">
                  <span className="text-olive-600 font-semibold">FLUXUS</span>
                  <span className="text-xs align-top">24</span>
                </div>
              </div>
              
              <a href="/" className="hover:text-gray-900">HOME</a>
              <span className="text-orange-500">•</span>
              <a href="/" className="hover:text-gray-900">HOME</a>
              <span className="text-orange-500">•</span>
              <a href="/" className="hover:text-gray-900">HOME</a>
            </div>
          </div>
          
          {/* Decorative ribbon edges */}
          <div className="absolute left-0 top-0 w-8 h-full bg-gray-300 transform -skew-x-12" />
          <div className="absolute right-0 top-0 w-8 h-full bg-gray-300 transform skew-x-12" />
        </div>
      </div>
    </nav>
  )
}
