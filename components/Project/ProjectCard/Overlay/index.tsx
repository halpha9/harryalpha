import React from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { useApp } from "../../../../providers/app";
import { Project } from "../../../../types";
import Link from "next/link";

const Overlay = ({ id, github }: { id: string; github: string }) => {
  const { setState } = useApp();

  return (
    <motion.div
      className="absolute inset-0 z-50 flex justify-center items-center flex-col space-y-10"
      initial={{
        scale: 1.5,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        delay: 0.2,
        type: "spring",
        stiffness: 120,
      }}
    >
      <div className="flex flex-row -mt-12 space-x-8">
        <motion.div
          onClick={() => setState((s) => ({ ...s, selected: id }))}
          whileHover={{
            scale: [1, 0.85],
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <AiFillEye
            size={50}
            className="text-white cursor-pointer hover:text-gray-300"
          />
        </motion.div>
        <motion.a
          rel="noopener noreferrer"
          href={github}
          target="_blank"
          whileHover={{
            scale: [1, 0.85],
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <AiFillGithub
            size={50}
            className="text-white cursor-pointer hover:text-gray-300"
          />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Overlay;
