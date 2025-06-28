'use client';

import { useEffect } from 'react';

type ComingSoonPopupProps = {
  show: boolean;
  onClose: () => void;
};

export default function ComingSoonPopup({ show, onClose }: ComingSoonPopupProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 800);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white text-[#E62B1E] px-8 py-6 rounded-xl shadow-xl text-xl font-semibold animate-fade-in">
        Coming Soon!
      </div>
    </div>
  );
}
