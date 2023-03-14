"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative lg:flex-row lg:justify-around text-center mx-auto items-center px-10"
    >
      <h3 className="absolute top-20 tracking-[20px] text-gray-500 uppercase text-sm">
        About
      </h3>

      <div className="lg:basis-1/2 flex justify-center mt-12 lg:mt-0">
        <motion.img
          src="/dummy.jpg"
          alt=""
          className="w-48 h-48 object-cover rounded-full lg:w-80 lg:h-96 lg:rounded-lg mt-16"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>
      <div className="flex flex-col lg:items-center lg:basis-1/2">
        <h3 className="semibold text-2xl py-3">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h3>
        <p className="flex-grow-0 lg:text-sm tracking-wider leading-5 text-xs font-light lg:w-3/4">
          Hi, I’m Muhammad Awais. I am a multi-talented human with over 3+ years
          of experiences in wide range of coding disciplines. You can also call
          me a solution architect, experienced web developer. I am also a
          multi-disciplinary maker with over 3 years of experiences in wide
          range of design coding, manager, advisor, entrepreneur, front-end
          developer, backend developer, blockchain enthusiast and more.
          <br />
          My abundant energy fuels me in the pursuit of many interests, hobbies,
          areas of study and artistic endeavors. I’m a fast learner, able to
          pick up new skills and juggle different projects and roles with
          relative ease.
        </p>
      </div>
    </motion.div>
  );
}
