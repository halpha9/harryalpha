import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen w-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-black -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-orange-400">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          As an experienced Full Stack Web Developer with a strong background in
          AWS, TypeScript, GraphQL, and React, I am skilled in building and
          deploying scalable, high-performance web applications. I have
          extensive experience with AWS technologies such as the Cloud
          Development Kit and Lambda Functions, and have used both relational
          and NoSQL databases, including Hasura and DynamoDB. I have also built
          and implemented GraphQL APIs and have extensive experience with React
          and React Native. In addition to my technical skills, I am proficient
          in CSS and JavaScript/TypeScript and have some experience with Python.
          I hold several certifications, including the AWS Cloud Practitioner
          and the Mathworks Machine Learning, and have a Bachelor of Engineering
          in Electrical and Electronic Engineering from the University of
          Leicester. In my current role as a Web Developer at SCHB-Consulting, I
          have led a team of developers in building and improving web and mobile
          applications. I have also worked closely with non-technical staff
          members to ensure that the UI/UX of the applications is suitable and
          to address any bugs or issues. I have a track record of improving the
          efficiency and performance of web applications, including through
          automation and optimization of processes and load times.
        </p>
      </div>
    </div>
  );
}
