import React from "react";



export default function SectionHeading({children}:{children:React.ReactNode}){
    return(
        <h1 className=" font-bold text-lg mb-2">{children}</h1>
    )
}