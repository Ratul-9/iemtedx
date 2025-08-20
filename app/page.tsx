"use client";
import { useEffect, useState, useRef } from "react";
import { ChevronRight, ChevronLeft, MapPin, Calendar, Clock, Play, ArrowRight, Sparkles, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Footer from "@/components/footer";
import CountdownTimer from "@/components/TimerClock";

const imageList = [
  "/images/MoodBoard1.png",
  "/images/MoodBoard2.png", 
  "/images/MoodBoard3.png",
];

const MapWidget = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 group hover:shadow-3xl transition-all duration-500"
    >
      <div className="h-96 bg-gradient-to-br from-red-50 via-red-100 to-orange-100 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-400 rounded-full opacity-20"
              initial={{ 
                x: Math.random() * 400, 
                y: Math.random() * 400,
                scale: 0 
              }}
              animate={{ 
                x: Math.random() * 400, 
                y: Math.random() * 400,
                scale: [0, 1, 0] 
              }}
              transition={{ 
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2 
              }}
            />
          ))}
        </div>
        
        {/* Mock map interface */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="w-16 h-16 text-red-500 mx-auto mb-4 drop-shadow-lg" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-heading">
              Institute of Engineering & Management
            </h3>
            <p className="text-gray-600 mb-4 font-body">Salt Lake, Kolkata</p>
            <div className="space-y-2 text-sm text-gray-600">
              <motion.div 
                className="flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Calendar className="w-4 h-4" />
                <span>August 22, 2025</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-4 h-4" />
                <span>11:00 AM - 3:00 PM</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="p-6 bg-white">
        <motion.div 
          className="w-full rounded-lg overflow-hidden shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1042.1804526094595!2d88.4333229887243!3d22.573506603331342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02754101008535%3A0xe5a40f5bdaad26f8!2sGodrej%20Genesis!5e1!3m2!1sen!2sin!4v1755607495268!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to advance to next image
  const nextImage = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Function to go back to previous image
  const prevImage = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + imageList.length) % imageList.length
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Function to jump to a specific slide
  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Auto-scroll functionality
  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      nextImage();
    }, 5000);
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // User interaction handlers
  const handleNextClick = () => {
    if (isTransitioning) return;
    nextImage();
  };

  const handlePrevClick = () => {
    if (isTransitioning) return;
    prevImage();
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning) return;
    goToSlide(index);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hero Section - Full Screen Video-like Experience */}
      <div className="relative w-full h-screen">
        {/* Background Carousel with Overlay */}
        <div className="absolute inset-0">
          <motion.div 
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / imageList.length)}%)`,
              width: `${imageList.length * 100}%`
            }}
          >
            {imageList.map((image, index) => (
              <div key={index} className="h-full flex-shrink-0 relative" style={{ width: `${100 / imageList.length}%` }}>
                <motion.img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: index === currentIndex ? 1 : 1.1 }}
                  transition={{ duration: 1.2 }}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60" />
              </div>
            ))}
          </motion.div>
          
          {/* Navigation Arrows */}
          <motion.button
            onClick={handlePrevClick}
            disabled={isTransitioning}
            className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 md:p-4 rounded-full transition-all duration-300 disabled:opacity-50 z-20 border border-white/20"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} className="md:hidden" />
            <ChevronLeft size={28} className="hidden md:block" />
          </motion.button>
          
          <motion.button
            onClick={handleNextClick}
            disabled={isTransitioning}
            className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 md:p-4 rounded-full transition-all duration-300 disabled:opacity-50 z-20 border border-white/20"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} className="md:hidden" />
            <ChevronRight size={28} className="hidden md:block" />
          </motion.button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-4 z-20">
            {imageList.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                disabled={isTransitioning}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-red-600 shadow-lg w-8 md:w-12' 
                    : 'bg-white/50 hover:bg-white/70 w-6 md:w-8'
                } disabled:cursor-not-allowed backdrop-blur-sm`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          
          <div className="relative text-center max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            {/* Main Theme */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-6 md:mb-8"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-wider mb-2 md:mb-4 px-2"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.4)'
                }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-red-600" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)' }}>CTRL</span>
                <span className="text-white mx-1 sm:mx-2 md:mx-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)' }}>+</span>
                <span className="text-red-600" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)' }}>ALT</span>
                <span className="text-white mx-1 sm:mx-2 md:mx-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)' }}>+</span>
                <span className="text-red-600" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)' }}>DEL</span>
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-100 font-light tracking-wide px-4"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6), 0 0 15px rgba(0,0,0,0.4)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                REDEFINING POSSIBILITIES
              </motion.p>
            </motion.div>

            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-8 md:mb-12"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 md:mb-4 px-2"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6), 0 0 15px rgba(0,0,0,0.4)' }}>
                WELCOME TO <span className="text-red-600" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.7), 0 0 15px rgba(0,0,0,0.5)' }}>TEDx</span>IEMSaltLake
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed px-6"
                 style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8), 2px 2px 6px rgba(0,0,0,0.6), 0 0 10px rgba(0,0,0,0.4)' }}>
                Inspiring ideas that change the world. Join us for an unforgettable journey of innovation, creativity, and transformation.
              </p>
            </motion.div>

            {/* Event Date */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mb-6 md:mb-8"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 bg-black/30 backdrop-blur-md px-3 sm:px-4 md:px-8 py-2 sm:py-3 md:py-4 rounded-full border border-white/30 shadow-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600" />
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white" 
                        style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8), 2px 2px 6px rgba(0,0,0,0.6)' }}>
                    August 22, 2025
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600" />
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white" 
                        style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8), 2px 2px 6px rgba(0,0,0,0.6)' }}>
                    11:00 AM - 3:00 PM
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-6"
            >
              <motion.a
                href="https://forms.gle/oFF2hszfpt3vicYH8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 w-auto sm:w-auto shadow-xl max-w-xs sm:max-w-none"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(230, 43, 30, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* About Section - Inspired by TEDxHITKolkata */}
      <div className="relative bg-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div 
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight px-2">
              INSPIRING IDEAS THAT <span className="text-red-600">CHANGE THE WORLD</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              TEDxIEM Salt Lake serves as a platform for innovative minds to come together, 
              fostering new ideas, collaboration, and critical thinking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* About TEDx */}
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">ABOUT TEDx</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base px-2">
                TEDx events are community-driven gatherings aimed at sharing ideas worth spreading. 
                Licensed by TED, these events bring together local voices and global ideas.
              </p>
            </motion.div>

            {/* About IEM */}
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: -360 }}
                transition={{ duration: 0.8 }}
              >
                <Award className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">ABOUT IEM</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base px-2">
                Institute of Engineering & Management, Salt Lake, established as one of Eastern India&apos;s 
                premier educational institutions, fostering innovation and excellence.
              </p>
            </motion.div>

            {/* About Theme */}
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.8 }}
              >
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">CTRL + ALT + DEL</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base px-2">
                Our theme encourages us to challenge the boundaries of conventional thought, 
                reset our perspectives, and redefine what&apos;s possible.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-700 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl md:text-5xl font-black mb-1 md:mb-2"
                whileInView={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                60+
              </motion.h3>
              <p className="text-sm md:text-xl font-semibold">ATTENDEES</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl md:text-5xl font-black mb-1 md:mb-2"
                whileInView={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                6
              </motion.h3>
              <p className="text-sm md:text-xl font-semibold">SPEAKERS</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl md:text-5xl font-black mb-1 md:mb-2"
                whileInView={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                4
              </motion.h3>
              <p className="text-sm md:text-xl font-semibold">HOURS</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl md:text-5xl font-black mb-1 md:mb-2"
                whileInView={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                1
              </motion.h3>
              <p className="text-sm md:text-xl font-semibold">EXPERIENCE</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Countdown Timer Section */}
      <div className="relative bg-black py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            EVENT STARTS IN
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CountdownTimer />
          </motion.div>
        </div>
      </div>
      {/* Venue Section - Redesigned */}
      <div className="relative bg-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <motion.div 
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
              WHERE <span className="text-red-600">INNOVATION</span> MEETS INSPIRATION
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Join us at the prestigious Institute of Engineering and Management, Salt Lake 
              for an unforgettable day of ideas worth spreading.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Venue Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              {/* Date Card */}
              <motion.div 
                className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 md:p-8 border-l-4 border-red-600"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(230, 43, 30, 0.1)" }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Event Date</h3>
                    <p className="text-gray-600 text-sm md:text-base">Save the date</p>
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-black text-red-600">August 22, 2025</p>
                <p className="text-base md:text-lg text-gray-700 mt-2">Friday | 11:00 AM - 3:00 PM</p>
              </motion.div>

              {/* Location Card */}
              <motion.div 
                className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 border-l-4 border-gray-900"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Venue</h3>
                    <p className="text-gray-600 text-sm md:text-base">Premium location</p>
                  </div>
                </div>
                <p className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Institute of Engineering & Management
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  10th Floor, Godrej Genesis Building<br />
                  Salt Lake, Kolkata, West Bengal
                </p>
              </motion.div>

              {/* Registration CTA */}
              <motion.div
                className="pt-6 md:pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://forms.gle/oFF2hszfpt3vicYH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg md:text-xl font-bold py-4 md:py-6 px-6 md:px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 md:gap-3"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(230, 43, 30, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>REGISTER NOW</span>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
                <p className="text-center text-gray-500 mt-3 md:mt-4 text-sm md:text-base">
                  Limited seats available • Registration required
                </p>
              </motion.div>
            </motion.div>

            {/* Enhanced Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 lg:mt-0"
            >
              <MapWidget />
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}