"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};
import { motion } from "framer-motion";

export default function Header({}: Props) {
  return (
    <header className="flex items-center justify-between sticky top-0 max-w-6xl mx-auto bg-[rgb(36,36,36)] text-white">
      <motion.div
        className="flex"
        initial={{ x: "-60vw", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <SocialIcon
          className="w-[10px]"
          url="https://wa.me"
          network="whatsapp"
          bgColor="transparent"
          fgColor="lightgray"
        />
        <SocialIcon
          url="https://wa.me"
          network="facebook"
          bgColor="transparent"
          fgColor="lightgray"
        />
        <SocialIcon
          url="https://wa.me"
          network="twitter"
          bgColor="transparent"
          fgColor="lightgray"
        />
        <SocialIcon
          url="https://wa.me"
          network="github"
          bgColor="transparent"
          fgColor="lightgray"
        />
      </motion.div>
      <motion.div
        className="flex items-center"
        initial={{ x: "60vw", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          bgColor="transparent"
          fgColor="lightgray"
        />
        <p className="uppercase hidden md:flex text-gray-400 text-sm">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}
