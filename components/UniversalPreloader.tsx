'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UniversalPreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    // Prevent body scroll when preloader is active
    document.body.classList.add('preloader-active');
    
    // Start the preloader sequence
    const preloaderTimer = setTimeout(() => {
      setShowFade(true);
      
      // After fade transition, hide the entire preloader
      const fadeTimer = setTimeout(() => {
        setIsLoading(false);
        // Re-enable body scroll
        document.body.classList.remove('preloader-active');
      }, 500); // 0.5s fade duration

      return () => clearTimeout(fadeTimer);
    }, 3000); // 3s preloader duration

    return () => {
      clearTimeout(preloaderTimer);
      document.body.classList.remove('preloader-active');
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="preloader-container"
        >
          {/* Video Preloader */}
          <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
            <video
              autoPlay
              muted
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              className="absolute inset-0 w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              onLoadStart={() => console.log('Preloader video loading...')}
              onCanPlay={() => console.log('Preloader video ready')}
              onError={(e) => console.error('Preloader video error:', e)}
            >
              <source src="/preloader.mp4" type="video/mp4" />
              {/* Fallback content */}
              <div className="w-full h-full bg-black flex items-center justify-center">
                <div className="text-white text-2xl font-bold">TEDx IEM</div>
              </div>
            </video>
            
            {/* Black fade overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showFade ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-black"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
