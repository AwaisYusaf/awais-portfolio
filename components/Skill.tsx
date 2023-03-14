"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  imgUrl: string;
  p: number;
  padding: boolean;
  translateLeft: boolean;
};

const Skill = (props: Props) => {
  return (
    <div className="group relative flex rounded-full cursor-default">
      <motion.img
        initial={{ x: props.translateLeft ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4 }}
        src={props.imgUrl}
        className={`object-cover w-20 h-20 xl:w-24 xl:h-24 border border-gray-500 filter group-hover:grayscale rounded-full ${
          props.padding ? "p-2" : ""
        }`}
      />
      <div className="absolute w-20 h-20 xl:w-24 xl:h-24 bg-white bg-opacity-80 opacity-0 group-hover:opacity-90 rounded-full">
        <div className="flex h-full w-full justify-center items-center">
          <p className="text-2xl text-black font-semibold">{props.p}%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
