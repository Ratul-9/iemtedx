'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

type MemberInfoPopupProps = {
  name: string;
  designation: string;
  imageSrc: string;
  bio: string;
  linkedinUrl?: string;
  onClose: () => void;
};

export default function MemberInfoPopup({
  name,
  designation,
  imageSrc,
  bio,
  linkedinUrl,
  onClose,
}: MemberInfoPopupProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
      <div className="bg-[#E6281A] text-black w-[400px] h-full p-6 shadow-xl animate-slide-in-right">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <X className="text-black hover:text-red-500" size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="w-24 h-24 relative mb-4">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="rounded-full object-cover border-4 border-[#E62B1E]"
            />
          </div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm text-gray-600 mb-4">{designation}</p>
          <p className="text-sm leading-relaxed text-center">{bio}</p>
          <div className="social flex gap-2 items-center">
            <FaLinkedin href='https://www.linkedin.com/in/debanurag/' className="text-blue-700 text-4xl" />
          </div>


        </div>
      </div>
    </div>
  );
}
