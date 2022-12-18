import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="p-5 flex items-start flex-row justify-between sticky top-0 max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://twitter.com/h_alph"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/halpha9"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/harryalpha"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex-row flex items-center"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase tracking-widest hidden md:inline-flex text-sm text-neutral-400 font-semibold">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
