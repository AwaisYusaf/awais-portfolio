import React from "react";
import Project from "./Project";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="h-screen flex flex-col relative items-center justify-center text-center mx-auto">
      <h3 className="absolute top-16 tracking-[20px] text-gray-500 uppercase text-xl">
        projects
      </h3>
      <div className="flex overflow-x-scroll w-full space-x-5 snap-x snap-mandatory z-20">
        {/* <Project /> */}
      </div>
      <div className="absolute top-[30%] h-[200px] w-full bg-[#F7AB0A]/10 -skew-y-12" />
    </div>
  );
}

export default Projects;
