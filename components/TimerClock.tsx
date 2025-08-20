'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer() {
  const targetDate = new Date('2025-08-22T10:00:00');

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }

    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');

    return { days, hours, minutes, seconds };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main countdown container with formal styling */}
      <div className="relative bg-black/95 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Elegant border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-red-500/20 to-white/20 rounded-3xl p-[2px]">
          <div className="w-full h-full bg-black/95 rounded-3xl" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 px-8 py-12 md:px-16 md:py-16">
          {/* Countdown numbers */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            <TimeBox label="Days" value={timeLeft.days} delay={0.1} />
            <Separator />
            <TimeBox label="Hours" value={timeLeft.hours} delay={0.2} />
            <Separator />
            <TimeBox label="Minutes" value={timeLeft.minutes} delay={0.3} />
            <Separator />
            <TimeBox label="Seconds" value={timeLeft.seconds} delay={0.4} />
          </div>

          {/* Bottom accent */}
          <motion.div 
            className="mt-8 md:mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-white/5 to-red-500/10 rounded-full border border-white/10">
              <span className="text-sm md:text-base text-white/70 tracking-wide font-light">
                TEDx IEM Salt Lake 2025
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function TimeBox({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <motion.div 
      className="flex flex-col items-center group min-w-0 flex-shrink-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Number with gradient flow */}
      <div className="relative mb-2 md:mb-3">
        <motion.div 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider relative z-10"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #E62B1E 25%, #ffffff 50%, #E62B1E 75%, #ffffff 100%)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
            fontWeight: '300',
            letterSpacing: '0.05em'
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {value}
        </motion.div>
        
        {/* Subtle glow effect */}
        <div 
          className="absolute inset-0 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider opacity-20 blur-sm"
          style={{
            background: 'linear-gradient(135deg, #ffffff, #E62B1E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '300',
            letterSpacing: '0.05em'
          }}
        >
          {value}
        </div>
      </div>
      
      {/* Label */}
      <motion.div 
        className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 font-light whitespace-nowrap"
        whileHover={{ color: 'rgba(230, 43, 30, 0.8)' }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

function Separator() {
  return (
    <motion.div 
      className="flex flex-col gap-1 opacity-40 flex-shrink-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-white to-red-500" />
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-red-500 to-white" />
    </motion.div>
  );
}
