import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../../utils/icons";
import { Experience } from "../../types";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 max-w-[500px]md:max-w-[600px] xl:max-w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-black w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:mx-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1 underline decoration-orange-400">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2 mt-4">
          {experience.skills.map((skill) => {
            const Icon = (Icons as any)[skill];
            return <Icon size={20} key={skill} />;
          })}
        </div>
        <p className="uppercase py-5 text-gray-300">{experience.time}</p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-w-[500px]md:max-w-[600px] xl:max-w-[900px]">
          {experience.summaryPoints.map((point, i) => (
            <li className="truncate" key={i}>
              {point}
            </li>
            // <li key={i}>Summary Points</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
