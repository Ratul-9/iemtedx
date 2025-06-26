'use client';

import Link from 'next/link';
import { FaInstagram, FaXTwitter, FaFacebookF } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <nav className="w-auto bg-black text-[#E62B1E] z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex space-x-6 font-semibold tracking-wide uppercase text-sm">
          <Link href="#home" className="hover:text-white transition-colors">Home</Link>
          <Link href="#team" className="hover:text-white transition-colors">Team</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#speakers" className="hover:text-white transition-colors">Speakers</Link>
          <Link href="#schedule" className="hover:text-white transition-colors">Schedule</Link>
          <Link href="#sponsors" className="hover:text-white transition-colors">Sponsors</Link>
        </div>

        <div className="flex space-x-3 px-1">
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#E62B1E] hover:text-white text-lg transition-colors" />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-[#E62B1E] hover:text-white text-lg transition-colors" />
          </Link>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-[#E62B1E] hover:text-white text-lg transition-colors" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
