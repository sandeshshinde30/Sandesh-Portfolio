import React from "react";
import NavBar from "../components/NavBar";
import MainPage from "../components/MainPage";
import Skills from "./Skills";

export default function Home() {
    return(
        <>
            <div className="h-full w-full bg-black px-10">

                <NavBar/>
                <MainPage/>
                <Skills/>

            </div>
        </>
    )
}