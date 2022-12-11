import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ProjectsArray } from "../../utils/projects";
import { useApp } from "../../providers/app";

export default function ProjectModal({ id }: { id: string | number | null }) {
  const project = ProjectsArray?.find(
    (item) => item.id === id && id!.toString()
  );
  const { setState, state } = useApp();
  return (
    <>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, delay: 0.15 }}
            style={{ pointerEvents: "auto" }}
            onClick={() => setState({ ...state, selected: null })}
            className="left-0 top-0 absolute bg-gray-300 bg-opacity-40 w-full h-full "
          >
            <div
              style={{ top: window.scrollY }}
              className="absolute w-8/12 mt-10 my-auto mx-auto black pointer-events-none overflow-hidden p-0"
            >
              <motion.div
                className="pointer-events-auto relative rounded-md  overflow-hidden w-full h-full mx-0 my-auto"
                layoutId={`card-container-${id}`}
              >
                <motion.div
                  className="z-1  top-0 left-0 overflow-hidden h-[420] w-screen"
                  layoutId={`card-image-container-${id}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="pointer-events-auto w-full h-full relative object-contain"
                  />
                </motion.div>
                <motion.div
                  className="z-1 absolute top-4 left-4 max-w-[300]"
                  layoutId={`title-container-${id}`}
                >
                  <span className="text-lg">{project.title}</span>
                  <h2>{project.title}</h2>
                </motion.div>
                <motion.div
                  layoutId={`description-container-${id}`}
                  className="bg-gray-400 pointer-events-auto p-8 w-full"
                  animate
                >
                  <motion.p layoutId={`description-text-${id}`}>
                    {project.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
