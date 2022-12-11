import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { motion } from "framer-motion";
import { getWindowDimensions } from "../utils/window";
import Projects from "../components/projects";
import ProjectModal from "../components/projects/modal";
import { useApp } from "../providers/app";

const Home: NextPage = () => {
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
    <>
      <AnimatePresence>
        {!state.loading ? (
          <motion.div
            initial={{ y: state.windowDimensions.height }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
            key="main"
            className="relative"
          >
            <Head>
              <title>Home</title>
            </Head>
            <Layout>
              <div className="mx-auto px-5 container">
                <Intro />
                <Projects />
              </div>
            </Layout>
            {selected && <ProjectModal id={selected} />}
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
    </>
  );
};

export default Home;
