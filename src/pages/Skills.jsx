import React from "react";
import SkillCard from "../components/SkillsCard";

export default function Skills(){
    return(<>

        <div className="flex w-full justify-center h-screen">
           <div className="flex w-full flex-col items-center">
           <h1 className="text-white uppercase text-4xl tracking-wider font-bold">skills</h1>

            <div className="mt-10 w-full flex justify-center flex-col items-center">
                <h1 className="text-white uppercase tracking-wider text-2xl font-semibold ">Programming languages</h1>
               <div className="flex w-full gap-10 justify-center mt-10">
                        <SkillCard/>
                        <SkillCard/>
                        <SkillCard/>
                        <SkillCard/>
                        <SkillCard/>

               </div>
            </div>

           

           </div>
        </div>
    </>)
}