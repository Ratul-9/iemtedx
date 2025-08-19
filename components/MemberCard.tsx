'use client';

import Image from 'next/image';
import { useState } from 'react';
import MemberInfoPopup from './MemberInfoPopup';
import { ExternalLink } from 'lucide-react';

type TeamMemberCardProps = {
  name: string;
  designation: string;
  imageSrc?: string;
  bio?: string;
  linkedinUrl: string;
};



export default function TeamMemberCard({
  name,
  designation,
  imageSrc,
  bio = 'This person is highly talented and an integral part of the team.',
  linkedinUrl,
}: TeamMemberCardProps) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowPopup(true)}
        className="group relative flex flex-col w-full h-full items-center text-center p-6 bg-white rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
      >
        {/* TED-style accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E62B1E] to-[#FF4B3A] rounded-t-2xl"></div>
        
        {/* Image container with fixed dimensions */}
        <div className="relative w-32 h-32 mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E62B1E]/20 to-[#FF4B3A]/20 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Image
            src={imageSrc ?? ' '}
            alt={name}
            fill
            className="rounded-full object-cover border-3 border-gray-200 group-hover:border-[#E62B1E] transition-colors duration-300"
          />
        </div>
        
        {/* Text content with fixed height to ensure consistency */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{name}</h3>
          <p className="text-sm text-gray-600 font-medium line-clamp-2 min-h-[2.5rem]">{designation}</p>
        </div>
        
        {/* Hover indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="w-4 h-4 text-[#E62B1E]" />
        </div>
        
        {/* LinkedIn icon (optional) */}
        {linkedinUrl && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>
        )}
      </div>

      {showPopup && (
        <MemberInfoPopup
          name={name} 
          designation={designation}
          imageSrc={imageSrc ?? ' '}
          bio={bio}
          linkedinUrl={linkedinUrl}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}