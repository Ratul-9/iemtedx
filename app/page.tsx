'use client';

import CountdownTimer from "@/components/TimerClock";


export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen grid 
      grid-cols-1 grid-rows-[auto] 
      lg:grid-cols-10 lg:grid-rows-2 
      gap-4 p-4">

        <div className="
        col-span-1 lg:col-span-7 
        row-span-1 lg:row-span-2 
        bg-gray-200 overflow-hidden rounded-lg
      ">
          <img
            src="#"
            alt="Main Visual"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="
        col-span-1 lg:col-span-3 
        row-span-1 
        bg-white p-6 rounded-lg  text-black
      ">
          <h2 className="text-2xl font-bold mb-2">Welcome to TEDxIEMSaltLake</h2>
          <p className="text-base leading-relaxed">
            Here you'll find innovation, inspiration, and brilliant minds working together to create something meaningful. Let's dive into the experience!
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
        <h1 className="text-4xl font-bold">TEDxIEMSaltLake</h1>
      </div>

      <div className="about-tedx text-black w-full flex justify-start">
        <div className="max-w-full">
          <h1 className="text-2xl text-[#E62B1E] font-semibold mb-2">Mission</h1>
          <p className="text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui suscipit magnam quisquam architecto autem dolorum 
            consequatur assumenda quam aliquid, distinctio excepturi magni debitis aut, enim doloremque repudiandae aliquam iusto 
            saepe!

          </p>
        </div>

      </div>
      <div className="about-tedx text-black w-full flex justify-start">
        <div className="max-w-full">
          <h1 className="text-2xl text-[#E62B1E] font-semibold mb-2">Vision</h1>
          <p className="text-base leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus deleniti qui itaque, dignissimos non, adipisci beatae
             perferendis modi cupiditate ea architecto, aliquam unde nihil similique aperiam eligendi quasi facere mollitia.
          </p>
        </div>

      </div>
      <div className="about-tedx text-black w-full flex justify-start">
        <div className="max-w-full">
          <h1 className="text-2xl text-[#E62B1E] font-semibold mb-2">Goals</h1>
          <p className="text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque in error mollitia natus necessitatibus, 
              eius adipisci dolore cumque molestias enim consequuntur exercitationem voluptas deleniti explicabo totam vitae 
              asperiores quas.
          </p>
        </div>

      </div>
      <div className="when-where-section w-full px-4 py-12">
        <h2 className="text-3xl font-semibold text-black mb-4 text-left">
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
