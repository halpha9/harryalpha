import React from "react";
import { Icons } from "../../utils/icons";
import { motion } from "framer-motion";
import { SkillsSanity } from "../../types/sanity";
import Skill from "./Skill";

type Props = { skills: SkillsSanity[] };

export default function Skills({ skills }: Props) {
  console.log(skills);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen w-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover Over A Skill For Proficiency
      </h3>

      <div className="grid grid-cols-4 gap-10">
        {skills &&
          skills.slice(0, skills.length / 2).map((skill, i) => {
            const Icon = (Icons as any)[skill.title!];

            return <Skill skill={skill} key={i} Icon={Icon} />;
          })}
        {skills &&
          skills.slice(skills.length / 2, skills.length).map((skill, i) => {
            const Icon = (Icons as any)[skill.title!];
            return <Skill skill={skill} key={i} Icon={Icon} directionLeft />;
          })}
      </div>
    </motion.div>
  );
}
