import React from "react";

export default function SkillCard({language,icon}){
    return(<>
               
<div className="flex p-4 flex-col justify-center items-center justify-items-center gap-1 border md:w-full rounded-xl border-[#65BE97]">
    <img src={icon} alt="Java" className="md:h-36 h-30" />
    <h1 className="uppercase font-bold text-xl text-white">{language}</h1>
</div>

</>)
}