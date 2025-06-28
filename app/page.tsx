'use client';

import CountdownTimer from "@/components/TimerClock";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

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

      <div className="headline text-black w-full text-center mt-10">
        <h1 className="text-3xl font-heading font-light">TEDxIEMSaltLake</h1>
      </div>

      <div className="about-tedx text-black w-full flex ml-4 justify-start">
        <div className="max-w-full">
          <h1 className="text-2xl text-[#E62B1E] font-heading font-semibold mb-2">Mission</h1>
          <p className="text-base leading-relaxed font-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sus
            consequatur assumenda quam aliquid, distinctio excepturi magni debitis aut, enim doloremque repudiandae aliquam iusto
            saepe!
          </p>
        </div>
      </div>

      <div className="about-tedx text-black w-full flex ml-4 justify-start">
        <div className="max-w-full">
          <h1 className="text-2xl text-[#E62B1E] font-semibold font-heading mb-2">Vision</h1>
          <p className="text-base leading-relaxed font-body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus deleniti qui itaque, dignissimo
            perferendis modi cupiditate ea architecto, aliquam unde nihil similique aperiam eligendi quasi facere mollitia.
          </p>
        </div>
      </div>

      <div className="about-tedx text-black w-full flex ml-4 justify-start">
        <div className="max-w-full">
          <h1 className="text-2xl text-[#E62B1E] font-heading font-semibold mb-2">Goals</h1>
          <p className="text-base leading-relaxed font-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque in error mollitia natus necessitatibus,
            eius adipisci dolore cumque molestias enim consequuntur exercitationem voluptas deleniti explicabo totam vitae
            asperiores quas.
          </p>
        </div>
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
    </div>
  );
}
