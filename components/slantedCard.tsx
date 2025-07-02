'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface SlantedCardProps {
  title: string;
  content: string;
  from: 'left' | 'right';
  bgColor: string;
  clipClass: string;
  titleClass?: string;
  contentClass?: string;
}

export default function SlantedCard({
  title,
  content,
  from,
  bgColor,
  clipClass,
  titleClass,
  contentClass,
}: SlantedCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.9,
          ease: 'easeOut',
        },
      });
    }
  }, [controls, inView]);

  const initialX = from === 'left' ? -500 : 500; // 🚀 Extreme offset

  return (
    <motion.div
      ref={ref}
      initial={{ x: initialX, opacity: 0 }}
      animate={controls}
      className={`
        w-full md:w-[90%]
        ${bgColor} 
        ${clipClass} 
        ${from === 'right' ? 'ml-auto rounded-l-2xl' : 'ml-0 rounded-r-2xl'}
        shadow-2xl
        transition-transform duration-500
        overflow-hidden
      `}
    >
      <div className="p-8 md:p-10">
        <h1 className={titleClass || "text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-4"}>
          {title}
        </h1>
        <p className={contentClass || "text-base md:text-lg text-gray-300 leading-relaxed font-medium"}>
          {content}
        </p>
      </div>
    </motion.div>
  );
}
