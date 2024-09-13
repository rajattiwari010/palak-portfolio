import React from "react";
import VideoBackground from "../assets/portfolio/158742-817481583_small.mp4";

const About = () => {
  return (
    <div name="about" className="relative w-full min-h-screen text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={VideoBackground} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 "></div>

      <div className="relative max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full z-20">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Welcome to Creative Junction, where art meets technology to bring your special moments to life! As a skilled 2D and 3D artist, I specialize in crafting captivating video invitations for a range of events, including weddings, birthdays, and inaugurations. With a keen eye for detail and a passion for creativity, I transform your ideas into stunning visual experiences that leave a lasting impression.
        </p>

        <br />

        <p className="text-xl font-bold">
          Let's work together to make your event unforgettable! {" "}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Contact Me
          </button>
        </p>
      </div>
    </div>
  );
};

export default About;

