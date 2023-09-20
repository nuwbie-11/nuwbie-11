"use client"

import { Links } from "@/lib/data";
import React, { useContext } from "react";


type SectionName = (typeof Links)[number]["name"]

type ActiveSessionContextProviderProps = {
    children : React.ReactNode
}

type ActiveSectionContextProps = {
    activeSection:SectionName,
    setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>
    lastTimeClick:number
    setLastTimeClick:React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = React.createContext< ActiveSectionContextProps | null>(null)

export default function ActiveSectionContextProvider({children}:ActiveSessionContextProviderProps){
    const [activeSection, setActiveSection] = React.useState<SectionName>("Home");
    const [lastTimeClick, setLastTimeClick] = React.useState(0)
    return(
        <ActiveSectionContext.Provider value={{
            activeSection: activeSection,setActiveSection,lastTimeClick,setLastTimeClick
        }}>{children}</ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext)
    
    if (context == null) {
        throw new Error("useActiveSectionContext must be used within a ActiveSectionContextProvider");
        
    }
    return context
}