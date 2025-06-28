'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useHasMounted from '@/hooks/useHasMounted';

type SpeakerCardProps = {
  name: string;
  designation: string;
  bio: string;
  imageSrc: string;
  detailedBio: string;
};

export default function SpeakerCard({
  name,
  designation,
  bio,
  imageSrc,
  detailedBio,
}: SpeakerCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;


  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowDetails(true)}
        className="relative w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-[#E62B1E]/20 hover:shadow-[#E62B1E]/30 transition-all"
      >
        <div className="h-64 relative w-full">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            style={{ borderBottom: '2px solid #E62B1E' }}
          />
        </div>
        <div className="p-4 text-black">
          <h3 className="text-2xl font-bold text-[#E62B1E]">{name}</h3>
          <p className="text-sm text-gray-600">{designation}</p>
          <p className="text-sm text-gray-800 mt-2">{bio}</p>
        </div>
      </motion.div>

      {/* SLIDE-IN DETAIL PANEL */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="fixed top-0 right-0 h-screen w-full md:w-[700px] z-50 bg-white shadow-2xl origin-right overflow-y-auto"
            style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          >
            <div className="relative p-6">
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 text-[#E62B1E] text-xl font-bold"
              >
                ✕
              </button>
              <div className="w-32 h-32 relative mx-auto mt-6 mb-4">
                <Image
                  src={imageSrc}
                  alt={name}
                  fill
                  className="rounded-full object-cover border-4 border-[#E62B1E]"
                />
              </div>
              <h2 className="text-2xl font-bold text-[#E62B1E] text-center">{name}</h2>
              <p className="text-center text-gray-600 mb-6">{designation}</p>
              <p className="text-sm text-gray-800 leading-relaxed">{detailedBio}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
