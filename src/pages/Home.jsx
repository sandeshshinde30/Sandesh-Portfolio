import React from "react";
import NavBar from "../components/NavBar";
import MainPage from "../components/MainPage";
import Skills from "./Skills";
 import Project from "./Projects";

export default function Home() {
    return(
        <>
            <div className="h-full w-full bg-black md:px-10">

                <NavBar/>
                <MainPage/>
                <Skills/>
                <Project/>
            </div>
        </>
    )
}