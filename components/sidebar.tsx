import React from "react";
import { motion } from "framer-motion";
import { navIcons } from "../utils/navigation";

function SideBar() {
  return (
    <div className="z-[20] md:hidden flex justify-between items-center py-4 fixed px-3 top-1/3">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col space-y-6 justify-end  p-2"
      >
        {navIcons.map((item: { icon: any }, index: number) => {
          return (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <item.icon className="text-gray-700 cursor-pointer w-6 h-6" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default SideBar;
