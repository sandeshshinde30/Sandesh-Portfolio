import React from "react";
import SkillCard from "../components/SkillsCard";
import skillsData from "../data/skillsData.js"

export default function Skills(){
    const visibleSkills = skillsData.programmingLanguages.slice(0, 5); 

return (
  <div className="flex w-full justify-center h-screen">
    <div className="flex w-full flex-col items-center">
      <h1 className="text-white uppercase md:text-4xl text-3xl tracking-wider font-bold">skills</h1>

      <div className="mt-10 w-full flex justify-center flex-col items-center">
        <h1 className="text-white uppercase tracking-wider md:text-2xl text-xl font-semibold ">Programming languages</h1>

        <div className={`
          grid 
          grid-cols-2
          md:grid-cols-${visibleSkills.length >= 5 ? 5 : visibleSkills.length} 
          md:gap-10 mt-10  
          gap-5
          justify-items-center
        `}>
          {visibleSkills.map((skill, index) => (
            <div
              key={index}
              className={`
                ${index >= 2 ? 'hidden' : 'block'} 
                md:block
              `}
            >
              <SkillCard language={skill.language} icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}