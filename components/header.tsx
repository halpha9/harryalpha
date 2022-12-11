import cn from "classnames";
import { navIcons, navLinks } from "../utils/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
type Props = {
  preview?: boolean;
};

const MenuItem = ({
  text,
  selected,
  onClick,
}: {
  text: string;
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <motion.div
    className="py-2 text-center md:text-lg text-xl font-medium text-gray-700 cursor-pointer relative"
    onClick={onClick}
    animate={{ opacity: selected ? 1 : 0.5 }}
  >
    {text}
    {selected && (
      <motion.div
        className="absolute top-full left-0 w-full h-0.5 rounded-sm bg-gray-400 opacity-80"
        layoutId="underline"
      />
    )}
  </motion.div>
);

const Header = ({ preview }: Props) => {
  const [selected, setSelected] = useState(0);

  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <div className="flex md:justify-between justify-center items-center py-4">
        <motion.div
          initial={{ y: -500, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex flex-row space-x-8 justify-end px-12 p-2"
        >
          {navIcons.map((item: { icon: any }, index: number) => {
            return (
              <item.icon
                key={index}
                size={20}
                className="text-gray-700 cursor-pointer"
              />
            );
          })}
        </motion.div>
        <motion.div
          initial={{ y: 500, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row space-x-8 justify-end px-12 p-2"
        >
          {navLinks.map((item: { name: string }, index: number) => {
            return (
              <MenuItem
                key={index}
                text={item.name}
                selected={selected === index}
                onClick={() => setSelected(index)}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
