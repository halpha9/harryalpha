import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Project";
import ProjectModal from "../components/Project/ProjectModal";
import Skills from "../components/Skills";
import { useApp } from "../providers/app";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import Contact from "../components/Contact";
import {
  ExperienceSanity,
  PageInfoSanity,
  ProjectSanity,
  SkillsSanity,
  SocialsSanity,
} from "../types/sanity";
import { GetStaticProps } from "next";
import {
  fetchExperience,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from "../utils/fetcher";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("../components/Header"), {
  suspense: true,
});

type Props = {
  pageInfo: PageInfoSanity;
  experience: ExperienceSanity[];
  projects: ProjectSanity[];
  skills: SkillsSanity[];
  socials: SocialsSanity[];
};

export default function Home({
  pageInfo,
  experience,
  projects,
  skills,
  socials,
}: Props) {
  const { selected } = useApp();

  return (
    <AnimatePresence mode="wait">
      <Head>
        <title>Harry Alpha</title>
      </Head>
      <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="w-full min-h-screen relative"
        key="main"
      >
        <div className="dark:bg-[rgb(36,36,36)] text-white h-screen snap-y md:snap-mandatory overflow-x-hidden z-0 overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-blue-900/80">
          <DynamicHeader socials={socials} />

          <section id="main" className="snap-center">
            <Hero pageInfo={pageInfo} />
          </section>

          <section id="about" className="snap-center">
            <About pageInfo={pageInfo} />
          </section>

          <section id="experience" className="snap-center">
            <Experience experience={experience} />
          </section>

          <section id="skills" className="snap-start">
            <Skills skills={skills} />
          </section>

          <section id="projects" className="snap-start">
            <Projects projects={projects} />
          </section>
          <section id="contact" className="snap-start">
            <Contact pageInfo={pageInfo} />
          </section>
          {selected && <ProjectModal projects={projects} id={selected} />}

          <Link href="#main">
            <footer className="sticky bottom-5 w-full cursor-pointer">
              <div className="flex items-center justify-center">
                <AiFillHome className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer opacity-30" />
              </div>
            </footer>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfoSanity = await fetchPageInfo();
  const experience: ExperienceSanity[] = await fetchExperience();
  const projects: ProjectSanity[] = await fetchProjects();
  const socials: SocialsSanity[] = await fetchSocials();
  const skills: SkillsSanity[] = await fetchSkills();
  return {
    props: {
      pageInfo,
      experience,
      projects,
      skills,
      socials,
    },
    revalidate: 10,
  };
};
