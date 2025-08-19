"use client";

import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Footer from "@/components/footer";
import { Users, Award, Target, Crown, Star, Linkedin, ChevronDown, User } from "lucide-react";

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
  about?: string;
  achievements?: string[];
}

interface TeamCardProps {
  member: TeamMember;
  icon: React.ElementType;
  color: string;
  delay?: number;
}

const TeamCard = ({ member, icon: Icon, color, delay = 0 }: TeamCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = () => {
    console.log('Team card clicked, isMobile:', isMobile, 'isExpanded:', isExpanded);
    if (isMobile) {
      setIsExpanded(!isExpanded);
      console.log('Setting team expanded to:', !isExpanded);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className={`group relative ${
        isMobile ? 'h-auto min-h-[420px]' : 'h-[420px]'
      } bg-gradient-to-br ${color} backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl ${
        isMobile ? '' : 'overflow-hidden'
      } hover:border-[#E62B1E]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(230,43,30,0.3)] ${
        isMobile ? 'cursor-pointer' : ''
      }`}
      onClick={handleCardClick}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#E62B1E]/5 via-transparent to-blue-600/5 opacity-0 ${
        isMobile && isExpanded ? 'opacity-100' : 'group-hover:opacity-100'
      } transition-opacity duration-500`} />
      
      {/* Background decoration */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />
      
      {/* Main Card Content */}
      <div className="relative h-full p-4 md:p-6 flex flex-col">
        {/* Member image */}
        <div className={`relative ${
          isMobile ? 'w-24 h-24' : 'w-32 h-32'
        } mx-auto mb-4 md:mb-6 rounded-2xl overflow-hidden border-2 border-white/20 ${
          isMobile && isExpanded ? 'border-[#E62B1E]/50' : 'group-hover:border-[#E62B1E]/50'
        } transition-all duration-500`}>
          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                isMobile && isExpanded ? 'scale-110' : 'group-hover:scale-110'
              }`}
            />
          ) : (
            <div className="w-full h-full bg-white/10 flex items-center justify-center backdrop-blur-md">
              <Icon className="w-12 h-12 text-white" />
            </div>
          )}
          {/* Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Member info - Always Visible */}
        <div className="text-center flex-1 flex flex-col justify-center">
          <h3 className={`${
            isMobile ? 'text-lg' : 'text-xl'
          } font-bold text-white mb-2 transition-colors duration-300 ${
            isMobile && isExpanded ? 'text-[#E62B1E]' : 'group-hover:text-[#E62B1E]'
          }`}>
            {member.name}
          </h3>
          <p className="text-sm text-gray-400 font-medium mb-4">
            {member.role}
          </p>
          
          {/* Professional Badge */}
          <div className={`inline-flex items-center justify-center mx-auto px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-gray-300 ${
            isMobile && isExpanded ? 'bg-[#E62B1E]/20 border-[#E62B1E]/30 text-white' : 'group-hover:bg-[#E62B1E]/20 group-hover:border-[#E62B1E]/30 group-hover:text-white'
          } transition-all duration-300`}>
            <span className="w-2 h-2 bg-[#E62B1E] rounded-full mr-2 animate-pulse"></span>
            TEDx Team
          </div>

          {/* Mobile Tap Indicator */}
          {isMobile && !isExpanded && (
            <div className="mt-4 text-xs text-gray-500 animate-pulse">
              Tap to learn more
            </div>
          )}

          {/* Contact icons */}
          <div className="flex justify-center space-x-2 pt-4">
            {member.linkedin && (
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="w-4 h-4 text-white" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Hover Indicator for Desktop */}
        {!isMobile && (
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-2 rounded-xl opacity-60 group-hover:opacity-100 group-hover:bg-[#E62B1E]/20 transition-all duration-300 border border-white/20">
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
        )}
      </div>

      {/* Enhanced Hover Bio Panel - Slides in from Right on Desktop, Expands on Mobile */}
      <AnimatePresence>
        {((isMobile && isExpanded) || (!isMobile)) && (
          <motion.div 
            className={`absolute ${
              isMobile 
                ? 'inset-0' 
                : 'inset-0 translate-x-full group-hover:translate-x-0'
            } transition-transform duration-700 ease-out bg-gradient-to-br from-gray-900/95 via-black/95 to-[#E62B1E]/20 backdrop-blur-xl text-white ${
              isMobile ? 'p-4 rounded-2xl' : 'p-6'
            } flex flex-col border border-[#E62B1E]/30 ${
              isMobile ? 'overflow-hidden' : ''
            }`}
            initial={isMobile ? { opacity: 0, scale: 0.95 } : undefined}
            animate={isMobile ? { opacity: 1, scale: 1 } : undefined}
            exit={isMobile ? { opacity: 0, scale: 0.95 } : undefined}
            transition={isMobile ? { duration: 0.3 } : undefined}
          >
            {/* Decorative Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#E62B1E] rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-[#E62B1E] uppercase tracking-wide">Team Member</span>
              </div>
              
              {/* Close hint */}
              <div className={`text-white/50 hover:text-white transition-colors ${
                isMobile ? 'cursor-pointer' : 'cursor-pointer'
              }`}
              onClick={(e) => {
                if (isMobile) {
                  e.stopPropagation();
                  setIsExpanded(false);
                }
              }}>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </div>
            </div>

            {/* Member Name & Title */}
            <div className="mb-4">
              <h3 className={`${
                isMobile ? 'text-xl' : 'text-2xl'
              } font-bold mb-2 text-white`}>
                {member.name}
              </h3>
              <p className="text-sm font-medium text-[#E62B1E] bg-[#E62B1E]/10 px-3 py-1 rounded-lg inline-block border border-[#E62B1E]/20">
                {member.role}
              </p>
            </div>

            {/* Bio Text */}
            <div className={`flex-1 overflow-y-auto custom-scrollbar ${
              isMobile ? 'max-h-40' : ''
            }`}>
              <p className="text-sm leading-relaxed text-gray-300">
                {member.bio || member.about}
              </p>
            </div>

            {/* Professional Footer */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold bg-gradient-to-r from-[#E62B1E] to-red-600 bg-clip-text text-transparent">
                  TEDx IEM Salt Lake 2025
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <span>Ideas Worth Spreading</span>
                  <div className="w-1 h-1 bg-[#E62B1E] rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
    image: "/images/CoreTeam/satyajit-chakrabarti.jpg",
    about: "Dr. Chakrabarti is a visionary technologist and serial entrepreneur, he holds a PhD in Nanotechnology from the National Institute of Technology and a Master's in Computer Science from the University of British Columbia. He leads institutions across education, healthcare, and technology, including two universities and five colleges. With 100+ research publications, 20+ patents, and deep expertise in AI, IoT, and emerging tech, Dr. Chakrabarti is also a passionate mentor, investor, and advocate for innovation, sustainability, and transformative education.",
    bio: "Dr. Chakrabarti is a visionary technologist and serial entrepreneur, he holds a PhD in Nanotechnology from the National Institute of Technology and a Master's in Computer Science from the University of British Columbia. He leads institutions across education, healthcare, and technology, including two universities and five colleges. With 100+ research publications, 20+ patents, and deep expertise in AI, IoT, and emerging tech, Dr. Chakrabarti is also a passionate mentor, investor, and advocate for innovation, sustainability, and transformative education.",
    email: "director@iem.edu.in",
    linkedin: "https://linkedin.com/in/satyajit-chakrabarti"
  };

  const chiefAdvisors = [
    {
      name: "Prof. Dr. Prabir Kr. Das",
      role: "Head, Department of Basic Science and Humanities",
      image: "/images/CoreTeam/prabir-das.jpg",
      about: "Dr. Prabir Kumar Das, a Leading Educator, Researcher, and CSR Activist, is Professor & Head of the Department of Basic Science & Humanities at IEM, Kolkata. He has held key leadership roles including President of the Rotary Club of Salt Lake Silicon Valley and the IEM–Indian Chemical Society Chapter, while also contributing as a Foreign Program Coordinator, Editor, and member of professional bodies like the ICC and the Society for Data Science. With experience in STEM events and student initiatives, he continues to bridge academics, research, and social impact with excellence.",
      bio: "Dr. Prabir Kumar Das, a Leading Educator, Researcher, and CSR Activist, is Professor & Head of the Department of Basic Science & Humanities at IEM, Kolkata. He has held key leadership roles including President of the Rotary Club of Salt Lake Silicon Valley and the IEM–Indian Chemical Society Chapter, while also contributing as a Foreign Program Coordinator, Editor, and member of professional bodies like the ICC and the Society for Data Science. With experience in STEM events and student initiatives, he continues to bridge academics, research, and social impact with excellence.",
      email: "prabir.das@iem.edu.in",
      linkedin: "https://linkedin.com/in/prabir-das"
    },
    {
      name: "Prof. Dr. Samapika Das Biswas",
      role: "Assistant Head, Department of Basic Science and Humanities",
      image: "/images/CoreTeam/samapika-das.jpg",
      about: "Dr. Samapika Das Biswas is a seasoned Professor and Counsellor at the Institute of Engineering & Management, with over a decade of experience in higher education. Specializing in psychology, she is deeply committed to student development, academic advising, and fostering personal growth. Her work reflects a passion for empowering young minds within a culture of excellence and innovation.",
      bio: "Dr. Samapika Das Biswas is a seasoned Professor and Counsellor at the Institute of Engineering & Management, with over a decade of experience in higher education. Specializing in psychology, she is deeply committed to student development, academic advising, and fostering personal growth. Her work reflects a passion for empowering young minds within a culture of excellence and innovation.",
      email: "samapika.biswas@iem.edu.in",
      linkedin: "https://linkedin.com/in/samapika-biswas"
    }
  ];

  const facultyCoordinators = [
    {
      name: "Prof. Dr. Bonani Chakrabarty",
      role: "Faculty Coordinator",
      image: "/images/FacultyCoordinators/Bonani Chakraborty.jpg",
      about: "Dr. Bonani Chakrabarty is an accomplished academic with over six years of teaching experience across schools, colleges, and a private university. She holds a Ph.D. and is recognized for her strong research and analytical abilities, complemented by excellent speaking and writing skills. Beyond academia, she has contributed as a feature writer with a leading newspaper, showcasing her versatility in communication and thought leadership. At IEM, she continues to inspire students with her blend of scholarly expertise, creative expression, and commitment to education.",
      bio: "Dr. Bonani Chakrabarty is an accomplished academic with over six years of teaching experience across schools, colleges, and a private university. She holds a Ph.D. and is recognized for her strong research and analytical abilities, complemented by excellent speaking and writing skills. Beyond academia, she has contributed as a feature writer with a leading newspaper, showcasing her versatility in communication and thought leadership. At IEM, she continues to inspire students with her blend of scholarly expertise, creative expression, and commitment to education.",
      email: "bonani.chakrabarty@iem.edu.in",
      linkedin: "https://linkedin.com/in/bonani-chakrabarty"
    },
    {
      name: "Prof. Atreyee Chaudhari",
      role: "Faculty Coordinator",
      image: "/images/FacultyCoordinators/Atreyee Chaudhari.jpg",
      about: "Atreyee Chaudhuri is a dynamic professional with expertise in historical research, content creation, and project management. With experience as a Senior Content Writer and Academic Content Head, she has produced engaging, SEO-optimized content across industries like travel, finance, and education. Her background as a research trainee and project manager has further sharpened her skills in HR administration, SEO, and curriculum development.",
      bio: "Atreyee Chaudhuri is a dynamic professional with expertise in historical research, content creation, and project management. With experience as a Senior Content Writer and Academic Content Head, she has produced engaging, SEO-optimized content across industries like travel, finance, and education. Her background as a research trainee and project manager has further sharpened her skills in HR administration, SEO, and curriculum development.",
      email: "atreyee.chaudhari@iem.edu.in",
      linkedin: "https://linkedin.com/in/atreyee-chaudhari"
    }
  ];

  const studentCoHeads = [
    {
      name: "Aniruddha Ghosh",
      role: "Student Co-Head & Communications Head",
      image: "/images/CoreTeam/Annirudha Ghosh.jpg",
      about: "Aniruddha Ghosh is a third-year B.Tech student in Computer Science and Engineering (specializing in Internet of Things, Cyber Security, and Blockchain Technology) at the Institute of Engineering & Management, Kolkata. He thrives on hands-on projects that bring theory to life and enjoys tackling problem-solving challenges. Known for his collaborative spirit, he is continually seeking opportunities to deepen his technical skills through coding contests, workshops, and exploring emerging technologies in his free time.",
      bio: "Aniruddha Ghosh is a third-year B.Tech student in Computer Science and Engineering (specializing in Internet of Things, Cyber Security, and Blockchain Technology) at the Institute of Engineering & Management, Kolkata. He thrives on hands-on projects that bring theory to life and enjoys tackling problem-solving challenges. Known for his collaborative spirit, he is continually seeking opportunities to deepen his technical skills through coding contests, workshops, and exploring emerging technologies in his free time.",
      email: "aniruddha@student.iem.edu.in",
      linkedin: "https://linkedin.com/in/aniruddha-ghosh"
    },
    {
      name: "Paramartha Ghosh",
      role: "Student Co-Head & Production Head",
      image: "/images/CoreTeam/Paramartha Ghosh.jpg",
      about: "Paramartha Ghosh, a third-year CSE student at IEM Kolkata specializing in IoT, Cyber Security, and Blockchain, is a curious technologist and meticulous organizer who thrives on blending innovation with execution. As Student Co-Head of TEDxIEM 2025, he leads content direction and production, ensuring every idea is thoughtfully curated and flawlessly delivered, making the event both impactful and meaningful.",
      bio: "Paramartha Ghosh, a third-year CSE student at IEM Kolkata specializing in IoT, Cyber Security, and Blockchain, is a curious technologist and meticulous organizer who thrives on blending innovation with execution. As Student Co-Head of TEDxIEM 2025, he leads content direction and production, ensuring every idea is thoughtfully curated and flawlessly delivered, making the event both impactful and meaningful.",
      email: "paramartha@student.iem.edu.in",
      linkedin: "https://linkedin.com/in/paramartha-ghosh"
    }
  ];

  const studentCoordinators = [
    {
      name: "Soham Dey",
      role: "Student Coordinator & Production Manager",
      image: "/images/CoreTeam/Soham Dey.jpg",
      about: "Soham Dey is a second-year B.Tech student at IEM Salt Lake, specializing in Computer Science & Engineering (Core). A passionate football enthusiast, Soham not only enjoys watching the game but also actively plays on the field whenever he gets the chance. His love for the sport mirrors his mindset—strategic, quick-thinking, and team-oriented. Alongside his academic pursuits, Soham is known for his strong problem-solving skills, making him adept at tackling both real-world challenges and technical puzzles. Whether it's a coding bug or a last-minute goal opportunity, Soham thrives under pressure and brings energy and precision to everything he does.",
      bio: "Soham Dey is a second-year B.Tech student at IEM Salt Lake, specializing in Computer Science & Engineering (Core). A passionate football enthusiast, Soham not only enjoys watching the game but also actively plays on the field whenever he gets the chance. His love for the sport mirrors his mindset—strategic, quick-thinking, and team-oriented. Alongside his academic pursuits, Soham is known for his strong problem-solving skills, making him adept at tackling both real-world challenges and technical puzzles. Whether it's a coding bug or a last-minute goal opportunity, Soham thrives under pressure and brings energy and precision to everything he does.",
      email: "soham@student.iem.edu.in",
      linkedin: "https://linkedin.com/in/soham-dey"
    },
    {
      name: "Sarvani Saha",
      role: "Student Coordinator & Graphics Manager",
      image: "/images/CoreTeam/Sarvani Saha.JPG",
      about: "Sarvani Saha is a dedicated Electronics and Communication Engineering student at IEM, Salt Lake, with a passion for circuit design, PCB prototyping, and embedded systems. A talented graphics designer, she has actively contributed to her college's content team, creating visuals for fests and conferences. Balancing tech with arts, she's also pursuing a Bachelor's in Classical Music and Rabindrasangeet from Allahabad University, reflecting her multifaceted personality and love for both innovation and cultural heritage.",
      bio: "Sarvani Saha is a dedicated Electronics and Communication Engineering student at IEM, Salt Lake, with a passion for circuit design, PCB prototyping, and embedded systems. A talented graphics designer, she has actively contributed to her college's content team, creating visuals for fests and conferences. Balancing tech with arts, she's also pursuing a Bachelor's in Classical Music and Rabindrasangeet from Allahabad University, reflecting her multifaceted personality and love for both innovation and cultural heritage.",
      email: "sarvani@student.iem.edu.in",
      linkedin: "https://linkedin.com/in/sarvani-saha"
    }
  ];

  const directors = [
    {
      name: "Debnath Mukherjee",
      role: "Budgeting Director",
      image: "/images/Defualt.jpg",
      about: "Debnath Mukherjee is a financial strategist ensuring optimal resource allocation and budget management. He maintains financial transparency and maximizes impact within budget constraints.",
      bio: "Debnath Mukherjee is a financial strategist ensuring optimal resource allocation and budget management. He maintains financial transparency and maximizes impact within budget constraints.",
      email: "debnath@student.iem.edu.in",
      linkedin: "https://linkedin.com/in/debnath-mukherjee"
    },
    {
      name: "Adrika Kundu",
      role: "Art Director",
      image: "/images/CoreTeam/Adrika Kundu.JPG",
      about: "Adrika Kundu is a third-year B.Tech student in Information Technology at the Institute of Engineering & Management. Alongside her academic pursuits, she is deeply passionate about digital art and graphic design, often experimenting with vector art and different creative forms in her free time. She is currently exploring enhanced graphics and aims to bridge her artistic interests with engineering, bringing creativity and technology together in impactful ways.",
      bio: "Adrika Kundu is a third-year B.Tech student in Information Technology at the Institute of Engineering & Management. Alongside her academic pursuits, she is deeply passionate about digital art and graphic design, often experimenting with vector art and different creative forms in her free time. She is currently exploring enhanced graphics and aims to bridge her artistic interests with engineering, bringing creativity and technology together in impactful ways.",
      email: "adrika@student.iem.edu.in",
      linkedin: "https://linkedin.com/in/adrika-kundu"
    },
    {
      name: "Trishan Manna",
      role: "Collaboration Director",
      image: "/images/CoreTeam/trishan.jpg",
      about: "Trishan Manna, Collaborator Director at TEDxIEM, is passionate about collaboration, business strategy, finance, and cybersecurity. Currently pursuing his B.Tech in Computer Science and Engineering, he blends technical insight with a flair for organizing events and building partnerships. At TEDxIEM, he strives to create platforms that amplify ideas worth spreading, bringing people, innovation, and vision together. \"Collaboration is not just about working together—it's about creating impact that one alone could never achieve.\" – Trishan Manna",
      bio: "Trishan Manna, Collaborator Director at TEDxIEM, is passionate about collaboration, business strategy, finance, and cybersecurity. Currently pursuing his B.Tech in Computer Science and Engineering, he blends technical insight with a flair for organizing events and building partnerships. At TEDxIEM, he strives to create platforms that amplify ideas worth spreading, bringing people, innovation, and vision together. \"Collaboration is not just about working together—it's about creating impact that one alone could never achieve.\" – Trishan Manna",
      email: "trishan@student.iem.edu.in",
      linkedin: "https://linkedin.com/in/trishan-manna"
    },
    {
      name: "Sounak Maji",
      role: "Graphics Director",
      image: "/images/CoreTeam/sounak.jpg",
      about: "Sounak Maji is a visual storyteller creating compelling graphics that communicate our message effectively. He leads the graphics team in developing innovative design solutions.",
      bio: "Sounak Maji is a visual storyteller creating compelling graphics that communicate our message effectively. He leads the graphics team in developing innovative design solutions.",
      email: "sounak@student.iem.edu.in",
      linkedin: "https://linkedin.com/in/sounak-maji"
    },
    {
      name: "Ayush Banerjee",
      role: "Graphics Director",
      image: "/images/CoreTeam/ayush.jpg",
      about: "Ayush Banerjee is a 3rd year Computer Science Engineering student at the Institute of Engineering and Management, Salt Lake. He is fascinated by the profound ways technology shapes human experiences. Beyond the code and algorithms, he explores the human element of computer science, examining how software can enhance creativity, foster connection, and solve everyday problems.",
      bio: "Ayush Banerjee is a 3rd year Computer Science Engineering student at the Institute of Engineering and Management, Salt Lake. He is fascinated by the profound ways technology shapes human experiences. Beyond the code and algorithms, he explores the human element of computer science, examining how software can enhance creativity, foster connection, and solve everyday problems.",
      email: "ayush@student.iem.edu.in",
      linkedin: "https://linkedin.com/in/ayush-banerjee"
    },
    {
      name: "Ankita Karmakar",
      role: "Guest Reception Director",
      image: "/images/CoreTeam/Ankita Karmakar (2).JPG",
      about: "Ankita Karmakar is a 3rd-year B.Tech student at the Institute of Engineering and Management (IEM), pursuing Electronics and Communication Engineering with a keen interest in Robotics. She actively explores innovative technologies and enjoys applying practical engineering concepts to build and understand robotic systems. Alongside her technical interests, she efficiently handles Public Relations and Guest Management for college events, ensuring smooth communication and a welcoming environment for guests. She is passionate about balancing her technical pursuits with organizational roles, contributing to a vibrant and collaborative campus culture.",
      bio: "Ankita Karmakar is a 3rd-year B.Tech student at the Institute of Engineering and Management (IEM), pursuing Electronics and Communication Engineering with a keen interest in Robotics. She actively explores innovative technologies and enjoys applying practical engineering concepts to build and understand robotic systems. Alongside her technical interests, she efficiently handles Public Relations and Guest Management for college events, ensuring smooth communication and a welcoming environment for guests. She is passionate about balancing her technical pursuits with organizational roles, contributing to a vibrant and collaborative campus culture.",
      email: "ankita@student.iem.edu.in",
      linkedin: "https://linkedin.com/in/ankita-karmakar"
    },
    {
      name: "Saurya Das",
      role: "Broadcasting Director",
      image: "/images/CoreTeam/Saurya Das (2).JPG",
      about: "Saurya is a curious and forward-thinking student of Electronics and Communication Engineering, passionate about exploring technology and innovation. Skilled in photography, Saurya enjoys capturing moments creatively while continuing to learn and grow.",
      bio: "Saurya is a curious and forward-thinking student of Electronics and Communication Engineering, passionate about exploring technology and innovation. Skilled in photography, Saurya enjoys capturing moments creatively while continuing to learn and grow.",
      email: "saurya@student.iem.edu.in",
      linkedin: "https://linkedin.com/in/saurya-das"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Background Elements - Only red gradients for TEDx branding */}
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
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
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
              <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-6 px-2">
                OUR <span className="text-red-600">TEAM</span>
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6" />
            </motion.div>

            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Meet the passionate individuals behind TEDx IEM, working together to bring 
              ideas worth spreading to our community.
            </motion.p>
          </motion.div>

          {/* Mission highlights - Only TEDx brand colors */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-4"
          >
            {[
              { icon: Award, text: "Excellence" },
              { icon: Target, text: "Innovation" },
              { icon: Users, text: "Collaboration" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(230, 43, 30, 0.2)" }}
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                <span className="text-white font-medium text-sm sm:text-base">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/70" />
          </motion.div>
        </div>
      </div>

      {/* Patron Section */}
      <div className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 px-2">
              Our <span className="text-red-600">Patron</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
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

      {/* Our Curators Section */}
      <div className="relative z-10 py-16 md:py-24 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 px-2">
              Our <span className="text-red-600">Curators</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Strategic guidance and academic excellence
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
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
      <div className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 px-2">
              Faculty <span className="text-red-600">Coordinators</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Curating excellence and fostering innovation
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
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
      <div className="relative z-10 py-16 md:py-24 bg-gradient-to-b from-transparent to-red-900/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 px-2">
              Student <span className="text-red-600">Co-Heads</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Leading with passion and driving innovation
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
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
      <div className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 px-2">
              Student <span className="text-red-600">Coordinators</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Managing operations with dedication and precision
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
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
      <div className="relative z-10 py-16 md:py-24 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 px-2">
              Our <span className="text-red-600">Directors</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Specialized leadership across all domains
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      <div className="relative z-10 py-16 md:py-24 bg-gradient-to-r from-red-600/20 to-red-700/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedSection className="text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 px-2">Our Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { number: "15+", label: "Team Members" },
                { number: "1", label: "Unified Vision" },
                { number: "∞", label: "Ideas Worth Spreading" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center px-4"
                >
                  <motion.div 
                    className="text-4xl sm:text-5xl md:text-6xl font-black text-red-400 mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-300 text-base sm:text-lg font-medium">{stat.label}</div>
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

// Add custom scrollbar styles
const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #E62B1E;
    border-radius: 2px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #C41E3A;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
