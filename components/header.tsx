import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { SocialsSanity } from "../types/sanity";
type Props = {
  socials: SocialsSanity[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="p-5 px-8 flex items-start flex-row justify-between sticky top-0 max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        {socials.map(({ url }, i) => (
          <SocialIcon key={i} url={url} fgColor="gray" bgColor="transparent" />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        onClick={() =>
          (window.location.href = `mailto:harryalpha@hotmail.co.uk`)
        }
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
