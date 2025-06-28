'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-black text-[#E62B1E] sticky z-50">
      <div className="max-w-7xl flex justify-between items-center gap-4 px-6">

        {/* LEFT: Main Logo */}
        <a href="/">
          <div className="flex items-center">
            <Image
              src="/images/logo/TED Event Logo.png" // ✅ Replace with your real path
              alt="TEDx Logo"
              width={165}
              height={165}
              className="object-contain"
              priority
            />
          </div>

        </a>


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
