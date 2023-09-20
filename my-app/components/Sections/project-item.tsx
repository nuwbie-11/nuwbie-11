"use client"

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type ProjectItemProps = (typeof projectsData)[number];

export default function ProjectItem({
  title,
  description,
  techs,
  imageUrl,
  gitURL,
}: ProjectItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["0 1","1.33 1"]
    });
    const scaleTransfrom = useTransform(scrollYProgress,[0, 1],[0.6, 1])
    const opacityTransfrom = useTransform(scrollYProgress,[0, 1],[0.2, 1])
  return (
    <motion.div
    className="mb-3 sm:mb-8 last:mb-0 group"
    ref={ref}
    style={
        {
            scale:scaleTransfrom,
            opacity:opacityTransfrom
        }
    }
    >

        <section  className=" bg-zinc-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 rounded-lg relative 
        mb-3 sm:mb-8 last:mb-0  hover:bg-zinc-200 transition group-even:pl-8">
            <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[19rem]">

                <h3 className="font-semibold text-base md:text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-700 mb-4">{description}</p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {techs.map((item, ix) => (
                    <li
                        key={ix}
                        className="px-3 py-1 bg-fuchsia-500 text-zinc-50 rounded-full text-[0.5rem] uppercase tracking-wider cursor-default "
                    >
                        {item}
                    </li>
                    ))}
                </ul>

                <Image
                    className="absolute top-8 -right-40 w-[28rem] rounded-t-lg shadow-2xl 
                    group-even:right-[initial] 
                    group-even:-left-40 
                    
                    group-hover:-transtlate-x-3 
                    group-hover:-transtlate-y-3 
                    group-hover:-rotate-2

                    group-even:group-hover:transtlate-x-3 
                    group-even:group-hover:transtlate-y-3 
                    group-even:group-hover:rotate-2

                    transition 
                    group-hover:scale-125"
                    src={imageUrl}
                    alt="Project I Worked on"
                    quality={95}
                ></Image>

                <a href={gitURL} className="mt-3 italic cursor-pointer text-slate-500 text-xs hover:text-sky-500 transition hover:scale-105">
                    read more
                </a>
            </div>
        </section>
    </motion.div>
  );
}
