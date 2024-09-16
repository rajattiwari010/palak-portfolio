import React from "react";
import VideoBackground from "../assets/portfolio/158742-817481583_small.mp4";

const Why = () => {
  return (
    <div name="Why" className="relative w-full min-h-screen text-white">
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
            Why
          </p>
        </div>

        <p className="text-xl mt-20 text-justify">
          At Creative Junction, we stand out for several compelling reasons:<br/><br/>
          <span className="font-bold">Expertise in2D and 3D Art:</span> With a deep understanding of both 2D and 3D artistry, we bring a unique blend of creativity and technical precision to every project.<br/><br/>
          <span className="font-bold">Customized Video Invitations:</span> We specialize in crafting personalized video invites for various occasions, including weddings, birthdays, inaugurations, and more. Each invitation is tailored to reflect your style and theme, ensuring a memorable experience for your guests.<br/><br/>
          <span className="font-bold">Attention to Detail:</span> We pay meticulous attention to every detail, from the visual aesthetics to the narrative flow, ensuring that your video invite is flawless and impactful.<br/><br/>
          <span>Innovative Approach:</span> Our team thrives on innovation, constantly exploring new techniques and technologies to push the boundaries of video editing and deliver cutting-edge results.<br/><br/>
          <span className="font-bold">Client-Centric Focus:</span> At Creative Junction, your satisfaction is our priority. We work closely with you to understand your vision and bring it to life, ensuring that the final product exceeds your expectations.<br/><br/>
          <span className="font-bold">Timely Delivery:</span> We understand the importance of deadlines, and we strive to deliver high-quality video invites within the agreed-upon timeframe, ensuring a seamless experience for you and your guests.<br/><br/>
          Connect with Creative Junction for a blend of artistry, expertise, and dedication that transforms ordinary moments into extraordinary experiences.
        </p>
      </div>
    </div>
  );
};

export default Why;


