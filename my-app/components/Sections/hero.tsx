"use client";

import React from "react";

import Image from "next/image";

import { profPic } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

import { IconContext } from "react-icons";
import {BsArrowRight, BsEnvelope, BsGithub, BsLinkedin, BsMailbox} from "react-icons/bs";
import  {HiDownload} from "react-icons/hi"
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-session";

export default function Hero() {
  const {ref, inView} = useInView();
  const {setActiveSection,lastTimeClick} = useActiveSectionContext();

    React.useEffect(()=>{
      if (inView && Date.now() - lastTimeClick > 1000) {
        setActiveSection("Home")
      }

    },[inView,setActiveSection,lastTimeClick]);
  return (
    <section ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 mt-24" id="hero">
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              className="h-24 w-24 rounded-full border-4 border-white"
              src={profPic}
              alt="ProfPic"
              width={192}
              height={192}
              quality={95}
              priority={true}
            ></Image>
            <motion.span
              className="absolute bottom-0 -left-3 text-4xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 0.7,
                delay: 0.2,
                stiffness: 120,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>

      <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[2rem] sm:text-3xl"
      initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}}
      >
        <span className="font-bold">Hello, name's Sadhu.</span> I am a Fresh Graduates{" "}
        with some skills at <span className="font-bold">Front End Developer</span> and {" "}
        <span className="font-bold">Data & Machine Learning</span> related stuff {" "} 
      </motion.p>

      <motion.div className="flex justify-center items-center gap-5"
      initial={{opacity:0,scale:0}}
      animate={{opacity:1,scale:1}}
      transition={{
        delay:0.15
      }}
      >
        <Link className="cursor-pointer group bg-zinc-800 text-zinc-50 px-3 sm:px-7 py-3 flex items-center gap-2 rounded sm:rounded-full outline-none 
        focus:scale-110 hover:scale-110 hover:bg-zinc-950 transition active:scale-105" href={""}>
            <span className="hidden sm:block">Contact Me Here</span><BsArrowRight className="group-hover:translate-x-2 transition hidden sm:block"/> 
            <BsEnvelope className="block sm:hidden"/> {" "}
        </Link>
        <a href="/CV-New.pdf" className="cursor-pointer group flex items-center gap-2 px-5 py-3 text-zinc-950 rounded-full shadow-lg shadow-black/[0.3rem] bg-zinc-100
        outline-none focus:scale-110 hover:scale-110 hover:bg-zinc-50 transition active:scale-105" download={true}>
            <span className="hidden sm:block">Download CV</span> <HiDownload className="group-hover:translate-y-[0.187rem] transition" />
        </a>
        <a href="https://www.linkedin.com/in/adwitya-sadhup/" className="cursor-pointer group flex items-center gap-2 px-5 py-3  rounded-full shadow-lg shadow-black/[0.3rem] bg-zinc-100
        outline-none focus:scale-110 hover:scale-110 hover:bg-[zinc-50] transition active:scale-105" target="_blank" rel="noopener noreferrer">
            <IconContext.Provider value={{ color:"#0e76a8" }}>
                <BsLinkedin/>
            </IconContext.Provider>
        </a>
        <a href="https://github.com/nuwbie-11" className="cursor-pointer group flex items-center gap-2 px-5 py-3  rounded-full shadow-lg shadow-black/[0.3rem] bg-zinc-100
        outline-none focus:scale-110 hover:scale-110 hover:bg-[zinc-50] transition active:scale-105" target="_blank" rel="noopener noreferrer">
            <IconContext.Provider value={{ color:"#171515" }}>
                <BsGithub/>
            </IconContext.Provider>
        </a>
      </motion.div>
    </section>
  );
}
