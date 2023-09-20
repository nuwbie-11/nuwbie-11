"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

import ProjectItem from "./project-item";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-session";

export default function Projects() {
  const {ref, inView} = useInView();
  const {setActiveSection,lastTimeClick} = useActiveSectionContext();

    React.useEffect(()=>{
      if (inView && Date.now() - lastTimeClick > 1000) {
        setActiveSection("Projects")
      }

    },[inView,setActiveSection,lastTimeClick]);
  return (
    <section ref={ref}  className="flex flex-col items-center gap-2 scroll-mt-28" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="">
        {projectsData.map((item, ix) => (
          <React.Fragment key={ix}>
            <ProjectItem {...item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

