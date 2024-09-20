import React from "react";
import NssGecrUse from "../assets/portfolio/NssGecrUse.png";
import CodePenUse from "../assets/portfolio/CodePenUse.png";
import HousePricePredictionUse from "../assets/portfolio/HousePricePredictionUse.png";
import PortFolioUse from "../assets/portfolio/PortFolioUse.png";
import NewPortFolioUse from "../assets/portfolio/NewPortFolioUse.png";
import ForestFireUse from "../assets/portfolio/ForestFireUse.png";
import backgroundVideo from "../assets/portfolio/158742-817481583_small.mp4";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: NssGecrUse,
      demoLink: "https://1drv.ms/v/s!Aj1Qiux7g6f-gbBBoPZZQkWokt4tIA?e=a18kqL",
      codeLink: "https://1drv.ms/f/s!Aj1Qiux7g6f-gbA5kyWFP04PjaPN3g?e=7H2us4",
    },
    {
      id: 2,
      src: CodePenUse,
      demoLink: "https://1drv.ms/f/s!Aj1Qiux7g6f-gbA4VncYfT8QwwcQqA?e=JUVvLm",
      codeLink: "https://1drv.ms/b/s!Aj1Qiux7g6f-gbBGsVgcIYa1-GVcbA?e=7ZKnMo",
    },
    {
      id: 3,
      src: HousePricePredictionUse,
      demoLink: "https://1drv.ms/f/s!Aj1Qiux7g6f-gbA8O6rvW6_NMyzMKQ?e=9FoTX4",
      codeLink: "https://1drv.ms/v/s!Aj1Qiux7g6f-ga8gjFzjhrGWK6UPpQ?e=uznGnQ",
    },
    {
      id: 4,
      src: PortFolioUse,
      demoLink: "https://1drv.ms/v/s!Aj1Qiux7g6f-gbBIz9DKj8bqTzx33A?e=qc7YTr",
      codeLink: "https://1drv.ms/f/s!Aj1Qiux7g6f-gbA652g1tNI4iCW3bQ?e=na7B22",
    },
    {
      id: 5,
      src: NewPortFolioUse,
      demoLink: "https://1drv.ms/i/s!Aj1Qiux7g6f-ga8vxdxqBmcSwfqpUg?e=rlhI4G",
      codeLink: "https://1drv.ms/f/s!Aj1Qiux7g6f-gbA7Tb-SIn_NuWYJcQ?e=w8PeGL",
    },
    {
      id: 6,
      src: ForestFireUse,
      demoLink: "https://1drv.ms/v/s!Aj1Qiux7g6f-gaESXtUoiB4g9DaT0Q?e=INxCZ8",
      codeLink: "https://1drv.ms/f/s!Aj1Qiux7g6f-gbA-kEnCqg0ETGJUog?e=RRgOAs",
    },
  ];

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  return (
    <div name="Project" className="relative w-full min-h-screen text-white">
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
            Project
          </p>
          <p className="py-6">Check out some of our work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemoClick(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 bg-blue-500 text-white duration-200 hover:scale-105"
                  >
                    VIEW
                  </button>
                  <button
                    onClick={() => handleCodeClick(codeLink)}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    GO
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Project;


