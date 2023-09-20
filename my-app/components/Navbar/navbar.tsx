"use client";

import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { Links } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-session";

export default function Navbar() {
  const {activeSection,setActiveSection,setLastTimeClick} = useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="w-screen flex justify-center items-center"
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
      >
        <nav
          className="w-screen flex justify-center items-center fixed rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg
            shadow-black/[0.03] backdrop-blur-[0.35rem] top-0 h-[4.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        >
          <ul className="px-5 gap-y-1 text-[0.9rem] font-medium text-zinc-500 flex items-center justify-center sm:w-[initial] w-[22rem] sm:flex-nowrap sm:gap-5 ">
            {Links.map((items) => (
              <motion.li
                key={items.targetHash}
                className="flex items-center justify-center"
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
              >
                <Link
                  onClick={() => {
                    setActiveSection(items.name);
                    setLastTimeClick(Date.now())
                  }}
                  href={items.targetHash}
                  className={clsx(
                    "flex w-full items-center rounded-full hover:bg-zinc-200 justify-center px-5 py-2 hover:text-zinc-900 transition",
                    {
                      "text-zinc-950 ": activeSection === items.name,
                    }
                  )}
                >
                  {items.name}
                  {items.name === activeSection && (
                    <motion.span className="bg-zinc-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSession"
                    transition={{
                        type:"spring",
                        stiffness:380,
                        damping:30,
                    }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
