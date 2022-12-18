import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfoSanity } from "../types/sanity";
import BackGroundCircles from "./BackGroundCircles";

type Props = {
  pageInfo: PageInfoSanity;
};

const arr = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi I'm Harry", "Developer", "bug-fixer.tsx"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex-col flex space-y-8 items-center justify-center text-center overflow-hidden">
      <BackGroundCircles />
      <div className="shadow w-32 h-32 bg-black relative rounded-full mx-auto object-cover" />
      <div className="z-20">
        <h2 className="text-base uppercase text-gray-400 pb-3 font-light tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          {text}
          <Cursor cursorColor="#F74" />
        </h1>
        <div className="pt-5">
          {arr.map((item) => (
            <Link key={item.name} href={item.href}>
              <button className="cursor-pointer px-6 py-2 border border-transparent text-gray-500 rounded-full uppercase text-sm tracking-widest transition-all hover:border-gray-300 hover:border-opacity-40 hover:text-gray-300">
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
