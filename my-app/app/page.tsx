import Image from 'next/image'
import Hero from '@/components/Sections/hero'
import SectionDivider from '@/components/Divider/section-divider'
import AboutMe from '@/components/Sections/about'
import Projects from '@/components/Sections/projects'
import Skills from '@/components/Sections/skills'
import Contacts from '@/components/Sections/contacts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero/>
      <SectionDivider/>
      <AboutMe/>
      <SectionDivider/>
      <Projects/>
      <SectionDivider/>
      <Skills/>
      {/* <SectionDivider/>
      <Contacts/> */}
    </main>
  )
}
