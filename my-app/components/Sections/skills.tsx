"use client"

import { useActiveSectionContext } from '@/context/active-session';
import { mySkills } from '@/lib/data';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function Skills(){
    const {ref, inView} = useInView();
    const {setActiveSection,lastTimeClick} = useActiveSectionContext();
  
      React.useEffect(()=>{
        if (inView && Date.now() - lastTimeClick > 1000) {
          setActiveSection("Skills")
        }
  
      },[inView,setActiveSection,lastTimeClick]);
    return(
        <motion.section ref={ref} id="skills" 
        className="max-w-[53rem] text-center sm:mb-0 scroll-mt-28"
        initial={{
            opacity:0,y:100
        }}
        animate={{
            opacity:1,y:0
        }}
        transition={{
            delay:0.1
        }}
        >
            <SectionHeading>My Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-zinc-800">
                {
                    mySkills.map((item,ix)=>(
                        <li key={ix}
                        className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 cursor-default"
                        >{item}</li>
                    ))
                }

            </ul>
        </motion.section>
    )
}