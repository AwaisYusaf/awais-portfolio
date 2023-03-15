"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function ExperienceCard(props: Props) {
  return (
    <article className="flex flex-col items-center space-y-2 flex-shrink-0 w-[400px] md:w-[450px] lg:w-[600px] bg-[#292929] p-10 snap-center overflow-hidden  cursor-pointer mt-16">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        src="https://m.media-amazon.com/images/I/31epF-8N9LL.png"
        alt="icon"
        className="w-28 h-28 lg:w-36 lg:h-36 rounded-full object-center"
      />
      <div className="flex flex-col items-start">
        <h3 className="uppercase text-3xl font-light tracking-wider">
          Operations Manager
        </h3>
        <h4 className="uppercase text-xl font-semibold">Amazon</h4>
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
        <ul className="list-disc ml-5 space-y-3 text-sm">
          <li>
            Manages Operatioons,Manages Operatioons,Manages Operatioons,Manages
            Operatioons,Manages Operatioons,Manages Operatioons
          </li>
          <li>
            Manages Operatioons,Manages Operatioons,Manages Operatioons,Manages
            Operatioons,Manages Operatioons,Manages Operatioons
          </li>
          <li>
            Manages Operatioons,Manages Operatioons,Manages Operatioons,Manages
            Operatioons,Manages Operatioons,Manages Operatioons
          </li>
        </ul>
      </div>
    </article>
  );
}
