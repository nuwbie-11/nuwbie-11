"use client"

import React from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { Links } from '@/app/lib/data'

export default function Navbar() {
  return (
    <header className="z-[999] relative">
        <motion.div className="fixed w-full top-0 left-1/2 h-[4.5rem] rounded-none border
         border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.35rem]
         sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
         initial={{
            y:-100,opacity:0,x:"-50%"
         }}
         animate={{
            y:0,opacity:1,x:"-50%"
         }}
         >

        </motion.div>

         <nav className="fixed top-[0.15rem] h-12 w-screen left-1/2 -translate-x-1/2 py-2 sm:h-[initial] sm:top-[1.7rem] sm:py-0">
            <ul className='flex flex-wrap justify-center items-center gap-y-1 text-[0.9rem] font-medium text-zinc-500 
            sm:w-[initial] w-[22rem] sm:flex-nowrap sm:gap-5 '>
                {
                    Links.map((items)=>(
                        <motion.li key={items.targetHash} className="flex h-3/4 items-center justify-center"
                        initial={{
                            y:-100,opacity:0,x:"-50%"
                         }}
                         animate={{
                            y:0,opacity:1,x:"-50%"
                         }}
                        >
                            <Link href={items.targetHash} className="flex w-full items-center justify-center px-3 py-3 hover:text-zinc-900 transition">
                                {items.name}
                            </Link>
                        </motion.li>

                    ))
                }
            </ul>
         </nav>

    </header>
  )
}
