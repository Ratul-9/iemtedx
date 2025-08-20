"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, Users, Play } from 'lucide-react';
import { scheduleData, eventInfo, ScheduleItem } from '@/data/scheduleData';

const ScheduleCard: React.FC<{ item: ScheduleItem; index: number }> = ({ item, index }) => {
  const cardVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { delay: index * 0.1, duration: 0.6 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#E62B1E]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(230,43,30,0.3)] cursor-pointer overflow-hidden"
    >
      {/* Animated Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E62B1E]/10 via-transparent to-[#E62B1E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E62B1E]/20 via-red-500/10 to-[#E62B1E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Enhanced Time Indicator with Animation */}
      <motion.div 
        className="absolute -left-2 md:-left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#E62B1E] to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(230,43,30,0.6)]"
        whileHover={{ 
          scale: 1.2,
          boxShadow: "0 0 25px rgba(230, 43, 30, 0.8)",
          transition: { duration: 0.3 }
        }}
      >
        <motion.div 
          className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        {/* Enhanced Speaker Image or Icon with Animation */}
        <motion.div 
          className="flex-shrink-0 mx-auto md:mx-0"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -2, 2, 0],
            transition: { duration: 0.4 }
          }}
        >
          {item.type === 'speaker' && item.speaker ? (
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 border-white/20 group-hover:border-[#E62B1E]/70 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(230,43,30,0.4)]">
              <Image
                src={item.speaker.imageSrc}
                alt={item.speaker.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Image Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#E62B1E]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ) : (
            <motion.div 
              className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#E62B1E] to-red-700 rounded-xl flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(230,43,30,0.6)]"
              whileHover={{
                backgroundImage: "linear-gradient(135deg, #E62B1E 0%, #FF6B6B 50%, #E62B1E 100%)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-lg" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Enhanced Content with Text Animations */}
        <div className="flex-1 text-center md:text-left">
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-3 mb-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.span 
              className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold ${
                item.type === 'speaker' 
                  ? 'bg-[#E62B1E]/20 text-[#E62B1E] border border-[#E62B1E]/30' 
                  : 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
              }`}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: item.type === 'speaker' ? 'rgba(230, 43, 30, 0.4)' : 'rgba(59, 130, 246, 0.4)',
                borderColor: item.type === 'speaker' ? 'rgba(230, 43, 30, 0.6)' : 'rgba(59, 130, 246, 0.6)'
              }}
            >
              {item.type === 'speaker' ? 'Speaker' : 'Ceremony'}
            </motion.span>
          </motion.div>

          <motion.h3 
            className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-[#E62B1E] transition-colors"
            whileHover={{ 
              x: 8,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            {item.title}
          </motion.h3>

          {item.speaker && (
            <motion.p 
              className="text-gray-400 text-sm mb-2"
              whileHover={{ 
                x: 5,
                color: "#E62B1E",
                transition: { type: "spring", stiffness: 200, damping: 15 }
              }}
            >
              {item.speaker.designation}
            </motion.p>
          )}

          {item.description && (
            <motion.p 
              className="text-gray-300 text-xs md:text-sm mb-3 leading-relaxed"
              whileHover={{ 
                x: 3,
                color: "#ffffff",
                transition: { type: "spring", stiffness: 150, damping: 12 }
              }}
            >
              {item.description}
            </motion.p>
          )}

          {/* Animated Progress Bar */}
          <motion.div 
            className="w-0 h-0.5 bg-gradient-to-r from-[#E62B1E] to-red-600 mt-2 group-hover:w-full transition-all duration-500 ease-out"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
          />
        </div>
      </div>

      {/* Progress Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E62B1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

const SchedulePage: React.FC = () => {
  const fadeInUpVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 -right-20 w-96 h-96 bg-[#E62B1E]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
            <motion.div
              variants={fadeInUpVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <Calendar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-red-500 mx-auto mb-4" />
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-6 px-2">
                  EVENT <span className="text-[#E62B1E]">SCHEDULE</span>
                </h1>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6" />
              </motion.div>

              <motion.p 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Join us for a day filled with inspiring talks, innovative ideas, and transformative experiences at {eventInfo.eventName}.
              </motion.p>
            </motion.div>

            {/* Schedule highlights */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-4"
            >
              {[
                { icon: Calendar, text: "22 August 2025" },
                { icon: MapPin, text: "IEM Salt Lake" },
                { icon: Users, text: "6 Speakers" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(230, 43, 30, 0.2)" }}
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                  <span className="text-white font-medium text-sm sm:text-base">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Schedule Timeline */}
        <section className="py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fadeInUpVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                Event <span className="text-[#E62B1E]">Timeline</span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
                A carefully curated schedule designed to inspire, educate, and transform. Each session brings unique perspectives and valuable insights.
              </p>
            </motion.div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E62B1E] via-[#E62B1E]/50 to-transparent"></div>

              {/* Schedule Items */}
              <div className="space-y-6 md:space-y-8 pl-12 md:pl-16">
                {scheduleData.map((item, index) => (
                  <ScheduleCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={fadeInUpVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-2">
                Ready to Join <span className="text-[#E62B1E]">The Experience?</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Don&apos;t miss this opportunity to be part of an extraordinary day filled with groundbreaking ideas and inspiring stories.
              </p>
              
              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <motion.a
                  href="https://forms.gle/oFF2hszfpt3vicYH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E62B1E] hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reserve Your Spot
                </motion.a>
                
                <motion.a
                  href="/about"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 backdrop-blur-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SchedulePage;
