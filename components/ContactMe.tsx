"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function ContactMe({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center mx-auto items-center px-10 justify-evenly"
    >
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 uppercase text-xl">
        Contact
      </h3>
      <div>
        <h4 className="text-4xl text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk</span>
        </h4>
        <div></div>
      </div>
    </motion.div>
  );
}
