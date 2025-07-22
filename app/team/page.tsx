'use client';
import React, { useState, useEffect } from 'react';
import { teamMembers } from "@/data/coreTeam";
import TeamMemberCard from "@/components/MemberCard";
import { FacultCoordinators } from "@/data/facultyCoordinators";
import Footer from "@/components/footer";
import { Users, Sparkles, Award, Target, X, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';

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

interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  bio?: string;
  linkedinUrl?: string;
  email?: string;
  location?: string;
  joinDate?: string;
}

interface TeamMemberSidebarProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeamMemberSidebar: React.FC<TeamMemberSidebarProps> = ({ member, isOpen, onClose }) => {
  if (!member) return null;

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
          <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 p-6 text-white">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <img 
                  src={member.imageSrc} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full border-4 border-white/30 shadow-lg object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
              <p className="text-blue-100 font-medium">{member.designation}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Bio Section */}
            {member.bio && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  About
                </h3>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            )}

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
              
              {member.linkedinUrl && (
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <a 
                    href={member.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              )}
              
              {member.email && (
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-green-600" />
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    {member.email}
                  </a>
                </div>
              )}
              
              {member.location && (
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-600 font-medium">{member.location}</span>
                </div>
              )}
              
              {member.joinDate && (
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-600 font-medium">Joined {member.joinDate}</span>
                </div>
              )}
            </div>

            {/* Skills/Expertise (enhanced with better styling) */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                  Leadership
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                  Innovation
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                  Strategy
                </span>
              </div>
            </div>

            {/* Action Buttons (enhanced hover effects) */}
            <div className="pt-4 space-y-3">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 transform hover:scale-105">
                Connect
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 hover:shadow-md">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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

// Enhanced TeamMemberCard wrapper component
interface TeamMemberCardWrapperProps {
  member: TeamMember;
  index: number;
  onClick: (member: TeamMember) => void;
  isVisible: boolean;
}

const TeamMemberCardWrapper: React.FC<TeamMemberCardWrapperProps> = ({ 
  member, 
  index, 
  onClick, 
  isVisible 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(member);
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
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-gray-200/50 group-hover:shadow-2xl transition-all duration-300">
          <div onClick={(e) => e.stopPropagation()}>
            <TeamMemberCard 
              name={member.name} 
              designation={member.designation} 
              imageSrc={member.imageSrc} 
              bio={member.bio || ''} 
              linkedinUrl={member.linkedinUrl || ''} 
            />
          </div>
        </div>
        {/* Click indicator (enhanced) */}
        <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          <Users className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setTimeout(() => setSelectedMember(null), 300); // Wait for animation to complete
  };

  // Filtering logic (updated: filter based on designation only, removed category reference)
  const filteredTeamMembers = teamMembers.filter(member => {
    if (activeFilter === 'all') return true;
    return member.designation.toLowerCase().includes(activeFilter);
  });

  const stats = [
    { icon: Users, label: "Team Members", value: teamMembers.length + FacultCoordinators.length },
    { icon: Award, label: "Years Experience", value: 5 },
    { icon: Target, label: "Projects Delivered", value: 50 },
    { icon: Sparkles, label: "Happy Clients", value: 100 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Team Member Sidebar */}
      <TeamMemberSidebar 
        member={selectedMember}
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      {/* Animated Background Elements (enhanced with more elements for better design) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} className="absolute top-20 left-10 opacity-20">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={2} className="absolute top-40 right-20 opacity-15">
          <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={4} className="absolute bottom-40 left-1/4 opacity-10">
          <div className="w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={1} className="absolute bottom-20 right-1/3 opacity-15">
          <div className="w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl"></div>
        </FloatingElement>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-20 relative z-10">
        {/* Hero Section (enhanced typography and spacing) */}
        <div className={`headline text-center transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative">
            <h2 className="font-heading text-7xl md:text-8xl font-extralight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Meet the Team
            </h2>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Passionate innovators driving excellence through creativity and collaboration
          </p>
          
          {/* Animated Stats (enhanced hover effects) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center group cursor-pointer transition-all duration-500 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl mb-4 group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  <AnimatedCounter end={stat.value} suffix="+" />
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Coordinators Section */}
        <ParallaxSection className={`fac-coords transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative">
            <div className="flex items-center mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
              <h3 className="text-4xl font-heading font-light mx-8 text-gray-800 relative">
                Faculty Coordinators
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </h3>
              <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full"></div>
            </div>
            
            <div className="flex flex-wrap gap-8 font-body justify-center">
              {FacultCoordinators.map((coordinator, index) => {
                const handleCoordinatorClick = (e: React.MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleMemberClick(coordinator);
                };

                return (
                  <div 
                    key={index}
                    className={`transform transition-all duration-700 hover:scale-105 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ 
                      transitionDelay: `${index * 150 + 300}ms`,
                      animation: `slideInUp 0.8s ease-out ${index * 0.1 + 0.3}s both`
                    }}
                    onClick={handleCoordinatorClick}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
                      <div className="relative">
                        <div onClick={(e) => e.stopPropagation()}>
                          <TeamMemberCard 
                            name={coordinator.name} 
                            designation={coordinator.designation} 
                            imageSrc={coordinator.imageSrc} 
                            bio={coordinator.bio || ''} 
                            linkedinUrl={coordinator.linkedinUrl || ''} 
                          />
                        </div>
                      </div>
                      {/* Click indicator */}
                      <div className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Users className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ParallaxSection>

        {/* Core Team Section (now with Parallax for consistency) */}
        <ParallaxSection className={`core-team transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative">
            <div className="flex items-center mb-12">
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
              <h3 className="text-4xl font-heading font-light mx-8 text-gray-800 relative group">
                Core Team
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </h3>
              <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-pink-500 rounded-full"></div>
            </div>

            {/* Filter Buttons (enhanced styling) */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200/50">
                {['all', 'tech', 'design'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 mx-1 shadow-sm hover:shadow-md ${
                      activeFilter === filter
                        ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {filteredTeamMembers.length > 0 ? (
                filteredTeamMembers.map((member, index) => (
                  <TeamMemberCardWrapper
                    key={index}
                    member={member}
                    index={index}
                    onClick={handleMemberClick}
                    isVisible={isVisible}
                  />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-600">No members found in this category.</p>
              )}
            </div>
          </div>
        </ParallaxSection>

        {/* Call to Action Section (enhanced design with better gradient and hover) */}
        <div className={`text-center py-20 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200/50">
              <h3 className="text-3xl font-heading font-light text-gray-800 mb-4">
                Ready to Join Our Journey?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals to join our mission of innovation and excellence.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Get In Touch
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
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}