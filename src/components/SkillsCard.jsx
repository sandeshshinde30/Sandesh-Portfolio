import React from "react";

export default function SkillCard({language,icon}){
    return(<>
               
<div className="flex p-4 flex-col justify-center items-center gap-1 border w-1/8 rounded-xl border-[#65BE97]">
    <img src={icon} alt="Java" className="h-36" />
    <h1 className="uppercase font-bold text-xl text-white">{language}</h1>
</div>

</>)
}