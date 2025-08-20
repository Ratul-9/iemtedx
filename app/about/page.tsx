"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Footer from "@/components/footer";
import { Play, Award, Users, Target, Globe, Heart } from "lucide-react";

// Enhanced section component with better animations
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function About() {
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
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-6 px-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              IDEAS WORTH
              <br />
              <span className="text-red-600">SPREADING</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Dive into the world of TED and TEDx—where innovation, curiosity, and community 
              come together to shape the future.
            </motion.p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* What is TEDx Section */}
      <div className="relative z-10 py-16 md:py-24 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-6 md:space-y-8 px-2">
                <motion.div
                  className="inline-flex items-center gap-3 bg-red-600/20 backdrop-blur-md px-6 py-3 rounded-full border border-red-600/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <Play className="w-5 h-5 text-red-600" />
                  <span className="text-red-600 font-semibold">About TEDx</span>
                </motion.div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">
                  What is <span className="text-red-600">TEDx</span>?
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  TEDx events are independently organized gatherings that bring people together to share 
                  a TED-like experience. At a TEDx event, TED Talks videos and live speakers combine to 
                  spark deep discussion and connection in small groups.
                </p>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  {['Community Driven', 'Local Impact', 'Global Ideas', 'Innovation Hub'].map((tag, index) => (
                    <motion.div
                      key={tag}
                      className="bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(230, 43, 30, 0.2)" }}
                    >
                      <span className="text-white font-medium text-sm sm:text-base">{tag}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-96 bg-gradient-to-br from-red-600/20 to-black/20 rounded-3xl backdrop-blur-md border border-white/10 flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Users className="w-16 h-16 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

        {/* About TED Section */}
        <div className="relative z-10 py-16 md:py-24 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <AnimatedSection delay={0.2}>
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                <motion.div
                  className="relative order-2 lg:order-1"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-red-600/20 to-black/20 rounded-3xl backdrop-blur-md border border-white/10 flex items-center justify-center mx-4 sm:mx-0">
                    <motion.div
                      className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: -360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                <div className="space-y-6 md:space-y-8 order-1 lg:order-2 px-2">
                  <motion.div
                    className="inline-flex items-center gap-3 bg-red-600/20 backdrop-blur-md px-6 py-3 rounded-full border border-red-600/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Target className="w-5 h-5 text-red-600" />
                    <span className="text-red-600 font-semibold">About TED</span>
                  </motion.div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">
                    What is <span className="text-red-600">TED</span>?
                  </h2>
                  
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                    TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                    We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community. TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues.
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
                    In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events bring people together to share ideas and bridge divides in communities on every continent.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {[
                      { label: 'Founded in 1984', icon: Award },
                      { label: '100+ Languages', icon: Globe },
                      { label: 'Global Events', icon: Users },
                      { label: 'Non-Profit Mission', icon: Heart }
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/20 flex items-center gap-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(230, 43, 30, 0.1)" }}
                      >
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                        <span className="text-white font-medium text-sm sm:text-base">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="pt-4 md:pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
                      Through the Audacious Project, TED has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'X'].map((platform, index) => (
                        <motion.span
                          key={platform}
                          className="text-xs bg-red-600/20 text-red-400 px-2 sm:px-3 py-1 rounded-full border border-red-600/30"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          Follow on {platform}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
      <Footer />
    </div>
  );
}
