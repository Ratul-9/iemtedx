"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Speaker } from "@/data/speakerList";

interface SpeakerCardProps {
  speaker: Speaker;
  index: number;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = () => {
    console.log('Card clicked, isMobile:', isMobile, 'isExpanded:', isExpanded);
    if (isMobile) {
      setIsExpanded(!isExpanded);
      console.log('Setting expanded to:', !isExpanded);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative ${
        isMobile ? 'h-auto min-h-[420px]' : 'h-[420px]'
      } bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl ${
        isMobile ? '' : 'overflow-hidden'
      } hover:border-[#E62B1E]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(230,43,30,0.3)] ${
        isMobile ? 'cursor-pointer' : ''
      }`}
      onClick={handleCardClick}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#E62B1E]/5 via-transparent to-blue-600/5 opacity-0 ${
        isMobile && isExpanded ? 'opacity-100' : 'group-hover:opacity-100'
      } transition-opacity duration-500`} />
      
      {/* Main Card Content */}
      <div className="relative h-full p-4 md:p-6 flex flex-col">
        {/* Square Speaker Image */}
        <div className={`relative ${
          isMobile ? 'w-24 h-24' : 'w-32 h-32'
        } mx-auto mb-4 md:mb-6 rounded-2xl overflow-hidden border-2 border-white/20 ${
          isMobile && isExpanded ? 'border-[#E62B1E]/50' : 'group-hover:border-[#E62B1E]/50'
        } transition-all duration-500`}>
          <Image
            src={speaker.imageSrc}
            alt={speaker.name}
            fill
            className={`object-cover transition-transform duration-500 ${
              isMobile && isExpanded ? 'scale-110' : 'group-hover:scale-110'
            }`}
          />
          {/* Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Speaker Info - Always Visible */}
        <div className="text-center flex-1 flex flex-col justify-center">
          <h3 className={`${
            isMobile ? 'text-lg' : 'text-xl'
          } font-bold text-white mb-2 transition-colors duration-300 ${
            isMobile && isExpanded ? 'text-[#E62B1E]' : 'group-hover:text-[#E62B1E]'
          }`}>
            {speaker.name}
          </h3>
          <p className="text-sm text-gray-400 font-medium mb-4">
            {speaker.designation}
          </p>
          
          {/* Professional Badge */}
          <div className={`inline-flex items-center justify-center mx-auto px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-gray-300 ${
            isMobile && isExpanded ? 'bg-[#E62B1E]/20 border-[#E62B1E]/30 text-white' : 'group-hover:bg-[#E62B1E]/20 group-hover:border-[#E62B1E]/30 group-hover:text-white'
          } transition-all duration-300`}>
            <span className="w-2 h-2 bg-[#E62B1E] rounded-full mr-2 animate-pulse"></span>
            TEDx Speaker
          </div>

          {/* Mobile Tap Indicator */}
          {isMobile && !isExpanded && (
            <div className="mt-4 text-xs text-gray-500 animate-pulse">
              Tap to learn more
            </div>
          )}
        </div>

        {/* Hover Indicator for Desktop */}
        {!isMobile && (
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-2 rounded-xl opacity-60 group-hover:opacity-100 group-hover:bg-[#E62B1E]/20 transition-all duration-300 border border-white/20">
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
        )}
      </div>

      {/* Enhanced Hover Bio Panel - Slides in from Right on Desktop, Expands on Mobile */}
      <AnimatePresence>
        {((isMobile && isExpanded) || (!isMobile)) && (
          <motion.div 
            className={`absolute ${
              isMobile 
                ? 'inset-0' 
                : 'inset-0 translate-x-full group-hover:translate-x-0'
            } transition-transform duration-700 ease-out bg-gradient-to-br from-gray-900/95 via-black/95 to-[#E62B1E]/20 backdrop-blur-xl text-white ${
              isMobile ? 'p-4 rounded-2xl' : 'p-6'
            } flex flex-col border border-[#E62B1E]/30 ${
              isMobile ? 'overflow-hidden' : ''
            }`}
            initial={isMobile ? { opacity: 0, scale: 0.95 } : undefined}
            animate={isMobile ? { opacity: 1, scale: 1 } : undefined}
            exit={isMobile ? { opacity: 0, scale: 0.95 } : undefined}
            transition={isMobile ? { duration: 0.3 } : undefined}
          >
            {/* Decorative Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#E62B1E] rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-[#E62B1E] uppercase tracking-wide">Speaker Profile</span>
              </div>
              
              {/* Close hint */}
              <div className={`text-white/50 hover:text-white transition-colors ${
                isMobile ? 'cursor-pointer' : 'cursor-pointer'
              }`}
              onClick={(e) => {
                if (isMobile) {
                  e.stopPropagation();
                  setIsExpanded(false);
                }
              }}>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </div>
            </div>

            {/* Speaker Name & Title */}
            <div className="mb-4">
              <h3 className={`${
                isMobile ? 'text-xl' : 'text-2xl'
              } font-bold mb-2 text-white`}>
                {speaker.name}
              </h3>
              <p className="text-sm font-medium text-[#E62B1E] bg-[#E62B1E]/10 px-3 py-1 rounded-lg inline-block border border-[#E62B1E]/20">
                {speaker.designation}
              </p>
            </div>

            {/* Bio Text */}
            <div className={`flex-1 overflow-y-auto custom-scrollbar ${
              isMobile ? 'max-h-40' : ''
            }`}>
              <p className="text-sm leading-relaxed text-gray-300">
                {speaker.detailedBio}
              </p>
            </div>

            {/* Professional Footer */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold bg-gradient-to-r from-[#E62B1E] to-red-600 bg-clip-text text-transparent">
                  TEDx IEM Salt Lake 2025
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <span>Ideas Worth Spreading</span>
                  <div className="w-1 h-1 bg-[#E62B1E] rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SpeakerCard;

// Add custom scrollbar styles
const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #E62B1E;
    border-radius: 2px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #C41E3A;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}