import React from "react";
import backgroundVideo from "../assets/portfolio/158742-817481583_small.mp4";

const Contact = () => {
  return (
    <div name="Contact" className="relative w-full min-h-screen text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/rbeqdxjb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>

      <footer className="relative z-20 bg-black bg-opacity-75 text-center py-4">
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Creative Junction. All rights reserved.{" "}
          <span role="img" aria-label="sparkles">✨</span>{" "}
          <span role="img" aria-label="palette">🎨</span>{" "}
          <span role="img" aria-label="heart">❤️<br /></span>
          <span >9424221696 <br />
          </span>{" "}

          <span role="img" aria-label="sparkles">creativ_junction@gmail.com</span>{" "}
        </div>
      </footer>
    </div>
  );
};

export default Contact;


