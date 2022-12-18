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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
          style={{ pointerEvents: "auto" }}
          onClick={() => setState({ ...state, selected: null })}
          className="left-0 top-0 absolute bg-gray-50 rounded-lg bg-opacity-40 w-full h-full"
        >
          <div
            style={{ top: window.scrollY }}
            className="absolute mt-10 black pointer-events-none overflow-hidden p-0"
          >
            <motion.div
              className="pointer-events-auto relative rounded-md overflow-hidden mx-auto my-auto w-1/2 h-full"
              layoutId={`card-container-${id}`}
            >
              <motion.div className="z-1  top-0 left-0 overflow-hidden h-[420] my-auto w-screen">
                <motion.img
                  layoutId={`card-image-container-${id}`}
                  src={project.image}
                  className="aspect-video w-full object-cover rounded mt-4"
                  alt={project.name}
                />
              </motion.div>
              <motion.div
                className="z-10 absolute top-4 left-4 max-w-[300]"
                layoutId={`title-container-${id}`}
              >
                <span className="text-lg">{project.name}</span>
                <h2>{project.name}</h2>
              </motion.div>
              <motion.div
                layoutId={`description-container-${id}`}
                className="absolute top-0 left-0 bg-gray-50 rounded-b-xl pointer-events-auto p-8 w-full h-full bg-opacity-60"
                animate
              >
                <motion.p className="mt-20" layoutId={`description-text-${id}`}>
                  {project.description}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
