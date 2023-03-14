import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <main className="h-screen flex flex-col justify-center items-center relative text-center">
      <h3 className="absolute top-12 tracking-[20px] text-gray-500 uppercase text-xs lg:text-xl text-center">
        Experience
      </h3>
      <div className="flex overflow-x-scroll w-full px-10 space-x-5 snap-x snap-mandatory mt-12 lg:mt-24">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </main>
  );
};

export default Experience;
