'use client';

import CountdownTimer from "@/components/TimerClock";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/footer";
import SlantedCard from "@/components/slantedCard";

const imageList = [
  "/images/carousel/img1.jpg",
  "/images/carousel/img2.jpg",
  "/images/carousel/img3.jpg",
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
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus consequatur assumenda quam aliquid. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus consequatur assumenda quam aliquid. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus consequatur assumenda quam aliquid. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus consequatur assumenda quam aliquid. Lorem ipsum dolor sit amet"
          from="left"
          bgColor="bg-black shadow-lg"
          clipClass="clip-left-bold"
          titleClass="text-3xl font-extrabold tracking-wide text-white"
          contentClass="text-gray-300 leading-relaxed font-medium"
        />

        {/* VISION - FROM RIGHT */}
        <SlantedCard
          title="Vision"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus consequatur assumenda quam aliquid. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus consequatur assumenda quam aliquid. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus consequatur assumenda quam aliquid. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus consequatur assumenda quam aliquid. Lorem ipsum dolor sit ametLorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos perferendis modi cupiditate aperiam. Lorem ipsum dolor sit amet..."
          from="right"
          bgColor="bg-[#E62B1E] shadow-xl"
          clipClass="clip-right-bold"
          titleClass="text-3xl font-extrabold tracking-wide text-white"
          contentClass="text-black leading-relaxed font-medium"
        />

        {/* GOALS - FROM LEFT */}
        <SlantedCard
          title="Goals"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus consequatur assumenda quam aliquid. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus consequatur assumenda quam aliquid. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus consequatur assumenda quam aliquid. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus consequatur assumenda quam aliquid. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque natus necessitatibus, voluptas explicabo. Lorem ipsum dolor sit amet..."
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
          <img
            src="/images/venue/venue-map.png"
            alt="Venue Map"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
