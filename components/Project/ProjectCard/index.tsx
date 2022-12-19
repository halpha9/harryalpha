import React, { useState } from "react";
import { Project } from "../../../types";
import Overlay from "./Overlay";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { useApp } from "../../../providers/app";
interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({
  project: { image, skills, name, id, github, summaryPoints },
}) => {
  const [hover, setHover] = useState(false);
  const { setState } = useApp();
  return (
    <motion.div
      layoutId={`card-container-${id}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => {
        setTimeout(() => {
          setHover(false);
        }, 8000);
      }}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
    >
      <div className="w-full h-fit">
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          layoutId={`card-image-container-${id}`}
          src={image}
          className="rounded-xl w-8/12 h-fit object-contain"
          alt="Project image"
        />
      </div>

      <div className="flex items-center justify-between w-full ">
        <div className="flex">
          {skills &&
            skills.length > 0 &&
            skills.map((s, i) => <Skill index={i} key={i} name={s} />)}
        </div>
        <motion.div
          layoutId={`project-buttons-${id}`}
          onClick={() => setState((s) => ({ ...s, selected: id }))}
          transition={{
            duration: 0.25,
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          exit={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-row space-x-8"
        >
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
              size={30}
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
              size={30}
              className="text-white cursor-pointer hover:text-gray-300"
            />
          </motion.a>
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
            <AiOutlineLink
              size={30}
              className="text-white cursor-pointer hover:text-gray-300"
            />
          </motion.a>
        </motion.div>
      </div>
      <motion.h1
        layoutId={`project-title-${id}`}
        className="text-xl underline font-bold tracking-tight decoration-blue-900 my-4"
      >
        {name}
      </motion.h1>

      <motion.ul
        layoutId={`description-text-${id}`}
        className="list-disc space-y-4 ml-5 text-lg w-full"
      >
        {summaryPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default ProjectCard;
