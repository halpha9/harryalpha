import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useApp } from "../../providers/app";
import { AiFillGithub, AiOutlineClose, AiOutlineLink } from "react-icons/ai";
import { ProjectSanity } from "../../types/sanity";

type Props = {
  id: string | number | null;
  projects: ProjectSanity[];
};
export default function ProjectModal({ id, projects }: Props) {
  const project = projects?.find((item) => item.id === id && id!.toString());
  const { setState, state } = useApp();
  return (
    <>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
          style={{ pointerEvents: "auto" }}
          onClick={() => setState({ ...state, selected: null })}
          className="left-0 top-0 absolute bg-neutral-900 rounded-lg bg-opacity-80 w-full h-full"
        >
          <div
            style={{ top: window.scrollY }}
            className="absolute top-20 left-0 mt-28 black pointer-events-none overflow-hidden p-0"
          >
            <motion.div
              className="pointer-events-auto relative rounded-md overflow-hidden mx-auto my-auto w-1/2 h-full"
              layoutId={`card-container-${id}`}
            >
              <motion.div className="bg-neutral-50 mt-10 rounded-lg pointer-events-auto p-8 w-full mx-auto h-full">
                <motion.img
                  layoutId={`card-image-container-${id}`}
                  src={project.image}
                  className="object-cover rounded mt-4"
                  alt={project.name}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="rounded-lg pointer-events-auto p-8 w-full mx-auto h-full text-center"
              layoutId={`title-container-${id}`}
            >
              <span className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 underline decoration-blue-900">
                {project.name}
              </span>
            </motion.div>

            <motion.div
              layoutId={`description-container-${id}`}
              className="bg-[#292929] rounded-lg pointer-events-auto p-8 w-8/12 mx-auto h-full"
              animate
            >
              <motion.p
                className="text-base font-base leading-tight"
                layoutId={`description-text-${id}`}
              >
                {project.description}
              </motion.p>
            </motion.div>
            <motion.div
              layoutId={`project-buttons-${id}`}
              className="self-end flex space-x-4 rounded-lg pointer-events-auto pt-4 w-8/12 mx-auto h-full"
            >
              <div>
                <AiOutlineClose size={30} color="grey" />
              </div>
              <a href={project.github}>
                <AiFillGithub size={30} color="grey" />
              </a>
              <a href={project.github}>
                <AiOutlineLink size={30} color="grey" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
