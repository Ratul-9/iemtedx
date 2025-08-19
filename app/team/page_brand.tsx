"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Footer from "@/components/footer";
import { Users, Award, Target, Crown, Star, Mail, Linkedin, ChevronDown, User } from "lucide-react";

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

// Team member card component
interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  email?: string;
  linkedin?: string;
}

interface TeamCardProps {
  member: TeamMember;
  icon: React.ElementType;
  color: string;
  delay?: number;
}

const TeamCard = ({ member, icon: Icon, color, delay = 0 }: TeamCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative bg-gradient-to-br ${color} rounded-2xl p-8 backdrop-blur-md border border-white/10 h-full`}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />
        
        {/* Member image placeholder */}
        <div className="relative mb-6">
          <motion.div
            className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <Icon className="w-12 h-12 text-white" />
            )}
          </motion.div>
        </div>

        {/* Member info */}
        <div className="text-center space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-red-200 transition-colors">
            {member.name}
          </h3>
          <p className="text-gray-300 font-medium">
            {member.role}
          </p>
          
          {member.bio && (
            <motion.p 
              className="text-sm text-gray-400 leading-relaxed"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                height: isHovered ? 'auto' : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              {member.bio}
            </motion.p>
          )}

          {/* Contact icons */}
          <div className="flex justify-center space-x-3 pt-2">
            {member.email && (
              <motion.a
                href={`mailto:${member.email}`}
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-4 h-4 text-white" />
              </motion.a>
            )}
            {member.linkedin && (
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-4 h-4 text-white" />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Team() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Team data based on the provided information
  const patron = {
    name: "Prof. Dr. Satyajit Chakrabarti",
    role: "Director, IEM-UEM Group",
    image: "/images/team/patron.jpg"
  };

  const chiefAdvisors = [
    {
      name: "Prof. Dr. Prabir Kr. Das",
      role: "Head, Department of Basic Science and Humanities",
      image: "/images/team/prabir-das.jpg"
    },
    {
      name: "Prof. Dr. Samapika Das Biswas",
      role: "Assistant Head, Department of Basic Science and Humanities",
      image: "/images/team/samapika-biswas.jpg"
    }
  ];

  const facultyCoordinators = [
    {
      name: "Prof. Dr. Bonani Chakrabarty",
      role: "Curator",
      image: "/images/FacultyCoordinators/Bonani Chakraborty.jpg"
    },
    {
      name: "Prof. Atreyee Chaudhari",
      role: "Curator",
      image: "/images/FacultyCoordinators/Atreyee Chaudhari.jpg"
    }
  ];

  const studentCoHeads = [
    {
      name: "Aniruddha Ghosh",
      role: "Student Co-Head & Communications Head",
      image: "/images/CoreTeam/Annirudha Ghosh.jpg"
    },
    {
      name: "Paramartha Ghosh",
      role: "Student Co-Head & Production Head",
      image: "/images/CoreTeam/Paramartha Ghosh.jpg"
    }
  ];

  const studentCoordinators = [
    {
      name: "Soham Dey",
      role: "Student Coordinator & Production Manager",
      image: "/images/CoreTeam/Soham Dey.jpg"
    },
    {
      name: "Sarvani Saha",
      role: "Student Coordinator & Graphics Manager",
      image: "/images/CoreTeam/Sarvani Saha.JPG"
    }
  ];

  const directors = [
    {
      name: "Debnath Mukherjee",
      role: "Budgeting Director",
      image: "/images/CoreTeam/Debaditya Mukherjee.JPG"
    },
    {
      name: "Adrika Kundu",
      role: "Art Director",
      image: "/images/CoreTeam/Adrika Kundu.JPG"
    },
    {
      name: "Trishan Manna",
      role: "Collaboration Director",
      image: "/images/team/trishan-manna.jpg"
    },
    {
      name: "Sounak Maji",
      role: "Graphics Director",
      image: "/images/team/sounak-maji.jpg"
    },
    {
      name: "Ayush Banerjee",
      role: "Graphics Director",
      image: "/images/team/ayush-banerjee.jpg"
    },
    {
      name: "Ankita Karmakar",
      role: "Guest Reception Director",
      image: "/images/CoreTeam/Ankita Karmakar (2).JPG"
    },
    {
      name: "Saurya Das",
      role: "Broadcasting Director",
      image: "/images/CoreTeam/Saurya Das (2).JPG"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Background Elements - Only red gradients */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
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
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <Users className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-7xl md:text-9xl font-black mb-6">
                OUR <span className="text-red-600">TEAM</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6" />
            </motion.div>

            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Meet the passionate individuals behind TEDx IEM, working together to bring 
              ideas worth spreading to our community.
            </motion.p>
          </motion.div>

          {/* Mission highlights - Only red, white, black */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {[
              { icon: Award, text: "Excellence" },
              { icon: Target, text: "Innovation" },
              { icon: Users, text: "Collaboration" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(230, 43, 30, 0.2)" }}
              >
                <item.icon className="w-5 h-5 text-red-400" />
                <span className="text-white font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </div>
      </div>

      {/* Patron Section */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our <span className="text-red-600">Patron</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Guiding our vision with wisdom and leadership
            </p>
          </AnimatedSection>

          <div className="flex justify-center">
            <div className="max-w-md">
              <TeamCard 
                member={patron} 
                icon={Crown} 
                color="from-red-600/20 to-red-700/20"
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Chief Advisors Section */}
      <div className="relative z-10 py-24 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Chief <span className="text-red-600">Advisors</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic guidance and academic excellence
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {chiefAdvisors.map((advisor, index) => (
              <TeamCard 
                key={advisor.name}
                member={advisor} 
                icon={Award} 
                color="from-gray-800/20 to-black/20"
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Faculty Coordinators Section */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Faculty <span className="text-red-600">Coordinators</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Curating excellence and fostering innovation
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyCoordinators.map((coordinator, index) => (
              <TeamCard 
                key={coordinator.name}
                member={coordinator} 
                icon={Users} 
                color="from-gray-700/20 to-gray-800/20"
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Student Co-Heads Section */}
      <div className="relative z-10 py-24 bg-gradient-to-b from-transparent to-red-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Student <span className="text-red-600">Co-Heads</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading with passion and driving innovation
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {studentCoHeads.map((coHead, index) => (
              <TeamCard 
                key={coHead.name}
                member={coHead} 
                icon={Star} 
                color="from-red-600/20 to-red-700/20"
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Student Coordinators Section */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Student <span className="text-red-600">Coordinators</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Managing operations with dedication and precision
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {studentCoordinators.map((coordinator, index) => (
              <TeamCard 
                key={coordinator.name}
                member={coordinator} 
                icon={Target} 
                color="from-gray-600/20 to-gray-700/20"
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Directors Section */}
      <div className="relative z-10 py-24 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our <span className="text-red-600">Directors</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized leadership across all domains
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {directors.map((director, index) => (
              <TeamCard 
                key={director.name}
                member={director} 
                icon={User} 
                color="from-gray-800/20 to-black/20"
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Team Stats Section */}
      <div className="relative z-10 py-24 bg-gradient-to-r from-red-600/20 to-red-700/20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">Our Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Team Members" },
                { number: "500+", label: "Lives Impacted" },
                { number: "1", label: "Unified Vision" },
                { number: "∞", label: "Ideas Worth Spreading" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div 
                    className="text-5xl md:text-6xl font-black text-red-400 mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
}
