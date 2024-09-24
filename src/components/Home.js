// import React, { useState } from "react";
// import HeroImage from "../assets/CJ_Final_Name_1.png";
// import VideoBackground from "../assets/portfolio/158742-817481583_small.mp4";

// const Home = () => {
//   const [showContactForm, setShowContactForm] = useState(false);

//   const openContactForm = () => {
//     setShowContactForm(true);
//   };

//   const closeContactForm = () => {
//     setShowContactForm(false);
//   };

//   return (
//     <div name="home" className="relative h-screen w-full">
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src={VideoBackground} type="video/mp4" />
//       </video>

//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       <div className="relative max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
//         <nav className="w-full flex justify-center sm:justify-start py-4">
//           <h2 className="text-2xl sm:text-4xl font-bold text-white">
//             CREATIVE JUNCTION
//           </h2>
//         </nav>
//         <div className="flex flex-col md:flex-row items-center justify-center h-full w-full">
//           <div className="flex flex-col justify-center text-center md:text-left md:mr-4 mb-4 md:mb-0">
//             <h2 className="text-3xl sm:text-4xl font-bold text-white">
//               A one stop solution for all designing related problems
//             </h2>
//             <p className="text-white py-4 mx-auto max-w-xs sm:max-w-none">
//               We have years of experience building and designing. <br />
//               Currently, we work on designing applications using modern technologies.
//             </p>

//             <div className="flex justify-center md:justify-start">
//               <button
//                 onClick={openContactForm}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1 cursor-not-allowed md:cursor-auto"
//               >
//                 Schedule Call
//               </button>
//               <button
//                 onClick={() => window.open('https://drive.google.com/', '_blank')}
//                 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2"
//               >
//                 SEE MORE
//               </button>
//             </div>
//           </div>

//           <div className="flex justify-center md:justify-end">
//             <img
//               src={HeroImage}
//               alt="my profile"
//               className="transform scale-110 hover:scale-100 transition-transform duration-300"
//             />
//           </div>
//         </div>
//       </div>

//       {showContactForm && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg max-w-md">
//             <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
//             <form>
//               <label htmlFor="name" className="block mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full border border-gray-300 rounded-md p-2 mb-4"
//               />

//               <label htmlFor="email" className="block mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full border border-gray-300 rounded-md p-2 mb-4"
//               />

//               <label htmlFor="message" className="block mb-2">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full border border-gray-300 rounded-md p-2 mb-4"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Submit
//               </button>
//               <button
//                 onClick={closeContactForm}
//                 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
//               >
//                 Close
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
import React, { useState } from "react";
import HeroImage from "../assets/CJ_Final_Name_1.png";
import VideoBackground from "../assets/portfolio/158742-817481583_small.mp4";

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const openContactForm = () => {
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div name="Home" className="relative h-screen w-full">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={VideoBackground} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
        <nav className="w-full flex justify-center sm:justify-start py-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            CREATIVE JUNCTION
          </h2>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-center h-full w-full">
          <div className="flex flex-col justify-center text-center md:text-left md:mr-4 mb-4 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
  Digital Dreams Delivered&nbsp;
</h2>

            <p className="text-white justify-left py-4 max-w-xs sm:Justify">
            A one stop solution for all designing related problems
            </p>

            <div className="flex justify-center md:justify-start">
              <button
                onClick={openContactForm}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1 cursor-not-allowed md:cursor-auto"
              >
                Schedule Call
              </button>
              
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
          <img
  src={HeroImage}
  alt="my profile"
  className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transform scale-100 hover:scale-105 transition-transform duration-300"
/>
          </div>
        </div>
      </div>

      {showContactForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
            <form>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
              />

              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
              />

              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                onClick={closeContactForm}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
