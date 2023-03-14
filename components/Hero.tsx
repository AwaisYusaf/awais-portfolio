"use client";
import React from "react";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Full Stack Developer", "NextJS Expert", "WordPress Developer"],
    loop: true,
    delaySpeed: 2002,
  });
  return (
    <div className="flex flex-col justify-center space-y-7 items-center min-h-screen w-full overflow-hidden">
      <BackgroundCircles />

      <img
        alt=""
        src="https://avatars.githubusercontent.com/u/69912913?v=4"
        className="relative mx-auto object-cover w-32 h-32 rounded-full"
      />
      <div className="text-center z-10">
        <h1 className="uppercase text-sm text-gray-200 tracking-[15px] pb-2">
          NextJS Engineer
        </h1>
        <h1 className="font-semibold text-3xl lg:text-6xl px-5">
          <span>{text}</span>
          <Cursor />
        </h1>
      </div>
      <div className="z-20 flex flex-shrink-0">
        <a href="#about">
          <button className="heroButton">About</button>
        </a>
        <a href="#experience">
          <button className="heroButton">Experience</button>
        </a>
        <a href="#skills">
          <button className="heroButton">Skills</button>
        </a>
        <a href="#projects" className="cursor-pointer">
          <button className="heroButton">Projects</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
