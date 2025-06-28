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
}

export default function SlantedCard({ title, content, from, bgColor, clipClass }: SlantedCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [controls, inView]);

  const initialX = from === 'left' ? -200 : 200;

  return (
    <motion.div
      ref={ref}
      initial={{ x: initialX, opacity: 0 }}
      animate={controls}
      className={`w-full md:w-[90%] text-white ${bgColor} ${clipClass} ${from === 'right' ? 'ml-auto rounded-l-xl' : 'ml-0 rounded-r-xl'} shadow-lg`}
    >
      <div className="p-6 md:p-8">
        <h1 className="text-2xl text-[#E62B1E] font-heading font-semibold mb-2">{title}</h1>
        <p className="text-base leading-relaxed text-gray-300">
          {content}
        </p>
      </div>
    </motion.div>
  );
}
