'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-black text-[#E62B1E] sticky top-6 z-50 pt-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 px-6">
        
        {/* LEFT: Main Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo/TED Event Logo.png" // ✅ Replace with your real path
            alt="TEDx Logo"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
        </div>

        {/* CENTER: Navbar */}
        <div className="flex-1 flex justify-center">
          <Navbar />
        </div>

        {/* RIGHT: Additional Logos (Optional) */}
        <div className="flex space-x-4">
          {/* Add sponsor or partner logos here if needed */}
        </div>
      </div>
    </header>
  );
}
