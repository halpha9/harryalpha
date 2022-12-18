import React from "react";
import { motion } from "framer-motion";
import { SkillsSanity } from "../../types/sanity";
type Props = {
  directionLeft?: boolean;
  Icon: any;
  skill: SkillsSanity;
};

export default function Skill({ Icon, directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="rounded-full h-24 w-24 xl:h-32 xl:w-32 items-center justify-center flex border-gray-500 border filter group-hover:bg-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        <Icon size={60} />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-black text-lg font-bold opacity-100">
            {skill.progress}
          </p>
        </div>
      </div>
    </div>
  );
}
