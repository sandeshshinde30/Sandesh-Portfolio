import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full bg-black text-white">
      
      <div className="flex items-center justify-between px-6 py-4 md:px-24">
      
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="S Logo" className="h-10" />
          <h1 className="uppercase text-2xl tracking-wider font-bold">
            Sandesh
          </h1>
        </div>

     
        <ul className="hidden md:flex gap-6 font-semibold text-[15px] tracking-wider uppercase">
          <li><a href="#home" className="hover:text-soft-black">Home</a></li>
          <li><a href="#about" className="hover:text-soft-black">Education</a></li>
          <li><a href="#skills" className="hover:text-soft-black">Skills</a></li>
          <li><a href="#profiles" className="hover:text-soft-black">Profiles</a></li>
          <li><a href="#projects" className="hover:text-soft-black">Projects</a></li>
        </ul>

       
        <div className="md:hidden">
          <button onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

  
      {isOpen && (
        <ul className='md:hidden flex flex-col items-center gap-4 px-6 py-4 border-2  font-semibold text-[15px] tracking-wider uppercase bg-[#333333] m-5 rounded-xl  border-[#65BE97]'>
          <li><a href="#home" className="hover:text-soft-black">Home</a></li>
          <li><a href="#about" className="hover:text-soft-black">Education</a></li>
          <li><a href="#skills" className="hover:text-soft-black">Skills</a></li>
          <li><a href="#profiles" className="hover:text-soft-black">Profiles</a></li>
          <li><a href="#projects" className="hover:text-soft-black">Projects</a></li>
        </ul>
      )}
    </div>
  );
}
