import React from "react";

export default function ProjectCard(){
    return(<>

        <div className="flex flex-col py-10 gap-3 bg-[#333333] border-3 border-[#65BE97] rounded-xl w-1/3 p-5">
                   <h1 className="text-2xl text-center text-white uppercase tracking-wider font-semibold">sandrop</h1>
                   <img src="SanDrop.png" alt="sandrop" className="h-40 rounded-md"/>
                   <h1 className="text-md text-center text-white  tracking-wider font-semibold">Online File Sharing Platform</h1>
                   <div className="grid grid-cols-5 gap-1 w-full">
                        <div className="text-xs bg-[#39A5AD]/30 font-semibold text-[#00C8FF] text-center rounded-lg py-1 px-2 inline-block ">React JS</div>
                        <div className="text-xs bg-[#39A5AD]/30 font-semibold text-[#00C8FF] text-center rounded-lg py-1 px-2 inline-block ">React JS</div>
                        <div className="text-xs bg-[#39A5AD]/30 font-semibold text-[#00C8FF] text-center rounded-lg py-1 px-2 inline-block ">React JS</div>
                        <div className="text-xs bg-[#39A5AD]/30 font-semibold text-[#00C8FF] text-center rounded-lg py-1 px-2 inline-block ">React JS</div>
                        <div className="text-xs bg-[#39A5AD]/30 font-semibold text-[#00C8FF] text-center rounded-lg py-1 px-2 inline-block ">React JS</div>
                        <div className="text-xs bg-[#39A5AD]/30 font-semibold text-[#00C8FF] text-center rounded-lg py-1 px-2 inline-block ">React JS</div>
                        <div className="text-xs bg-[#39A5AD]/30 font-semibold text-[#00C8FF] text-center rounded-lg py-1 px-2 inline-block ">React JS</div>
                        <div className="text-xs bg-[#39A5AD]/30 font-semibold text-[#00C8FF] text-center rounded-lg py-1 px-2 inline-block ">React JS</div>
                       
                   </div>   

                   <div className="flex w-full text-xs gap-3 mt-5 ">
                    <div className="flex bg-[#65BE97] py-3 gap-3 justify-center cursor-pointer rounded-xl w-1/2">
                        <h1 className="text-white uppercase tracking-wider font-bold text-center ">Visit Website</h1>
                        <img src="external-link.png" alt="External link"  className="h-4 "/>
                    </div>
                    <div className="flex bg-[#6C44EA] p-3 gap-3 justify-center cursor-pointer rounded-xl w-1/2">
                        <h1 className="text-white uppercase tracking-wider font-bold text-center ">GitHub Repo</h1>
                        <img src="external-link.png" alt="External link"  className="h-4 "/>
                    </div>
                   </div>
                </div>
    
    </>)
}