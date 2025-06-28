'use client';

import Image from 'next/image';
import { useState } from 'react';
import MemberInfoPopup from './MemberInfoPopup';

type TeamMemberCardProps = {
  name: string;
  designation: string;
  imageSrc: string;
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
        className="flex flex-col w-56 items-center text-center p-4 bg-transparent text-black rounded-xl cursor-pointer hover:shadow-[#E62B1E]/50 hover:scale-105 transition-transform duration-300"
      >
        <div className="w-40 h-40 mb-4 relative">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="rounded-full object-cover border-4 border-[#E62B1E]"
          />
        </div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm opacity-80">{designation}</p>
      </div>

      {showPopup && (
        <MemberInfoPopup
          name={name} 
          designation={designation}
          imageSrc={imageSrc}
          bio={bio}
          linkedinUrl={linkedinUrl}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
