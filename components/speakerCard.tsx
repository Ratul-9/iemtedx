// @/components/SpeakerCard.tsx
import React from 'react';
import { Users } from 'lucide-react';

interface Speaker {
  name: string;
  designation: string;
  imageSrc: string;
  bio: string;
}

interface SpeakerCardProps {
  speaker: Speaker;
  index: number;
  onClick: (speaker: Speaker) => void;
  isVisible: boolean;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ 
  speaker, 
  index, 
  onClick, 
  isVisible 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(speaker);
  };

  return (
    <div 
      className={`transform transition-all duration-700 hover:scale-105 w-full max-w-sm cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ 
        transitionDelay: `${index * 100 + 500}ms`,
        animation: `slideInUp 0.8s ease-out ${index * 0.05 + 0.5}s both`
      }}
      onClick={handleClick}
    >
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-gray-200/50 group-hover:shadow-2xl transition-all duration-300">
          <div className="h-64 relative w-full overflow-hidden rounded-t-xl">
            <img
              src={speaker.imageSrc}
              alt={speaker.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-bold text-red-600">{speaker.name}</h3>
            <p className="text-sm text-gray-600">{speaker.designation}</p>
            <p className="text-sm text-gray-800 mt-2 line-clamp-3">{speaker.bio}</p>
          </div>
        </div>
        {/* Click indicator */}
        <div className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          <Users className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;