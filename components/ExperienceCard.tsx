import React from "react";

type Props = {};

export default function ExperienceCard(props: Props) {
  return (
    <article className="flex flex-col items-center space-y-2 flex-shrink-0 w-[400px] md:w-[450px] lg:w-[600px] bg-[#292929] p-10 snap-center overflow-hidden">
      <img
        src="https://m.media-amazon.com/images/I/31epF-8N9LL.png"
        alt="icon"
        className="w-32 h-32 lg:w-48 lg:h-48 rounded-full object-center"
      />
      <div className="flex flex-col items-start">
        <h3>Operations Manager</h3>
        <p>Amazon</p>
        <div className="flex">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png"
            alt=""
            className="w-12 h-12 p-2 mx-auto"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png"
            alt=""
            className="w-12 h-12 p-2"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png"
            alt=""
            className="w-12 h-12 p-2"
          />
        </div>
        <p className="text-gray-300 uppercase tracking-wider">FROM ... TO...</p>
        <ul className="list-disc ml-5 space-y-3 text-lg">
          <li>Manages Operatioons</li>
          <li>Manages Operatioons</li>
          <li>Manages Operatioons</li>
        </ul>
      </div>
    </article>
  );
}
