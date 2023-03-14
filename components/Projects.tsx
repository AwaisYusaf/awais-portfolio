import React from "react";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="h-screen flex flex-col relative items-center justify-center text-center mx-auto">
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 uppercase text-xl">
        projects
      </h3>
    </div>
  );
}

export default Projects;
