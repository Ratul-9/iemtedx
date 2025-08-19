'use client';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/tedxiem/",
      color: "hover:text-pink-400"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/company/tedx-iem-salt-lake/",
      color: "hover:text-blue-400"
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/@TEDxIEMSaltLake",
      color: "hover:text-red-500"
    },
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      url: "https://x.com/TedxIEMSaltLake",
      color: "hover:text-gray-300"
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/share/v/1HRMgFoxh8/",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-red-600"
              style={{
                width: `${Math.random() * 100 + 20}px`,
                height: `${Math.random() * 100 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src="/images/logo/TED Event Logo.png" 
                  alt="TEDx IEM Salt Lake"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Independently organized TED event fostering ideas worth spreading at the Institute of Engineering and Management.
            </p>
            <motion.div
              className="flex items-center space-x-2 text-sm text-gray-400"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="w-4 h-4 text-red-500" />
              <span>Ideas worth spreading</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Speakers", href: "/speakers" },
                { name: "Schedule", href: "/schedule" },
                { name: "Team", href: "/team" }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center group"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-red-600 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"
                    ></motion.span>
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Contact
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:tedxiem@gmail.com" className="hover:text-red-400 transition-colors">
                    tedxiem@gmail.com
                  </a>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+919073121695" className="hover:text-red-400 transition-colors">
                    (+91) 9073121695
                  </a>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <span>Sector V, Kolkata, India</span>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Follow Us
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600 rounded-full"></div>
            </h3>
            <p className="text-gray-300 mb-6 text-sm">
              Stay connected for the latest updates and behind-the-scenes content.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 group`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
            <motion.div
              className="mt-6 p-4 bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-lg border border-red-600/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-red-400 text-sm font-medium mb-1">Join the conversation</p>
              <p className="text-gray-300 text-xs">#TEDxIEMSaltLake #IdeasWorthSpreading</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400 text-sm text-center md:text-left"
              whileHover={{ color: "#ffffff" }}
              transition={{ duration: 0.3 }}
            >
              © {currentYear} TEDxIEMSaltLake. This independent TEDx event is operated under license from TED.
            </motion.p>
            <motion.div
              className="flex items-center space-x-4 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy" className="hover:text-red-400 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="https://www.ted.com/about/our-organization/our-policies-terms/ted-com-terms-of-use" className="hover:text-red-400 transition-colors">Terms of Service</Link>
              <span>•</span>
              <a href="https://www.ted.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                TED.com
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
    </footer>
  );
}
