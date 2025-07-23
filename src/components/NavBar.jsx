import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full bg-black text-white">
      
      <div className="flex items-center justify-between px-6 py-4 md:px-24">
      
        <div className="flex items-center gap-3">
          <img src="/S.png" alt="S Logo" className="h-10" />
          <h1 className="uppercase text-2xl tracking-wider font-bold">
            Sandesh
          </h1>
        </div>

        <ul className="hidden md:flex gap-6 md:text-[12px] font-semibold lg:text-[15px] tracking-wider uppercase">
          <li><a href="#home" className="hover:text-[#65BE97]">Home</a></li>
          <li><a href="#about" className="hover:text-[#65BE97]">Education</a></li>
          <li><a href="#skills" className="hover:text-[#65BE97]">Skills</a></li>
          <li><a href="#profiles" className="hover:text-[#65BE97]">Profiles</a></li>
          <li><a href="#projects" className="hover:text-[#65BE97]">Projects</a></li>
        </ul>
       
        <div className="md:hidden">
          <button onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
  <ul className="md:hidden fixed h-[90vh] justify-center top-16 left-0 w-full z-50 flex flex-col items-center gap-4 px-6 py-4 font-semibold text-[20px] tracking-wider uppercase bg-[#222222]/70 backdrop-blur-md rounded-b-xl shadow-lg">
    <li><a href="#home" className="hover:text-[#65BE97] transition-colors duration-300">Home</a></li>
    <li><a href="#about" className="hover:text-[#65BE97] transition-colors duration-300">Education</a></li>
    <li><a href="#skills" className="hover:text-[#65BE97] transition-colors duration-300">Skills</a></li>
    <li><a href="#profiles" className="hover:text-[#65BE97] transition-colors duration-300">Profiles</a></li>
    <li><a href="#projects" className="hover:text-[#65BE97] transition-colors duration-300">Projects</a></li>
  </ul>
)}

    </div>
  );
}
