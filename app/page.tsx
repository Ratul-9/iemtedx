"use client";
import { useEffect, useState } from "react";
import { ChevronRight, MapPin, Calendar, Clock } from "lucide-react";
import Footer from "@/components/footer";
import CountdownTimer from "@/components/TimerClock";

const imageList = [
  "/images/MoodBoard1.png",
  "/images/MoodBoard2.png", 
  "/images/MoodBoard3.png",
];

// Mock CountdownTimer component
// const CountdownTimer = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 21,
//     hours: 12,
//     minutes: 30,
//     seconds: 45
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => ({
//         ...prev,
//         seconds: prev.seconds > 0 ? prev.seconds - 1 : 59
//       }));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="text-center">
//       <h3 className="text-xl font-semibold mb-4">Event Countdown</h3>
//       <div className="grid grid-cols-4 gap-4">
//         {Object.entries(timeLeft).map(([unit, value]) => (
//           <div key={unit} className="text-center">
//             <div className="text-2xl font-bold">{value}</div>
//             <div className="text-sm capitalize">{unit}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



const MapWidget = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="h-96 bg-gradient-to-br from-blue-50 to-blue-100 relative">
        {/* Mock map interface */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Institute of Engineering & Management
            </h3>
            <p className="text-gray-600 mb-4">Salt Lake, Kolkata</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>August 22, 2025</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                {/* <span>9:00 AM - 6:00 PM</span> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mock map markers */}
        {/* <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-green-500 rounded-full shadow-lg"></div> */}
      </div>
      
      <div className="p-6 bg-white">
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="w-screen h-screen grid grid-cols-1 grid-rows-[auto] lg:grid-cols-10 lg:grid-rows-2 gap-4 p-4">
        <div className="col-span-1 lg:col-span-7 row-span-1 lg:row-span-2 bg-gray-200 overflow-hidden rounded-lg relative">
          <img
            src={imageList[currentIndex]}
            alt="Main Visual"
            className="w-full h-full object-cover transition-opacity duration-700"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="group col-span-1 lg:col-span-3 row-span-1 bg-white/90 backdrop-blur-md p-8 rounded-2xl text-black shadow-xl border border-gray-200 transition-all duration-500 ease-in-out hover:bg-black hover:text-black">
          <div className="flex justify-center mb-4">
            <span className="text-base font-semibold bg-[#E62B1E] text-white px-6 py-2 rounded-full tracking-wide shadow-md transition-all duration-500 ease-in-out group-hover:bg-white group-hover:text-black">
              22 August, 2025
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4 text-[#111] leading-snug transition-all duration-500 ease-in-out group-hover:text-[#E62B1E]">
            THEME: <span className="text-black group-hover:text-[#E62B1E]">CTRL + ALT + DEL</span>
          </h2>

          <p className="text-lg text-center text-gray-700 max-w-xl mx-auto transition-all duration-500 ease-in-out group-hover:text-white">
            A reset on mindset, systems, creativity, and possibilities.
          </p>
        </div>

        <div className="col-span-1 lg:col-span-3 row-span-1 bg-black p-6 rounded-3xl text-white flex items-center justify-center">
          <CountdownTimer />
        </div>
      </div>

      {/* Title */}
      <div className="headline w-full text-center mt-10">
        <h1 className="text-4xl font-bold md:text-5xl text-black transition-all duration-500 ease-in-out hover:scale-105 hover:text-red-600">
          TEDxIEMSaltLake
        </h1>
      </div>

      {/* Mission, Vision, Goals - New Elegant Design */}
      <div className="w-full py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Mission */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 transform -skew-y-1 rounded-3xl shadow-2xl"></div>
            <div className="relative bg-white transform skew-y-1 rounded-3xl shadow-xl p-12 lg:p-16">
              <div className="transform -skew-y-1">
                <div className="mb-8">
                  <span className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold text-sm tracking-wide uppercase shadow-lg">
                    Our Mission
                  </span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                  Mission
                </h2>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                  TEDxIEM Salt Lake is a celebration of ideas, innovation, and inspiration born from the rich academic and cultural legacy of the Institute of Engineering &amp; Management, Salt Lake—one of Eastern India&rsquo;s premier educational institutions. Rooted in IEM&rsquo;s decades-long commitment to excellence in education, research, and societal impact, this independently organized TEDx event is designed to amplify voices that spark meaningful change. We aim to bring together a diverse array of thinkers, creators, and changemakers from across disciplines to share powerful stories and fresh perspectives. Guided by TED&rsquo;s global ethos of &ldquo;ideas worth spreading,&rdquo; TEDxIEM Salt Lake seeks to be a platform where tradition meets modernity, knowledge meets action, and local brilliance meets global relevance—all in the vibrant spirit of Kolkata.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-700 transform skew-y-1 rounded-3xl shadow-2xl"></div>
            <div className="relative bg-white transform -skew-y-1 rounded-3xl shadow-xl p-12 lg:p-16">
              <div className="transform skew-y-1">
                <div className="mb-8 text-right">
                  <span className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-semibold text-sm tracking-wide uppercase shadow-lg">
                    Our Vision
                  </span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight text-right">
                  Vision
                </h2>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light text-right">
                  TEDxIEM Salt Lake envisions a world where transformative ideas transcend boundaries—intellectual, cultural, and generational—to spark lasting impact. We aspire to establish a vibrant platform that not only celebrates knowledge and creativity but also fosters a spirit of critical inquiry, empathy, and innovation within and beyond the academic community. Rooted in the legacy of the Institute of Engineering &amp; Management, Salt Lake, we aim to inspire the youth, engage thought leaders, and empower every voice to participate in conversations that shape the future. Through carefully curated talks and performances, TEDxIEM Salt Lake seeks to become a catalyst for dialogue, collaboration, and visionary thinking that uplifts communities and contributes to a more thoughtful, inclusive, and progressive world.
                </p>
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 transform -skew-y-1 rounded-3xl shadow-2xl"></div>
            <div className="relative bg-white transform skew-y-1 rounded-3xl shadow-xl p-12 lg:p-16">
              <div className="transform -skew-y-1">
                <div className="mb-8">
                  <span className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold text-sm tracking-wide uppercase shadow-lg">
                    Our Goals
                  </span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                  Goals
                </h2>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                  The goal of TEDxIEM Salt Lake is to create a dynamic platform that celebrates and amplifies powerful ideas capable of inspiring change at both local and global levels. Rooted in the academic legacy of the Institute of Engineering &amp; Management, Salt Lake, this independently organized TEDx event aims to foster interdisciplinary dialogue, highlight intellectual and creative excellence, and provide a voice to youth leaders, visionaries, and community change-makers. By bridging the rich cultural heritage of Kolkata with TED&rsquo;s global vision, TEDxIEM Salt Lake seeks to cultivate curiosity, promote lifelong learning, and encourage meaningful conversations that drive innovation, empathy, and social responsibility across generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When and Where Section with Map */}
      <div className="when-where-section w-full px-6 sm:px-10 lg:px-20 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              When and Where?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us at the prestigious Institute of Engineering &amp; Management, Salt Lake for an unforgettable day of ideas worth spreading.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Event Details */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Date &amp; Time</h3>
                    <p className="text-gray-600">Mark your calendar</p>
                  </div>
                </div>
                <div className="space-y-3 text-lg">
                  <p className="flex items-center gap-3 text-amber-950 font-bold">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <strong>Date:</strong> August 22, 2025
                  </p>
                  <p className="flex items-center gap-3 text-amber-950 font-bold">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <strong>Time:</strong> 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Venue</h3>
                    <p className="text-gray-600">Your destination for inspiration</p>
                  </div>
                </div>
                <div className="space-y-3 text-lg">
                  <p className="flex items-start gap-3 font-bold text-amber-950">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2"></span>
                    <span>10th Floor, Godrej Genesis Building<br /> Institute of Engineering and Management, Salt Lake, Kolkata, West Bengal</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Map Widget */}
            <div>
              <MapWidget />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}