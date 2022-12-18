import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Project";
import ProjectModal from "../components/Project/ProjectModal";
import Skills from "../components/Skills";
import { useApp } from "../providers/app";
import { getWindowDimensions } from "../utils/window";
import { motion } from "framer-motion";

export default function Home() {
  const [state, setState] = useState({
    loading: true,
    windowDimensions: { width: 0, height: 0 },
  });

  useEffect(() => {
    setState({ ...state, windowDimensions: getWindowDimensions() });

    const timer = setTimeout(() => {
      setState({ ...state, loading: false });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const { selected } = useApp();

  return (
    <AnimatePresence>
      <Head>
        <title>Harry Alpha</title>
      </Head>
      {!state.loading ? (
        <motion.div
          initial={{ y: state.windowDimensions.height }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
          key="main"
          className="relative"
        >
          <div className="dark:bg-[rgb(36,36,36)] text-white h-screen snap-y md:snap-mandatory overflow-scroll z-0">
            <Header />

            <section id="hero" className="snap-center">
              <Hero />
            </section>

            <section id="about" className="snap-center">
              <About />
            </section>

            <section id="experience" className="snap-center">
              <Experience />
            </section>

            <section id="skills" className="snap-center">
              <Skills />
            </section>

            <section id="projects" className="snap-start">
              <Projects />
              <Footer />
            </section>
            {selected && <ProjectModal id={selected} />}
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="loadingScreen"
          className="bg-black h-screen w-screen flex justify-center items-center"
          exit={{ y: -state.windowDimensions.height }}
          animate={{ y: 0 }}
          initial={{ y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="mb-2 font-mono text-4xl text-gray-100 md:text-6xl">
            hi, I&apos;m <br className="block md:hidden" />
            <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                Harry <span className="text-3xl md:text-5xl">👋</span>
              </span>
              <span className="absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change"></span>
            </span>
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
