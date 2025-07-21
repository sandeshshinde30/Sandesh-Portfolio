import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si"; 
import { IoNavigate } from "react-icons/io5";
export default function MainPage(){
    return(
        <>
        <div className="w-full h-screen md:p-24 p-5">
            <div className="flex flex-col gap-3 w-full md:w-1/2 text-white h-3/4 justify-center">
                    <h2 className="text-xl md:text-2xl tracking-wider text-gray-350 " style={{wordSpacing: '0.25rem'}}>Hi, I am</h2>
                    <h1 className="text-4xl md:text-6xl uppercase tracking-wider font-semibold text-[#65BE97]">Sandesh Shinde</h1>
                    <h2 className="text-xl md:text-2xl uppercase tracking-widest font-semibold text-gray-350">Software Developer</h2>

                    <div className="flex gap-4 pt-2 " >
                       
                        <FaLinkedinIn  className="text-[24px] sm:text-[28px] md:text-[35px] hover:text-[#3374B3]  cursor-pointer transition-colors duration-500"/>
                       
                        <FaGithub  className="text-[24px] sm:text-[28px] md:text-[35px] hover:text-[#9368d2] cursor-pointer transition-colors duration-500"/>
                        
                        <SiLeetcode  className="text-[24px] sm:text-[28px] md:text-[35px] hover:text-[#F1B52E] cursor-pointer transition-colors duration-500"/>

                        <SiCodechef  className="text-[24px] sm:text-[28px] md:text-[35px] hover:text-[#7b553e] cursor-pointer transition-colors duration-500"/>

                        {/* <SiGeeksforgeeks  size={52} className="hover:text-[#7b553e] cursor-pointer transition-colors duration-500"/> */}


                        {/* <div>
                        <FaLinkedin />
                        </div> */}
                    </div>

                    <div className="w-full flex gap-5 md:gap-10 h-10 mt-6 ">
                        <div onClick={()=>window.open('/Sandesh_Resume.pdf','_blank')} className=" w-1/2 md:w-1/3 bg-[#65BE97] gap-2 rounded-md flex items-center justify-center text-xs md:text-md font-bold uppercase tracking-wide cursor-pointer">
                            <h1>View Resume</h1>
                            <IoNavigate size={24} />

                        </div>
                        <div 
                        onClick={()=>{
                            const link = document.createElement('a');
                            link.href = '/Sandesh_Resume.pdf';
                            link.download = 'Sandesh_Resume.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link)
                        }}
                        
                        className="w-1/2 md:w-1/3 bg-[#65BE97] rounded-md flex items-center justify-center text-xs md:text-md font-bold uppercase tracking-wide cursor-pointer">
                            <h1>Download Resume</h1>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}