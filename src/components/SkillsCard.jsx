import React from "react";

export default function SkillCard({language,icon}){
    return(<>
               
<div className="flex p-4 flex-col justify-center items-center justify-items-center gap-1 border  md:w-9/10 rounded-xl border-[#65BE97]">
    <img src={icon} alt="Java" className="md:h-28 h-20" />
    <h1 className="uppercase font-bold text-xs  tracking-wider text-white">{language}</h1>
</div>

</>)
}