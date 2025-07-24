import React from "react";
import SkillCard from "../components/SkillsCard";
import skillsData from "../data/skillsData.js"

export default function Skills(){
    const visibleSkills = skillsData.programmingLanguages.slice(0, 5); 
    const webTech = skillsData.webTechnologies.slice(0, 5); 


return (
  <div className="flex w-full justify-center h-full">
    <div className="flex w-full flex-col items-center">
      <h1 className="text-white uppercase md:text-4xl text-3xl tracking-wider font-bold">skills</h1>

      <div className="mt-10 w-full flex justify-center flex-col items-center">
        <h1 className="text-white uppercase tracking-widest md:text-2xl text-xl font-semibold ">Programming languages</h1>

      {/* Programming languages */}

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
              
            >
              <SkillCard language={skill.language} icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-[#65BE97] w-full mt-12"> </div>

      {/* Web Technologies */}
      <div className="mt-10 w-full flex justify-center flex-col items-center">
        <h1 className="text-white uppercase tracking-widest md:text-2xl text-xl font-semibold ">Web Technologies</h1>

       <div className={`
  grid 
  grid-cols-2
  md:grid-cols-5
  md:gap-10 mt-10  
  gap-5
  justify-items-center
`}>
  {webTech.map((skill, index) => (
    <div
      key={index}
      className={`
        ${index === 4 ? "col-span-2 justify-self-center md:col-span-1" : ""}
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