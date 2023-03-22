"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  imgUrl: string;
  post: string;
  company: string;
  from: string;
  to: string;
  skillbadgesurl: string[];
  responsibilities: string[];
};

export default function ExperienceCard(props: Props) {
  return (
    <article className="mb-5 flex flex-col items-center space-y-2 flex-shrink-0 w-[400px] md:w-[450px] lg:w-[600px] bg-[#292929] p-10 snap-center overflow-hidden  cursor-pointer mt-16">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        src={props.imgUrl}
        alt="icon"
        className="rounded-full object-center max-h-[100px] my-auto"
      />
      <div className="flex flex-col items-start">
        <h3 className="uppercase text-3xl font-light tracking-wider">
          {props.post}
        </h3>
        <h4 className="uppercase text-xl font-semibold">{props.company}</h4>
        <div className="flex">
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png"
            alt=""
            className="w-12 h-12 p-2 mx-auto"
          /> */}
          {props.skillbadgesurl.map((skill, i) => {
            return <img key={i} src={skill} alt="" className="w-12 h-12 p-2" />;
          })}
        </div>
        <p className="text-gray-300 uppercase tracking-wider">
          FROM {props.from} TO {props.to}
        </p>
        <ul className="list-disc ml-5 space-y-3 text-sm">
          {props.responsibilities.map((r, i) => {
            return <li key={i}>{r}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}
