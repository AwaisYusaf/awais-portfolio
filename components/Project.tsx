"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  name: string;
};

function Project({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 p-20 w-screen flex-shrink-0 snap-center h-[95vh]">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        src="https://freepngimg.com/thumb/categories/1448.png"
        alt=""
      />
      <div className="max-w-5xl space-y-4 px-0 md:p-10">
        <h3 className="text-4xl text-semibold text-center">Details</h3>
        <p className="text-lg text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ratione
          est tempora? Repellendus neque, a maiores cumque atque similique
          saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          ea nisi quo numquam cum cupiditate distinctio omnis libero provident
          voluptas.
        </p>
      </div>
    </div>
  );
}

export default Project;
