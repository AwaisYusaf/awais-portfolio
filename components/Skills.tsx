import React from "react";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="h-screen w-screen flex flex-col relative items-center justify-center text-center mx-auto">
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 uppercase text-xl">
        skills
      </h3>

      <h3 className="absolute top-36 tracking-[3px] text-gray-500 uppercase text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-3 xl:grid-cols-6 gap-5 p-5">
        <Skill
          imgUrl={
            "https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png"
          }
          p={100}
          padding={false}
          translateLeft={false}
        />
        <Skill
          imgUrl={
            "https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png"
          }
          p={90}
          padding={true}
          translateLeft={false}
        />
        <Skill
          imgUrl={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
          }
          p={100}
          padding={true}
          translateLeft={false}
        />
        <Skill
          imgUrl={
            "https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/635543691615050863a92f1f_nextjs-logo.png"
          }
          p={100}
          padding={false}
          translateLeft={false}
        />
        <Skill
          imgUrl={
            "https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png"
          }
          p={100}
          padding={true}
          translateLeft={false}
        />
        <Skill
          imgUrl={"https://img.icons8.com/color/512/nodejs.png"}
          p={100}
          padding={true}
          translateLeft={false}
        />
        <Skill
          imgUrl={"https://www.svgviewer.dev/static-svgs/476576/typescript.svg"}
          p={100}
          padding={false}
          translateLeft={true}
        />

        <Skill
          imgUrl={
            "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
          }
          p={100}
          padding={false}
          translateLeft={true}
        />
        <Skill
          imgUrl={
            "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/97_Docker-512.png"
          }
          p={100}
          padding={true}
          translateLeft={true}
        />
        <Skill
          imgUrl={
            "https://cdn.dribbble.com/users/3490038/screenshots/13820034/motion_logo_dribbble_dark2_4x.png"
          }
          p={100}
          padding={false}
          translateLeft={true}
        />
        <Skill
          imgUrl={
            "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
          }
          p={100}
          padding={true}
          translateLeft={true}
        />
        <Skill
          imgUrl={
            "https://cdn.iconscout.com/icon/free/png-256/aws-1869025-1583149.png"
          }
          p={100}
          padding={true}
          translateLeft={true}
        />
      </div>
    </div>
  );
};

export default Skills;
