'use client';

import Link from 'next/link';
import { FaInstagram, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo only visible on mobile */}
        <div className="flex lg:hidden items-center font-bold text-xl">
          TEDx
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6 font-semibold tracking-wide uppercase text-sm">
          <Link href="#home" className="hover:text-white transition-colors">Home</Link>
          <Link href="/team" className="hover:text-white transition-colors">Team</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/speakers" className="hover:text-white transition-colors">Speakers</Link>
          <Link href="/schedule" className="hover:text-white transition-colors">Schedule</Link>
          <Link href="/sponsors" className="hover:text-white transition-colors">Sponsors</Link>
        </div>

        {/* Social Links (Desktop Only) */}
        <div className="hidden lg:flex space-x-3 mx-2 my-0 px-2 py-1 bg-[#E62B1E] rounded-sm">
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-lg transition-colors" />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-white text-lg transition-colors" />
          </Link>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white text-lg transition-colors" />
          </Link>
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
          <Link href="#home" onClick={toggleMenu}>Home</Link>
          <Link href="#team" onClick={toggleMenu}>Team</Link>
          <Link href="#about" onClick={toggleMenu}>About</Link>
          <Link href="#speakers" onClick={toggleMenu}>Speakers</Link>
          <Link href="#schedule" onClick={toggleMenu}>Schedule</Link>
          <Link href="#sponsors" onClick={toggleMenu}>Sponsors</Link>

          {/* Social Links */}
          <div className="flex space-x-4 pt-2">
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
