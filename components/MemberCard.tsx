'use client';

import Image from 'next/image';

type TeamMemberCardProps = {
  name: string;
  designation: string;
  imageSrc: string;
};

export default function TeamMemberCard({ name, designation, imageSrc }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col w-56  items-center text-center p-4 bg-transparent text-[#E62B1E] rounded-xl hover:shadow-[#E62B1E]/50 transition-all">
      <div className="w-32 h-32 mb-4 relative">
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
  );
}
