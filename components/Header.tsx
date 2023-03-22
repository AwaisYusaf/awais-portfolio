"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header({}: Props) {
  return (
    <header className="flex items-center justify-between overflow-hidden sticky top-0 max-w-6xl mx-auto text-white z-50">
      <motion.div
        className="flex"
        initial={{ x: "-60vw", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <SocialIcon
          className="w-[10px]"
          url="https://wa.me/00923065396548"
          network="whatsapp"
          bgColor="transparent"
          fgColor="lightgray"
        />
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100053753363947"
          network="facebook"
          bgColor="transparent"
          fgColor="lightgray"
        />
        <SocialIcon
          url="https://twitter.com/AwaisYusaf"
          network="twitter"
          bgColor="transparent"
          fgColor="lightgray"
        />
        <SocialIcon
          url="https://www.github.com/AwaisYusaf"
          network="github"
          bgColor="transparent"
          fgColor="lightgray"
        />
      </motion.div>
      <motion.div
        className="flex items-center space-x-3"
        initial={{ x: "60vw", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <a href="mailto:awaixkhan3@gmail.com">
          <Image src="/mail.png" width="30" height="30" alt="" className="" />
        </a>
        <a
          className="uppercase hidden md:flex text-gray-400 text-sm"
          href="mailto:awaixkhan3@gmail.com"
        >
          Get in touch
        </a>
      </motion.div>
    </header>
  );
}
