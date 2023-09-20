"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";

import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-session";

export default function AboutMe() {
  const {ref, inView} = useInView();
  const {setActiveSection,lastTimeClick} = useActiveSectionContext();

    React.useEffect(()=>{
      if (inView && Date.now() - lastTimeClick > 1000) {
        setActiveSection("About")
      }

    },[inView,setActiveSection,lastTimeClick]);
  return (
    <section ref={ref} className="max-w-[50rem] text-center sm:mb-0 scroll-mt-28" id="about">
      <motion.div
        className="flex justify-center items-start text-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
      >
        <SectionHeading>About Me 🤓</SectionHeading>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        I'm a Fresh Graduates from Universitas Jember on Information System's
        Bachelor Degree Program 💻
        <br />
        You can Call me Dhu. What i do? I do Web Development, with focus on
        front-end. On top of that i also do Machine
        Learning, Data Science, and Mobile Development. Also
        some Office like Excel and word 
        <br />
        I also do photograpy 📷 as one of my hobbies. {" "}
        <a
          className="font-bold hover:text-sky-500"
          href="https://www.eyeem.com/u/adwitya_s/photos"
        >
          See here
        </a>{" "}
        if you interested .
      </motion.p>
    </section>
  );
}
