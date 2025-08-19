"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { Speakers } from '@/data/speakerList';
import SpeakerCard from '@/components/speakerCard';
import Footer from '@/components/footer';

export default function SpeakersPage() {
  const fadeInUpVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              background: `linear-gradient(${Math.random() * 360}deg, #E62B1E, #FF6B6B)`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
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
              <Users className="w-12 h-12 md:w-16 md:h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-9xl font-black mb-6 px-2">
                OUR <span className="text-[#E62B1E]">SPEAKERS</span>
              </h1>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6" />
            </motion.div>

            <motion.p 
              className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Meet the visionaries, innovators, and change-makers who will share their inspiring stories and groundbreaking ideas at TEDx IEM Salt Lake.
            </motion.p>
          </motion.div>

          {/* Speaker highlights */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 px-4"
          >
            {[
              { icon: Users, text: "Visionaries" },
              { text: "Innovators" },
              { text: "Change-makers" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 border border-white/20 text-sm md:text-base"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(230, 43, 30, 0.2)" }}
              >
                {item.icon && <item.icon className="w-4 h-4 md:w-5 md:h-5 text-red-400" />}
                <span className="text-white font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        variants={fadeInUpVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative py-16 px-6 sm:px-8 md:px-12 lg:px-16 z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(230, 43, 30, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E62B1E] mb-2">6</h3>
              <p className="text-base md:text-lg text-gray-300">Inspiring Speakers</p>
            </motion.div>
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(230, 43, 30, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E62B1E] mb-2">5+</h3>
              <p className="text-base md:text-lg text-gray-300">Industries Represented</p>
            </motion.div>
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(230, 43, 30, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E62B1E] mb-2">∞</h3>
              <p className="text-base md:text-lg text-gray-300">Ideas Worth Spreading</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Speakers Grid */}
      <section className="relative py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-red-600/20 backdrop-blur-md px-6 py-3 rounded-full border border-red-600/30 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-semibold">Featured Speakers</span>
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-2">
              Meet Our <span className="text-[#E62B1E]">Speakers</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
              Each speaker brings a unique perspective and transformative ideas that will challenge, inspire, and ignite change. Tap on mobile or hover on desktop to learn more about their incredible journeys.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
            {Speakers.map((speaker, index) => (
              <SpeakerCard
                key={speaker.name}
                speaker={speaker}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white px-2">
              Ready to Be <span className="text-[#E62B1E]">Inspired?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto px-4">
              Join us for an unforgettable experience as these remarkable speakers share their stories and ideas that will change the way you think.
            </p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <motion.a
                href="https://forms.gle/oFF2hszfpt3vicYH8"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "#C41E3A" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E62B1E] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E62B1E]/30"
              >
                Get Your Tickets
              </motion.a>
              
              <motion.a
                href="/schedule"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 backdrop-blur-md"
              >
                View Schedule
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}