import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center relative text-center">
      <h3 className="absolute top-24 xl:top-12 tracking-[20px] text-gray-500 uppercase text-sm">
        Experience
      </h3>
      <div className="flex overflow-x-scroll w-full space-x-5 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </main>
  );
};

export default Experience;
