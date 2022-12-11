import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useApp } from "../../providers/app";
import { Project } from "../../types/projects";

const techStack = [
  "CSS",
  "ReactJS",
  "Redux",
  "Npm",
  "Html",
  "JavaScript",
  "Firebase",
];
export default function Card({
  project: { id, title, image, description },
}: {
  project: Project;
}) {
  const { state, setState } = useApp();
  return (
    <div onClick={() => setState({ ...state, selected: id })}>
      <div className="w-full h-full relative block pointer-events-none cursor-pointer">
        <motion.div
          className="pointer-events-auto relative rounded-sm md:shadow-none shadow-lg overflow-hidden w-full h-full my-0 mx-auto"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className="relative rounded-lg shadow max-w-[300]"
            layoutId={`card-image-container-${id}`}
          >
            <Image
              alt={title}
              src={image}
              width={1000}
              height={1000}
              className="pointer-events-auto w-full h-full relative object-contain"
            />
          </motion.div>
          <motion.div
            layoutId={`description-container-${id}`}
            className="absolute top-0 left-0 w-full h-full md:hidden flex bg-gray-300 bg-opacity-30 z-1"
          />
          <motion.div
            className="absolute top-4 left-4 z-2 md:hidden flex flex-col"
            layoutId={`title-container-${id}`}
          >
            <span className="text-lg  font-semibold ">{title}</span>
            <motion.h2 layoutId={`project-title-${id}`}>{title}</motion.h2>
            <motion.p layoutId={`description-text-${id}`}>
              {description}
            </motion.p>
          </motion.div>

          <motion.div
            className="md:flex flex-col hidden justify-center items-center px-10 pt-8"
            layoutId={`title-container-${id}`}
          >
            <motion.h2 layoutId={`project-title-${id}`}>{title}</motion.h2>
            <span className="text-lg font-bold text-gray-500">{title}</span>
            <motion.p
              className="bg-white shadow-lg border border-gray-100 my-4 p-4 rounded-lg text-gray-500 font-light"
              layoutId={`description-text-${id}`}
            >
              {description}
            </motion.p>
          </motion.div>
          <div className="px-12 pb-4">
            <div className="flex space-x-4">
              {techStack.map((item, index) => (
                <p className="font-semibold text-gray-500" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
