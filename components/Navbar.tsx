'use client';

import Link from 'next/link';
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import ComingSoonPopup from './comingSoonPopUp';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const handleUnreadyClick = () => {
    setShowPopUp(true);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo only visible on mobile */}
        <div className="flex lg:hidden items-center font-bold text-xl">
          {/* Put your logo here if needed */}
        </div>

        {/* Desktop Nav + Socials */}
        <div className="hidden lg:flex w-full items-center">
          {/* Left-side navigation links */}
          <div className="flex space-x-6 font-semibold tracking-wide uppercase text-sm">
            <Link href="/" className="underline-slide hover:text-white transition-colors">Home</Link>
            <Link href="/team" className="underline-slide hover:text-white transition-colors">Team</Link>
            <Link href="/about" className="underline-slide hover:text-white transition-colors">About</Link>
            <Link href="/speakers" className="underline-slide hover:text-white transition-colors">Speakers</Link>
            <Link href="" onClick={handleUnreadyClick} className="underline-slide hover:text-white transition-colors">Schedule</Link>
            <Link href="" onClick={handleUnreadyClick} className="underline-slide hover:text-white transition-colors">Sponsors</Link>
          </div>

          {/* Spacer to push social icons to right */}
          <div className="ml-auto flex space-x-3 px-2 py-1 bg-[#E62B1E] rounded-sm">
            <Link href="https://www.instagram.com/reel/DKzjyuVhB8H/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-xl transition-colors" />
            </Link>
            <Link href="https://x.com/TedxIEMSaltLake/status/1933183132251144236" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-white text-lg transition-colors" />
            </Link>
            <Link href="https://www.facebook.com/share/v/1HRMgFoxh8/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white text-lg transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7338949129546477572" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-lg transition-colors" />
            </Link>
            <Link href="https://youtu.be/5iuI_BQyzhY" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white text-lg transition-colors" />
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-2xl"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-start space-y-4 px-6 pb-4 font-semibold tracking-wide uppercase text-sm bg-black text-white">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/team" onClick={toggleMenu}>Team</Link>
          <Link href="/about" onClick={toggleMenu}>About</Link>
          <Link href="/speakers" onClick={toggleMenu}>Speakers</Link>
          <Link href="/schedule" onClick={toggleMenu}>Schedule</Link>
          <Link href="/sponsors" onClick={toggleMenu}>Sponsors</Link>

          {/* Social Links */}
          <div className="flex space-x-4 pt-2">
            <Link href="https://www.instagram.com/reel/DKzjyuVhB8H/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-lg transition-colors" />
            </Link>
            <Link href="https://x.com/TedxIEMSaltLake/status/1933183132251144236" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-white text-lg transition-colors" />
            </Link>
            <Link href="https://www.facebook.com/share/v/1HRMgFoxh8/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white text-lg transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7338949129546477572" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-lg transition-colors" />
            </Link>
            <Link href="https://youtu.be/5iuI_BQyzhY" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white text-lg transition-colors" />
            </Link>
          </div>
        </div>
      )}

      {/* Pop-up */}
      <ComingSoonPopup show={showPopUp} onClose={() => setShowPopUp(false)} />
    </nav>
  );
}
