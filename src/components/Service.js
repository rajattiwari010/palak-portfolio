import React from "react";
import NssGecrUse from "../assets/portfolio/Owner.png";
import CodePenUse from "../assets/portfolio/Manager.png";
import HousePricePredictionUse from "../assets/portfolio/Accountent.png";
import PortFolioUse from "../assets/portfolio/NewMember.png";
import NewPortFolioUse from "../assets/portfolio/NewPortFolioUse.png";
import ForestFireUse from "../assets/portfolio/dev.png";
import backgroundVideo from "../assets/portfolio/158742-817481583_small.mp4";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      src: NssGecrUse,
      designation: "Founder",
    },
    {
      id: 2,
      src: CodePenUse,
      designation: "Manager",
    },
    {
      id: 3,
      src: HousePricePredictionUse,
      designation: "Designer",
    },
    {
      id: 4,
      src: PortFolioUse,
      designation: "2D Animator",
    },
    {
      id: 5,
      src: ForestFireUse,
      designation: "Designer",
    },
  ];

  return (
    <div name="Team" className="relative w-full min-h-screen text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            Team
          </p>
          <p className="py-6">Meet the dynamic members of our team</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {teamMembers.map(({ id, src, designation }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center p-4">
                <p className="text-lg font-semibold">{designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;



