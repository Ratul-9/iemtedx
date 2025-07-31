'use client';

import CountdownTimer from "@/components/TimerClock";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/footer";
import SlantedCard from "@/components/slantedCard";
import Image from "next/image";

const imageList = [
  "/images/Defualt.jpg",
  "/images/Defualt.jpg",
  "/images/Defualt.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  return (
    <div>
      <div
        className="w-screen h-screen grid 
      grid-cols-1 grid-rows-[auto] 
      lg:grid-cols-10 lg:grid-rows-2 
      gap-4 p-4"
      >
        <div
          className="
        col-span-1 lg:col-span-7 
        row-span-1 lg:row-span-2 
        bg-gray-200 overflow-hidden rounded-lg relative
      "
        >
          <Image
            src={imageList[currentIndex]}
            alt="Main Visual"
            width={150}
            height={150}
            className="w-full h-full object-cover transition-opacity duration-700"
          >
          </Image>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div
          className="
    group
    col-span-1 lg:col-span-3 
    row-span-1 
    bg-white/90 backdrop-blur-md 
    p-8 
    rounded-2xl 
    text-black 
    shadow-xl 
    border border-gray-200
    transition-all duration-500 ease-in-out
    hover:bg-black hover:text-black
  "
        >
          <div className="flex justify-center mb-4">
            <span
              className="
        text-base font-semibold 
        bg-[#E62B1E] text-white 
        px-6 py-2 
        rounded-full tracking-wide shadow-md
        transition-all duration-500 ease-in-out
        group-hover:bg-white group-hover:text-black
      "
            >
              22 August, 2025
            </span>
          </div>

          <h2
            className="
      text-4xl lg:text-5xl font-heading font-extrabold 
      text-center mb-4 text-[#111] leading-snug 
      transition-all duration-500 ease-in-out 
      group-hover:text-[#E62B1E]
    "
          >
            THEME: <span className="text-black group-hover:text-[#E62B1E]">CTRL + ALT + DEL</span>
          </h2>

          <p
            className="
      text-lg text-center text-gray-700 
      max-w-xl mx-auto font-body 
      transition-all duration-500 ease-in-out 
      group-hover:text-white
    "
          >
            A reset on mindset, systems, creativity, and possibilities.
          </p>
        </div>

        <div className="
        col-span-1 lg:col-span-3 
        row-span-1 
        bg-black p-6 rounded-3xl text-white flex items-center justify-center
      ">
          <CountdownTimer />
        </div>
      </div>

      <div className="headline w-full text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-body font-light text-black transition-all duration-500 ease-in-out hover:scale-105 hover:text-red-600">
          TEDxIEMSaltLake
        </h1>
      </div>


      <div className="w-full space-y-16 py-12 px-6 max-w-5xl mx-auto">

        {/* MISSION - FROM LEFT */}
        <SlantedCard
          title="Mission"
          content="TEDxIEM Salt Lake is a celebration of ideas, innovation, and inspiration born from the rich academic and cultural legacy of the Institute of Engineering & Management, Salt Lake—one of Eastern India’s premier educational institutions. Rooted in IEM’s decades-long commitment to excellence in education, research, and societal impact, this independently organized TEDx event is designed to amplify voices that spark meaningful change. We aim to bring together a diverse array of thinkers, creators, and changemakers from across disciplines to share powerful stories and fresh perspectives. Guided by TED’s global ethos of “ideas worth spreading,” TEDxIEM Salt Lake seeks to be a platform where tradition meets modernity, knowledge meets action, and local brilliance meets global relevance—all in the vibrant spirit of Kolkata."
          from="left"
          bgColor="bg-black shadow-lg"
          clipClass="clip-left-bold"
          titleClass="text-3xl font-extrabold tracking-wide text-white"
          contentClass="text-gray-300 leading-relaxed font-medium"
        />

        {/* VISION - FROM RIGHT */}
        <SlantedCard
          title="Vision"
          content="TEDxIEM Salt Lake envisions a world where transformative ideas transcend boundaries—intellectual, cultural, and generational—to spark lasting impact. We aspire to establish a vibrant platform that not only celebrates knowledge and creativity but also fosters a spirit of critical inquiry, empathy, and innovation within and beyond the academic community. Rooted in the legacy of the Institute of Engineering & Management, Salt Lake, we aim to inspire the youth, engage thought leaders, and empower every voice to participate in conversations that shape the future. Through carefully curated talks and performances, TEDxIEM Salt Lake seeks to become a catalyst for dialogue, collaboration, and visionary thinking that uplifts communities and contributes to a more thoughtful, inclusive, and progressive world."
          from="right"
          bgColor="bg-[#E62B1E] shadow-xl"
          clipClass="clip-right-bold"
          titleClass="text-3xl font-extrabold tracking-wide text-white"
          contentClass="text-black leading-relaxed font-medium"
        />

        {/* GOALS - FROM LEFT */}
        <SlantedCard
          title="Goals"
          content="The goal of TEDxIEM Salt Lake is to create a dynamic platform that celebrates and amplifies powerful ideas capable of inspiring change at both local and global levels. Rooted in the academic legacy of the Institute of Engineering & Management, Salt Lake, this independently organized TEDx event aims to foster interdisciplinary dialogue, highlight intellectual and creative excellence, and provide a voice to youth leaders, visionaries, and community change-makers. By bridging the rich cultural heritage of Kolkata with TED’s global vision, TEDxIEM Salt Lake seeks to cultivate curiosity, promote lifelong learning, and encourage meaningful conversations that drive innovation, empathy, and social responsibility across generations."
          from="left"
          bgColor="bg-black shadow-lg"
          clipClass="clip-left-bold"
          titleClass="text-3xl font-extrabold tracking-wide text-white"
          contentClass="text-gray-300 leading-relaxed font-medium"
        />

      </div>



      <div className="when-where-section w-full px-4 py-12">
        <h2 className="text-3xl font-heading font-semibold text-black mb-4 text-left">
          When and Where?
        </h2>

        <div className="w-full">
          <Image
            src="/images/venue/venue-map.png"
            alt="Venue Map"
            width={28}
            height={20}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
