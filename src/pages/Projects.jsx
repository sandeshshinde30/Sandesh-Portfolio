import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData";


export default function Projects(){
    return(
        <>
           <div className="flex flex-col w-full justify-center h-full px-10 mt-24 pb-10">
                <h1 className="text-white text-center uppercase md:text-4xl text-3xl tracking-widest font-bold">
                Projects
                </h1>

               <div className="mt-10 flex gap-20 justify-center" >
                 
                {/* <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/> */}
                {
                    projectData.map((project,index)=>(
                        <ProjectCard project={project}/>
                ))
                }


               </div>
        </div>
        </>
    )
}