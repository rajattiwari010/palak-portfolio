import React from "react";
import VideoBackground from "../assets/portfolio/158742-817481583_small.mp4";

const Journey = () => {
  return (
    <div name="Journey" className="relative w-full min-h-screen text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={VideoBackground} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <div className="relative max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full z-20">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            Journey
          </p>
        </div>

        <p className="text-xl mt-20 text-justify">
          Creative Junction was born from a heartfelt desire to extend the boundaries of physical art and explore the limitless possibilities of digital creativity. As a born art lover, my canvas was always filled with drawings, paintings, making handmade cards, envelopes, and paper products.
          However, everything changed when I welcomed my baby boy into the world.<br/> <br/>
          Driven by a mother's love and a passion for art, I embarked on a transformational journey into the realm of digital artistry. My goal was simple yet profound: to help my son see and experience the world through the enchanting lens of 2D and 3D art.<br/> <br/>
          This journey led me to the doorstep of AAFT University, where I immersed myself in the boundless power of digital art. From mastering graphic designing and video editing to crafting mesmerizing 2D and 3D animations, I discovered a newfound passion that felt like heaven.<br/> <br/>
          Since then, there's been no turning back. Creative Junction became not just a platform but a beacon of creativity, innovation, and heartfelt storytelling. Each creation is infused with the love and dedication of a mother-turned-artist, seeking to educate, inspire, and captivate through the magic of digital art.<br/><br/> <br/>
          Join us at Creative Junction, where art knows no limits and every creation tells a meaningful story. Let's embark on a journey of imagination, exploration, and transformation together.
        </p>
      </div>
    </div>
  );
};

export default Journey;



