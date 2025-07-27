import React from "react";
import techTheme from "../data/technologiesTheme";
export default function ProjectCard({project}){

    function navigate(link) {
        window.open(link,'_blank');
    }
    
    return(<>

        <div className="flex flex-col py-10 gap-3 bg-[#333333] border-3 border-[#65BE97] rounded-xl md:w-1/3 p-5">
                   <h1 className="text-2xl text-center text-white uppercase tracking-wider font-semibold">{project.title}</h1>
                   <img src={project.image} alt="sandrop" className="h-40 rounded-md"/>
                   
                   <h1 className="text-md text-center text-white  tracking-wider font-semibold">{project.description}</h1>
                  <div className={`${project.technologies.length < 4 ? 'flex grid-cols-2 justify-center w-full' : 'grid md:grid-cols-3 grid-cols-2 w-full gap-3'}`}>

                    {project.technologies.map((tech, index) => {
                        const link = techTheme[tech]; 
                        return (
                            <div
                            key={index}
                            className="flex bg-[#111]/50 text-[10px] gap-3 justify-center items-center font-semibold text-center rounded-lg text-white py-1 px-2"
                            >
                            <img src={link.src} alt=""  className="h-7"/> {tech}
                            </div>
                        );
                        })}
                   </div>   

                   <div className="flex w-full text-xs gap-3 mt-5 ">
                    <div onClick={() => navigate(project.liveLink)} className={`flex bg-[#65BE97] py-3 gap-3 justify-center cursor-pointer rounded-xl w-1/2 ${!project.live ? 'hidden' : ''}`}>
                        <h1 className="text-white uppercase tracking-wider font-bold text-center ">Visit Website</h1>
                        <img src="external-link.png" alt="External link"  className="h-4 "/>
                    </div>
                    <div onClick={()=> navigate(project.github)} className={`bg-[#6C44EA] flex p-3 gap-3 justify-center cursor-pointer rounded-xl ${!project.live ? 'w-full' : 'w-1/2'} `} >
                        <h1 className="text-white uppercase tracking-wider font-bold text-center ">GitHub Repo</h1>
                        <img src="external-link.png" alt="External link"  className="h-4 "/>
                    </div>
                   </div>
                </div>  
    
    </>)
}