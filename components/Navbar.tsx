'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Schedule', href: '/schedule', featured: true }
  ];

  const socialMediaLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com/tedxiem/', label: 'Instagram' },
    { icon: FaXTwitter, url: 'https://x.com/TedxIEMSaltLake', label: 'Twitter' },
    { icon: FaFacebookF, url: 'https://www.facebook.com/share/v/1HRMgFoxh8/', label: 'Facebook' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/company/tedx-iem-salt-lake/', label: 'LinkedIn' },
    { icon: FaYoutube, url: 'https://www.youtube.com/@TEDxIEMSaltLake', label: 'YouTube' }
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-red-600/20' 
            : 'bg-black/80 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link href="/" className="flex items-center">
                  <img 
                    src="/images/logo/TED Event Logo.png" 
                    alt="TEDx IEM Salt Lake"
                    className="h-12 w-auto object-contain"
                  />
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="relative text-gray-300 hover:text-white transition-colors duration-200 font-medium uppercase text-sm tracking-wider group"
                    >
                      {link.name}
                      {link.featured && (
                        <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      )}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Desktop Social Media */}
              <div className="hidden md:flex items-center space-x-3">
                {socialMediaLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiX className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiMenu className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-4 py-6 space-y-6">
                
                {/* Mobile Logo */}
                <div className="flex justify-center pb-4 border-b border-gray-800">
                  <img 
                    src="/images/logo/TED Event Logo.png" 
                    alt="TEDx IEM Salt Lake"
                    className="h-16 w-auto object-contain"
                  />
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  {navigationLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between w-full text-gray-300 hover:text-white font-medium uppercase text-sm tracking-wider py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <span>{link.name}</span>
                        {link.featured && (
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Social Media */}
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-gray-400 text-sm mb-4 text-center">Follow Us</p>
                  <div className="flex justify-center space-x-4">
                    {socialMediaLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
