import React from "react";
import { UilGithub, UilLinkedin } from "@iconscout/react-unicons";
const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center space-y-4 md:space-y-12 flex-col">
      <h1 className="text-6xl mb-12 font-pokemon font-semibold text-red-500 text-fill-black ">
        PoKeMoN
      </h1>
      <h3 className="text-3xl font-piksel font-medium text-black">
        Select A Pokemon And See...
      </h3>
      <p className="font-piksel font-light text-xs mt-6 ">
        Pokemon App Build With ReactJs And Redux
      </p>
      <div className="flex items-center justify-evenly space-x-4">
        <a href="https://github.com/ZiyaOzgul" target="_blank">
          <UilGithub className="w-10 h-10 font-piksel text-gray-600 hover:scale-110 ease-in-out duration-500 "></UilGithub>
        </a>
        <a
          href="https://www.linkedin.com/in/ziya-%C3%B6zg%C3%BCl-93816a260"
          target="_blank"
        >
          <UilLinkedin className="w-10 h-10 font-piksel text-blue-600 hover:scale-110 ease-in-out duration-500"></UilLinkedin>
        </a>
      </div>
    </div>
  );
};

export default Home;
