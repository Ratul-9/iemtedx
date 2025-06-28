'use client';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-body font-bold text-red-600">TEDxIEMSaltLake</h2>
          <p className="mt-3 text-sm text-gray-400">
            Independently organized TED event hosted at the Institute of Engineering and Management.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-body font-semibold mb-2 text-red-500">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-red-400 transition">About</a></li>
            <li><a href="/speakers" className="hover:text-red-400 transition">Speakers</a></li>
            <li><a href="/schedule" className="hover:text-red-400 transition">Schedule</a></li>
            <li><a href="/team" className="hover:text-red-400 transition">Team</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-body font-semibold mb-2 text-red-500">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: <a href="mailto:tedxiem@iem.edu.in" className="hover:text-red-400 transition">tedxiem@iem.edu.in</a></li>
            <li>Phone: <a href="tel:+911234567890" className="hover:text-red-400 transition">+91 12345 67890</a></li>
            <li>Location: Sector V, Kolkata, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-body font-semibold mb-2 text-red-500">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.instagram.com/reel/DKzjyuVhB8H/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
              <i className="fab fa-instagram"></i> Instagram
              <FaInstagram className="text-2xl ml-7 mt-1" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
              <i className="fab fa-linkedin"></i> LinkedIn
              <FaLinkedin className="text-2xl ml-4 mt-1" />
            </a>
            <a href="https://youtu.be/5iuI_BQyzhY" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
              <i className="fab fa-linkedin"></i> Youtube
              <FaYoutube className="text-2xl ml-4 mt-1" />
            </a>
            <a href="https://x.com/TedxIEMSaltLake/status/1933183132251144236" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
              <i className="fab fa-linkedin"></i> X
              <FaX className="text-xl mt-1" />
            </a>
            <a href="https://www.facebook.com/share/v/1HRMgFoxh8/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
              <i className="fab fa-linkedin"></i> Facebook
              <FaFacebookF className="text-2xl ml-4 mt-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} TEDxIEMSaltLake. This independent TEDx event is operated under license from TED.
      </div>
    </footer>
  );
}
