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
        <ExperienceCard
          imgUrl={
            "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ira7gnxiscc5c0zkq3ky"
          }
          post={"React Developer"}
          company={"DevNation Pvt.Ltd"}
          from={"Jan-2021"}
          to={"April-2021"}
          skillbadgesurl={[
            "https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png",
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
          ]}
          responsibilities={[]}
        />

        <ExperienceCard
          imgUrl={"/logo.png"}
          post={"Frontend Developer"}
          company={"HauntedSea.io"}
          from={"June-2021"}
          to={"Jul-2021"}
          skillbadgesurl={[
            "https://www.seekpng.com/png/full/377-3772047_sass-logo.png",
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            "https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png",
          ]}
          responsibilities={[]}
        />

        <ExperienceCard
          imgUrl={"https://avatars.githubusercontent.com/u/99120681?s=280&v=4"}
          post={"Web3 & Metaverse Developer"}
          company={"Panaverse DAO"}
          from={"Aug-2022 UP"}
          to={"TODAY"}
          skillbadgesurl={[
            "https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
            "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
          ]}
          responsibilities={[]}
        />

      </div>
    </main>
  );
};

export default Experience;
