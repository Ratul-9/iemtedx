'use client';
import React, { useState, useEffect } from 'react';
import { Speakers } from "@/data/speakerList";
import Footer from "@/components/footer";
import { Users, X, Mail, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';

// Assuming the enhanced SpeakerCard is imported here
import SpeakerCard from '@/components/speakerCard'; // Update the path if necessary

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ children, delay = 0, className = "" }) => {
  return (
    <div 
      className={`animate-pulse ${className}`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTime: number | undefined;
    const animate = (currentTime: number): void => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, className = "" }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={className}
      style={{
        transform: `translateY(${scrollY * 0.1}px)`,
      }}
    >
      {children}
    </div>
  );
};

interface Speaker {
  name: string;
  designation: string;
  imageSrc: string;
  bio: string;
  linkedinUrl?: string;
  email?: string;
  location?: string;
  joinDate?: string;
}

interface SpeakerSidebarProps {
  speaker: Speaker | null;
  isOpen: boolean;
  onClose: () => void;
}

const SpeakerSidebar: React.FC<SpeakerSidebarProps> = ({ speaker, isOpen, onClose }) => {
  if (!speaker) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-red-600 to-orange-700 p-6 text-white">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <Image
                  src={speaker.imageSrc} 
                  alt={speaker.name}
                  className="w-24 h-24 rounded-full border-4 border-white/30 shadow-lg object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h2 className="text-2xl font-bold mb-1">{speaker.name}</h2>
              <p className="text-red-100 font-medium">{speaker.designation}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Bio Section */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Users className="w-5 h-5 mr-2 text-red-600" />
                About
              </h3>
              <p className="text-gray-600 leading-relaxed">{speaker.bio}</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
              
              {speaker.linkedinUrl && (
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">                  <a 
                    href={speaker.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              )}
              
              {speaker.email && (
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-green-600" />
                  <a 
                    href={`mailto:${speaker.email}`}
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    {speaker.email}
                  </a>
                </div>
              )}
              
              {speaker.location && (
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-600 font-medium">{speaker.location}</span>
                </div>
              )}
              
              {speaker.joinDate && (
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-600 font-medium">Speaking Since {speaker.joinDate}</span>
                </div>
              )}
            </div>

            {/* Expertise */}
            

            {/* Action Buttons */}
            <div className="pt-4 space-y-3">
              <button className="w-full bg-gradient-to-r from-red-600 to-orange-700 text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 transform hover:scale-105">
                Connect
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 hover:shadow-md">
                View Talks
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function SpeakersPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSpeakerClick = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setTimeout(() => setSelectedSpeaker(null), 300);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 relative overflow-hidden">
      {/* Speaker Sidebar */}
      <SpeakerSidebar 
        speaker={selectedSpeaker}
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} className="absolute top-20 left-10 opacity-20">
          <div className="w-32 h-32 bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={2} className="absolute top-40 right-20 opacity-15">
          <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={4} className="absolute bottom-40 left-1/4 opacity-10">
          <div className="w-40 h-40 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={1} className="absolute bottom-20 right-1/3 opacity-15">
          <div className="w-28 h-28 bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-xl"></div>
        </FloatingElement>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-20 relative z-10">
        {/* Hero Section */}
        <div className={`headline text-center transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative">
            <h2 className="font-heading text-7xl md:text-8xl font-extralight bg-gradient-to-r from-gray-900 via-red-800 to-orange-800 bg-clip-text text-transparent leading-tight">
              Our Speakers
            </h2>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Visionary leaders sharing insights and inspiring innovation
          </p>
          
          {/* Animated Stats */}
          
        </div>

        {/* Speakers Grid */}
        <ParallaxSection className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative">
            <div className="flex items-center mb-12">
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
              <h3 className="text-4xl font-heading font-light mx-8 text-gray-800 relative group">
                Featured Speakers
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </h3>
              <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-orange-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {Speakers.map((speaker, index) => (
                <SpeakerCard
                  key={index}
                  speaker={speaker}
                  index={index}
                  onClick={handleSpeakerClick}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Call to Action Section */}
        <div className={`text-center py-20 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200/50">
              <h3 className="text-3xl font-heading font-light text-gray-800 mb-4">
                Interested in Speaking?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Share your expertise with our audience. Join our roster of distinguished speakers.
              </p>
              <button className="bg-gradient-to-r from-red-600 to-orange-700 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}