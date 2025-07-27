import React from "react";
import SkillCard from "../components/SkillsCard";
import skillsData from "../data/skillsData.js";

export default function Skills() {
  const visibleSkills = skillsData.programmingLanguages.slice(0, 5);
  const webTech = skillsData.webTechnologies.slice(0, 5);
  const database = skillsData.database.slice(0, 5);
  const aws = skillsData.aws.slice(0, 5);
  const other = skillsData.other.slice(0, 5);


  return (
    <div className="flex w-full justify-center h-full px-10">
      <div className="flex w-full flex-col items-center">
        <h1 className="text-white uppercase md:text-4xl text-3xl tracking-wider font-bold">
          skills
        </h1>

       <div className="flex flex-col md:flex-row md:w-3/4 w-full justify-center items-center md:gap-20 gap-5  ">

         <div className="mt-10 md:w-1/3 w-full flex justify-center flex-col items-center">
          <h1 className="text-white uppercase text-center tracking-widest md:text-2xl text-xl font-semibold ">
            languages
          </h1>

          {/* Programming languages */}

          <div
            className={`
          grid 
          grid-cols-2
          md:grid-cols-${visibleSkills.length >= 5 ? 5 : visibleSkills.length} 
          md:gap-10 mt-10  
          gap-5
          justify-items-center
        `}
          >
            {visibleSkills.map((skill, index) => (
              <div key={index}>
                <SkillCard language={skill.language} icon={skill.icon} />
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden h-[1px] bg-[#65BE97] w-full mt-12"> </div>
       

        {/* Database */}
        <div className="md:mt-10 md:w-1/3 w-full flex justify-center flex-col items-center">
          <h1 className="text-white uppercase tracking-widest md:text-2xl text-xl font-semibold ">
            Databases
          </h1>

          <div
            className={`
                grid 
                grid-cols-2
              
                md:gap-10 mt-10  
                gap-5
                justify-items-center
              `}
                >
            {database.map((skill, index) => (
              <div
                key={index}
              >
                <SkillCard language={skill.database} icon={skill.icon} />
              </div>
            ))}
          </div>
        </div>
       </div>

        <div className="h-[1px] bg-[#65BE97] w-full mt-12"> </div>

        {/* Web Technologies */}
        <div className="mt-10 w-full flex justify-center flex-col items-center">
          <h1 className="text-white uppercase tracking-widest md:text-2xl text-xl font-semibold ">
            Web Technologies
          </h1>

          <div
            className={`
                grid 
                grid-cols-2
                md:grid-cols-5
                md:gap-10 mt-10  
                gap-5
                justify-items-center
              `}
                >
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

        <div className="h-[1px] bg-[#65BE97]  w-full mt-12"> </div>


         



  <div className="flex md:flex-row flex-col md:w-2/3   justify-center items-center md:gap-0 gap-4">
  {/* AWS Section */}
  <div className="mt-6 md:mt-10 md:w-2/3 w-full flex justify-center flex-col items-center">
    <h1 className="text-white uppercase tracking-widest md:text-2xl text-xl font-semibold">
      Amazon web services
    </h1>

    <div
      className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mt-6 justify-items-center"
    >
      {aws.map((skill, index) => (
        <div
          key={index}
          className={index === 2 ? "col-span-2 justify-self-center md:col-span-1" : ""}
        >
          <SkillCard language={skill.tech} icon={skill.icon} />
        </div>
      ))}
    </div>
  </div>

  <div className="md:hidden h-[1px] bg-[#65BE97] w-full mt-8" />

  {/* Other Section */}
  <div className="mt-6 md:mt-10 md:w-1/2 w-full flex justify-center flex-col items-center">
    <h1 className="text-white uppercase tracking-widest md:text-2xl text-xl font-semibold">
      Other
    </h1>

    <div className="grid grid-cols-2 gap-3 md:gap-6 mt-6 justify-items-center">
      {other.map((skill, index) => (
        <div key={index}>
          <SkillCard language={skill.tech} icon={skill.icon} />
        </div>
      ))}
    </div>
  </div>
</div>


      </div>
    </div>
  );
}
