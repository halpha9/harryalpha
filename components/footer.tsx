import { motion } from "framer-motion";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 flex mx-auto px-24">
      <div className="py-28 flex flex-col lg:flex-row items-center justify-between w-full">
        <motion.h3
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.02,
            textShadow: "20px 20px 20px gray",
          }}
          className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"
        >
          Devloped By Harry Alpha
        </motion.h3>
        <motion.div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 justify-center items-center lg:pl-4 lg:w-1/2">
          {footerButtons.map((item, index) => (
            <motion.div
              initial={{ x: 500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1, backgroundColor: "black" }}
              transition={{ duration: 0.4 }}
              whileHover={{
                scale: 1.04,
                backgroundColor: "white",
                color: "black",
              }}
              key={index}
              className="mx-3 bg-black border border-black text-white font-bold py-3 px-12 lg:px-8 mb-6 lg:mb-0"
            >
              <Link href={item.link}>{item.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

export const footerButtons = [
  {
    link: "https://nextjs.org/docs/basic-features/pages",
    title: "View Github Repository",
  },
  {
    link: "https://nextjs.org/docs/basic-features/pages",
    title: "Email Me",
  },
  {
    link: "https://nextjs.org/docs/basic-features/pages",
    title: "Message Me",
  },
];
