"use client"

import { motion } from 'framer-motion';
import React from 'react';

export default function SectionDivider(){
    return (
        <motion.div className="bg-zinc-500/60 my-24 h-16 w-[0.9px] rounded hidden sm:block"
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.25}}
        >

        </motion.div>
    )
}