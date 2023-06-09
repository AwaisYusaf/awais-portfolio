import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      className="relative flex justify-center items-center mt-40"
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className="absolute mt-52 border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping" />
      <div className="absolute mt-52 border border-[#333333] rounded-full h-[300px] w-[300px] " />

      <div className="absolute mt-52 border border-[#333333] rounded-full h-[500px] w-[500px] animate-ping" />
      <div className="absolute mt-52 border border-yellow-200 opacity-20 rounded-full h-[600px] w-[600px] animate-pulse" />
      <div className="absolute mt-52 border border-[#333333] rounded-full h-[700px] w-[700px] animate-ping" />
    </motion.div>
  );
}
