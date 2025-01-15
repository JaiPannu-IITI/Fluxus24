'use client';

import React from 'react';
import { Award, BadgeIcon as Certificate, Gift, Users, Trophy, MessageSquare, Network, Ticket, Share2, School } from 'lucide-react';
import Image from 'next/image';
import bglight from "../../../public/images/bg/bglight.png";

const incentives = [
  {
    icon: <Certificate className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Basic Certification",
    description: "Marketing & Sales Internship Certificate, signed by President, Gymkhana IIT Indore & Overall Coordinator, Fluxus IIT Indore",
    badge: "All CAs",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Certificate of Appreciation",
    description: "Special recognition for outstanding performance",
    badge: "Top 100",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Letter of Recommendation",
    description: "Official recommendation from Fluxus IIT Indore",
    badge: "Top 50",
    gradient: "from-green-500 to-emerald-500",
    breakTitle: true
  },
  {
    icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Best CA Package",
    description: "Certificate of Excellence + Photo with Artists + VIP passes + Premium Merchandise (Zipper + Diary + Goodies) + Free courses",
    badge: "Best CA",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Gift className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Premium Package",
    description: "VIP passes + Premium Merchandise (T-Shirt + Diary + Goodies) + Free certified premium courses",
    badge: "Top 10",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: <Gift className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Gold Package",
    description: "VIP passes + Merchandise (Diary + Goodies) + Free certified courses",
    badge: "Top 20",
    gradient: "from-amber-500 to-yellow-500"
  },
  {
    icon: <Gift className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Silver Package",
    description: "VIP passes + Merchandise (Goodies) + Free certified courses",
    badge: "Top 30",
    gradient: "from-slate-400 to-gray-500"
  },
  {
    icon: <Ticket className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Bronze Package",
    description: "Discounted main fest passes + Vouchers & Coupons + Free courses",
    badge: "Top 50",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Social Media Feature",
    description: "Special announcement post on Fluxus's Social Media handles",
    badge: "Top 10",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: <School className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Collaboration Opportunity",
    description: "Chance to organize workshops and competitions at your institution",
    badge: "All CAs",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: <Network className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Networking",
    description: "Connect with students from IIT Indore and various other colleges",
    badge: "All CAs",
    gradient: "from-violet-500 to-purple-500"
  }
];

const CampusAmbassadorIncentives = () => {
  return (
    <div id='incentives' className="min-h-screen w-full bg-[#FFF8E1] p-4 sm:p-6 relative overflow-hidden">
      <Image
        src={bglight || "/placeholder.svg"}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]] bg-[size:14px_24px]" />
      
      <div className="max-w-7xl mx-auto bg-black border-0 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden relative rounded-lg">
        {/* Animated gradient border */}
        <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-r from-gray-500 via-white to-gray-500 mask-gradient animate-borderFlow" />
        
        <div className="relative rounded-lg bg-[#FFF8E1] overflow-hidden">
          <div className="relative border-b border-white/10 py-6 sm:py-10">
            {/* Header background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-y-[-8deg] transform-gpu" />
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>
            
            <div className="text-center space-y-2 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 sm:mt-4 text-[rgb(50,50,50)] font-black bg-clip-text" style={{fontFamily:"var(--font-monument-extended)"}}>
                {"Campus Ambassador"}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[rgb(204,117,0)] font-bold tracking-wider" style={{fontFamily:"var(--font-monument-extended)"}}>
                {"Incentives & Rewards"}
              </p>
            </div>
          </div>

          <div className="h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
            <div className="grid gap-4 sm:gap-6 p-4 sm:p-6 sm:grid-cols-2 lg:grid-cols-3">
              {incentives.map((incentive, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden bg-[#ffe7c9] backdrop-blur-sm
                           transition-all duration-500 ease-out rounded-lg
                           hover:bg-white/10 hover:scale-[1.02]
                           hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                >
                  {/* Card hover effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-r ${incentive.gradient} opacity-10 blur-xl`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>

                  <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-3 sm:p-4 h-full">
                    {/* Icon container with gradient border */}
                    <div className={`relative rounded-xl p-[1px] bg-gradient-to-br ${incentive.gradient} mb-2 sm:mb-0 flex-shrink-0`}>
                      <div className="bg-black rounded-xl p-2 sm:p-3 backdrop-blur-xl group-hover:scale-110 transition-transform duration-500">
                        <div className="text-white group-hover:animate-pulse">
                          {incentive.icon}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2 sm:space-y-3 flex flex-col justify-between h-full">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#ff6f00] group-hover:text-[#e65f00] group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300 break-words" style={{fontFamily:"var(--font-aileron-bold)"}}>
                          {incentive.breakTitle ? (
                            <>
                              Letter of <br className="sm:hidden" />Recommendation
                            </>
                          ) : (
                            incentive.title
                          )}
                        </h3>
                        <span 
                          className={`text-xs sm:text-sm border-0 font-semibold px-2 py-1 sm:px-3 sm:py-1 text-white rounded-full
                                   bg-gradient-to-r ${incentive.gradient} opacity-75
                                   group-hover:opacity-100 transition-all duration-300
                                   shadow-[0_0_15px_rgba(255,255,255,0.1)] whitespace-nowrap self-start`} style={{fontFamily:"var(--font-aileron-bold)"}}
                        >
                          {incentive.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300" style={{fontFamily:"var(--font-aileron-bold)"}}>
                        {incentive.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .mask-gradient {
          mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
        }
        @keyframes borderFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-borderFlow {
          animation: borderFlow 8s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};

export default CampusAmbassadorIncentives;

