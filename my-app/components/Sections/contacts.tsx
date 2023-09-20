import React from "react";
import SectionHeading from "./section-heading";

import {FaPaperPlane} from "react-icons/fa"
import { motion } from "framer-motion";


export default function Contacts(){
    // const [ref] = useSectionInView()
    return(
        <motion.section id="contacts" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1
        }}
        viewport={{
            once:true
        }}
        >
            <SectionHeading>Contacts</SectionHeading>

            <p>
                You can reach me direct at {" "}
                <a href="mailto:adwityasadhu@yahoo.co.id" className="underline">adwityasadhu@yahoo.co.id</a>
            </p>

            <form action="" className="mt-10 flex flex-col">
                <input type="email" className="h-14 rounded-lg borderBlack" placeholder="Your Email"/>
                <textarea name="" id="" className="h-52 my-3 p-4 borderBlack" placeholder="Your Message"/>
                <button type="submit" className="group flex text-zinc-50 bg-zinc-900 px-5 py-3 
                rounded-full items-center justify-center h-[3rem] w-[8rem] outline-none transition-all gap-x-2">
                    Submit <FaPaperPlane className="text-xs opacity-70
                    group-hover:translate-x-[0.18rem] group-hover:-translate-y-[0.05rem] transition ease-in-out" />
                </button>
            </form>
        </motion.section>
    )
}